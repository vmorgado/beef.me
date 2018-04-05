import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BeefController } from 'controllers/beef.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [BeefController],
  components: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}