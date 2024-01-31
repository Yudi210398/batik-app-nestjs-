import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDtoBatik } from 'src/dto/batikValidasi.dto';
import { ShemaBatik } from 'src/model/ShemaBatik';

@Injectable()
export class BatikService {
  constructor(
    @InjectModel(ShemaBatik.name) private batikModel: Model<ShemaBatik>,
  ) {}

  async createBatik(create: CreateDtoBatik) {
    const creates = await new this.batikModel(create);
    return await creates.save();
  }

  async getDataBatik() {
    return await this.batikModel.find();
  }
}
