import { Component, OnInit } from '@angular/core';
import { FormTra } from '../formulatrapecio/FormTra';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
 

  constructor() {
  
  }

  ngOnInit(): void {

    }

    //variables
    value1 = 0;
    value2 = 0;
    value3 = 0;
    resultado= 0;

    Area(){
      let res= 0;
       res= FormTra(this.value1, this.value2, this.value3);
      this.resultado = res;
    }
  }