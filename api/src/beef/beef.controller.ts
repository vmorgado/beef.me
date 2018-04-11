import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Beef } from './beef.entity';
import { BeefService } from './beef.service';

@Controller('beef')
export class BeefController {
  constructor(private readonly beefService: BeefService) {}
  @Get()
  async findAll(): Promise<Beef[]> {
    return this.beefService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params) {
    return this.beefService.findOne(params.id);
  }

  @Post()
  async create(@Body('beef') beef: Beef): Promise<Beef> {
    return this.beefService.create(beef);
  }
}