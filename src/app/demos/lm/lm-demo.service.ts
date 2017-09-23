import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import { LayerCard } from '../../shared/models/layer-card.d';

import * as L from 'leaflet';
import { LMDEMO } from './lm-demo';
import { DemoService } from '../../shared/models/demo.service';

@Injectable()
export class LmDemoService {
  demoConfig: any;
  sidebarConfig: any;

  getLayer(card: LayerCard): Observable<L.TileLayer> {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://geotrellis.io/gt/weighted-overlay/breaks', {
      params: new HttpParams()
        .set('layers', `${card.params.layers}`)
        .set('weights', `${card.values}`)
        .set('numBreaks', '20')
    })
      .debounceTime(500)
      .retry(3)
      .map(response => response['classBreaks'])
      .map(res => {
        return L.tileLayer.wms(card.server, {
          breaks: res,
          layers: card.params.layers,
          format: 'image/png',
          weights: card.values,
          transparent: true,
          attribution: 'Azavea',
          uppercase: true,
        });
      });
  }

  getSummary(card: LayerCard): Observable<any> {
    return null;
  }
  constructor(
    private http: HttpClient,
  ) {
    this.demoConfig = new DemoService(LMDEMO).demoConfig;
    this.sidebarConfig = new DemoService(LMDEMO).sidebarConfig;
    this.sidebarConfig.service = {
      getLayer: this.getLayer,
      getSummary: this.getSummary
    };
  }
}
