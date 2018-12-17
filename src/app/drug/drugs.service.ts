import { Injectable } from '@angular/core';
import { Drugs } from './drugsClass';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {

  getdrugs(): Drugs[] {
    const drug: Drugs[] = [
      {'ndc': '12345678901', 'drugName': 'Megnisioum',
       'rxNumber': 111111, 'cost': 10.99 },
      {'ndc': '12345678902', 'drugName': 'Tablet',
       'rxNumber': 222222, 'cost': 9.99 },
      {'ndc': '12345678903', 'drugName': 'Drug 50ml',
       'rxNumber': 333333, 'cost': 8.99 },
      {'ndc': '12345678904', 'drugName': 'some Drug',
       'rxNumber': 444444, 'cost': 7.99 },
      {'ndc': '12345678905', 'drugName': 'Other',
       'rxNumber': 555555, 'cost': 6.99 },
    ];
    return drug;
  }
}
