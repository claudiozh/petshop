import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from 'src/modules/main/controllers/cats.controller';
import { AccountcaoController } from './controllers/account.controller';
import { Cat } from './entities/cat.entity';
import { CatsService } from './services/cats.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Cat
        ])
    ],
    controllers: [AccountcaoController, CatsController],
    providers: [CatsService],
})
export class MainModule { }
