import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { UsersDto } from '../users/users.dto';
import * as bcrypt from 'bcrypt';
import {Users} from "../users/users.entity";
import {LoginDto} from "./dto/login.dto";
import {ApiOperation} from "@nestjs/swagger";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user: UsersDto = {
      login: registerDto.login,
      password: hashedPassword,
      name: registerDto.name,
      age: registerDto.age,
    };

    return await this.userService.createUser(user);
  }

  async login(loginDto: LoginDto): Promise<Users>{
    const findUser = await this.userService.getByLogin(loginDto.login);

    if (findUser && await bcrypt.compare(loginDto.password, findUser.password)) {
      console.log('пароли равны');
      return findUser;
    }else {
      throw new HttpException('Неверный логин или пароль', HttpStatus.UNAUTHORIZED)
    }

  }
}
