import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private customerUrl = 'http://localhost:3000/api/customers';
//customer:any= {id:'', name:'', email:'', address:'', phone:''}
  constructor(private http: HttpClient) { 
    var defaultList=[
      {id:1, name:'Akshatha', email:'akshata@gmail.com',address:'india', phone:'564378'},
      {id:2, name:'Rakesh', email:'rakesh@gmail.com',address:'india', phone:'3876901'}
    ];
    if(localStorage.getItem('customers') == null || JSON.parse(localStorage.getItem('customers')).length == 0){
      this.customers = defaultList;
      this.setLocalStorageCustomers(this.customers);
    }else{
      this.getLocalStorageCustomers();
    }

}
customers=[
  {id:1, name:'Akshatha', email:'akshata@gmail.com',address:'india', phone:'564378'},
 {id:2, name:'Rakesh', email:'rakesh@gmail.com',address:'india', phone:'3876901'}
]
getLocalStorageCustomers(){
  this.customers = JSON.parse(localStorage.getItem('customers'));
}
setLocalStorageCustomers(list){
  localStorage.setItem('customers', JSON.stringify(list))
} 
// getDBCustomers (){
//   this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
// }
getRemoteCustomers(): Observable<[]>{
  return this.http.get<[]>(this.customerUrl); 		
}
  
  getCustomers(){
    if(localStorage.getItem('customers') != null){
      this.customers = JSON.parse(localStorage.getItem('customers'));
    }
  return this.customers;
  }
  
  addCustomers(customer){
    var updated = false;
    for(var i = 0; i < this.customers.length; i++){
      if(customer.id == this.customers[i].id){
        updated = true;
        this.customers[i] = customer;  
        this.setLocalStorageCustomers(this.customers);
        break;
      }
    }
  if(!updated){
    customer.id  =Math.round(Math.random()*1000000);
    this.customers.push(customer);
    this.setLocalStorageCustomers(this.customers);
  }
  }

  addRemoteCustomer(customer):Observable<any>{
  return this.http.post(this.customerUrl,customer);
  }
  // updateCustomer(customer){
  //   for(var i = 0; i < this.customers.length; i++){
  //     if(this.customers[i].id==customer.id){
  //       this.customers[i] = customer;
  //     }
  //   }
  //   this.setLocalStorageCustomers(this.customers);
  // }
  deleteAllCustomers(customer){
    this.customers =[];
    //localStorage.clear(customer);
    this.setLocalStorageCustomers(this.customers);
    return customer;
}
deleteRemoteCustomer(customer){
  return this.http.delete<[]>(this.customerUrl + "/" + customer.id);
}
deleteCustomer(c){
  for(var i = 0; i< this.customers.length; i++){
    if(c.id == this.customers[i].id){
      this.customers.splice(i, 1);
    }
  }
  this.setLocalStorageCustomers(this.customers);
}

getCustomerById(id:number){
  for(var i = 0; i<this.customers.length; i++){
    if(this.customers[i].id==id){
      return this.customers[i];
    }
  // return null;
    }
  }
getRemoteCustomerById(id):Observable<any>{
  return this.http.get<[]>(this.customerUrl + "/" + id);
}
updateRemoteCustomer(customer):Observable<any>{
  return this.http.put(this.customerUrl + "/" + customer.id, customer);
}
}
