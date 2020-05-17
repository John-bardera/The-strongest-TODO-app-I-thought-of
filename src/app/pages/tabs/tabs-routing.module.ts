import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from '@/pages/tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
      },
      {
        path: 'todays',
        loadChildren: () => import('../todays/todays.module').then((m) => m.TodaysPageModule),
      },
      {
        path: 'tasks',
        loadChildren: () => import('../tasks/tasks.module').then((m) => m.TasksPageModule),
      },
      {
        path: 'reminders',
        loadChildren: () => import('../reminders/reminders.module').then((m) => m.RemindersPageModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then((m) => m.SettingPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
