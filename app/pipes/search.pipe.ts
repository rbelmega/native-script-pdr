import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searcher' })
export class SearchPipe implements PipeTransform {
  transform(text, search) {
    const regex = /(<([^>]+)>)/gi;
    text = text.replace(regex, '');
    text = text.replace(/&#?[a-z0-9]+;/g, '');

    const pos = text.search(search);
    return (
      '<span>' +
      text.substring(pos - 100 || 0, pos) +
      '<b>' +
      search +
      '</b>' +
      text.substring(pos + search.length, pos + search.length + 40) +
      '</span>'
    );
  }
}
