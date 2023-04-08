import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { BeefController } from './beef.controller';
import { PrismaService } from './prisma.service';
import { UserController } from './user.controler';

@Module({
  imports: [
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
  }, PrismaService],
})
export class AppModule {}
