import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from "@angular/common/http"
import { Observable } from 'rxjs'; // only need to import from rxjs


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private url ="https://5f964d7311ab98001603a7ac.mockapi.io/api/customer";
  private url ="http://localhost:3000/posts";
  private postUrl = "http://localhost:3000/posts";

  constructor(private httpClient: HttpClient) { }
  
  
  getContact():Observable<any> {
    // let httpHeaders = new HttpHeaders({
    //   'content-type':'application/json1',
    //   'Authorization':'Test12345hhhhhhhhhhhhhhhhhhhhhhhh6',
    // });
    // let time = httpHeaders.get('timeOutSeconds');
    // httpHeaders = httpHeaders.set('Authorization','11111111');
    // return this.httpClient.get(this.url,{headers:httpHeaders}) 
    
   
   
    return this.httpClient.get(this.url) 
    // const listData =[
    //   {id:1,name:"Hoàng Trung"},
    //   {id:2,name:"Trương Phi"},
    //   {id:3,name:"Tào Nhân"},
    //   {id:4,name:"Triệu Vân"},
    // ]
    // return listData;
  }

   
  addNewContact(params) {
    return  this.httpClient.post(this.url,params) 
   
  }

  updateByContactId(contactId,params) {
    console.log('contactId',contactId)
    console.log('params',params)

    const url = "http://localhost:3000/posts/"+contactId;
    return  this.httpClient.put(url, params) 
   
  }

  getByIdContactService(contactId){
    const url = "http://localhost:3000/posts/"+contactId;
    return  this.httpClient.get(url) 
  }

  deleteByIdContactServ(contactId){
    const url = "http://localhost:3000/posts/"+contactId;
    return  this.httpClient.delete(url) 
  }

  testHttpParamsServ(){
    let httpParams = new HttpParams({
      fromObject:{
        id:['1889','1391'],

      }
    });
    return this.httpClient.get(this.url, {params:httpParams})
  }
}
