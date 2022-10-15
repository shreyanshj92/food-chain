import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  @Input() receivedFormGroup!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
