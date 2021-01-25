import { Module } from '@nestjs/common';
import { CatsController } from 'src/cats/controllers/cats.controller';
import { CatsService } from 'src/cats/services/cats.service';

@Module({
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }
