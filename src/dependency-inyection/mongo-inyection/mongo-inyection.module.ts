import { Module } from '@nestjs/common';
import { MongoInyectionService } from './mongo-inyection.service';

@Module({
  providers: [MongoInyectionService]
})
export class MongoInyectionModule {}
