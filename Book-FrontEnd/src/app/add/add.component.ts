import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { compileInjector } from '@angular/compiler';
import { BookServoService } from '../book-servo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  data = new FormGroup(
    {
      id: new FormControl(''),
      name: new FormControl(''),
      desc: new FormControl(''),
      type: new FormControl(''),
      page: new FormControl(''),
      price: new FormControl('')
    })
    constructor(private servo:BookServoService,private riot:Router){}
    savdata(){
      let jsondata = JSON.parse(JSON.stringify(this.data.getRawValue()));
      let bookdata:Book={id:0,name:"",desc:"",type:"",page:0,price:0};
      bookdata.id= parseInt(jsondata.id);
      bookdata.name=jsondata.name;
      bookdata.desc=jsondata.desc;
      bookdata.type=jsondata.type;
      bookdata.page=parseInt(jsondata.page);
      bookdata.price=parseInt(jsondata.price);
      this.servo.save(bookdata);
      this.riot.navigate(["/display"]);
    }
}
