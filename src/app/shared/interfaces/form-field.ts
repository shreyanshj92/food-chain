export interface FormField {
    fieldLabel: string;
    placeHolder: string;
    userAnswer: string;
    fieldType: string;
    required: boolean;
    options: string[];
    disabled: boolean;
}

export interface GeneratedFormOutput {
    formName: string;
    formValue: any;
}
