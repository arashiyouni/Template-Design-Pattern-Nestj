import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseStrategyService } from '../dependency-inyection/database-strategy.service';
import { DependencyInyectionService } from '../dependency-inyection/dependency-inyection.service';
import { DependencyInyectionModule } from '../dependency-inyection/dependency-inyection.module';

@Module({
  imports: [
    DependencyInyectionModule
  ],
  controllers: [UserController],
  providers: [
    UserService,
    DatabaseStrategyService,
    DependencyInyectionService
  ],
})
export class UserModule {}
