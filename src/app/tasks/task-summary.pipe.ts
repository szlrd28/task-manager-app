import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskSummary',
  standalone: true
})
export class TaskSummaryPipe implements PipeTransform {
  transform(task: any): string {
    let summary = `${task.name} - ${task.description}`;
    if (task.username) {
      summary += ` (Létrehozta: ${task.username})`;
    }
    return summary;
  }
}
