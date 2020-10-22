import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from'@angular/router';
@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.scss']
})
export class SearchTestComponent implements OnInit {
  queryCountry:string="";
  queryName:string="";

  constructor( private activatedRoute:ActivatedRoute ){
    activatedRoute.queryParams.subscribe(data=>{
      this.queryCountry=data.country;
      this.queryName=data.name
      console.log('data',data);
    })
  }

  ngOnInit(): void {
  }

}
