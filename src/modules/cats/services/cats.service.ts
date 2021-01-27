import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from '../dtos/create-cat.dto';
import { UpdateCatDto } from '../dtos/update-cat.dto';
import { Cat } from '../entities/cat.entity';

@Injectable()
export class CatsService {

    constructor(
        @InjectRepository(Cat)
        private readonly repository: Repository<Cat>
    ) { }

    async findById(id: string): Promise<Cat | undefined> {
        return this.repository.findOne({
            where: { id: String(id) }
        });
    }

    async findAll(): Promise<Cat[]> {
        return this.repository.find();
    }

    async create(cat: CreateCatDto): Promise<Cat> {
        return this.repository.save(cat);
    }

    async update(id: string, cat: UpdateCatDto) {
        return this.repository.update(id, cat);
    }

    async delete(id: string) {
        return this.repository.delete(id);
    }
}
