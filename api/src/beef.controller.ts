
import { Body, Controller, Get, Inject, OnApplicationShutdown, OnModuleInit, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CompressionTypes, IHeaders } from '@nestjs/microservices/external/kafka.interface';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { BeefService } from './beef.service';

class CreateBeefDto {

}

@Controller('beef')
export class BeefController implements OnModuleInit, OnApplicationShutdown {

  private producer: Producer;
  constructor(
    @Inject('BEEF_SERVICE')
    private readonly beefKafka: ClientKafka,
    private readonly beefService: BeefService
  ) {
  }
  async onApplicationShutdown(signal?: string) {
    await this.producer.disconnect();
  }
  async onModuleInit() {
    this.producer = await this.beefKafka.connect();
  }

  @Get()
  async getBeef(): Promise<string> {
    const result = await this.producer.send({
      topic: 'beef',
      messages: [{
        key: 'beef',
        value: 'Hello Beef',
      }],
      compression: CompressionTypes.None

    });
    console.log(result)
    return "HELLO";
  }

  @Post()
  createBeef(@Body() createBeef: CreateBeefDto): string {
    return "";
  }
}
