import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'domain-service',
        brokers: ['kafka:9092'],
      },
      // subscribe: {
      //   fromBeginning: true,
      // },
      // run: {
      //   eachBatchAutoResolve: true
      // },
      // :w
      //
      consumer: {
        groupId: 'beef'
      }
    }
  });
  app.listen();
}
bootstrap();
