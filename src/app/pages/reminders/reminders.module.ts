import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RemindersPageRoutingModule } from '@/pages/reminders/reminders-routing.module';
import { RemindersPage } from '@/pages/reminders/reminders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemindersPageRoutingModule,
  ],
  declarations: [RemindersPage]
})
export class RemindersPageModule {}
