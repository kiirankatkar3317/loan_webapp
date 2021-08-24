import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';


@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  customerId: any ='' ;
  customerDetails: any = '';

  constructor(private activatedroute: ActivatedRoute,
    private customerservice: CustomerService) {
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
this.customerId = data._id;
console.log(this.customerId);

    })
this.customerservice.viewCustomers(this.customerId).subscribe(data=>{
this.customerDetails = data['results'];
console.log(this.customerDetails);

})

  }

}
