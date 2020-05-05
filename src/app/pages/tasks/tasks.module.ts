import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from '@/pages/tasks/tasks-routing.module';
import { TasksPage } from '@/pages/tasks/tasks.page';
import { ComponentsModule } from '@/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TasksPage]
})
export class TasksPageModule {}
