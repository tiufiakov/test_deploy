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
        const newUser: Users = {
            id: 1,
            name: usersDto.name,
            age: usersDto.age,
        }
        await this.usersService.createUser(newUser);
    }

    @Get('allUsers')
    async findAllUsers(){
        return await this.usersService.findAllUsers();
    }

}