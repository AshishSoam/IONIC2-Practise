import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  items: any;
  items1: any;
 searchTerm: string = '';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.items = [
      {title: 'Aashish'},
      {title: 'Parth'},
      {title: 'Arjun'},
      {title: 'Anupam'},
      {title: 'Reshmi'},
      {title: 'Alka'},  
      {title: 'Adarsh'},
      {title: 'Utkarsh'},
      {title: 'Sunny'},
      {title: 'Kunal'},
      {title: 'Manish'},
      {title: 'Sushant'},
      {title: 'Suraj'},
      {title: 'Aseem'},
   
   ]
        this.items1=this.items
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
 
  setFilteredItems() {
   
        this.items = this.filterItems(this.searchTerm);
        // console.log(JSON.stringify(this.items))
 
    }
 
 
    filterItems(searchTerm){

 
        return this.items1.filter((item) => {
          // console.log(JSON.stringify(item))
          // return 1 
          // console.log(item['title'].indexOf(searchTerm)> -1)
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }
 
 }
 