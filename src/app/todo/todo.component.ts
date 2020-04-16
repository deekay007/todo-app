import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  listArray = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.listArray = this.todoService.getToDoList();
  }

}
