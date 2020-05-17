import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TaskDetailComponent } from '@/components/task-detail/task-detail.component';

@NgModule({
  declarations: [
    // HogeComponent
    TaskDetailComponent,
  ],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    // HogeComponent
    TaskDetailComponent,
  ],
})
export class ComponentsModule {}
