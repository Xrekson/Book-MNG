import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServoService {
  baseUrl:string = "http://localhost:8080/lib-1.0.0/book";
  private book_list:Book[];
  constructor(private http:HttpClient) { this.book_list=[] }
  getList():Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/getdata`);
  }
  save(data:Book):void {
    this.http.post(`${this.baseUrl}/save`,data).subscribe();
  }
  update(data:Book):void {
    this.http.put(`${this.baseUrl}/update`,data).subscribe();
  }
  deletedata(id:number):void {
    this.http.delete(`${this.baseUrl}/delete/${id}`).subscribe();
  }
  get(id:number):Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/get/${id}`);
  }
}
