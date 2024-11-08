import { Module } from '@nestjs/common';
import { SqlInyectionService } from './sql-inyection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [SqlInyectionService],
  exports: [SqlInyectionService]
})
export class SqlInyectionModule { }
