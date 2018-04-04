import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beef } from '../entities/beef.entitie';

@Component()
export class PhotoService {
  constructor(
    @InjectRepository(Beef)
    private readonly photoRepository: Repository<Beef>,
  ) {}

  async findAll(): Promise<Beef[]> {
    return await this.photoRepository.find();
  }
}