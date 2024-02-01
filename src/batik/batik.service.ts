import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDtoBatik } from 'src/dto/batikValidasi.dto';
import { ShemaBatik } from 'src/model/ShemaBatik';

@Injectable()
export class BatikService {
  constructor(
    @InjectModel(ShemaBatik.name) private batikModel: Model<ShemaBatik>,
  ) {}

  async isNameSame(name: string) {
    return await this.batikModel.findOne({ jenisBatik: name });
  }

  async createBatik(create: CreateDtoBatik) {
    if (await this.isNameSame(create.jenisBatik))
      throw new HttpException(
        'jenis batik sudah terdaftar',
        HttpStatus.NOT_FOUND,
      );

    const creates = await new this.batikModel(create);
    return await creates.save();
  }

  async getDataBatik() {
    return await this.batikModel.find();
  }
}
