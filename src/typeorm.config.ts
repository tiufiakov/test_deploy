import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from "process";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost', //?? '94.26.239.216',
    port: 5432,// 35115,
    username: 'postgres',
    password: '1234',
    database: 'test', //'postgres',//'test',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};