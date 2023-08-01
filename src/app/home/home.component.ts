import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../assets/styles.css']
  
})
export class HomeComponent {
title='good form';
 list;
 constructor(Service:HomeService){
  
   this.list=Service.getList();
 }
}
