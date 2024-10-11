import { Module } from '@nestjs/common';
import { DependencyInyectionService } from './dependency-inyection.service';
import { MongoInyectionModule } from './mongo-inyection/mongo-inyection.module';
import { SqlInyectionModule } from './sql-inyection/sql-inyection.module';

@Module({
  providers: [DependencyInyectionService],
  imports: [MongoInyectionModule, SqlInyectionModule]
})
export class DependencyInyectionModule {}
