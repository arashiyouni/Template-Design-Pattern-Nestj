import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interface/IOperation';
import { ISocialMedia } from 'src/common/interface/queries-cmmons.interface';
import { IUserData } from 'src/common/interface/user.interface';
import { SocialMediaUser } from 'src/models/collections/socialmedial-user';

@Injectable()
export class MongoInyectionService implements ISocialMedia<IUser> {
    constructor(
        @InjectModel(SocialMediaUser.name)
        private socialMediaUserRepository: Model<SocialMediaUser>
    ){}
    async Update(value: IUser): Promise<any> {
        const updateUser = await this.socialMediaUserRepository.updateOne(value)
        return updateUser

    }
    async Create(value: IUserData): Promise<IUser> {
        const user = await this.socialMediaUserRepository.create(value)
        return user
    }
    async Delete(value: string): Promise<any> {
        const user = await this.socialMediaUserRepository.deleteOne({_id: value})
        return user
    }
    async SearchByUsername(value: IUser): Promise<any> {
        const { username } = value

        const getUser = await this.socialMediaUserRepository.findOne({username: username})

        return getUser
    }
    async SearchBlogPost(value: string): Promise<IUser> {
        const findBlogPostId = await this.socialMediaUserRepository.findById(value)
        return findBlogPostId
    }
}
