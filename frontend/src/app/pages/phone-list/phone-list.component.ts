import { PersonPhoneService } from './../../api/person-phone.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  public data: any;
  private PhoneNumberTypeID: any;
  constructor(private route: ActivatedRoute, private personPhone: PersonPhoneService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.PhoneNumberTypeID = parseInt(params.PhoneNumberTypeID);
      const data = { "PhoneNumberTypeID": this.PhoneNumberTypeID };
      this.personPhone.getAll(data).subscribe(response => {
        this.data = response;
      });
    });
  }
  addPersonNumber(data: any) {
    if (data.PhoneNumber == '') {
      alert("Person phone requered!");
    }
    else {
      data.PhoneNumberTypeID = this.PhoneNumberTypeID;
      console.log(data);
      this.personPhone.add(data).subscribe(response => {
        { status } response;
        if (status = "OK") {
          const data = { "PhoneNumberTypeID": this.PhoneNumberTypeID };
          this.personPhone.getAll(data).subscribe(response => {
            this.data = response;
          });
        } else {
          alert("There was an error! Try again.");
        }
      });
    }
  }
  delPersonNumber(PhoneNumberTypeID:any,BusinessEntityID:any) {
    const data = {"PhoneNumberTypeID": PhoneNumberTypeID,"BusinessEntityID": BusinessEntityID };
    this.personPhone.delete(data).subscribe(response => {
      { status } response;
      if (status = "OK") {
        const data = { "PhoneNumberTypeID": this.PhoneNumberTypeID };
        this.personPhone.getAll(data).subscribe(response => {
          this.data = response;
        });
      } else {
        alert("There was an error deleting the record! Try again.");
      }
    });
  }
}
