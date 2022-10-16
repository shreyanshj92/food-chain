import * as _moment from 'moment';

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField, GeneratedFormOutput } from '../../interfaces/form-field';

import { EventEmitter } from '@angular/core';
import { FIELD_TYPES } from '../../constants/constant';
import { Output } from '@angular/core';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit, OnChanges {
  @Output() formDetailsOutput: EventEmitter<GeneratedFormOutput> = new EventEmitter<GeneratedFormOutput>();
  @Input() formName!: string;
  @Input() isButtonVisible: boolean = false;
  @Input() formFields!: FormField[];
 
  dynamicForm: FormGroup = this.fb.group({});
  fieldTypes = FIELD_TYPES;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
  }

  createForm() {
    this.formFields.forEach(field => {
      this.dynamicForm.addControl(field.fieldLabel,this.fb.control(field.userAnswer, field.required ? Validators.required : null));
    })
  }

  onSave() {
    console.log(this.dynamicForm.value)
    if(this.dynamicForm.valid) {
      const output: GeneratedFormOutput = {
        formName: this.formName,
        formValue: this.dynamicForm.value
      }
      this.formDetailsOutput.emit(output);
    } else {
      alert("Form Invalid")
    }
  }

  dateEntered(controlName:string) {
   let date = new Date() //this.dynamicForm.get(controlName)?.value;
   let s = date.toISOString().substring(0,10);
  }

}

