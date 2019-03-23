import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StudentService} from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  rollNo: number;
  private sub: any;
  student:any;
  constructor(private route: ActivatedRoute, private studentService:StudentService, private router : Router) { }
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.rollNo = +params['rollNo']; // (+) converts string 'id' to a number
       console.log("rollNo is "+this.rollNo);
       this.student = this.studentService.getStudentById(this.rollNo);
    });
    
  }
  updateStudent(student){
   this.studentService.addStudent(student);
   this.student = {rollNo:'', firstName:'', lastName:'', class:'', subject:'', teacher:'', address:''}
   this.router.navigate(['/list-student']);
  }
  
}
