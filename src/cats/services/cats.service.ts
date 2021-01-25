import { Injectable } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
    // getHello(id: number): ResponseSucess {
    //     let status: StatusEnum = StatusEnum.ATIVO;

    //     return {
    //         "success": true,
    //         "message": "Olá caro amiguinho " + status + " " + id
    //     }
    // }

    // getUsers(): string {
    //     return 'Lista de usuários';
    // }

    // findAll(): number {
    //     return 1;
    // }
}
