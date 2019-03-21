import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { NavList } from './class/nav-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['app.component.css']
})
export class AppComponent {

  title: string;
  navList: NavList[];
  loginIcon: string;
  isLogin: boolean;

  // fake
  login: any;
  // fake

  constructor(
    private router: Router
  ) {
    if (!environment.production) {
      this.testing();
    }
  }

  routeTo(nav: NavList) {
    this.router.navigate([nav.link], nav.data);
  }

  setTitle(title) {
    this.title = title;
  }

  testing() {
    this.navList = environment.navList;
    this.title = environment.toolbarTitle;
    this.isLogin = !this.isLogin;
    this.login = () => {
      this.isLogin = !this.isLogin;
      this.loginIcon = this.isLogin ? 'exit_to_app' : 'person_outline';
    };
    this.login();
  }

}
