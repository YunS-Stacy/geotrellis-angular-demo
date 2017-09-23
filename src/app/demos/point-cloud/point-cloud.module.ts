import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PointCloudViewComponent } from './point-cloud-view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: PointCloudViewComponent },
    ])
  ],
  declarations: [PointCloudViewComponent],
})

export class PointCloudModule { }
