import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public loginService: AuthenticationService) {}
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' ,auth:this.loginService.isUserLoggedIn()},
    {title: 'List Articles',url: '/article',icon: 'list-circle' ,auth:this.loginService.isUserLoggedIn()},
    {title: 'Add Article',url: '/add-article',icon: 'add-circle',auth:this.loginService.isUserLoggedIn() && this.loginService.srole=='Superadmin'},
   {title: 'List Providers',url: '/provider',icon: 'list' ,auth:this.loginService.isUserLoggedIn()}, 
   {title: 'Add Provider',url: '/add-provider',icon: 'add',auth:this.loginService.isUserLoggedIn() && this.loginService.srole=='Superadmin'},
  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
 
}
