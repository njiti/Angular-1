import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Home } from 'src/app/class/home';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  friend: Home []=[];

  constructor(private service:MainService) {
   
   }

  ngOnInit(): void {
   
  }

 getList():void{
    this.service.getFriend().subscribe((data)=>{
      return this.friend =data;
    }) ;
 }
}
