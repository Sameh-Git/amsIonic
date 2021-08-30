import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.page.html',
  styleUrls: ['./update-provider.page.scss'],
})
export class UpdateProviderPage implements OnInit {
providers;
  id: any;
  providerToUpdate: any;
  name: any;
  email: any;
  adress: any;
  
  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        this.providerToUpdate = this.service.getProvider(this.id).subscribe(
          response => {
            console.log(response);
            this.name = response["name"];
            this.email = response["email"];
            this.adress = response["address"];
           


          }
        );

      }
    );


  }

  
  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.adress,
      'id': this.id
    }
    this.service.updateProvider(this.providerToUpdate).subscribe(
      response => {
        console.log(response);
        alert("Modification successfully!")
        
        this.router.navigate(['provider']);
      }
    );

  }
    
  refreshListProviders() {

    this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
    
  }
      }
  

