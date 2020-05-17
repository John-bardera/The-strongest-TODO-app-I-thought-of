import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RemindersPage } from '@/pages/reminders/reminders.page';

const routes: Routes = [
  {
    path: '',
    component: RemindersPage,
    children: [
      {
        path: '',
        redirectTo: 'reminders',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemindersPageRoutingModule {}
