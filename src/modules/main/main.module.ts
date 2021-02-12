import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from 'src/modules/main/controllers/cats.controller';
import { AuthService } from '../shared/services/auth.service';
import { AccountcaoController } from './controllers/account.controller';
import { Cat } from './entities/cat.entity';
import { CatsService } from './services/cats.service';
import { AccountService } from './services/account.service';
import { User } from './entities/user.entity';
import { JWTStrategy } from '../shared/strategys/jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'SDFSDTERTERTETER',
            signOptions: {
                expiresIn: 3600000
            }
        }),
        TypeOrmModule.forFeature([
            User,
            Cat,
        ])
    ],
    controllers: [AccountcaoController, CatsController],
    providers: [CatsService, AuthService, JWTStrategy, AccountService],
})
export class MainModule { }
