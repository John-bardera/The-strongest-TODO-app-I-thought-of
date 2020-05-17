import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingPage } from '@/pages/setting/setting.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPage,
    children: [
      {
        path: '',
        redirectTo: 'setting',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPageRoutingModule {}
