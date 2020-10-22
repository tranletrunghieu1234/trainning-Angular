import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() childMessage: string;
  //// truyền cha sang con
  message :string ="false";
  paramEqual :string ="false";
  @Output() messageEvent = new EventEmitter <string>();
  @Output() transmitEvent = new EventEmitter <string>();

  sendMessage=()=>{
    this.message ="true";
    this.messageEvent.emit(this.message);
  }

  sendMessageEqual=()=>{
    this.paramEqual ="true";
    console.log(this.paramEqual)
    this.transmitEvent.emit(this.paramEqual);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
