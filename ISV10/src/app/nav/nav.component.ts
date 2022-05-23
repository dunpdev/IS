import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'navigacija',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  isLoggedIn() {
    return this.loginService.isLogged();
  }
}
