import {
  Injectable
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Field
} from './field'

@Injectable()
export class FormBaseService {
  constructor() {}
  toFormGroup(fields: Field<any>[] ) {
    let group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) : new FormControl(field.value || '');
      /*new FormGroup({
        name: new FormControl(Validators.required)
      });*/
    });
    return new FormGroup(group);
  }
}
