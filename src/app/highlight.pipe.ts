import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer) { }
  // transform(value:string, city:string,cityCode:string): any {
  //   let params="";
  //   if(cityCode=="GV"){
  //     const valueA= "<div style='color:green'>"+ city +"</div>"
  //     params =valueA;
  //   }
  //   else{
  //     const valueB= "<div style='color:red'>"+ city +"</div>"
  //     params =valueB;
  //   }
    
  //   return this.sanitizer.bypassSecurityTrustHtml(params);

  /// tranform phone number
    transform(value:string, phoneNumber:string): any {
      //let params=phoneNumber.substring(0,3)+"."+phoneNumber.substring(3,6)+"."+phoneNumber.substring(6,10);
      let params= phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")
        return params;
    }

}
