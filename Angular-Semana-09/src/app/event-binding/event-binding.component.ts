import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent  {

  public data!: string;

  public name: string = '';
  public toDisplay: boolean = false;

  constructor() { }

  public handleClick(): any {
    this.toDisplay = !this.toDisplay
    this.name = 'Turma Audaces - Angular'
  }

  public displayValue(event: any) {
    this.data = event.target.value;  
  }
}
