import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Orders2RoutingModule } from './orders2-routing.module';
import { Orders2Component } from './orders2.component';


@NgModule({
  declarations: [Orders2Component],
  imports: [
    CommonModule,
    Orders2RoutingModule
  ]
})
export class Orders2Module { }
