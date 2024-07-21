import { Injectable } from '@angular/core';

interface Task {
  name: string;
  description: string;
  completed: boolean;
  username?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

