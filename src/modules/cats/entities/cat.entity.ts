import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 60 })
    @Unique('Duplicate name', ['name'])
    name: string;

    @Column()
    age: number;

    @Column({ length: 60 })
    breed: string
}