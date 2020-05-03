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
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'todays',
        loadChildren: () => import('../todays/todays.module').then(m => m.TodaysPageModule),
      },
      {
        path: 'reminder',
        loadChildren: () => import('../reminder/reminder.module').then(m => m.ReminderPageModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}