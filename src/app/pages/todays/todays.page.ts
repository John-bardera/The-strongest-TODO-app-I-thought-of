import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TaskDetailComponent } from '@/components/task-detail/task-detail.component';

@Component({
  selector: 'app-todays',
  templateUrl: './todays.page.html',
  styleUrls: ['./todays.page.scss'],
})
export class TodaysPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async pushTaskDetail() {
    const modal = await this.modalCtrl.create({
      component: TaskDetailComponent,
    });
    await modal.present();
  }
}
