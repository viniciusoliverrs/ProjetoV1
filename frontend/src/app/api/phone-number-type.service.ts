import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberTypeService {

  constructor(private http:HttpClient, private shared:SharedService) { }

  getAll(){
    return this.http.get(`${this.shared.baseUrl}/PhoneNumberType`);
  }
  searchPhone(data:any){
    return this.http.get(`${this.shared.baseUrl}/searchPhone?Search=${data.Search}`);
  }
  get(data:any){
    return this.http.get(`${this.shared.baseUrl}/PhoneNumberType?PhoneNumberTypeID=${data.PhoneNumberTypeID}`);
  }

  add(data:any){
    return this.http.post(`${this.shared.baseUrl}/addPhoneNumberType`,data);
  }

  edit(data:any) {
    return this.http.post(`${this.shared.baseUrl}/editPhoneNumberType`,data);
  }
  delete(data:any) {
    return this.http.post(`${this.shared.baseUrl}/delPhoneNumberType`,data);
  }
}
