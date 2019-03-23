import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  private selectedItem: any;
  private icons = [
    'person',
    'person-add',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router : Router) {
      this.items.push({
        title: 'List of Student ',
        note: '/list-student',
        icon: this.icons[0]
      });
      this.items.push({
        title: 'Add Students',
        note: '/add-student',
        icon: this.icons[1]
      });
  }

  ngOnInit() {}
  onUrl(item){
    this.router.navigate([item.note]);
  }
}
