import { NgModule } from '@angular/core';
// import { HogeService } from './hoge.service';

import { BoardService } from './board.service';
import { LocalNotificationService } from './local-notification.service';
import { TaskService } from './task.service';

@NgModule({
  providers: [
    // HogeService,
    BoardService,
    LocalNotificationService,
    TaskService,
  ],
})
export class ServicesModule {}
