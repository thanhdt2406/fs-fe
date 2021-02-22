import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {ProvinceService} from "../../../service/province.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Province} from "../../../model/province";
import {District} from "../../../model/district";
import {DistrictService} from "../../../service/district.service";
import {WardService} from "../../../service/ward.service";
import {Ward} from "../../../model/ward";
import {SignupRequest} from "../../../model/signup-request";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupRequest: SignupRequest = {
    username: "",
    password: "",
    name: "",
    phoneNumber: "",
    address: "",
    ward: -1
  }
  wards: Ward[] = [];
  provinces: Province[] = [];
  districts: District[] = [];
  signupForm: FormGroup = this.formBuilder.group({});
  loading = false;
  submitted = false;
  returnUrl: string = '';
  error = '';

  constructor(private authService: AuthService,
              private router: Router,
              private provinceService: ProvinceService,
              private districtService: DistrictService,
              private wardService: WardService,
              private formBuilder: FormBuilder) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', [Validators.required]],
      province: [-1],
      district: [-1],
      ward: [-1],
      email: ['']
    })

    this.getAllProvince();
  }

  public get f() {
    return this.signupForm.controls;
  }

  public getAllProvince() {
    this.provinceService.getAllProvince().subscribe(data => {
      this.provinces = data;
    })
  }

  public onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }
    this.loading = true;
    this.signupRequest = {
      username: this.f.username.value,
      password: this.f.password.value,
      name: this.f.name.value,
      phoneNumber: this.f.phoneNumber.value,
      address: this.f.address.value,
      ward: this.f.ward.value,
      email: this.f.email.value
    }
    this.authService.signup(this.signupRequest).subscribe(() => {
      alert("User registered successfully!");
      this.router.navigate(["/login"]);
    }, () => {
      this.error = 'Signup failed! Please try again...';
      this.loading = false;
    });
  }

  public updateDistrict() {
    this.districtService.getAllDistrictByProvinceId(this.f.province.value).subscribe(data => {
      this.districts = data;
      this.signupForm.patchValue({
        district: -1,
        ward: -1
      });
    })
  }

  public updateWard() {
    this.wardService.getAllWardByDistrictId(this.f.district.value).subscribe(data => {
      this.wards = data;
      this.signupForm.patchValue({
        ward: -1
      });
    })
  }
}
