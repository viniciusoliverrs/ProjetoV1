import { Component, OnInit } from '@angular/core';
import { PhoneNumberTypeService } from 'src/app/api/phone-number-type.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public data: any;
  constructor(private phoneNumberType: PhoneNumberTypeService) { }

  ngOnInit(): void {
  }
  getData(data: any) {
    if (data.Search == "") {
      alert("Search required!");
    } else {
      this.phoneNumberType.searchPhone(data).subscribe(response => {
        this.data = response;
      });
    }
  }
}
