import { DataService } from './../Services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent implements OnInit {
   text:string="";
 
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   
  }
 changeValue = () =>{
    this.text="Trần Lê Trung Hiếu"
    this.dataService.setNewValue(this.text)
  }
}
