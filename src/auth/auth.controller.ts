import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LocalGuard } from './guards/local.guard';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Req() req: Request) {
    return await this.authservice.login(req['user']);
  }

  @Post('refreshtoken')
  async refreshtoken(@Body() userId: string) {
    return await this.authservice.refreshToken(userId['userId']);
  }
}
