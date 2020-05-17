import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TaskDetailComponent } from '@/components/task-detail/task-detail.component';

import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    // HogeComponent
    TaskDetailComponent,
    ListItemComponent
  ],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    // HogeComponent
    TaskDetailComponent,
    ListItemComponent
  ],
})
export class ComponentsModule {}
