import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor() {   }
  setItem(name:string, value:any) {
    localStorage.setItem(name, JSON.stringify(value))
  }

  getItem(item:string) {
    if (item.length) {
      if (localStorage.getItem(item)){
        return JSON.parse(localStorage.getItem(item)!)
      }
      return ''
    }
    return
  }
}
