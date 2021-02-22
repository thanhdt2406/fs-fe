import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {ProvinceService} from "../../../service/province.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = this.formBuilder.group({});

  constructor(private authService: AuthService,
              private router: Router,
              private provinceService: ProvinceService,
              private formBuilder: FormBuilder) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(6)]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      phoneNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address: ['',[Validators.required]]
    })

  }

}
