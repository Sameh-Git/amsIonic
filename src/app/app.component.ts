import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    {title: 'List Providers',url: '/provider',icon: 'list'},
    {title: 'Add Provider',url: '/add-provider',icon: 'add-circle'}
   
  ];
  
  constructor() {}
}
