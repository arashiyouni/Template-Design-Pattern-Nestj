import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  CreateUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.CreateUserSocialMedia(createUserDto);
  }

  @Post('/create-user')
  CreateUserManangemnt(@Body() createUserDto: CreateUserDto) {
    return this.userService.CreateUserManangemnt(createUserDto);
  }

}
