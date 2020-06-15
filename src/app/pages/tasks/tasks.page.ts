import { Component } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Board, Task } from '@/models';
import { BoardService, TaskService } from '@/services';
import { AppState } from '@/stores';
import { getBoards } from '@/stores/board.store';
import { getTasks } from '@/stores/task.store';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPage {
  boards$: Observable<Board[]>;
  tasks$: Observable<Task[]>;

  boardId: string;

  constructor(private store: State<AppState>, private boardService: BoardService, private taskService: TaskService) {
    this.boards$ = this.store.pipe(select(getBoards));
    this.tasks$ = this.store.pipe(select(getTasks));
  }

  ionViewDidEnter() {
    this.boardService
      .getBoards()
      .pipe(
        tap((boards) => {
          console.log(boards);
          this.boardId = boards[0].id;
        }),
        switchMap(() => this.taskService.getTasks(this.boardId))
      )
      .subscribe((tasks) => console.log(tasks));
  }

  addTask() {
    this.taskService.addTask(this.boardId, {
      title: 'hoge',
      period: new Date('2020-11-11'),
      index: 1,
      priority: 1,
      isDone: false,
      boardId: this.boardId,
    });
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(this.boardId, taskId);
  }

  completeTask(taskId: string) {
    this.taskService.complete(this.boardId, taskId);
  }
}
