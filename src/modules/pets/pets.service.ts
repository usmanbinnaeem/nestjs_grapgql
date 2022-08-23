/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnerService } from '../owner/owner.service';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private repository: Repository<Pet>,
    private ownerRepository: OwnerService) { }

  async create(createPetInput: CreatePetInput) {
    const pet = await this.repository.save(createPetInput);
    return pet;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({
      where: { id },
    });
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return this.repository.update(id, updatePetInput);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

  /**
   * This method is used to get the pets of a given owner.
  */

  async getOwner(ownerId: number) {
    return await this.ownerRepository.findOne(ownerId);
  }
}
