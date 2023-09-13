import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookServoService {
  public book_list:Book[]
  constructor() { this.book_list=[] }
}
