import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }
}
