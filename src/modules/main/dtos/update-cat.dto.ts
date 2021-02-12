import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateCatDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;
}