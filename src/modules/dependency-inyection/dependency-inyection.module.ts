import { Module } from '@nestjs/common';
import { DependencyInyectionService } from './dependency-inyection.service';
import { MongoInyectionModule } from './mongo-inyection/mongo-inyection.module';
import { SqlInyectionModule } from './sql-inyection/sql-inyection.module';
import { DatabaseStrategyService } from './database-strategy.service';
import { MONGO, MSSQL } from './database-source.constant';
import { MongoInyectionService } from './mongo-inyection/mongo-inyection.service';
import { SqlInyectionService } from './sql-inyection/sql-inyection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SocialMediaSchema, SocialMediaUser } from 'src/models/collections/socialmedial-user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/entities/user';

@Module({
  imports: [
    MongoInyectionModule, 
    SqlInyectionModule,
    MongooseModule.forFeature([{ name: SocialMediaUser.name, schema: SocialMediaSchema }]),
    TypeOrmModule.forFeature([User])
  ],
  providers: [
    DependencyInyectionService,
    DatabaseStrategyService,
    //insert subclases to implement interface
    {
      provide: MONGO,
      useClass: MongoInyectionService
    },
    {
      provide: MSSQL,
      useClass: SqlInyectionService
    }
    ],
  exports: [
    DatabaseStrategyService,
    DependencyInyectionService,
    MONGO,
    MSSQL
  ]
})
export class DependencyInyectionModule {}
