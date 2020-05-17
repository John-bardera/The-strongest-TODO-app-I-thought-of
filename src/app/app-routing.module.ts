import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'tabs', pathMatch: 'full' },
      { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule) },
      { path: 'todays', loadChildren: () => import('./pages/todays/todays.module').then((m) => m.TodaysPageModule) },
      { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then((m) => m.TasksPageModule) },
      {
        path: 'reminders',
        loadChildren: () => import('./pages/reminders/reminders.module').then((m) => m.RemindersPageModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('./pages/setting/setting.module').then((m) => m.SettingPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
