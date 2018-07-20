import {Component, OnInit} from '@angular/core';
import * as esriLoader from 'esri-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  ngOnInit(): void {
    esriLoader.loadModules(['esri/views/MapView', 'esri/Map'])
      .then(([MapView, Map]) => {
        let webmap = new Map({
          basemap: "topo"
        });
        let view = new MapView({
          map: webmap,
          container: 'viewDiv'
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
}
