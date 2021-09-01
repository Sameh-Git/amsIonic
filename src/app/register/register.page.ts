import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(myform){
    this.service.createUser(myform).subscribe(
      response => {
        console.log(response);
        alert("Inscription avec succes!")
        this.router.navigate(['login']);
      }
    );
  }
}
