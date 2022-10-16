import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cleaned',
  templateUrl: './cleaned.component.html',
  styleUrls: ['./cleaned.component.scss']
})
export class CleanedComponent implements OnInit {
  cleanedFormGroup!: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.cleanedFormGroup = this.fb.group({

    })
  }

}
