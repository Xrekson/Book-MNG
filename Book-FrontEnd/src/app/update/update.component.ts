import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookServoService } from '../book-servo.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  idnum:number;
  data = new FormGroup(
    {
      id: new FormControl(''),
      name: new FormControl(''),
      desc: new FormControl(''),
      type: new FormControl(''),
      page: new FormControl(''),
      price: new FormControl('')
    })
    constructor(private servo:BookServoService,private route:ActivatedRoute,){
      this.idnum=0;
    }
  ngOnInit(): void {this.route.params.subscribe(params => {
    this.idnum = params['id'];
    });
  }
    savdata(){
      let jsondata = JSON.parse(JSON.stringify(this.data.getRawValue()));
      console.log(jsondata);
      let bookdata:Book={id:0,name:"",desc:"",type:"",page:0,price:0};
      bookdata.id= this.idnum;
      bookdata.name=jsondata.name;
      bookdata.desc=jsondata.desc;
      bookdata.type=jsondata.type;
      bookdata.page=parseInt(jsondata.page);
      bookdata.price=parseInt(jsondata.price);
      this.servo.update(bookdata);
    }
}
