import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BeefModule } from 'beef/beef.module';
import { AppController } from 'app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), BeefModule],
  controllers: [AppController],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}