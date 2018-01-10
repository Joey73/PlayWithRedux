import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTest1Click(){
    this.router.navigate(['test1']);
  }

  onTest2Click(){
    this.router.navigate(['test2']);
  }
}
