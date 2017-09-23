import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PotsdamViewComponent } from './potsdam-view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,

    RouterModule.forChild([
      { path: '', component: PotsdamViewComponent },
    ])
  ],
  declarations: [ PotsdamViewComponent ],
})

export class PotsdamModule { }
