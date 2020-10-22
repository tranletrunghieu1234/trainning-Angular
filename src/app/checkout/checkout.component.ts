import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from '@angular/forms'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutGroup:FormGroup

  constructor(private formBuilder:FormBuilder) {
    // this.checkoutGroup =formBuilder.group({  //=new FormGroup  building the form using formBuilder
    //   email:new FormControl(),// in the formbuilder - we are creating a group of form element   
    //   password:new FormControl(), //these should be exactly same as your form
    //   terms:new FormControl(), // we can also have it dynamic - we will learn in next coming tutorials
    // })
    ///validation
    this.checkoutGroup =formBuilder.group({  
      email:['',[Validators.minLength(5), Validators.required, Validators.email]], 
      password:['',Validators.required],
      terms:['',Validators.requiredTrue],
    })
   }

  ngOnInit(): void {
  }
  postData=()=>{
    console.log("checkoutGroup",this.checkoutGroup);
    console.log("checkoutGroupemail",this.checkoutGroup.value.email);

  }

}
