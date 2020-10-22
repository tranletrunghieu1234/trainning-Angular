import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  parentMessage :string ="";
  message:string;
  paramsEqual:string;
  //test:string;
  changeValue=()=>{
  //parentMessage :"true";
  this.parentMessage ="true";
  }

  receiveMessage=(test)=>{
    this.message=test;
    console.log(test)
  }
 
  receiveParams=(params)=>{
    this.paramsEqual=params;
    console.log('params',params)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
