import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTasteDto } from './dto/create-taste.dto';
import { Taste } from './taste.entity';
import { TastesRepository } from './tastes.repository';

@Injectable()
export class TastesService {
  constructor(
    @InjectRepository(TastesRepository)
    private tastesRepository: TastesRepository,
  ) {}

//   getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
//     return this.tasksRepository.getTasks(filterDto);
//   }

//   async getTaskById(id: string): Promise<Task> {
//     const found = await this.tasksRepository.findOne(id);

//     if (!found) {
//       throw new NotFoundException(`Task with ID "${id}" not found`);
//     }

//     return found;
//   }

  createTaste(createTasteDto: CreateTasteDto): Promise<Taste> {
    return this.tastesRepository.createTaste(createTasteDto);
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
