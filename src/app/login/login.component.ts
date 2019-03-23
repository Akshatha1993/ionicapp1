import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName:string ='';
  password:string ='';
  // data: {userName:'', password:''}

  constructor( private router: Router, private alertController : AlertController) { }

  ngOnInit() {}
  clickLogin(){
    if(this.userName == this.password){
      this.router.navigate(['/dashboard']);
    }else{
      this.presentAlert();
      this.userName='';
      this.password='';
    }
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Login Failed',
      message: 'Email or Password is incorrect',
      buttons: ['OK']
    });

    await alert.present();
  }

}
