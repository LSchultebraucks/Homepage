import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import {FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit {

  blogGroup: FormGroup;
  title: string = '';
  template: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.blogGroup = new FormGroup({
      title: new FormControl(),
      url : new FormControl(),
      date: new FormControl(),
      tags: new FormControl(),
      intro: new FormControl(),
      template: new FormControl()
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }
}
