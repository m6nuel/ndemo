import { Module } from '@nestjs/common';
import { TemaModule } from './tema/tema.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistModule } from './hist/hist.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'userndemo',
      password: 'root',
      database: 'ndemo',
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
