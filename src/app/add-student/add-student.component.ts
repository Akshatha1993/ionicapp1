import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
student = {rollNo:'', firstName:'', lastName:'',DOB:'', class:'', subject:'', teacher:'', address:''}
teachers:any=[
  {name:'Rakesh'},
  {name:'Akshatha'},
  {name:'Manju'},
  {name:'Yashu'},
  {name:'Harsha'},
];

  constructor(private studentService : StudentService, private router : Router) { }

  ngOnInit() {
  }
  addStudent(student){
    console.log("added-->" , student);
    this.studentService.addStudent(student);
    this.student = {rollNo:'', firstName:'', lastName:'',DOB:'', class:'', subject:'', teacher:'', address:''}
    this.router.navigate(['/list-student']);

  }
}
