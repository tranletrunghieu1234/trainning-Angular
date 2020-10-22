import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.scss']
})
export class TestPipeComponent implements OnInit {
  user:any={
    userId:1,
    name:"Trần Lê Trung Hiếu",
    sex:"male",
    DOB:Date.now(),
    salary:400
  }
  HoChiMinhCity:any=[
    {
      name:"Gò vấp district",
      width:"1500 km",
      cityCode:'GV'
    },
    {
      name:"District 1",
      width:"400 km",
      cityCode:'Q1'
    },
    {
      name:"District 3",
      width:"1500 km",
      cityCode:'Q3'
    }
  ];
  phoneNumber ="0703393397";
  constructor() { }

  ngOnInit(): void {
  }

}
