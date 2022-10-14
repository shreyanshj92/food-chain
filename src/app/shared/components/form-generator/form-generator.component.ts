import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FIELD_TYPES } from '../../constants/constant';
import { FormField } from '../../interfaces/form-field';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  @Input() formName!: string;
  @Input() formFields: FormField[] = [
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

}
