import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BeefController } from './beef.controller';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'BEEF_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'beef-consumer',
    //         brokers: ['kafka:9092'],
    //       },
    //       consumer: {
    //         groupId: 'beef'
    //       }
    //     }
    //   },
    // ]),
  ],
  controllers: [BeefController],
  providers: [],
})
export class AppModule { }
