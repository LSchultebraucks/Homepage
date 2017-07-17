import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators}  from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginGroup = new FormGroup({
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const password: string = this.loginGroup.value.password;
    // Check if equals hash, then redirect to dashboard
    this.authService.signIn(password)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigateByUrl('dashboard');
        }
      );
    this.loginGroup.reset();
  }

}
