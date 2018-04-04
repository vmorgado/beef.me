import { Controller, Get, Param } from '@nestjs/common';

@Controller('beef')
export class BeefController {
  @Get()
  findAll() {
    return ['yo'];
  }
  @Get(':id')
  findOne(@Param() params) {
    return { yo: 'yo'};
  }
}