import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from 'src/modules/cats/controllers/cats.controller';
import { Cat } from './entities/cat.entity';
import { CatsService } from './services/cats.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Cat
        ])
    ],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }
