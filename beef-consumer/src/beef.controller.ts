
import { Controller, Get, Inject, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { ClientKafka, Ctx, EventPattern, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { BeefService } from './beef.service';

@Controller()
export class BeefController {


  @MessagePattern('beef')
  async newBeef(@Payload() message: any, @Ctx() context: KafkaContext): Promise<void> {
    console.log(message);

  }

}
