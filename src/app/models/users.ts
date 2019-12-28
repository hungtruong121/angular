import { Time } from '@angular/common';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export class Users {
  public id: number;
  public username: string;

  constructor(
  ){}

  public setEmpty(){
    this.id = null;
    this.username = null;
  }

}