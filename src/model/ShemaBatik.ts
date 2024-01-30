import mongoose from 'mongoose';

export const ShemaBatik = new mongoose.Schema({
  jenisBatik: { type: String, required: true },
  quantityBatik: { type: Number, required: true },
  pembelian: [
    {
      Namapembeli: { type: String, required: true },
      quantityPembeli: { type: Number, required: true },
      tanggalpembelian: { type: Date, required: true },
      keterangan: { type: String },
    },
  ],
});
