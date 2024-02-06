import { Module } from '@nestjs/common';
import { BatikModule } from './batik/batik.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://${process.env.USERNAMEDATA}:${process.env.PASSWORD_DATABASE}@cluster0-shard-00-00.oaqmd.mongodb.net:27017,cluster0-shard-00-01.oaqmd.mongodb.net:27017,cluster0-shard-00-02.oaqmd.mongodb.net:27017/batikapp?ssl=true&replicaSet=atlas-myi90d-shard-0&authSource=admin&retryWrites=true&w=majority`,
    ),

    BatikModule,
    AuthModule,
  ],
})
export class AppModule {}
