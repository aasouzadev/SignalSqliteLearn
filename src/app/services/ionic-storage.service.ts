import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IonicStorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
   }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

   // Métodos para interagir com o armazenamento
   async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  async remove(key: string) {
    await this._storage?.remove(key);
  }

  async clear() {
    await this._storage?.clear();
  }

  async keys(): Promise<string[] | undefined > {
    return await this._storage?.keys();
  }

  async length(): Promise<number | undefined > {
    return await this._storage?.length();
  }

}
