import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id_user: number

    @Column()
    username: string

    @Column()
    name: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    description: string

    @Column()
    country: number

    @Column()
    birthday: Date

    @Column()
    isActive: boolean
}