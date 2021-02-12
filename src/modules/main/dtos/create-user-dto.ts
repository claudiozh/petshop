import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'O Campo nome é obrigatório' })
    name: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O Campo username é obrigatório' })
    username: string;

    @ApiProperty()
    @IsNumber()
    age: number;

    @ApiProperty()
    @IsEmail({}, { message: 'Formato de email inválido' })
    email: string;
}