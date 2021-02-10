import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 60 })
    name: string;

    @Column()
    age: number;

    @Column({ length: 60 })
    breed: string

    @ManyToOne(() => User, (user) => user.cats)
    user: User
}