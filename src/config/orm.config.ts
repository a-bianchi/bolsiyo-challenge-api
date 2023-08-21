import { DataSourceOptions } from 'typeorm';

export const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.MYSQL_USER || 'bolsiyo',
  password: process.env.MYSQL_PASSWORD || 'bolsiyo',
  database: process.env.MYSQL_DATABASE || 'bolsiyo',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: process.env.NODE_ENV !== 'production',
};
