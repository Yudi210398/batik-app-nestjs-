import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BatikService } from './batik.service';
import { CreateDtoBatik } from 'src/dto/batikValidasi.dto';

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
}
