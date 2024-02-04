import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BatikService } from './batik.service';
import { CreateDtoBatik } from 'src/dto/batikValidasi.dto';
import { PembelianBatik } from 'src/dto/batikPembelianValidation.dto';

@Controller('batik')
export class BatikController {
  constructor(private readonly batikService: BatikService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async createBatiks(@Body() batik: CreateDtoBatik) {
    return await this.batikService.createBatik(batik);
  }

  @Get()
  async getData() {
    return await this.batikService.getDataBatik();
  }

  @Patch('pembelian')
  @UsePipes(ValidationPipe)
  async pembelian(@Body() data: PembelianBatik) {
    return await this.batikService.pembelianCustomer(data);
  }
}
