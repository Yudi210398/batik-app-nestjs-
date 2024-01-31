import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PembelianBatik {
  @IsNotEmpty({ message: 'tidak boleh kosong' })
  @IsString({ message: 'data harus berupa text' })
  namaPembeli: string;

  @IsNotEmpty({ message: 'tidak boleh kosong' })
  @IsNumber({}, { message: 'Harus Berupa Number' })
  quantityPembeli: number;

  @IsDate()
  tanggalpembelian: Date;

  @IsOptional()
  @IsString()
  keterangan?: string;
}
