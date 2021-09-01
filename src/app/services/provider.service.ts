import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  //urlProviders = 'http://127.0.0.1:8080/providers';
  provider: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }

  listProviders() {
  
    return this.Http.get(environment.urlProviders + '/list' );
  }


  createProvider(provider) {
    
    
    return this.Http.post(environment.urlProviders + '/add', provider );
    }

  deleteProvider(myObj: any) {

     return this.Http.delete(environment.urlProviders  + '/' + myObj['id'])
   }

  
   updateProvider(myObj,id) {
   
    return this.Http.put(environment.urlProviders + '/' + id, myObj);
    }

     getProvider(id : any) {
    
       return this.Http.get(environment.urlProviders  + '/' + id)
       }
}
