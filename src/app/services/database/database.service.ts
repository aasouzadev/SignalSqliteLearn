import { Injectable, signal, WritableSignal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { User } from 'src/app/interfaces/user';

const DB_USERS = 'users';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private users: WritableSignal<User[]> = signal<User[]>([]);

  constructor() { }

  async initializePlugin() {
    this.db = await this.sqlite.createConnection(
      DB_USERS,
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

    const schema = `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      active INTEGER DEFAULT 0
    )`;

    await this.db.execute(schema);
    await this.loadUsers();

    return true;
  }

  getUsersSignal(): WritableSignal<User[]> {
    return this.users;
  }

  async loadUsers() {
    const users = await this.db.query('SELECT * FROM users');
    this.users.set(users.values || []);
  }

  // CRUD
  async addUser(name: string) {
    const query = `INSERT INTO users (name) VALUES (?)`;
    await this.db.query(query, [name]);
    await this.loadUsers();
  }

  async updateUser(user: User) {
    const query = `UPDATE users SET name = (?), active = (?) WHERE id = (?)`;
    await this.db.query(query, [user.name, user.active, user.id]);
    await this.loadUsers();
  }

  async deleteUser(user: User) {
    const query = `DELETE FROM users WHERE id = (?)`;
    await this.db.query(query, [user.id]);
    await this.loadUsers();
  }

  async getUsersbyId(id: number) {
    const query = `SELECT * FROM users WHERE id = (?)`;
    return await this.db.query(query, [id]);
  }
}
