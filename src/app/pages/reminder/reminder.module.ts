import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RemindersPageRoutingModule } from '@/pages/reminder/reminder-routing.module';
import { ReminderPage } from '@/pages/reminder/reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemindersPageRoutingModule,
  ],
  declarations: [ReminderPage]
})
export class ReminderPageModule {}
