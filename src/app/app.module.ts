import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GdRoutingModule } from './gd-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,

    GdRoutingModule,
    BrowserModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
