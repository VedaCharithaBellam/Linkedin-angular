import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  name=(JSON.parse(localStorage.getItem('userData')) as User).username;

}
