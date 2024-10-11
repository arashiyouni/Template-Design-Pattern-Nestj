import { Module } from '@nestjs/common';
import { SqlInyectionService } from './sql-inyection.service';

@Module({
  providers: [SqlInyectionService]
})
export class SqlInyectionModule {}
