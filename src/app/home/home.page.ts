import { Component } from '@angular/core';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display = '0';
  state = '';
  num = 0;
  hasDot = false;

  constructor() {}

  calculate(operator) {
    switch(operator) {
      case '=':
        if(isNaN(Number.parseFloat(this.display))){
          this.display = this.num.toString();
          this.clear('num');
        }

        switch(this.state) {
          case '+':
            this.display = (this.num + Number.parseFloat(this.display)).toString();
            this.clear('num');
            this.clear('state');
          break;
          case '-':
            this.display = (this.num - Number.parseFloat(this.display)).toString();
            this.clear('num');
            this.clear('state');
          break;
          case '*':
            this.display = (this.num * Number.parseFloat(this.display)).toString();
            this.clear('num');
            this.clear('state');
          break;
          case '/':
            this.display = (this.num / Number.parseFloat(this.display)).toString();
            this.clear('num');
            this.clear('state');
            if(Number.parseFloat(this.display) === Infinity) {this.display = 'Syntax Error!';}
          break;
        }
      break;

      case '+':
        if(this.state !== '' && this.display !== '0') {this.calculate('=');}
        if(this.display !== '0') {this.num = Number.parseFloat(this.display);}
        this.state = '+';
        this.clear('display');
      break;

      case '-':
        if(this.state !== '' && this.display !== '0') {this.calculate('=');}
        if(this.display !== '0') {this.num = Number.parseFloat(this.display);}
        this.state = '-';
        this.clear('display');
      break;

      case '*':
        if(this.state !== '' && this.display !== '0') {this.calculate('=');}
        if(this.display !== '0') {this.num = Number.parseFloat(this.display);}
        this.state = '*';
        this.clear('display');
      break;

      case '/':
        if(this.state !== '' && this.display !== '0') {this.calculate('=');}
        if(this.display !== '0') {this.num = Number.parseFloat(this.display);}
        this.state = '/';
        this.clear('display');
      break;
    }
  }

  clear(param) {
    if(param === 'all') {
      this.display = '0';
      this.num = 0;
      this.state = '';
      this.hasDot = false;
    }
    if(param === 'display') {this.display = '0';}
    if(param === 'num') {this.num = 0;}
    if(param === 'state') {this.state = '';}
  }

  write(numero: string) {
    if(numero === '.' && this.hasDot === false) {
      this.hasDot = true;
      this.display += numero;
    }else if(numero !== '.'){
      if(this.display === '0'){
        this.display = '';
      }
      this.display += numero;
    }
  }
}
