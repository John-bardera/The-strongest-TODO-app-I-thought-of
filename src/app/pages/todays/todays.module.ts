import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TodaysPageRoutingModule } from '@/pages/todays/todays-routing.module';
import { TodaysPage } from '@/pages/todays/todays.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TodaysPageRoutingModule],
  declarations: [TodaysPage],
})
export class TodaysPageModule {}
