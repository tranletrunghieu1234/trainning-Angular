import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',
  styleUrls: ['./test-directive.component.scss']
})
export class TestDirectiveComponent implements OnInit {
  arrName: any
  className:string = 'one';
  className2:string = 'two';
  test1:boolean=true;
  test2:boolean=false;
  constructor() { }

  ngOnInit(): void {
    let listName =[
      {id:1,name:'Hieu',class:"12A22",active:true},
      {id:2,name:'Nam',class:"11A02",active:true},
      {id:3,name:'Trung',class:"10A05",active:false},
      {id:4,name:'Toan',class:"6A22",active:true},
      {id:5,name:'Viet',class:"3A02",active:true},
      {id:6,name:'Dung',class:"11A05",active:false},
      ];
    this.arrName= listName;
      console.log("className",this.className)
      console.log("className")
  }
  testFunc =()=>{
    let classes={
      "two":this.test1,
      "one":!this.test2,
    }
    return classes;
  }

}
