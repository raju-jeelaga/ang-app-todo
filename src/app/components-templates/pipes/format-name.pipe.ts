import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatName",
})
export class FormatNamePipe implements PipeTransform {
  transform(value: string, first_word: string, second_word: string): string {
    let name = value.split(" ");
    let position = {
      first: 0,
      middle: 1,
      last: 2,
    };
    return `${name[position[first_word]]} ${name[position[second_word]]}`;
  }
}
