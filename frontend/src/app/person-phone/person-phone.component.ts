import { PersonphoneService } from './../api/personphone.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-phone',
  templateUrl: './person-phone.component.html',
  styleUrls: ['./person-phone.component.css']
})
export class PersonPhoneComponent implements OnInit {
  constructor(private person:PersonphoneService) { this.person.getAll().subscribe(result => console.log(result));}

  ngOnInit(): void {
    
  }
addPerson(value:any){
  console.log(value);
}
}
