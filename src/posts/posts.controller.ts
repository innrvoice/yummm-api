import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateTasteDto } from 'src/tastes/dto/create-taste.dto';
import { TastesService } from 'src/tastes/tastes.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as YummmPost } from './post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private postsService: PostsService,
    private tastesService: TastesService,
  ) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
  //   return this.tasksService.getTasks(filterDto);
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Promise<Task> {
  //   return this.tasksService.getTaskById(id);
  // }

  @Get()
  getPosts(): Promise<[YummmPost[], number]> {
    return this.postsService.getPosts();
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Promise<any> {
    // console.log('!!!', createTasteDto);
    return this.postsService.createPost(createPostDto).then((post) =>
      this.tastesService
        .createTaste({
          post: post.id,
          tasteType: createPostDto.tasteType,
        })
        .then(() => this.postsService.getPost(post.id)),
    );
  }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): Promise<void> {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Promise<Task> {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
