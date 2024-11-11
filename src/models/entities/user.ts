import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("user", { schema: "dbo" })
export class User {
    @PrimaryGeneratedColumn({name: "id_user", type: "int"})
    id_user: number

    @Column("varchar", {name: "username", nullable: true})
    username: string

    @Column("varchar", {name: "name", nullable: true})
    name: string

    @Column("varchar", {name: "lastname", nullable: true})
    lastname: string

    @Column("varchar", {name: "email", nullable: true})
    email: string

    @Column("varchar", {name: "password", nullable: true})
    password: string

    @Column("varchar", {name: "description", nullable: true})
    description: string

    @Column("int", {name: "country", nullable: true})
    country: number

    @Column("date", {name: "birthday", nullable: true})
    birthday: Date

    @Column("bit", {name: "isActive", nullable: true})
    isActive: boolean
}