import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  urlProviders = 'http://127.0.0.1:8080/providers';
  provider: any;
  username = sessionStorage.getItem('username');
password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }

  listProviders() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username +':'+ this.password) });
    return this.Http.get(this.urlProviders + '/list' ,{ headers });
  }


  createProvider(provider) {
    
    
    return this.Http.post(this.urlProviders + '/add', provider );
    }

  deleteProvider(myObj: any) {

     return this.Http.delete(this.urlProviders  + '/' + myObj['id'])
   }

  
   updateProvider(myObj,id) {
   
    return this.Http.put(this.urlProviders + '/' + id, myObj);
    }

     getProvider(id : any) {
    
       return this.Http.get(this.urlProviders  + '/' + id)
       }
}
