import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DependencyInyectionModule } from './modules/dependency-inyection/dependency-inyection.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/entities/user';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    DependencyInyectionModule,
    MongooseModule.forRoot('mongodb://localhost:27020/SocialMedia'),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '5dZ8psbVg7mp6M',
      database: 'management_user',
      entities: [User],
      synchronize: false,
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
      extra: {
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 3000,
        }
      }
    }),
    UserModule,
  ],
  providers: [AppService],
})
export class AppModule {}
