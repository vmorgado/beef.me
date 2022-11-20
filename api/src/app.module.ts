import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BeefController } from './beef.controller';
import { BeefService } from './beef.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BEEF_SERVICE',
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
  controllers: [BeefController],
  providers: [BeefService],
})
export class AppModule { }
