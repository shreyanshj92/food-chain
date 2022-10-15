import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reference',
  templateUrl: './form-reference.component.html',
  styleUrls: ['./form-reference.component.scss']
})
export class FormReferenceComponent implements OnInit {

  form: FormGroup = this.fb.group({
    text: [""],
    textArea: [""],
    number: [""],
    radio: [""],
    dropDown: [""],
    date: [""]
  }); 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
