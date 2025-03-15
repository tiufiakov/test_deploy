import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Registering a new user' })
  @ApiResponse({status: 201, description: 'The user is registered'})
  @ApiResponse({status: 400, description: 'Registration error'})
  @Post('registry')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }

  @ApiOperation({ summary: 'User login' })
  @ApiResponse({status: 200, description: 'Successful login'})
  @ApiResponse({status: 401, description: 'Login error'})
  @Get('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
}
