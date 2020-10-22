import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit {
  @Input() EqualValue: string;
  constructor() { }

  ngOnInit(): void {
  }

}
