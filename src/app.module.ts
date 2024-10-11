import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DependencyInyectionModule } from './dependency-inyection/dependency-inyection.module';
import { DatabaseModule } from './database/database/database.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseModule } from './database/database/database.module';

@Module({
  imports: [DependencyInyectionModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
