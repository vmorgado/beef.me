import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'feed-consumer',
        brokers: ['kafka:9092'],
      },
      subscribe: {
        fromBeginning: true,
      },
      run: {
        eachBatchAutoResolve: true
      },
      consumer: {
        groupId: 'feed'
      }
    }
  });
  app.listen();
}
bootstrap();