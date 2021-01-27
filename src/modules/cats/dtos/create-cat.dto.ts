import { IsNotEmpty, IsNumber, Validate } from "class-validator";
import { Unique } from "typeorm";
import { Cat } from "../entities/cat.entity";

export class CreateCatDto {
    @Validate(Unique, [Cat, 'name'])
    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    @IsNotEmpty()
    breed: string;
}