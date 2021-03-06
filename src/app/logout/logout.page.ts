import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router
    ) { }

  ngOnInit(): void {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}
