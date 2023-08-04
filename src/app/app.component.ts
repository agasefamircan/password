import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length:number= 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLetter() {
    this.includeLetters = !this.includeLetters;
  }
  modifySymbols() {
    this.includeLetters = !this.includeSymbols;
  }
  modifyNumbers() {
    this.includeLetters = !this.includeNumbers;
  }
  btnclick() {
    console.log(this.includeLetters);
  }
  modifyLength(value: string) {
    const numb = parseInt(value);
    if (!isNaN(numb)) {
      debugger;
      this.length = numb;
    }
  }
}
