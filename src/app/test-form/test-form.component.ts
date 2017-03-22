import {
  Input,
  Component,
  OnChanges
} from '@angular/core';
import {
  FormBuilder,  
  FormGroup,
  FormArray,
  Validators
} from '@angular/forms';
import {
  Hero,
  Address,
  states
} from './test';

@Component({
  selector: 'mygeco-test-form',
  templateUrl: './test-form.component.html',
})
export class TestFormComponent implements OnChanges {
  states = states;
  heroForm: FormGroup;
  @Input() hero: Hero;

  constructor(
    private fb: FormBuilder
  ) {
    var me = this;
    me.createForm();
    // Still the suscribe scope is a question.
  }
  ngOnChanges() {
    var me = this;
    me.heroForm.reset({
      name:    me.hero.name,     
      address: me.hero.addresses[0] || new Address()
    });
  }
  createForm(): void {
    var me = this;
    me.heroForm = me.fb.group({
      name: ['', Validators.required],
      // email: ['', Validators.compose([ Validators.required, Validators.minLength(5) ])],
      addressArray: me.fb.array([])
      // address: me.fb.group(new Address()),
    });
  }  
  onSubmit(): void {
    var me = this;
    let data = me.heroForm.value;
    me.heroForm.reset(data); // Resets the form as not dirty and with the lastest data.
    // or just reset and the setValue .. we get the same result
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('addressArray', addressFormArray);
  }

  get addressArray(): FormArray {
    return this.heroForm.get('addressArray') as FormArray;
  };  
}

// SEE IF IS A GOOD INVESTMENT TO BY THIS BOOK: https://www.ng-book.com/2/

// Continue with this: https://angular.io/docs/ts/latest/cookbook/dynamic-form.html

// See this one as well: https://scotch.io/tutorials/angular-2-form-validation--