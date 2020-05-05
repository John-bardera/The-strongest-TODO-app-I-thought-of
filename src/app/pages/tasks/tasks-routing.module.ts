import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksPage } from '@/pages/tasks/tasks.page';


const routes: Routes = [
  {
    path: '',
    component: TasksPage,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
