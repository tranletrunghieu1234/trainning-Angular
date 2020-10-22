import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  params:string ='';
  constructor(private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe(data=>{
      this.params = data.id;
      console.log(data);
    })
  
  }

  ngOnInit(): void {
  }

}
