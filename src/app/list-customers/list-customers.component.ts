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
    this.customers = this.customerService.customers;
  }
  deleteCustomer(c){
    this.customerService.deleteCustomer(c);
  }
  onSelect(c){
    this.router.navigate(['/edit/'+c.id]);
  }
  deleteAllStudents(customer){
    this.customerService.deleteAllCustomers(customer);
    this.customerService.getCustomers();
  }

}


