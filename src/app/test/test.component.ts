import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  colorName:string;
  showMessage:boolean;
  testSwitch:string;
  users:any;

  constructor() { }

  ngOnInit(): void {
    this.colorName="green";    
    this.showMessage=true;
    this.testSwitch="one"
    this.users =[
      {'id':1,"name":"Hiếu"},
      {'id':2,"name":"Thuận"},

  ]
  }

  readMe=()=>{
    this.colorName="blue";
    this.showMessage=! this.showMessage;
    console.log('this.showMessage',this.showMessage)
    this.testSwitch="2";
  }

}
