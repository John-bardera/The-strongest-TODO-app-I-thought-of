import { NgModule } from '@angular/core';
// import { HogeService } from './hoge.service';

import { LocalNotificationService } from '@/services/local-notification.service';

@NgModule({
  providers: [
    // HogeService,
    LocalNotificationService,
  ],
})
export class ServicesModule {}
