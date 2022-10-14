export interface FormField {
    fieldLabel: string;
    placeHolder: string;
    userAnswer: string;
    fieldType: string;
    required: boolean;
    options: string[];
}

export interface GeneratedFormOutput {
    formName: string;
    formValue: any;
}
