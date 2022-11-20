
import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class BeefController {


  @MessagePattern('beef')
  async newBeef(@Payload() message: any, @Ctx() context: KafkaContext): Promise<void> {
    console.log(message);

  }

}
