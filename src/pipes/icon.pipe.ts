import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
  standalone: true
})
export class IconPipe implements PipeTransform {

  transform(text: string) {
    switch (text) {
      case ("delete"):
        return "🗑️delete";
      case ("edit"):
        return "✏️update";
      case ("add"):
        return "add➕"
      default: return text;
    }

  }
}
