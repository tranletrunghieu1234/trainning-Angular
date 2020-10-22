import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute){}
  queryString:any;
  ngOnInit(): void {
    //this.queryString = this.activatedRoute.snapshot.params['id']; // lấy từng giá trị trên Url
    //lấy cả object có chứa tất cả variable dynamic on URL
     this.activatedRoute.params.subscribe(data=>{
      this.queryString = data
    })
    console.log('this.queryString',this.queryString)
  }

}
