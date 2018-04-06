import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beef } from './beef.entity';

@Component()
export class BeefService {
  constructor(
    @InjectRepository(Beef)
    private readonly beefRepository: Repository<Beef>,
  ) {}

  async create(beef: Beef): Promise<Beef> {
    return await this.beefRepository.create(beef);
  }
  async findAll(): Promise<Beef[]> {
    return await this.beefRepository.find();
  }
}