import {Body, Controller, Get, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {RegisterDto} from "./dto/register.dto";
import {LoginDto} from "./dto/login.dto";

@Controller('auth')
export class AuthController{

    constructor(private authService: AuthService){}

    @Post('registry')
    async register(@Body() registerDto: RegisterDto) {
        return await this.authService.register(registerDto);
    }

    @Get('login')
    async login(@Body() loginDto: LoginDto) {
        return await this.authService.login(loginDto);
    }

}