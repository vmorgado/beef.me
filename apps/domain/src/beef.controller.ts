
import { Controller, Inject } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { Producer } from 'kafkajs';
import { PrismaService } from './prisma.service';

@Controller()
export class BeefController {
  constructor(
    @Inject('PRODUCER')
    private readonly producer: Producer,
    private prisma: PrismaService
  ) {}
  @MessagePattern('beef.create')
  async newBeef(@Payload() message: any, @Ctx() context: KafkaContext): Promise<void> {

    const { authorId, content } = message.value;
    const createdBeef = await this.prisma.beef.create({
      data: {
        content,
        published: true,
        authorId
      }
    });

    console.log('Created Beef: ', createdBeef);

    const produceResult = this.producer.send({
      topic: 'beef.created',
      messages: [{
        value: JSON.stringify(createdBeef)
      }]
    })
  }

}
