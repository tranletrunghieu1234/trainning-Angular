import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //global
})
export class DataService {
  private textForm:string="123";
  getTextForm(): string{
    return this.textForm;
  }
  setNewValue(text:string){
    this.textForm = text;
  }
  constructor() { }
}
