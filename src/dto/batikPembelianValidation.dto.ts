import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PembelianBatik {
  @IsOptional()
  @IsString()
  _id: string;

  @IsNotEmpty({ message: 'tidak boleh kosong' })
  @IsString({ message: 'data harus berupa text' })
  namaPembeli: string;

  @IsNotEmpty({ message: 'tidak boleh kosong' })
  @IsNumber({}, { message: 'Harus Berupa Number' })
  quantityPembeli: number;

  @IsOptional()
  @IsDate()
  tanggalpembelian?: Date;

  @IsOptional()
  @IsString()
  keterangan?: string;
}
