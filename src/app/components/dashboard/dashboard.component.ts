import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../../services/user-service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })
  export class DashboardComponent implements OnInit {

    @ViewChild('map') mapElement: ElementRef;
    map: google.maps.Map;
    infowindow: any;
    location = {
      latitude: 21.414087,
      longitude: 39.893085
    };

    constructor(private userService: UserService) {}

    ngOnInit() {
      this.drawMap();
    }

    drawMap() {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: this.location.latitude, lng: this.location.longitude},
        zoom: 15
      });

      this.userService.getUsers().subscribe((res: any) => {
        Object.values(res).forEach((user: any) => {
          this.addMarker(user);
        });
      });
    }

    addMarker(user) {
      if (user.latitude && user.longitude) {
        const latLng = new google.maps.LatLng(user.latitude, user.longitude);
        const marker = new google.maps.Marker({
          map: this.map,
          position: latLng
        });
      }
    }

  }
