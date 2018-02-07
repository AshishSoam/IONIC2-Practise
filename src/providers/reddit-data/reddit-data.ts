import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {
 abc:any;
  constructor(public http: Http) {
    console.log('Hello RedditDataProvider Provider');
  }

  getLocalData(){
    return this.http.get('./assets/data/redditData.json').map(res => res.json());
   
  }

}
