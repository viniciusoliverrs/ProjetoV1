import { Component, OnInit } from '@angular/core';
import { PhoneNumberTypeService } from 'src/app/api/phone-number-type.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  constructor(private phoneNumberType: PhoneNumberTypeService) {
  }

  ngOnInit() {
    this.phoneNumberType.getAll().subscribe(response => {
      this.data = response;
    });
  }
  addPhoneNumberType(data: any) {
    if (data.Name == "") {
      alert("Telephone number type required!")
    } else {
      this.phoneNumberType.add(data).subscribe(response => {
        { status } response;
        if (status = "OK") {
          this.phoneNumberType.getAll().subscribe(response => {
            this.data = response;
          });
        }
      });
    }
  }
  delPhoneNumberType(PhoneNumberTypeID: any) {
    const data = { "PhoneNumberTypeID": PhoneNumberTypeID };
    console.log(data);
    this.phoneNumberType.delete(data).subscribe(response => {
      { status } response;
      if (status = "OK") {
        alert("Successfully deleted!!");
        this.phoneNumberType.getAll().subscribe(response => {
          this.data = response;
        });
      } else {
        alert("There was an error deleting the record! Try again.");
      }
    });
  }
}
