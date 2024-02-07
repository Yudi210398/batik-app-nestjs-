import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from 'src/model/UserShema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Login.name) private user: Model<Login>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const checkUsername = await this.user.findOne({ username });
    console.log(checkUsername);
    if (await !checkUsername)
      throw new HttpException('username tidak ditemukan', 401);

    if ((await checkUsername.password) !== password)
      throw new HttpException('password salah', 401);

    const payload = {
      username: checkUsername.username,
    };

    checkUsername.refreshToken = await this.jwtService.sign(payload, {
      expiresIn: '9999 years',
    });

    return await checkUsername.save();
  }

  async login(user) {
    const payload = {
      username: user.username,
      id: user._id,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async getDataLogin() {
    return await this.user.find();
  }

  async refreshToken(userId: string) {
    const data = (await this.user.find()).filter((datas) => {
      return datas?._id.toString() === userId;
    });

    if (data.length === 0) throw new HttpException('Data tidak Ada ', 404);

    try {
      const decoded = await this.jwtService.verify(data[0].refreshToken);

      if (!decoded) throw new HttpException('Token sudah kadaluarse', 404);

      const payload = {
        username: data[0].username,
        id: data[0]._id,
      };

      return {
        accsesToken: this.jwtService.sign(payload),
      };
    } catch (err) {
      throw new HttpException('Token sudah kadaluarse', 404);
    }
  }
}
