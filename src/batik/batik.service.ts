import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PembelianBatik } from 'src/dto/batikPembelianValidation.dto';
import { CreateDtoBatik } from 'src/dto/batikValidasi.dto';
import { ShemaBatik } from 'src/model/ShemaBatik';

@Injectable()
export class BatikService {
  constructor(
    @InjectModel(ShemaBatik.name) private batikModel: Model<ShemaBatik>,
  ) {}

  // ? Fungsi pembantu service
  async isNameSame(name: string) {
    return await this.batikModel.findOne({ jenisBatik: name });
  }

  // * Logic service

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

  async pembelianCustomer({
    _id,
    namaPembeli,
    keterangan,
    quantityPembeli,
  }: PembelianBatik) {
    const data = await this.batikModel.findById(_id);

    if (
      (await data.quantityBatik) === 0 ||
      (await data.quantityBatik) < quantityPembeli
    )
      throw new HttpException(
        'Batik Habis atau jumlah pembelian melebihi stock',
        HttpStatus.NOT_FOUND,
      );

    data.quantityBatik = data.quantityBatik - quantityPembeli;

    await data.pembelian.push({
      namaPembeli,
      tanggalpembelian: new Date(),
      quantityPembeli,
      keterangan,
    });

    return await data.save();
  }
}
