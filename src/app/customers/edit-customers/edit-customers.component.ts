import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {
  [x: string]: any;
  form :any = FormGroup;
  id : any ="";
  prop : any ="";
  prop1 : any ="";

  constructor(private fb:FormBuilder,
    private ar:ActivatedRoute,
    private router:Router,
    private cs:CustomerService
    )
     {
this.form = this.fb.group({
  firstName :'',
  lastName  :'',
  emailAddress :'',
  dob:'',
  phoneNumber:'',
  department:''
})

this.id = this.ar.snapshot.params._id;
console.log(this.id);
/* this.ar.params.subscribe(data=>{
this.id= data._id;
console.log(this.id);

}) */

this.cs.viewCustomers(this.id).subscribe((data)=>{
  this.prop= data['results']
  console.log(this.prop);
  
this.form.patchValue(this.prop);

})

     }

  ngOnInit() :void{
  }

  submitForm():void{
    const formdata = this.prop
this.cs.editCustomers(this.id,formdata).subscribe(data=>{
  this.prop1= data.results;
console.log(this.prop1);
this.router.navigate(['customers']);

})
  }

}
