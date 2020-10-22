import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  name:string="Hiếu";
  year:number=1997;
  one:string="one"
  colorValue:string ='red';
  enterValue:string='Please enter value';
  hrefValue:string="https://www.google.com/";
  youtube:string="https://www.youtube.com/";
  constructor() { }

  ngOnInit(): void {
  }
  clickMe=(test)=>{
    const name= "Trần Lê Trung Hiếu"+test
    this.name=name;
    console.log(test)
  }
  onChangeFocus =()=>{
    alert('xin chào');
  }
}
