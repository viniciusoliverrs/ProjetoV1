import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PersonPhoneService } from 'src/app/api/person-phone.service';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.css']
})
export class EditPhoneComponent implements OnInit {
  public data: any;
  private datae: any;
  constructor(private route: ActivatedRoute, private personPhone: PersonPhoneService,private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datae = { "PhoneNumberTypeID": parseInt(params.PhoneNumberTypeID), "BusinessEntityID": parseInt(params.BusinessEntityID) };
      const data = this.datae;
      this.personPhone.getAll(data).subscribe(response => {
        this.data = response;
      });
    });
  }

  editPhone(data: any) {
    this.datae.PhoneNumber = data.PhoneNumber;
    if (this.datae.PhoneNumber == "") {
      alert("Requered Phone Number!")
    } else {
      this.personPhone.edit(this.datae).subscribe(response => {
        { status } response;
        if (status = "OK") {
          this.router.navigateByUrl("/home");
        } else {
          alert("There was an error deleting the record! Try again.");
        }
      });
    }
  }

}
