import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  public customVariable = 'custom Variable';
  constructor() { }

  public get() {
    return 'Service Works'
  }
}
