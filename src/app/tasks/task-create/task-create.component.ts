import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent {
  name: string = '';
  description: string = '';
  username: string = '';
  completed: boolean = false;

  constructor(private taskService: TaskService, private router: Router) {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = JSON.parse(storedUsername);
    }
  }

  createTask(): void {
    this.taskService.addTask({
      name: this.name,
      description: this.description,
      completed: this.completed,
      username: this.username || undefined
    });
    this.router.navigateByUrl('/tasks');
  }

  cancel(): void {
    this.router.navigateByUrl('/tasks');
  }
}
