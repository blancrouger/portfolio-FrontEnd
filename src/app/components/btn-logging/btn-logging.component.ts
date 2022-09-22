import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-logging',
  templateUrl: './btn-logging.component.html',
  styleUrls: ['./btn-logging.component.css']
})
export class BtnLoggingComponent implements OnInit {
  @Input() text: string = "";
  @Input() clase: string = "";
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
