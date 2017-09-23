import { Component, Input, ChangeDetectorRef, HostBinding, AfterViewInit, OnInit } from '@angular/core';

import { LayerCard } from '../../models/layer-card.d';

import * as L from 'leaflet';

@Component({
  selector: 'gd-map-view',
  templateUrl: './map-view.component.html'
})

export class MapViewComponent implements OnInit, AfterViewInit {
  @HostBinding('class.map-view') true;
  @Input() demoConfig: {
    zoom: number;
    center: number[];
    layers: L.TileLayer[];
  };
  @Input() sidebarConfig: {
    title: string;
    groupActions: any;
    layerCards: LayerCard[];
    service: any;
  };
  cards: LayerCard[] = [];
  hasMask = false;
  map: L.Map;
  mask: any;
  options = {
    layers: [],
    zoom: undefined,
    center: undefined,
    zoomControl: false
  };
  resetArea(): void {
    this.map.eachLayer(el => {
      if (el.hasOwnProperty('editing')) {
        this.map.removeLayer(el);
      }
    });
    this.mask = undefined;
    // when reset area should clean the previous summary data;
    this.cards.forEach(el => {
      if (el.hasOwnProperty('summary')) {
        el.summary = undefined;
        el.expanded = undefined;
      }
    });
    this.hasMask = false;
  }

  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    Object.assign(this.options, this.demoConfig);
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
