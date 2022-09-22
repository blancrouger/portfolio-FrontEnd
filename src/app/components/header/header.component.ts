import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'ProyectoMod3';
  showLogState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleLogging() {
    this.showLogState = !this.showLogState;
    console.log('APRETANDO')
  }

}
