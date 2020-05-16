import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LocalNotificationService {
  // TODO: android用にcapacitor.config.jsonを修正(通知のアイコンとかの設定)
  // TODO: 繋ぎこみ(https://capacitor.ionicframework.com/docs/apis/local-notifications/)
  constructor() { }

  requestPermission() {
    LocalNotifications.requestPermission().then(async _ => {
      console.log(_);
      await this.sendNotification();
    }, error => {
      console.log(error);
    });
  }

  async sendNotification() {
    const notification = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Title',
          body: 'Body',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: null
        }
      ]
    });
  }
}
