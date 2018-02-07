import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}


// {
//   "cataloug": [
//     {
//       "primaryId": 133,
//       "media_id": "24",
//       "media_type": "catalog",
//       "media_title": "Gggg",
//       "media_uRL": "https://www.google.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 134,
//       "media_id": "22",
//       "media_type": "catalog",
//       "media_title": "Gyyy",
//       "media_uRL": "https://fb.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 135,
//       "media_id": "21",
//       "media_type": "catalog",
//       "media_title": "facebook",
//       "media_uRL": "http://www.google.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 136,
//       "media_id": "20",
//       "media_type": "catalog",
//       "media_title": "Industrial water pump system FP-4000 series",
//       "media_uRL": "https://vivoleadt.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 137,
//       "media_id": "19",
//       "media_type": "catalog",
//       "media_title": "Industrial water pump system TL-2000 series",
//       "media_uRL": "https://vivolead2.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 138,
//       "media_id": "18",
//       "media_type": "catalog",
//       "media_title": "Industrial water pump system AP-1000 series",
//       "media_uRL": "https://vivolead.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 139,
//       "media_id": "17",
//       "media_type": "catalog",
//       "media_title": "Industrial water pump system AF-5000 series",
//       "media_uRL": "HTTPS://tree.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 140,
//       "media_id": "16",
//       "media_type": "catalog",
//       "media_title": "Domestic water pump system - Alpha 2",
//       "media_uRL": "HTTPS://google.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 141,
//       "media_id": "15",
//       "media_type": "catalog",
//       "media_title": "Domestic water pump system - Magna 5",
//       "media_uRL": "HTTPS://abc.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 142,
//       "media_id": "14",
//       "media_type": "catalog",
//       "media_title": "Domestic water pump system - wall mount 4400",
//       "media_uRL": "Http://yahoo.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 143,
//       "media_id": "13",
//       "media_type": "catalog",
//       "media_title": "Domestic water pump system - wall mount 4500",
//       "media_uRL": "http://Google.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 144,
//       "media_id": "9",
//       "media_type": "catalog",
//       "media_title": "Domestic water pump system - wall mount 8800",
//       "media_uRL": "http://172.16.0.9",
//       "company_id": "1",
//       "value": false
//     }
//   ],
//   "websites": [
//     {
//       "primaryId": 151,
//       "media_id": "5",
//       "media_type": "website",
//       "media_title": "Web app",
//       "media_uRL": "HTTPS://google.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 152,
//       "media_id": "4",
//       "media_type": "website",
//       "media_title": "Apptestweb",
//       "media_uRL": "Http://google.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 153,
//       "media_id": "3",
//       "media_type": "website",
//       "media_title": "website2",
//       "media_uRL": "http://172.16.0.8",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 154,
//       "media_id": "2",
//       "media_type": "website",
//       "media_title": "website1",
//       "media_uRL": "http://172.16.0.9",
//       "company_id": "1",
//       "value": false
//     }
//   ],
//   "file": [
//     {
//       "primaryId": 145,
//       "media_id": "7",
//       "media_type": "file",
//       "media_title": "Gfddg",
//       "media_uRL": "http://www.facebook.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 146,
//       "media_id": "6",
//       "media_type": "file",
//       "media_title": "Digital_life",
//       "media_uRL": "http://172.16.0.8",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 147,
//       "media_id": "5",
//       "media_type": "file",
//       "media_title": "file1",
//       "media_uRL": "http://abc.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 148,
//       "media_id": "4",
//       "media_type": "file",
//       "media_title": "file1",
//       "media_uRL": "http://abc.com",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 149,
//       "media_id": "3",
//       "media_type": "file",
//       "media_title": "file1",
//       "media_uRL": "http://172.16.0.9",
//       "company_id": "1",
//       "value": false
//     },
//     {
//       "primaryId": 150,
//       "media_id": "2",
//       "media_type": "file",
//       "media_title": "file1",
//       "media_uRL": "http://172.16.0.9",
//       "company_id": "1",
//       "value": false
//     }
//   ]
// }
