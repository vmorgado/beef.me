import { Module } from '@nestjs/common';
import { BeefController } from './beef.controller';

@Module({
  imports: [
  ],
  controllers: [BeefController],
  providers: [],
})
export class AppModule { }
