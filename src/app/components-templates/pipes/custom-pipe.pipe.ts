import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customPipe",
  pure: false,
})
export class CustomPipePipe implements PipeTransform {
  transform(value: any): string {
    return value.join();
  }
}
