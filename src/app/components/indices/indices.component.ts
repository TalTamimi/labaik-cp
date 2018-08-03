import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../../services/user-service';
import { } from '@types/googlemaps';

@Component({
    selector: 'app-indices',
    templateUrl: './indices.component.html',
    styleUrls: ['./indices.component.scss']
  })
  export class IndicesComponent implements OnInit {

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

      this.userService.getIndices().subscribe((res: any) => {
        res.forEach(index => {
            this.addMarker(index);
        });
      });
    }

    addMarker(index) {
      if (index.lat && index.long) {
        const latLng = new google.maps.LatLng(index.lat, index.long);
        const marker = new google.maps.Marker({
          map: this.map,
          icon: './assets/imgs/'+index.index+'-sm.png',
          position: latLng
        });
      }
    }

  }
