import { Component, OnInit } from '@angular/core';
import {  CustomerService} from '../customer.service';
import {Router} from '@angular/router';
//import { AddCuctomersComponent } from '../add-customers/add-customers.component'

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
})
export class ListCustomersComponent implements OnInit {
  customers:any = [{id:0, name:'', email:'', address:'', phone:''}];
 constructor( private customerService : CustomerService, private router : Router ){}

  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
    this.customers = this.customerService.customers;
  }
  deleteCustomer(c){
    this.customerService.deleteRemoteCustomer(c).subscribe(()=>{
      this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
    });
    this.customerService.getCustomers();
  }
  onSelect(c){
    this.router.navigate(['/edit/'+c.id]);
  }
  deleteAllCustomes(customer){
    this.customerService.getCustomers();
  }

}


