import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Users} from "./users.entity";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) {}
    async createUser(users: Users){
        console.log(users)
      await this.userRepository.save(users);
    }

    async findAllUsers(){
        return await this.userRepository.find();
    }

}