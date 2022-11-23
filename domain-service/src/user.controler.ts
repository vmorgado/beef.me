import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Controller()
export class UserController {
  constructor(
    private prisma: PrismaService
  ) {}
  @MessagePattern('user.create')
  async newBeef(@Payload() message: any, @Ctx() context: KafkaContext): Promise<void> {

    try {

      const data: Prisma.UserUncheckedCreateInput = message.value.content;
      const result = await this.prisma.user.create({
        data
      });

    } catch (e) {
      console.log(e);
    }

  }

}
