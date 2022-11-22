import { Module } from '@nestjs/common';
import { BeefController } from './beef.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
  ],
  controllers: [BeefController],
  providers: [PrismaService],
})
export class AppModule { }
