import { Pipe, PipeTransform } from "@angular/core";
import { TagService } from "./services/tag.service";
@Pipe({
  name: "highlight",
})
export class HighlightPipe implements PipeTransform {
  constructor() {}

  transform(value: any, args: any): any {
    // console.log(args);

    if (!args) {
      return value;
    }
    let wrapper = "<span>";
    let i = 0;
    for (const text of args) {
      i++;
      // console.log(value, text);

      var reText = new RegExp(text, "gi");

      switch (i) {
        case 1:
          value = value.replace(
            reText,
            `<mark class="marked textcolor1">` + text + "</mark>"
          );
          break;
        case 2:
          value = value.replace(
            reText,
            `<mark class="marked textcolor2">` + text + "</mark>"
          );
          break;
        case 3:
          value = value.replace(
            reText,
            `<mark class="marked textcolor3">` + text + "</mark>"
          );
          break;
        case 4:
          value = value.replace(
            reText,
            `<mark class="marked textcolor4">` + text + "</mark>"
          );
          break;
        case 5:
          value = value.replace(
            reText,
            `<mark class="marked textcolor5">` + text + "</mark>"
          );
          break;
        case 6:
          value = value.replace(
            reText,
            `<mark class="marked textcolor6">` + text + "</mark>"
          );
          break;
        case 7:
          value = value.replace(
            reText,
            `<mark class="marked textcolor7">` + text + "</mark>"
          );
          break;
        case 8:
          value = value.replace(
            reText,
            `<mark class="marked textcolor8">` + text + "</mark>"
          );
          break;
        case 9:
          value = value.replace(
            reText,
            `<mark class="marked textcolor9">` + text + "</mark>"
          );
          break;
        case 10:
          value = value.replace(
            reText,
            `<mark class="marked textcolor10">` + text + "</mark>"
          );
          break;
        case 11:
          value = value.replace(
            reText,
            `<mark class="marked textcolor11">` + text + "</mark>"
          );
          break;
        case 12:
          value = value.replace(
            reText,
            `<mark class="marked textcolor12">` + text + "</mark>"
          );
          break;
        case 13:
          value = value.replace(
            reText,
            `<mark class="marked textcolor13">` + text + "</mark>"
          );
          break;
        case 14:
          value = value.replace(
            reText,
            `<mark class="marked textcolor14">` + text + "</mark>"
          );
          break;
        case 15:
          value = value.replace(
            reText,
            `<mark class="marked textcolor15">` + text + "</mark>"
          );
          break;
        case 16:
          value = value.replace(
            reText,
            `<mark class="marked textcolor16">` + text + "</mark>"
          );
          break;
        default:
          value = value.replace(
            reText,
            `<mark class="marked textcolor1">` + text + "</mark>"
          );
      }
      // value = value.replace(reText, `<mark class="marked color${i}">` + text + "</mark>");

      //for your custom css
      // value = value.replace(reText, "<span class='highlight-search-text'>" + text + "</span>");
      wrapper = '<span class="activetags" style="color:#aaa;">';
    }
    value = wrapper + value + "</span>";
    return value;
  }
}
