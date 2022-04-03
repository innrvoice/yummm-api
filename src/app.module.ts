import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TastesModule } from './tastes/tastes.module';

@Module({
  imports: [PostsModule, TastesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'yummm',
    autoLoadEntities: true,
    synchronize: true,
  }), TastesModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
