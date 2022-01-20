import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { Home } from 'src/app/class/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service :MainService) { }

  listMovies :Home[] = [];

  ngOnInit(): void {
    this.service.getMovies().subscribe((data)=>{
      this.listMovies = data ;
    })
    
  }

}
