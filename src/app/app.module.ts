import { CommonModule, HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //step 1 import formsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HighlightPipe } from './highlight.pipe';
import { TodoModule} from './todo/todo.module';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchTestComponent } from './search-test/search-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
// import { Orders2Component } from './orders2/orders2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightPipe,
    HoverEffectPipe,
    TasksComponent,
    TestComponent,
    TestDirectiveComponent,
    DataBindingComponent,
    TestPipeComponent,
    TestRoutingComponent,
    ProductIdComponent,
    OrdersComponent,
    SearchTestComponent,
    PageNotFoundComponent,
    ProductViewComponent,
    ProductEditComponent,
    AdminHomeComponent,
    SignupComponent,
    CheckoutComponent,
    // Orders2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
  ],

  providers: [
    // {provide:LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
