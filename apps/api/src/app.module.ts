import { Module, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { MulterModule } from '@nestjs/platform-express';
import { BeefController } from './beef.controler';
import { UserController } from './user.controler';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'api',
            brokers: ['kafka:9092'],
          },
          producerOnlyMode: true
        }
      },
    ]),
  ],
  controllers: [UserController, BeefController],
  providers: [{
    provide: 'PRODUCER',
    useFactory: async (kafkaClient: ClientKafka): Promise<Producer> => {
      return await kafkaClient.connect();
    },
    inject: ['KAFKA_CLIENT']
  }],
})
export class AppModule implements OnApplicationShutdown, OnModuleInit {
  private producer: Producer;

  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    this.producer = await this.moduleRef.get('PRODUCER');
  }

  async onApplicationShutdown(signal?: string) {

    await this.producer.disconnect()
  }
}
