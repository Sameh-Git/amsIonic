import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.page.html',
  styleUrls: ['./add-provider.page.scss'],
})
export class AddProviderPage implements OnInit {

  provider = {
    name: '',
    adress: '',
    email:''
  };
  constructor(private service: ProviderService , private router: Router) { }

  ngOnInit() {
  }
  createProvider(myform) {
    
    this.service.createProvider(myform).subscribe(
      (response) => {
        console.log(response);
        alert("Ajout avec succes!")
        this.router.navigate(['provider']);
      }
    );
      
  }
        
    
   
}
