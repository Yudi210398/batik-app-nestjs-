import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BatikService } from './batik.service';
import { CreateDtoBatik } from 'src/dto/batikValidasi.dto';
import { PembelianBatik } from 'src/dto/batikPembelianValidation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('batik')
export class BatikController {
  constructor(private readonly batikService: BatikService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async createBatiks(@Body() batik: CreateDtoBatik) {
    return await this.batikService.createBatik(batik);
  }

  @UseGuards(JwtAuthGuard)
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
