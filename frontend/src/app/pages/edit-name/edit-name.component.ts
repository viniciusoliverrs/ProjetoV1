import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneNumberTypeService } from 'src/app/api/phone-number-type.service';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
  public data:any;
  constructor(private route: ActivatedRoute, private phoneNumberType: PhoneNumberTypeService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const data = { "PhoneNumberTypeID": parseInt(params.PhoneNumberTypeID) };
      this.phoneNumberType.get(data).subscribe(response=>{
        this.data = response;
      });
    });
  }
  editName(data: any) {
    if (data.PhoneNumber == "") {
      alert("Phone number type requered!")
    } else {
      this.phoneNumberType.edit(data).subscribe(response => {
        { status } response;
        if (status = "OK") {
          this.router.navigateByUrl("/Home");
        } else {
          alert("There was an error deleting the record! Try again.");
        }
      });
    }
  }

}
