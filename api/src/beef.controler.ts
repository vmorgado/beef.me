
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CompressionTypes } from '@nestjs/microservices/external/kafka.interface';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

class CreateBeefDto {

}

@Controller('beef')
export class BeefController {

  constructor(
    @Inject('PRODUCER')
    private readonly producer: Producer
  ) {}

  @Post()
  async createBeef(@Body() createBeef: CreateBeefDto): Promise<any> {

    const result = await this.producer.send({
      topic: 'beef.create',
      messages: [{
        value: JSON.stringify({
          content: 'Hello Beef',
        }),
      }],
      compression: CompressionTypes.None

    });

    return result;
  }
}
