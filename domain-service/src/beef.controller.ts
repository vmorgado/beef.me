
import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from './prisma.service';

@Controller()
export class BeefController {
  constructor(
    private prisma: PrismaService
  ) {}
  @MessagePattern('beef.create')
  async newBeef(@Payload() message: any, @Ctx() context: KafkaContext): Promise<void> {

    console.log('message', message.value);
    // const result = await this.prisma.beef.create({
    //   data: {
    //     content: 'Hello World',
    //     published: true,
    //     authorId: 'b5cf8941-d987-418f-bde7-1f0ea4249dee'
    //   }
    // });

    // console.log(result);

  }

}
