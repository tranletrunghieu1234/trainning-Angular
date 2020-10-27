import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  orderStatus:any="";
  data:Observable<any>;
  constructor() { }

  ngOnInit(): void {
    console.log(1)
    this.data=new Observable(observer=>{
      setTimeout(()=>{                           //<<<---using ()=> syntax
        observer.next('bắt đầu')
      }, 3000);
      setTimeout(()=>{                           //<<<---using ()=> syntax
        observer.next('Đã làm')
      }, 4000);
      setTimeout(()=>{                           //<<<---using ()=> syntax
        observer.next('Kết thúc')
      }, 5000);
      /// sau 2 hàm error và complete thì sẽ observer sẽ ko lắng nghe những giá trị changes tiếp theo nữa
      setTimeout(()=>{                           //<<<---using ()=> syntax
        observer.error('Kếfafasf')
      }, 5000);
      // setTimeout(()=>{                           //<<<---using ()=> syntax
      //   observer.complete()
      // }, 6000);
      setTimeout(()=>{                           //<<<---using ()=> syntax
        observer.next('Sau complete')
      }, 7000);
    })
    this.data.subscribe((item:any)=>{
        this.orderStatus=item;
    });
  }

}
