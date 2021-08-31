import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  urlProviders = 'http://127.0.0.1:8080/providers';
  provider: any;
  constructor(private Http: HttpClient) { }

  listProviders() {
    return this.Http.get(this.urlProviders + '/list');
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
