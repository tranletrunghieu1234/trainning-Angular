import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  loginUsers(signInForm: NgForm){
    console.log("signInForm.form.value",signInForm.form.value);
    console.log("signInForm",signInForm);

  }
}
