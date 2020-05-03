import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from '@/pages/tabs/tabs-routing.module';
import { TabsPage } from '@/pages/tabs/tabs.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [TabsPage],
})
export class TabsPageModule {}