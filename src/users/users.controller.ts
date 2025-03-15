import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import { Users} from "./users.entity";
import {UsersDto} from "./users.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }
    @Get()
    getMethod(){
        return 'hello from user controller'
    }

    @Post()
    async createUser(@Body() usersDto: UsersDto){
        console.log(usersDto);

        await this.usersService.createUser(usersDto);
    }

    @Get('allUsers')
    async findAllUsers(){
        return await this.usersService.findAllUsers();
    }

}