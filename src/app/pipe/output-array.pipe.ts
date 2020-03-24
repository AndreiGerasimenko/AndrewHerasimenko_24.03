import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "outputArray"
})
export class OutputArrayPipe implements PipeTransform {
  transform(value: any[]): string {
    return value
      .reduce((prevValue, item) => {
        return (prevValue += item + ", ");
      }, "")
      .slice(0, -2);
  }
}
