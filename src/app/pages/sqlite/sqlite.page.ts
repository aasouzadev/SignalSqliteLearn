import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit {
  users = this.dbService.getUsers();
  newUserName = '';

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
  }

  createUser() {
    this.dbService.addUser(this.newUserName);
    this.newUserName = '';
  }

  updateUser(user: User) {
    const active = user.active ? 1 : 0;
    this.dbService.updateUser(user);
  }

  deleteUser(user: User) {
    this.dbService.deleteUser(user);
  }

  getUsersbyId(id: number) {
    return this.dbService.getUsersbyId(id);
  }

}
