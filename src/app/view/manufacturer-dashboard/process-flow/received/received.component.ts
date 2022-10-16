import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  receivedFormGroup!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.receivedFormGroup = this.fb.group({

    })
  }

}
