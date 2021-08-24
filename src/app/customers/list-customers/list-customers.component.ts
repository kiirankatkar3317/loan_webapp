import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
 customerResult : any;
 customerList : any;

/* the commented lines are using interfaces of customer and current codes uses classes of models */
/*  customerResult : Customer [] =[] */


  constructor(private cs:CustomerService) { }

  ngOnInit(): void {
this.getCustomerList();

  }

getCustomerList(){

  this.cs.getCustomers().subscribe((data : any[])=>{
this.customerResult = data;
this.customerList = this.customerResult.results;
console.log(this.customerList);
  })
}
/* getCustomerList(){
   this.cs.getCustomers().subscribe((customerResult)=>{
     this.customerResult = customerResult;
 console.log(this.customerList);
   })
 }  */
 

}
