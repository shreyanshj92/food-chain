import { Component, Input, OnInit } from '@angular/core';
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
export class FormGeneratorComponent implements OnInit {
  @Output() formDetailsOutput: EventEmitter<GeneratedFormOutput> = new EventEmitter<GeneratedFormOutput>();
  @Input() formName!: string;
  @Input() formFields!: FormField[];
  mockdata = [
    {
      fieldLabel: 'text test',
      placeHolder: 'placeholder text',
      userAnswer: '',
      fieldType: 'text',
      required: false,
      options: []
    },
    {
      fieldLabel: 'date test',
      placeHolder: 'placeholder text',
      userAnswer: '',
      fieldType: 'date',
      required: false,
      options: []
    },
    {
      fieldLabel: 'textArea test',
      placeHolder: 'placeholder text',
      userAnswer: '',
      fieldType: 'textArea',
      required: true,
      options: []
    },
    {
      fieldLabel: 'dropdown test',
      placeHolder: '',
      userAnswer: '',
      fieldType: 'dropDown',
      required: false,
      options: ['op1','op2','op3']
    }
  ];
  
  dynamicForm: FormGroup = this.fb.group({});
  fieldTypes = FIELD_TYPES;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formFields.forEach(field => {
      this.dynamicForm.addControl(field.fieldLabel,this.fb.control(field.userAnswer, field.required ? Validators.required : null));
    })
  }

  onSave() {
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

}
