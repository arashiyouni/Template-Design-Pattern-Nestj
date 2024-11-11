import { IsBoolean, IsDate,IsInt,IsPositive,IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(5)
    username:string

    @IsString()
    @MinLength(2)
    name:string
    
    @IsString()
    @MinLength(2)
    lastname:string

    @IsString()
    @MinLength(2)
    email:string

    @IsString()
    @MinLength(2)
    password:string

    @IsDate()
    birthday: Date

    @IsBoolean()
    isActive: boolean

    @IsInt()
    @IsPositive()
    country: number
}
