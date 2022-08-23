/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {

  constructor(@InjectRepository(Owner) private repository: Repository<Owner>) { }

  async create(createOwnerInput: CreateOwnerInput) {
    return await this.repository.save(createOwnerInput);
  }

  async findAll() {
    return await this.repository.find({
      relations: ['pets']
    });
  }

  async findOne(id: number) {
    return await this.repository.findOne({
      where: { id },
      relations: ['pets']
    });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return this.repository.update(id, updateOwnerInput);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

}
