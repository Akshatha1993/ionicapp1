import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CustomerService} from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit.customer',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private router : Router) { }
  id: number;
  private sub: any;
  customer:any;
  ngOnInit() {
    this.customer = {id:'', name:'', email:'', address:'', phone:''}
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       //this.customer = this.customerService.getCustomerById(this.id);
       this.customerService.getRemoteCustomerById(this.id).subscribe((customer)=>{this.customer = customer;});
    });
  }
  updateCustomer(){
    // this.customerService.addCustomers(customer);
    // this.customerService.getCustomers();
    // this.router.navigate(['/list-customers']);
    this.customerService.updateRemoteCustomer(this.customer).subscribe(()=>{
      this.router.navigate(['/list-customers']);
    });
  }
}