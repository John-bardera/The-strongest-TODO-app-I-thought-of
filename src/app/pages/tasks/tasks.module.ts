import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from '@/pages/tasks/tasks-routing.module';
import { TasksPage } from '@/pages/tasks/tasks.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TasksPageRoutingModule],
  declarations: [TasksPage],
})
export class TasksPageModule {}
