import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeefService } from './beef.service';
import { BeefController } from './beef.controller';
import { Beef } from './beef.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beef])],
  components: [BeefService],
  controllers: [BeefController],
})
export class BeefModule {}