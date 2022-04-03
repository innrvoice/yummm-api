import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TastesModule } from "src/tastes/tastes.module";
import { TastesRepository } from "src/tastes/tastes.repository";
import { TastesService } from "src/tastes/tastes.service";
import { PostsController } from "./posts.controller";
import { PostsRepository } from './posts.repository'
import { PostsService } from "./posts.service";

@Module({
  imports: [TastesModule, TypeOrmModule.forFeature([PostsRepository, TastesRepository])],
  controllers: [PostsController],
  providers: [PostsService, TastesService],
})
export class PostsModule {}
