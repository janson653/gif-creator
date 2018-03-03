import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creator-home',
  templateUrl: './creator-home.component.html',
  styleUrls: ['./creator-home.component.css']
})
export class CreatorHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreate() {
    console.log('onCreate start');
    this.router.navigateByUrl('/creator-detail');
  }

}
