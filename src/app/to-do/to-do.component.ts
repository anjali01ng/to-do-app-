import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  task:string;
  tasks=[];
  content:string;
  contents=[];
  index:number=0;
  addTask()
    {
    this.tasks.push(this.task)
    }
}
