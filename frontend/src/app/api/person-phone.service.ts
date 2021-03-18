import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class PersonPhoneService {

  constructor(private http: HttpClient, private shared: SharedService) { }
  getAll(data: any) {
    if (data.PhoneNumberTypeID && data.BusinessEntityID) return this.http.get(`${this.shared.baseUrl}/PersonPhone?PhoneNumberTypeID=${data.PhoneNumberTypeID}&BusinessEntityID=${data.BusinessEntityID}`,);
    return this.http.get(`${this.shared.baseUrl}/PersonPhone?PhoneNumberTypeID=${data.PhoneNumberTypeID}`);
  }

  add(data: any) {
    return this.http.post(`${this.shared.baseUrl}/addPersonPhone`, data);
  }

  edit(data: any) {
    return this.http.post(`${this.shared.baseUrl}/editPersonPhone`, data);
  }
  delete(data: any) {
    return this.http.post(`${this.shared.baseUrl}/delPersonPhone`, data);
  }
}
