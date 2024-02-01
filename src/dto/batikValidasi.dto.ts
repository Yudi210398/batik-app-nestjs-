import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUppercase,
  ValidateNested,
} from 'class-validator';
import { PembelianBatik } from './batikPembelianValidation.dto';
import { Type } from 'class-transformer';

export class CreateDtoBatik {
  @IsUppercase({ message: 'Harus huruf besar' })
  @IsNotEmpty({ message: 'tidak boleh kosong' })
  @IsString({ message: 'data harus berupa text' })
  jenisBatik: string;

  @IsNotEmpty({ message: ' tidak boleh kosong' })
  @IsNumber({}, { message: 'Harus Berupa Number' })
  quantityBatik: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PembelianBatik)
  pembelian?: PembelianBatik[];
}
