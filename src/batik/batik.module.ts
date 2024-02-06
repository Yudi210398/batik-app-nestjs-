import { Module } from '@nestjs/common';

import { BatikController } from './batik.controller';
import { BatikService } from './batik.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BatikSchema, ShemaBatik } from 'src/model/ShemaBatik';
import { JwtStrategy } from 'src/auth/strategis/jwt.strategy';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ShemaBatik.name, schema: BatikSchema }]),
  ],
  controllers: [BatikController],
  providers: [BatikService, JwtStrategy, JwtAuthGuard],
})
export class BatikModule {}
