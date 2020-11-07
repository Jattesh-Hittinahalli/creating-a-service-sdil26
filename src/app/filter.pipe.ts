import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTearm: any): any {
    if (value.length === 0) {
      return value;
    }
    return value.filter(function(search) {
      return search.first_name.indexof(searchTearm) > -1;
    });
  }
}
