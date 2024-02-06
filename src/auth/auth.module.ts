import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { Login, UserShema } from 'src/model/UserShema';
import { LocalStategy } from './strategis/local.strategy';
import { LocalGuard } from './guards/local.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Login.name, schema: UserShema }]),
    JwtModule.register({
      secret: `data123`,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStategy, LocalGuard],
})
export class AuthModule {}
