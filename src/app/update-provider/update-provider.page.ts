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
  id: any;
  providerToUpdate: any;
  name: any;
  email: any;
  adress: any;
  nomImage;
  selectedFile: File;
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
            this.nomImage = response["logo"];


          }
        );

      }
    );


  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.adress,
      'id': this.id
    }
    const provider = new FormData();
    provider.append('imageFile', this.selectedFile, this.selectedFile.name);
    provider.append('imageName',this.selectedFile.name);
    provider.append('name', this.name);
    provider.append('email', this.email);
    provider.append('address', this.adress);
    provider.append('id', this.id);


    //this.service.updateProvider(this.providerToUpdate).subscribe(
      this.service.updateProvider(provider,this.id).subscribe(
      response => {
        console.log(response);
        alert("Modification successfully!")
        this.router.navigate(['provider']);
      }
    );

  }
}