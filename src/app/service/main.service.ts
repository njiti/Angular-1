import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  
  constructor(private http : HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get("http://universities.hipolabs.com/search?country=United+Kingdom");
  }
  getFriend():Observable<any>{
    return this.http.get("http://universities.hipolabs.com/search?country=United+Kingdom");
  }
}
