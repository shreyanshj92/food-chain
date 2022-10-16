import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-processed',
  templateUrl: './processed.component.html',
  styleUrls: ['./processed.component.scss']
})
export class ProcessedComponent implements OnInit {
  processedFormGroup!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.processedFormGroup = this.fb.group({

    })
  }

}
