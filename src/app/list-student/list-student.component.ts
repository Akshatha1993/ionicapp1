import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
})

export class ListStudentComponent implements OnInit {
  searchQuery:any;
  initializeItems(){
    this.student;
  }
teachers:any=[
  {name:'Rakesh'},
  {name:'Akshatha'},
  {name:'Manju'},
  {name:'Yashu'},
  {name:'Harsha'},
];


student:any={rollNo:'', firstName:'', lastName:'',DOB:'', class:'', subject:'', teacher:'', address:''}
  constructor( private studentService : StudentService, private router : Router) { 
    this.initializeItems();
  }
public isSearchBarOpened = false;
  ngOnInit() {
this.student = this.studentService.students;
  }
  deleteAllStudents(){
    this.studentService.deleteAllStudents();
    this.studentService.getStudents();
  }
  deleteStudent(s){
    this.studentService.deleteStudent(s);
    this.studentService.getStudents();
  }
  onEdit(rollNo){
    this.router.navigate(['/edit-student/'+rollNo]);
  }

getItems(ev) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the ev target
  var val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.student = this.student.filter((item) => {
      return (item.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }
  else if(val == ''){
    return this.initializeItems();
  }
}
// onSelect(name){

//   for(var i =0; i<this.teachers.length; i++){
//     console.log(this.teachers);
//       if(name == this.student.teacher){
//         return this.student;
//       }

//   }
// }
onChange($event){
  console.log($event.target.value);
}
}
