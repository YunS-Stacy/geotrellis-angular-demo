import { Component } from '@angular/core';
import { PointCloudDemoService } from './point-cloud-demo.service';

@Component({
  selector: 'gd-demo',
  templateUrl: '../demo-template.html',
  providers: [PointCloudDemoService]
})

export class PointCloudViewComponent {
  constructor(
    private service: PointCloudDemoService
  ) { }
}
