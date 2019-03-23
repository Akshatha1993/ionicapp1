import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public base64Image: string;
  constructor(private router: Router) { }

  ngOnInit() {}
  logout(){
    this.router.navigate(['/login']);
  }


}
