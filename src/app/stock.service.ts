import { Injectable } from '@angular/core';
import { CompaniesInfo } from './companiesInfo';
import { DATA } from './companiesData';
@Injectable()
export class StockService {
    index: number = -1;
  getCompanyInformation(name: string): CompaniesInfo {
      for (var i=0; i<DATA.length; i++){
          if(DATA[i].name == name){
              this.index = i;
          }
     }
     if(this.index != -1)
     return DATA[this.index];
     else
    return {name: 'NOT FOUND',
TotalSharesInTheCompany: 0,
shareValue: 0,
sharesInDemand: 0,
sharesReadyForSupply: 0};
  }

  getCompanyIndex(name: string): number {
      this.index = -1;
      for (var i=0; i<DATA.length; i++){
          if(DATA[i].name == name){
              this.index = i;
          }
     }
     return this.index;
  }

  
}
