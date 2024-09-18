import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    imports: [TaskModule],
    controllers: [TaskController],
    providers: [TaskService],
})
export class TaskModule {}
