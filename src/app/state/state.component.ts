import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  states = ['ca', 'az', 'wa', 'ny'];

  constructor() { }

  ngOnInit() {
  }

}
