import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) null;
    
    let words = value.split(' ');

    for (var i = 0; i < words.length; i++) {
      let word = words[i];

      if (i > 0 && this.isPreposition(word))
        words[i] = word.toLowerCase();
      else 
        words[i] = this.toTitleCase(word);
    }

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
       'the'
    ];

    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word = word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();;
  }
}
