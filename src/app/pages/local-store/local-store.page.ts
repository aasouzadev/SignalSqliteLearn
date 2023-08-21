import { LocalService } from 'src/app/services/local.service';
import { Tasks } from './../../interfaces/tasks';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-local-store',
  templateUrl: './local-store.page.html',
  styleUrls: ['./local-store.page.scss'],
})
export class LocalStorePage implements OnInit {



  ngOnInit() {
  }

  tasks: Tasks[] = [];
  newTask: Tasks = {
    id: '',
    taskname: '',
    done: false
  }

  constructor(private localService: LocalService) {
    this.loadTasks();
   }

  loadTasks(){
    this.tasks = this.localService.getTasks();
  }

  addTask(newTask: Tasks) {
    newTask.id = uuidv4(); // Generate a unique ID
    this.localService.addTask(newTask);
    this.newTask = { id: '', taskname: '', done: false }; // Reset the newTask object
    this.loadTasks();
  }

  updateTask(updatedTask: Tasks){
    this.localService.updateTask(updatedTask);
    this.loadTasks();
  }

  deleteTask(taskId: string){
    this.localService.deleteTask(taskId);
    this.loadTasks();
  }



}
