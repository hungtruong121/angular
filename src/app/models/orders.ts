import { Time } from '@angular/common';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export class Orders {
  public id: number;
  public version: number;
  public orderline: string;
  public totalorder: number;
  public name: string;
  public address: string;
  public creationdate: NgbDateStruct;
  public userowner: string;

  constructor(
  ){}
  public dateToString(): string{
        return this.creationdate.day + '/' + this.creationdate.month + '/' + this.creationdate.year
  }

 public setEmpty(){
    this.id= null;
    this.version= null;
    this.orderline= null;
    this.totalorder= null;
    this.name= null;
    this.address= null;
    this.creationdate= null;
    this.userowner= null;
  }
  public stringToDate(stringDate: string): NgbDateStruct{
    var element = stringDate.split("/", 3);
    return {
      year: Number(element[2]),
      month: Number(element[1]),
      day: Number(element[0])
    }
  }

  public stringToTime(stringTime: string): NgbTimeStruct{
    var element = stringTime.split(":", 2);
    return {
      hour: Number(element[0]),
      minute: Number(element[1]),
      second: 0
    }
  }
}