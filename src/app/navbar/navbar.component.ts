import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarWidth:number;
  constructor() { }

  openNav() {
    this.navbarWidth = 250;
}

closeNav() {
  this.navbarWidth= 0;
}

  ngOnInit() {
  }

}
