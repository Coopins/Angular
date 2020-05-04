import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;
loginInvalid = false;
get passwordValid(): boolean {
  return !this.loginForm.controls.inputPassword.valid && this.loginForm.controls.inputPassword.touched;
}

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      inputEmail: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ])],
      inputPassword: ['',
      Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])]
    });
  }


  ngOnInit(): void {
  }
  submit(){
    this.loginInvalid = this.authService.login(this.loginForm.controls.inputEmail.value,
      this.loginForm.controls.inputPassword.value);
  }

}
