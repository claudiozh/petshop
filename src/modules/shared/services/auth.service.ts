import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AccountService } from "src/modules/main/services/account.service";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly accountService: AccountService,
        private readonly jwtService: JwtService
    ) { }

    async createToken() {
        const user: JwtPayload = { username: 'claudio' };
        const accessToken = this.jwtService.sign(user);

        return {
            expiresIn: 3600,
            accessToken
        }
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.accountService.findOneByUsername(payload.username);
    }
}