import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookServoService } from '../book-servo.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  datalist:any;
  id:number;
  constructor(private servo:BookServoService,private riot:Router){this.datalist=[],this.id=0}
  ngOnInit(): void {
     this.servo.getList().subscribe((data)=>{
      this.datalist=data;
    })
  }
  navigate(url:string){
    this.riot.navigate([url]).catch((error)=>{
      console.log(error);
    })
  }
;

}
