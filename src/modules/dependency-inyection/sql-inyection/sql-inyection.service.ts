import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from 'src/common/interface/IOperation';
import { ISocialMedia } from 'src/common/interface/queries-cmmons.interface';
import { User } from 'src/models/entities/user';
import { Repository } from 'typeorm';

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
        const {username, name, lastname, email, password, description, country, birthday, isActive } = value
        const user = this.userRepository
            .createQueryBuilder()
            .insert()
            .into(User)
            .values({
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
    }
    async Create(value: IUser): Promise<IUser> {
        const saveUser = await this.userRepository.save(value)
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
