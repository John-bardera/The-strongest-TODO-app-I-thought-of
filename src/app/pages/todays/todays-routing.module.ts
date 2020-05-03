import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodaysPage } from '@/pages/todays/todays.page';


const routes: Routes = [
  {
    path: '',
    component: TodaysPage,
    children: [
      {
        path: '',
        redirectTo: 'todays',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodaysPageRoutingModule {}
