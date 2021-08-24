import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient:HttpClient) {
   }

   
   getCustomers():Observable<any[]>{
    let url= environment.CUSTOMER_BASE_URL+ environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpclient.get<any[]>(url);
   }



/*    getAllData_Mth(message: string, serviceType: ServiceOperation): Observable<any[]> {
    var Url = `${this.BaseUrl}${serviceType}`;
    
    // const myData = JSON.parse(localStorage.getItem('token'));
    // this.httpOptions.headers = this.httpOptions.headers.append('authorization', `bearer ${myData}`);
    return this.http.get<any[]>(Url, this.httpOptions)
    .pipe(
    tap(_ => this.log(`fetched ${message} `)),
    catchError(this.handleError<any>(`get data response ${message}`))
    );
    } */


viewCustomers(userId:any):Observable<any>{
  let params1= new HttpParams().set('userId', userId);
let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_CUSTOMER_DETAIL;
return this.httpclient.get<any>(url,{params:params1});
  }

  addCustomers(data : any):Observable<any >{
let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER;
return this.httpclient.post<any>(url,data);
  }

  editCustomers(userId:any, data:any):Observable<any>{
    let params2 = new HttpParams().set('userId',userId);
     let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.UPDATE_CUSTOMER;
     return this.httpclient.put<any>(url,{params:params2},data);
  }

  deleteCustomers(){
     
  }

  searchCustomers(){

  }

}
