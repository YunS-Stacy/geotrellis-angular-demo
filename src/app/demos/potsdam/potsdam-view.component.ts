import { Component } from '@angular/core';
import { PotsdamDemoService } from './potsdam-demo.service';
import { POTSDAMDEMO } from './potsdam-demo';
import * as chroma from 'chroma-js';

@Component({
  selector: 'gd-demo',
  templateUrl: '../demo-template.html',
  providers: [PotsdamDemoService]
})

export class PotsdamViewComponent {
  constructor(
    private service: PotsdamDemoService
  ) { }
}
