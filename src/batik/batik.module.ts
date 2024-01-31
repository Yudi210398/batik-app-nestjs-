import { Module } from '@nestjs/common';

import { BatikController } from './batik.controller';
import { BatikService } from './batik.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BatikSchema, ShemaBatik } from 'src/model/ShemaBatik';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ShemaBatik.name, schema: BatikSchema }]),
  ],
  controllers: [BatikController],
  providers: [BatikService],
})
export class BatikModule {}
