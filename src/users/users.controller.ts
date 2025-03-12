import {Controller, Get} from "@nestjs/common";

@Controller('users')
export class UsersController {

    @Get()
    getMethod(){
        return 'hello from user controller'
    }

}