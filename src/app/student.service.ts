import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { 
var defaultList = [
  {rollNo:1, firstName:'Akshatha', lastName:'AM',DOB:'04/06/1993', class:'1', subject:'Maths', teacher:'Rakesh', address:'Karnataka'},
      {rollNo:2, firstName:'Rakesh', lastName:'KM',DOB:'01/10/1987', class:'6', subject:'Social', teacher:'Akshatha', address:'Karnataka'}
];
if(localStorage.getItem('students') == null || JSON.parse(localStorage.getItem('students')).length == 0){
  this.students = defaultList;
  this.setLocalStorageStudents(this.students)
}else{
  this.getLocalStorageStudents();
}
}
students=[
  {rollNo:1, firstName:'Akshatha', lastName:'AM',DOB:'04/06/1993', class:'1', subject:'Maths', teacher:'Rakesh', address:'Karnataka'},
      {rollNo:2, firstName:'Rakesh', lastName:'KM',DOB:'01/10/1987', class:'6', subject:'Social', teacher:'Akshatha', address:'Karnataka'}
]
getLocalStorageStudents(){
  this.students = JSON.parse(localStorage.getItem('students'));
}
setLocalStorageStudents(list){
  localStorage.setItem('students', JSON.stringify(list))
} 

  getStudents(){
    if(localStorage.getItem('students') != null){
      this.students = JSON.parse(localStorage.getItem('students'));
    }
  return this.students;
  }
  
  addStudent(student){
    var updated = false;
    for(var i = 0; i < this.students.length; i++){
      if(student.rollNo == this.students[i].rollNo){
        updated = true;
        this.students[i] = student;
        this.setLocalStorageStudents(this.students);
        break;
      }
    }
  if(!updated){
    student.rollNo  =Math.round(Math.random()*1000000);
    this.students.push(student);
    this.setLocalStorageStudents(this.students);
  }
  }
  deleteAllStudents(){
    this.students.length = 0;
    this.setLocalStorageStudents(this.students);
  }
  deleteStudent(s){
    for(var i = 0; i<this.students.length; i++){
      if(s.rollNo == this.students[i].rollNo){
        this.students.splice(i, 1);
      }
    }
    this.setLocalStorageStudents(this.students);
  }
  getStudentById(rollNo:number){
    for(var i = 0; i<this.students.length; i++){
      if(this.students[i].rollNo == rollNo){
        return this.students[i];
      }
    // return null;
      }
    };
}
