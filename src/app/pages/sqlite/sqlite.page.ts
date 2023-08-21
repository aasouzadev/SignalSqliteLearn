import { Component, OnInit, WritableSignal } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit {
  usersSignal: WritableSignal<User[]>;
  newUserName = '';

  constructor(private dbService: DatabaseService) {
    this.usersSignal = this.dbService.getUsersSignal();
  }

  ngOnInit() {
  }

  createUser() {
    this.dbService.addUser(this.newUserName);
    this.newUserName = '';
  }

  updateUser(user: User) {
    const updatedUser: User = { ...user, active: !user.active };
    this.dbService.updateUser(updatedUser);
  }

  deleteUser(user: User) {
    this.dbService.deleteUser(user);
  }

  getUsersbyId(id: number) {
    return this.dbService.getUsersbyId(id);
  }
}
