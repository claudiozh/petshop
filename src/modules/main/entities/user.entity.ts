import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cat } from "./cat.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 60 })
    name: string;

    @Column()
    age: number;

    @Column({ unique: true, length: 60 })
    email: string

    @OneToMany(() => Cat, (cat) => cat.user)
    cats: Cat[]
}