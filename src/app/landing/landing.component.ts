import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  showLandingPage = true;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  toSignIn() {
    this.router.navigate(['./signIn']);
    this.showLandingPage = false;
  }

}
