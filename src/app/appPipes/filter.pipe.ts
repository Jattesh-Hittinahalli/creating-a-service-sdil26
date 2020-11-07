import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "filter"
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
   
    return value.filter(function(search))
    {
      return search.email.indexof(searchTerm)> -1

    }
  }
}
