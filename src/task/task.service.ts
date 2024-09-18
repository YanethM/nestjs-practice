import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];

  create(taskDTO: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDTO,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: string): ITask {
    return this.tasks.find((task) => task.id === id);
  }

  updateS(id: string, taskDTO: TaskDTO): ITask {
    const newTask = { id, ...taskDTO };
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  deleteS(id: string): ITask {
    /* Hacemos una busqueda del id dentro del array de tareas */
    const task = this.tasks.find((task) => task.id === id);
    /* Nos muestra todas las tareas que contiene el array excepto */
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return task;
  }
}
