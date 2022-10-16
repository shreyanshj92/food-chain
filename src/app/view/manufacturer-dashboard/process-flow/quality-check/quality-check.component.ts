import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-check',
  templateUrl: './quality-check.component.html',
  styleUrls: ['./quality-check.component.scss']
})
export class QualityCheckComponent implements OnInit {
  @Input() qualityCheckFormGroup!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
