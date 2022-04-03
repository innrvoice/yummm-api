import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTasteDto } from 'src/tastes/dto/create-taste.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as YummmPost } from './post.entity';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsRepository)
    private postsRepository: PostsRepository,
  ) {}

  getPosts(): Promise<[YummmPost[], number]> {
    return this.postsRepository.getPosts();
  }

//   async getTaskById(id: string): Promise<Task> {
//     const found = await this.tasksRepository.findOne(id);

//     if (!found) {
//       throw new NotFoundException(`Task with ID "${id}" not found`);
//     }

//     return found;
//   }

  createPost(createPostDto: CreatePostDto): Promise<YummmPost> {
    return this.postsRepository.createPost(createPostDto);
  }
  
  getPost(id: string): Promise<YummmPost> {
    return this.postsRepository.findOne(id, { relations: ['tastes']});
  }

//   async deleteTask(id: string): Promise<void> {
//     const result = await this.tasksRepository.delete(id);

//     if (result.affected === 0) {
//       throw new NotFoundException(`Task with ID "${id}" not found`);
//     }
//   }

//   async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
//     const task = await this.getTaskById(id);

//     task.status = status;
//     await this.tasksRepository.save(task);

//     return task;
//   }
}
