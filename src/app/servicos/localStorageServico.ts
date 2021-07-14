import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageServico {

    private storage: Storage;
  
    constructor() {
      this.storage = window.localStorage;
    }
  
    set(key: string, value: any): boolean {
      if (this.storage) {
        this.storage.setItem(key, JSON.stringify(value));
        return true;
      }
      return false;
    }
  
    get(key: string): any {
        return this.storage.getItem(key);
    }
  
    remove(key: string): boolean {
      if (this.storage) {
        this.storage.removeItem(key);
        return true;
      }
      return false;
    }
  
    clear(): boolean {
      if (this.storage) {
        this.storage.clear();
        return true;
      }
      return false;
    }
  
  }