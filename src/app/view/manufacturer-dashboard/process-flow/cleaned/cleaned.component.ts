import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleaned',
  templateUrl: './cleaned.component.html',
  styleUrls: ['./cleaned.component.scss']
})
export class CleanedComponent implements OnInit {
  @Input() cleanedFormGroup!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
