import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCatDto {

    @IsNotEmpty({ message: 'O Campo nome é obrigatório' })
    name: string;

    @IsNumber()
    age: number;

    @IsNotEmpty({ message: 'O Campo raça é obrigatório' })
    breed: string;
}
