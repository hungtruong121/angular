import { Time } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export class Books {
  public id: number;
  public version: number;
  public isbn: number;
  public name: string;
  public description: number;
  public picture: string;
  public price: number;
  public vat: number;
  public author: string;

  constructor(
  ){}
  
  public setEmpty(){
    this.id= null;
    this.version= null;
    this.isbn= null;
    this.name= null;
    this.description= null;
    this.picture= null;
    this.price=null;
    this.vat=null;
    this.author=null;
  }
}