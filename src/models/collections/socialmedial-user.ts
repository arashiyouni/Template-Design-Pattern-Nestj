import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({ required: true })
    username: string

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    lastname: string

    @Prop({ required: true })
    email: string

    @Prop({ required: true })
    password: string

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    country: number

    @Prop({ required: true })
    birthday: Date

    @Prop({ required: true })
    isActive: boolean
}