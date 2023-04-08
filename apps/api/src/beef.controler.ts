
import { Body, Controller, Get, Inject, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CompressionTypes } from '@nestjs/microservices/external/kafka.interface';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { FileInterceptor } from '@nestjs/platform-express';

class CreateBeefDto {

}

@Controller('beef')
export class BeefController {

  constructor(
    @Inject('PRODUCER')
    private readonly producer: Producer
  ) {}


  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createBeef(
    @UploadedFile('file') file: any,
    @Body() body: any,
  ): Promise<any> {

    const result = await this.producer.send({
      topic: 'beef.create',
      messages: [{
        value: JSON.stringify({
          authorId: body.userId,
          content: file.path
        }),
      }],
      compression: CompressionTypes.None

    });

    console.log(result);
    return result;
  }
}
