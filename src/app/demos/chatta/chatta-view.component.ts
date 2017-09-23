import { Component } from '@angular/core';
import { ChattaDemoService } from './chatta-demo.service';

@Component({
  selector: 'gd-demo',
  templateUrl: '../demo-template.html',
  providers: [ChattaDemoService]
})

export class ChattaViewComponent {
  constructor(
    private service: ChattaDemoService
  ) { }
}
