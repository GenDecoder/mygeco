import {
  Component
} from '@angular/core';
import {
  FormBuilder,  
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'mygeco-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {
  myForm: FormGroup;

  constructor(
    fb: FormBuilder
  ) {
    this.myForm = fb.group({
      name: ['Mario Medrano', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.minLength(5)
      ])]
    });
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log(form);
      }
    );
  }
  onSubmit(data: any): void {  
    console.log('you submitted value:', data);  
    // In order to set the form as a new one (with dirty in false and others) --> this.myForm.reset(data)
    // with this the form is init but with data.
    this.myForm.reset(data); // The important is that set the form as not dirty
  }
}

// SEE IF IS A GOOD INVESTMENT TO BY THIS BOOK: https://www.ng-book.com/2/

// Continue with this: https://angular.io/docs/ts/latest/cookbook/dynamic-form.html

// See this one as well: https://scotch.io/tutorials/angular-2-form-validation--