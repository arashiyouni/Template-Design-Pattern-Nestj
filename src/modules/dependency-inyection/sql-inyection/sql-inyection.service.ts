import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from 'src/common/interface/IOperation';
import { ISocialMedia } from 'src/common/interface/queries-cmmons.interface';
import { User } from 'src/models/entities/user';
import { Repository } from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

@Injectable()
export class SqlInyectionService implements ISocialMedia<IUser>  {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}
    SearchByUsername(value: IUser): Promise<any> {
        const { username } = value
        const user = this.userRepository.find({
            select: {
                username: true,
                name: true,
                lastname: true,
                description: true,
                country: true,
                isActive: true
            },
            where: {
                username: username
            }
        })

        return user
    }
    async Update(value: IUser): Promise<any> {
        const {username, name, lastname, email, password, description, country, birthday, isActive, id } = value
        const user = await this.userRepository
            .createQueryBuilder()
            .update(User)
            .set({
                username: username,
                name: name,
                lastname: lastname,
                email: email,
                password: password,
                description: description,
                country: country,
                birthday: birthday,
                isActive: isActive
            })
            .where("id_user = :id_user", { id: id })
            .execute()

     return user
    }
    async Create(value: IUser): Promise<any> {
        const saveUser = await this.userRepository
        .createQueryBuilder()
        .insert()
        .values({
            username: value.username,
            name: value.name,
            lastname: value.lastname,
            email: value.email,
            password: value.password,
            description: value.description,
            country: value.country,
            birthday: value.birthday,
            isActive: value.isActive
        }).execute()

        return saveUser
    }
    async Delete(value: string): Promise<any> {
        const deleteUser = await this.userRepository.delete(value)
        return deleteUser
    }
    async SearchBlogPost(value: number): Promise<any> {
       const searchBlogPostId = await this.userRepository.findOneBy({ id_user: value})
       return searchBlogPostId
    }
}
