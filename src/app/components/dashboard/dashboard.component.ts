import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../../services/user-service';
import { } from '@types/googlemaps';

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
      latitude: 21.616980,
      longitude: 39.156355
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
        console.log(res);
      });

      this.addUserMarker('');

    }

    addUserMarker(user) {
      const latLng = new google.maps.LatLng(this.location.latitude, this.location.longitude);
      const marker = new google.maps.Marker({
        map: this.map,
        position: latLng
      });
    }

  }
