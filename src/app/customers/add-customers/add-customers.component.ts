import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';    
import { environment } from 'src/environments/environment.dev';  


@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  
  [x: string]: any;

  firstName = ''
  lastName = ''
  emailAddress = ''
  phoneNumber  = ""
  dob = ''
  department = ''

  myimage1:string="assets/customer-icon.jpg"

  constructor( private cs:CustomerService,
    private router:Router) { }

  ngOnInit(): void {
  }
  submitForm() : void{
    const data={
      firstName : this.firstName,
      lastName : this.lastName,
      emailAddress : this.emailAddress,
      phoneNumber : this.phoneNumber,
      dob : this.dob,
      department : this.department
    }
 this.cs.addCustomers(data).subscribe((data)=>{
   console.log(data);
   
 /*   let url = environment.CUSTOMER_BASE_URL+ environment.CUSTOMER.GET_ALL_CUSTOMERS; */
this.router.navigate(['customers','view']);
 })
  }

}
