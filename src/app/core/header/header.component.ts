import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user;
  public tokenDisplay = '';
  constructor(private auth: AuthService) {
    this.user = this.auth.showUser();
  }

  ngOnInit() {
  }

  login() {
    // firebase login and access key stored to local storage
    this.auth.login();
  }
  logout() {
    // firebase logout and access key removed from local storage
    this.auth.logout();
  }

  credential() {
    this.tokenDisplay += this.auth.showToken() + '\n';
  }

  clear() {
    this.tokenDisplay = '';
  }

}
