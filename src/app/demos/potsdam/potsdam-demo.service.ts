import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import { LayerCard } from '../../shared/models/layer-card.d';

import * as L from 'leaflet';
import { POTSDAMDEMO } from './potsdam-demo';
import { DemoService } from '../../shared/models/demo.service';

@Injectable()
export class PotsdamDemoService {
  demoConfig: any;
  sidebarConfig: any;

  getLayer(card: LayerCard): Observable<L.TileLayer> {
    let url = card.server;
    switch (card.info.name) {
      case 'potsdam-imagery':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`)
          .replace('{values[1]}', `${card.values[1]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-dsm':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-dsm-gtn':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-labels':
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-unet-predictions':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`)
          .replace('{values[1]}', `${card.values[1]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-unet-probabilities':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-fcn-predictions':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`)
          .replace('{values[1]}', `${card.values[1]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-fcn-probabilities':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-fcndsm-predictions':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`)
          .replace('{values[1]}', `${card.values[1]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-fcndsm-probabilities':
        url = card.server
          .replace('{values[0]}', `${card.values[0]}`);
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-fcn-unet':
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      case 'potsdam-fcn-fcndsm':
        return new Observable<L.TileLayer>(observer => observer.next(L.tileLayer(url)))
          .debounceTime(500)
          .retry(3)
          .map(res => res);
      default:
        break;
    }
  }

  getSummary(card: LayerCard, values: string[] | number[], zoom: number): Observable<any> {
    return null;
  }
  constructor(
    private http: HttpClient,
  ) {
    this.demoConfig = new DemoService(POTSDAMDEMO).demoConfig;
    this.sidebarConfig = new DemoService(POTSDAMDEMO).sidebarConfig;
    this.sidebarConfig.service = {
      getLayer: this.getLayer,
      getSummary: this.getSummary
    };
  }
}
