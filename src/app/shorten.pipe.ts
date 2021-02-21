import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

  // example of pipe taking unlimited arguments.
  //transform(value: any, ...args: any[]) {
  transform(value: any, limit: number) {
    console.log('shortening ' + value.length + ' to :' + limit);
    if (limit !== -1 && value.length > limit) {
      console.log('substr-ing...');
      return value.substr(0, limit);
    }
    console.log("no action");
    return value;
  }

}
