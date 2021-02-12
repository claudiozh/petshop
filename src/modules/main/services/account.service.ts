import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user-dto';
import { User } from '../entities/user.entity';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ) { }

    async create(user: CreateUserDto): Promise<User> {
        return this.repository.save(user);
    }

    async findOneByUsername(username) {
        return this.repository.findOne({
            where: { username: String(username) }
        });
    }
}
