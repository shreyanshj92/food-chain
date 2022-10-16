import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quality-check',
  templateUrl: './quality-check.component.html',
  styleUrls: ['./quality-check.component.scss']
})
export class QualityCheckComponent implements OnInit {
  qualityCheckFormGroup!: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.qualityCheckFormGroup = this.fb.group({

    })
  }

}
