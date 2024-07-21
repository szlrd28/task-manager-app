import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSummaryPipe } from '../task-summary.pipe';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskSummaryPipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: any;
  @Output() onComplete = new EventEmitter<void>();

  completeTask(): void {
    this.onComplete.emit();
  }
}
