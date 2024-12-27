import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './auth.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User', 'authDB') private userModel: Model<User>) {}

  async signup(username: string, password: string): Promise<User> {
    const userExists = await this.userModel.findOne({ username });
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const user = new this.userModel({ username, password });
    return user.save();
  }

  async login(username: string, password: string): Promise<User> {
    const user = await this.userModel.findOne({ username, password });
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
