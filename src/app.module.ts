import { Module } from '@nestjs/common';
import { TemaModule } from './tema/tema.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistModule } from './hist/hist.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.P_HOST,
      port: parseInt(process.env.P_PORT),
      username: process.env.P_USERNAME,
      password: process.env.P_PASSWORD,
      database: process.env.P_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TemaModule,
    HistModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
