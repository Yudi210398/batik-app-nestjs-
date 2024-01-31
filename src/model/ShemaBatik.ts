import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pembelian {
  @Prop({ type: String, required: true })
  namaPembeli: string;

  @Prop({ type: Number, required: true })
  quantityPembeli: number;

  @Prop({ type: Date, required: true })
  tanggalpembelian: Date;

  @Prop({ type: String })
  keterangan: string;
}

@Schema()
export class ShemaBatik extends Document {
  @Prop({ type: String, required: true })
  jenisBatik: string;

  @Prop({ type: Number, required: true })
  quantityBatik: number;

  @Prop([Pembelian])
  pembelian: Pembelian[];
}

export const BatikSchema = SchemaFactory.createForClass(ShemaBatik);
