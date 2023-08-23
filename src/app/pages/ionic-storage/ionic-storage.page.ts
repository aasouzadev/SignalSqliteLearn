import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interfaces/tasks';
import { IonicStorageService } from 'src/app/services/ionic-storage.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-ionic-storage',
  templateUrl: './ionic-storage.page.html',
  styleUrls: ['./ionic-storage.page.scss'],
})
export class IonicStoragePage implements OnInit {
  KEY = 'tasksStorage';
  tasks: Tasks[] = [];
  newTask: Tasks = {
    id: '',
    taskname: '',
    done: false
  }

  constructor(private ionicStorageService: IonicStorageService) { }

  ngOnInit() {
    this.loadTasks();
  }

  async loadTasks() {
    this.tasks = await this.ionicStorageService.get(this.KEY) || [];
  }

  async addTask(newTask: Tasks) {
    newTask.id = uuidv4();
    this.tasks.push(newTask);
    await this.ionicStorageService.set(this.KEY, this.tasks);
    this.newTask = { id: '', taskname: '', done: false }; 
    await this.loadTasks();
  }

  async updateTask(updatedTask: Tasks) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    this.tasks[index] = updatedTask;
    await this.ionicStorageService.set(this.KEY, this.tasks);
    await this.loadTasks();
  }

  async deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    await this.ionicStorageService.set(this.KEY, this.tasks);
    await this.loadTasks();
  }



}


