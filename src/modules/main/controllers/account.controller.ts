import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller('account')
export class AccountcaoController {
    constructor() {

    }

    @Get('auth')
    @UseGuards(AuthGuard())
    findAll() {

    }
}