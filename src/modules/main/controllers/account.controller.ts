import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "src/modules/shared/services/auth.service";
import { CreateUserDto } from "../dtos/create-user-dto";
import { AccountService } from "../services/account.service";

@Controller('account')
@ApiTags('accounts')
export class AccountcaoController {
    constructor(private authService: AuthService, private accountService: AccountService) {

    }

    @Post('create-user')
    async createUser(@Body() user: CreateUserDto): Promise<any> {
        return await this.accountService.create(user)
    }

    @Post('')
    async createToken(): Promise<any> {
        return await this.authService.createToken();
    }

    @Get('')
    @UseGuards(AuthGuard())
    findAll() {
        return [];
    }
}