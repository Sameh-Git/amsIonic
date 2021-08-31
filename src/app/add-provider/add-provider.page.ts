import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.page.html',
  styleUrls: ['./add-provider.page.scss'],
})
export class AddProviderPage implements OnInit {

  provider;
  selectedFile: File;
  
  id:any;
  providers:any;
  constructor(private service: ProviderService , private router: Router) { }

  ngOnInit() {
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  createProvider(myform) {
    const provider = new FormData();
    provider.append('imageFile', this.selectedFile, this.selectedFile.name);
    provider.append('imageName',this.selectedFile.name);
    provider.append('name', myform.value.providerName);
    provider.append('email', myform.value.providerEmail);
    provider.append('address', myform.value.providerAdress);

    this.service.createProvider(provider).subscribe(
      (response) =>{
        console.log(response);
        alert("Ajout avec succes!")
    this.router.navigate(['provider']);
    }
    );
   
    }
      
  }
        
    
   

