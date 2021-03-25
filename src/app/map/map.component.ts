import { Component, OnInit } from '@angular/core';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  private map: MapboxMap | null = null;

  public ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWhqYXdvcnNraSIsImEiOiJjazk4ZWtxamwwMXJ3M21wNHlnYTgxbWZrIn0.YmOmIQjlp2c6SE9eWtHtqA';

    this.map = new MapboxMap({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5.127684, 52.0809856],
      zoom: 10,
    });
  }

}
