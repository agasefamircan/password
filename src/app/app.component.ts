import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLetter() {
    this.includeLetters = !this.includeLetters;
  }
  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  btnclick() {
    const numbers = '0123456789';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let validChars = '';

    if (!(this.includeLetters || this.includeNumbers || this.includeSymbols)) {
      alert("Please check at least one box");
    }

    if (this.includeLetters) {
      validChars += letters;
    }
     if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
  modifyLength(value: string) {
    const numb = parseInt(value);
    if (!isNaN(numb)) {
      this.length = numb;
    }
  }
}
