import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GeoService } from './geo.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, AfterViewInit {

  geolocation: Geolocation;

  constructor(public geo: GeoService) {
  }

  ngOnInit() {
    this.geolocation = navigator.geolocation;
  }

  ngAfterViewInit() {
    this.geo.updateSize();
  }

  locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.geo.setView(10, [position.coords.longitude, position.coords.latitude]);
      });
    }
  }
}