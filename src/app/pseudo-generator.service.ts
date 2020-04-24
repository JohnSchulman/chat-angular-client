import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PseudoGeneratorService {
  private availableChars: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];

  constructor() { }

  generate(nbOfChars: number) {
    let finalPseudo = '';
    for (let i = 0; i <= nbOfChars; i++ ) {
      finalPseudo += this.availableChars[Math.floor(Math.random() * ((this.availableChars.length - 1) + 1))];
    }
    return finalPseudo;
  }
}
