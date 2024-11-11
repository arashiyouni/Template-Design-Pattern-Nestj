import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DependencyInyectionService } from '../dependency-inyection/dependency-inyection.service';

@Injectable()
export class UserService {
  constructor(
    private repository: DependencyInyectionService
  ){}

  async CreateUserSocialMedia(createUserDto: CreateUserDto) {
    try{
      const user = await this.repository.Insert('mongo', createUserDto)

      if(!user) throw new BadRequestException()

      return user

    }catch(err){
      console.error('📢 | ERROR: ', err)
      throw new InternalServerErrorException()
    }
  }

  async CreateUserManangemnt(createUserDto: CreateUserDto) {
    try{
      const user = await this.repository.Insert('mssql', createUserDto)

      if(!user) throw new BadRequestException()

      return user.raw[0]
    }catch(err){
      console.error('📢 | ERROR: ', err)
      throw new InternalServerErrorException()
    }
  }
}
