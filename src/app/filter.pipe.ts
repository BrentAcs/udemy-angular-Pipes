import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  // will call filter on any form change. CAUTION: can cause performance issues.
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    console.log('filter: "' + filterString + '"');
    if (value.length === 0 || filterString === "") {
      return value;
    }
    const result = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        result.push(item);
      }
    }
    return result;
  }
}
