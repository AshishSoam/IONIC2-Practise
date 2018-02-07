import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Place} from '../../model/place.model';
import {Place1} from '../../model/place1.model';

@Injectable()
export class ServicesProvider {
userobj:object={}
userobj100:object={}
array:any=[]
teacherobj:object={}
fbdata:object={}
googleobj:object={}
//private places: Place [] = [];
//private places1:Place [] = [];

  constructor(public http: Http) {
    console.log('Hello ServicesProvider Provider');
   
  }



}
