import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public baseUrl:String = "localhost:3000";
  constructor() { }
}
