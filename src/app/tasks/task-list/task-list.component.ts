import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks = signal<any[]>([]);
  completedTasks = signal<any[]>([]);

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    const allTasks = this.taskService.getTasks();
    this.tasks.set(allTasks.filter(task => !task.completed));
    this.completedTasks.set(allTasks.filter(task => task.completed));
  }

  addTask(): void {
    this.router.navigateByUrl('/tasks/create');
  }

  completeTask(task: any): void {
    task.completed = true;
    this.taskService.saveTasks();
    this.tasks.set(this.tasks().filter(t => t !== task));
    this.completedTasks.set([...this.completedTasks(), task]);
  }

  onCompleteTask(task: any): void {
    this.completeTask(task);
  }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigateByUrl('/login');
  }
}
