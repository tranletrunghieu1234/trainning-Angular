import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchTestComponent } from './search-test/search-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'admin', component:AdminHomeComponent, canActivate:[AdminGuardGuard]},
  {path:'signup', component:SignupComponent},
  {path:'checkout', component:CheckoutComponent},

  {path:'login',component:LoginComponent},
  {path:'test-pipe',component:TestPipeComponent},
  {path:'product-id/id',component:ProductIdComponent},
  {path:'orders/:id/:id2',component:OrdersComponent},
  {path:'search-test',component:SearchTestComponent},
  {path:'observable',component:ObservableComponent},

  {path:'test-routing',
    // component:TestRoutingComponent,
    children:[
      {path:'view/:id',component:ProductViewComponent},
      {path:'edit',component:ProductEditComponent},
    ]
  },
  
  { path: 'orders2', loadChildren: () => import('./orders2/orders2.module').then(m => m.Orders2Module) },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  {path:'**',component:PageNotFoundComponent},
  /// child
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
