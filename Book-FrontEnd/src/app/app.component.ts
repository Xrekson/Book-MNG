import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book-FrontEnd';
  navigationArray=[
    {
      icon:'home',
      url:'',
      name:'Home',
    },
    {
      icon:'circle-plus',
      url:'add',
      name:'Add Book!',
    }
  ]
  year: any;
  navState:boolean =false;
  constructor(private riot:Router){
    this.year=new Date().getUTCFullYear();
  }
  navigate(url:string){
    this.riot.navigate([url]).catch((error)=>{
      console.log(error);
    })
  }
  change() {
    this.navState = !this.navState;
  }
}
