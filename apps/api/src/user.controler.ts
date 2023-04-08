import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CompressionTypes, Producer } from "@nestjs/microservices/external/kafka.interface";

class CreateUserDto {
  email: string;
  handler: string;
  name: string;
}

@Controller('user')
export class UserController {

  constructor(
    @Inject('PRODUCER')
    private readonly producer: Producer
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {

    const value = JSON.stringify({
      content: createUserDto,
    });
    console.log(value);

    const result = await this.producer.send({
      topic: 'user.create',
      messages: [{
        value
      }],
      compression: CompressionTypes.None

    });

    return result;
  }
}
