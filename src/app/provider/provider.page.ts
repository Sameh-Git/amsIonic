import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {
  providers;
  constructor( private service: ProviderService, private router: Router) { }

  ngOnInit() {
    this.refreshListProviders();
  }
  refreshListProviders() {

    this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
    
  }


  updateProvider(myObj) {
    this.router.navigate(['update-provider' + '/' + myObj['id']]);
  }
  deleteProvider(myObj) {
    
    this.service.deleteProvider(myObj).subscribe(response => {
      console.log(response);
      this.refreshListProviders();
    })
  }
}
