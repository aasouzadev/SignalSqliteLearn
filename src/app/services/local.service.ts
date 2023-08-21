import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/tasks';


@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private storageKey = 'tasksData';

  constructor() { }

  private getStoredTasks(): Tasks[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveTasks(tasks: Tasks[]){
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTask(task: Tasks){
    const tasks = this.getStoredTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  getTasks(): Tasks[] {
    return this.getStoredTasks();
  }

  updateTask(updatedTask: Tasks){
    const tasks = this.getStoredTasks();
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1){
      tasks[index] = updatedTask;
      this.saveTasks(tasks);
    }
  }

  deleteTask(taskId: string){
    const tasks = this.getStoredTasks().filter(task => task.id !== taskId);
    this.saveTasks(tasks);
  }
}
