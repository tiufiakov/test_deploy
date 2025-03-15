import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Иван', description: 'Name' })
  name: string;

  @ApiProperty({ example: '36', description: 'Age' })
  age: number;

  @ApiProperty({ example: 'terminator777', description: 'Login' })
  login: string;

  @ApiProperty({ example: 'Ivan1971!', description: 'Password' })
  password: string;
}
