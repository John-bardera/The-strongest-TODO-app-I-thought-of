import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from '@/pages/setting/setting-routing.module';
import { SettingPage } from '@/pages/setting/setting.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SettingPageRoutingModule],
  declarations: [SettingPage],
})
export class SettingPageModule {}
