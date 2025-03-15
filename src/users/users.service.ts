import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Users} from "./users.entity";
import {UsersDto} from "./users.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) {}
    async createUser(users: UsersDto){
        return await this.userRepository.save(users);
    }

    async findAllUsers(){
        return await this.userRepository.find();
    }

    async getByLogin(login: string): Promise<Users> {
        const findUser = await this.userRepository.findOneBy({login})

        if (!findUser) throw new HttpException('User with this login does not exist', HttpStatus.NOT_FOUND)

        return findUser;
    }


}