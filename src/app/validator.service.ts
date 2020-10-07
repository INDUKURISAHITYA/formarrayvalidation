import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  validateForm = {
    firstName: [
      '',
      [
        Validators.required,
        Validators.pattern('^[A-z]*$'),
        Validators.minLength(3),
        Validators.maxLength(50),
      ],
    ],
    mobileNo: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ],
    ],
  };
}
