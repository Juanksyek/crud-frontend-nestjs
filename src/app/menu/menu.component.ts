import { Router } from '@angular/router';
import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean;
  isAdmin: boolean;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {
    this.isLogged = false;
    this.isAdmin = false;
  }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

}
