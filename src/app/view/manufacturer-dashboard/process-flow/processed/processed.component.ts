import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-processed',
  templateUrl: './processed.component.html',
  styleUrls: ['./processed.component.scss']
})
export class ProcessedComponent implements OnInit {
  @Input() processedFormGroup!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
