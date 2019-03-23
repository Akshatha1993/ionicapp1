import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  private selectedItem: any;
  private icons = [
    'person',
    'person-add',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router : Router) {
      this.items.push({
        title: 'List ',
        note: '/list-customers',
        icon: this.icons[0]
      });
      this.items.push({
        title: 'Add',
        note: '/add-customers',
        icon: this.icons[1]
      });
  }

  ngOnInit() {}
  onUrl(item){
    this.router.navigate([item.note]);
  }
}
