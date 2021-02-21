import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

  // example of pipe taking unlimited arguments.
  //transform(value: any, ...args: any[]) {
  transform(value: any, limit: number) {
    if (limit !== -1 && value.length > limit) {
      return value.substr(0, limit);
    }
    return value;
  }
}
