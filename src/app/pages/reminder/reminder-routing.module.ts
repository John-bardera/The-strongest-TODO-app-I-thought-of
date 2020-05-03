import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReminderPage } from '@/pages/reminder/reminder.page';


const routes: Routes = [
  {
    path: '',
    component: ReminderPage,
    children: [
      {
        path: '',
        redirectTo: 'reminder',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemindersPageRoutingModule {}
