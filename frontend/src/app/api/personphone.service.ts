import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class PersonphoneService {

  constructor(private http:HttpClient,private shared:SharedService) { }

  getAll(PhoneNumberTypeID:any=0){
  }
  
  get(PhoneNumberTypeID:any){
  }

  add(){
    //return this.http.post(`${this.shared.url}/addPersonPhone`);
  }

  edit(data:any) {

  }
  delete(id:any) {

  }
}
