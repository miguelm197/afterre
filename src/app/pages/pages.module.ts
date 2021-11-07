import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ForecastComponent } from './forecast/forecast.component';



@NgModule({
  declarations: [
    PagesComponent,
    ForecastComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
