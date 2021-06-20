import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbUser:6XgZEg8NTLohn8Jn@cluster0.siujf.mongodb.net/test', UsersModule),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
