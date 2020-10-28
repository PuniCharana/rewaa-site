import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.getRawValue()).subscribe(() => {
      // TODO replace with actual token
      this.authService.setTokenInLocalStorage("TOKEN");
      this.router.navigateByUrl('/');
    }, (error) => {
      alert('Password/email does not match');
    })
  }

}
