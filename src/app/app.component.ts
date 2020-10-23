import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h2>Hello</h2>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'testSo1';
  ngOnInit(): void {
  }

 
}
