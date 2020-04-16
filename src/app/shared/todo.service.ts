import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService{
    listChanged = new Subject<{title: string, isChecked: boolean}[]>();
    
    private toDoList: {title: string, isChecked: boolean}[] = [
        {title: 'Go to gym', isChecked: false},
        {title: 'Birthday Party', isChecked: false},
        {title: 'Angular Project', isChecked: true}
    ];

    getToDoList(){
        this.toDoList.sort((a, b) => (a.isChecked > b.isChecked) ? 1 : -1)
        return this.toDoList.slice();
    }

    addTask(title: string){
        this.toDoList.push({
            title: title,
            isChecked: false
        });

        this.toDoList.sort((a, b) => (a.isChecked > b.isChecked) ? 1 : -1);
        this.listChanged.next(this.toDoList);
    }

    deleteTask(index: number){
        this.listChanged.next(this.toDoList);
        this.toDoList.splice(index, 1);
    }

    changeStatus(index: number){
        this.toDoList[index].isChecked = !this.toDoList[index].isChecked;
        this.toDoList.sort((a, b) => (a.isChecked > b.isChecked) ? 1 : -1);
        this.listChanged.next(this.toDoList);
    }


}