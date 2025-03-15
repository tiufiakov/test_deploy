import {ApiProperty} from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({example: 'terminator777', description: 'Login'})
    login: string;

    @ApiProperty({example: 'Ivan1971!', description: 'Password'})
    password: string;
}