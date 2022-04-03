import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateTasteDto } from './dto/create-taste.dto';
import { Taste } from './taste.entity';
import { TastesService } from './tastes.service';

@Controller('tastes')
export class TastesController {
  constructor(private tastesService: TastesService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
  //   return this.tasksService.getTasks(filterDto);
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Promise<Task> {
  //   return this.tasksService.getTaskById(id);
  // }

  @Post()
  createTaste(@Body() createTasteDto: CreateTasteDto): Promise<Taste> {
    return this.tastesService.createTaste(createTasteDto);
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
