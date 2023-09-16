import { Component, OnInit } from '@angular/core';
import { BookServoService } from '../book-servo.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  idnum:number;
  data:any;
  constructor(private servo:BookServoService,private route:ActivatedRoute,private riot:Router){
    this.idnum=0;
    this.data={id:0,name:"",desc:"",type:"",page:0,price:0};
  }
  ngOnInit(): void {this.route.params.subscribe(params => {
    this.idnum = params['id'];
    this.servo.get(this.idnum).subscribe(data=>{
      this.data=data;
    });
    });
    this.data=this.servo.get(this.idnum);
  }
  deletedata(){
    this.servo.deletedata(this.idnum);
    this.riot.navigate(["../display"]);
  }
}
