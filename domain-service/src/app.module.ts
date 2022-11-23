import { Module } from '@nestjs/common';
import { BeefController } from './beef.controller';
import { PrismaService } from './prisma.service';
import { UserController } from './user.controler';

@Module({
  imports: [
  ],
  controllers: [UserController, BeefController],
  providers: [PrismaService],
})
export class AppModule {}
