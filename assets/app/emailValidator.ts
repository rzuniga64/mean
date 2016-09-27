import {FormControl} from "@angular/forms";

interface validationResult {
  [key: string]: boolean;
}

export class EmailValidator {
  static invalidEmail(control: FormControl) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return {'invalidEmail': true}
    }
  }
}

