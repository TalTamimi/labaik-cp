import { Component, OnInit } from '@angular/core';
import {PushNotificationService} from '../../services/push-notification.service';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-notification-cp',
  templateUrl: './notification-cp.component.html',
  styleUrls: ['./notification-cp.component.scss']
})
export class NotificationCpComponent implements OnInit {

  selectedNationality: any = '';
  selectedAgeGroup: any = '';
  nationalities: any;
  ageGroup: any;
  selectedGroup: any = '';
  title: any;
  body: any;
  constructor(private pushNotificationService: PushNotificationService, private userService: UserService) {
    this.nationalities = this.pushNotificationService.getNationality();
    this.ageGroup = this.pushNotificationService.getAgeGroup();
  }

  ngOnInit() {
  }

  sendNotification() {
    this.userService.getUsers().subscribe((res: any) => {
      // res.pipe(filter((user: any) => this.selectedNationality === '' || this.selectedNationality === user.nationality));
      const deviceIds = Object.values(res).
      filter((item: any) => this.selectedNationality === '' || item.nationality === this.selectedNationality)
        .filter((item: any) => this.selectedGroup === '' || item.campaignName === this.selectedGroup)
        .filter((item: any) => this.selectedAgeGroup === '' || item.age === this.selectedAgeGroup)
        .filter((item: any) => item.deviceTokenId !== undefined)
        .map((item: any) => item.deviceTokenId);

      const sendToall = this.selectedAgeGroup === '' && this.selectedGroup === '' && this.selectedNationality === '';
      this.pushNotificationService.sendNotification(deviceIds, sendToall, this.body, this.title).subscribe(res => {
      });
    });
  }

}
