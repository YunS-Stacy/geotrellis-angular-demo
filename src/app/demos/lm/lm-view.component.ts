import { Component } from '@angular/core';
import { LmDemoService } from './lm-demo.service';

@Component({
  selector: 'gd-demo',
  templateUrl: '../demo-template.html',
  providers: [LmDemoService]
})

export class LmViewComponent {
  constructor(
    private service: LmDemoService
  ) { }
}
