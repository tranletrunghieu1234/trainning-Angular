import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Orders2Component } from './orders2.component';

const routes: Routes = [{ path: '', component: Orders2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Orders2RoutingModule { }
