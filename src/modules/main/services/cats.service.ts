import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    async findByBreed(breed: string): Promise<Cat[]> {
        const cats = this.repository.find({
            where: { breed}
        });

        return cats;
    }

    async create(cat: CreateCatDto): Promise<Cat> {
        const catExist = await this.repository.findOne({
            where: { name: String(cat.name) }
        });

        if (catExist) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Já existe cat com esse nome',
            }, HttpStatus.BAD_REQUEST);
        }

        return this.repository.save(cat);
    }

    async update(id: string, cat: UpdateCatDto) {
        return this.repository.update(id, cat);
    }

    async delete(id: string) {
        return this.repository.delete(id);
    }
}
