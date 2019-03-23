import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'clipboard'
    },
    {
      title: 'Customers',
      url: '/customer',
      icon: 'person'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'contacts'
    },
    {
      title: 'Student',
      url: '/student',
      icon: 'person'
    },  
    {
      title: 'Logout',
      url: '/login',
      icon: 'exit'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
  }
}
