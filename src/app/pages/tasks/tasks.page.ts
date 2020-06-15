import { Component } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Task } from '@/models';
import { TaskService } from '@/services/task.service';
import { AppState } from '@/stores';
import { getTasks } from '@/stores/task.store';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPage {
  tasks$: Observable<Task[]>;

  constructor(private store: State<AppState>, private taskService: TaskService) {
    this.tasks$ = this.store.pipe(select(getTasks));
  }

  ionViewDidEnter() {
    this.taskService.getTasks().subscribe((tasks) => console.log(tasks));
  }

  addTask() {
    this.taskService
      .addTask({
        title: 'hoge',
        period: new Date('2020-11-11'),
        index: 1,
        priority: 1,
        isDone: false,
      });
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }

  completeTask(taskId: string) {
    this.taskService.complete(taskId);
  }
}
