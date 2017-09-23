import { Observable } from 'rxjs/Observable';
import { LayerCard } from './layer-card.d';
import { Demo } from './demo.d';
import * as L from 'leaflet';
import { HttpClient, HttpParams } from '@angular/common/http';

export class DemoService {
  demoConfig = {};
  sidebarConfig = {};
  constructor(
    private demo: Demo,
  ) {
    Object.assign(this.demoConfig, {
      zoom: demo.zoom,
      center: demo.center,
      layers: demo.baseLayer,
    });
    Object.assign(this.sidebarConfig, {
      title: demo.title,
      groupActions: demo.groupActions,
      layerCards: demo.layers,
    });
  }
}
