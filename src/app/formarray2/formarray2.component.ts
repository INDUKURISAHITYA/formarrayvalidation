import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formarray2',
  templateUrl: './formarray2.component.html',
  styleUrls: ['./formarray2.component.css']
})
export class Formarray2Component implements OnInit {

  myForm: FormGroup;
  name;
  mobile;

  constructor(
    private fb: FormBuilder,
    private validation: ValidatorService
  ) {}

  ngOnInit() {
    this.createItem();
  }

  createItem() {
    this.myForm = this.fb.group({
      name: this.validation.validateForm.firstName,
      mobile: this.validation.validateForm.mobileNo,
    });
  }

}
  

