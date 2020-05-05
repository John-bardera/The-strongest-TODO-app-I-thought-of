import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    // HogeComponent
    ListItemComponent
  ],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    // HogeComponent
    ListItemComponent
  ],
})
export class ComponentsModule {}
