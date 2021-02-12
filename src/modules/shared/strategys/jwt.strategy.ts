import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { AuthService } from "../services/auth.service";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        //Quando usa o super é porque está chamando diretamente o construtor da classe que está herdando (PassportStrategy)
        super({
            // Intercepta todas as requisições e busca no header um bearer token
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'SDFSDTERTERTETER'
        });
    }

    async validate(payload: JwtPayload) {
        console.log('AQUIII');

        const user = await this.authService.validateUser(payload);
        if (!user) {
            Logger.debug('NÃO AUTORIZADO')
            throw new UnauthorizedException();
        }
        return user;
    }
}