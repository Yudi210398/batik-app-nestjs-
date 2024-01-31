import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PembelianBatik } from './batikPembelianValidation.dto';
import { Type } from 'class-transformer';

export class CreateDtoBatik {
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
