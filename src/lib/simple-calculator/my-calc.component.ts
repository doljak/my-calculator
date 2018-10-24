import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-calc',
  templateUrl: './my-calc.component.html',
  styles: []
})
export class MyCalcComponent implements OnInit {

  public result:number

  constructor() { }

  ngOnInit() {
  }

  public add(v1:any, v2:any):number{
    return this.result = parseFloat(v1) + parseFloat(v2)
  }

  public subtract(v1:number, v2:number):number{
    return this.result = v1 - v2
  }

  public divide(v1:number, v2:number):number{
    if(v2 === 0) { return undefined }
    return this.result = v1 / v2
  }

  public multiply(v1:number, v2:number):number{
    return this.result = v1 * v2
  }
}
