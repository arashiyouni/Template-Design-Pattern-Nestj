import { Module } from '@nestjs/common';
import { MongoInyectionService } from './mongo-inyection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SocialMediaSchema, SocialMediaUser } from 'src/models/collections/socialmedial-user';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: SocialMediaUser.name, schema: SocialMediaSchema }])
  ],
  providers: [
    MongoInyectionService
  ],
  exports: [
    MongoInyectionService
  ],
})
export class MongoInyectionModule {}
