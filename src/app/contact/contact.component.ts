import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  listContact:any;
  objectContactById:any;
  constructor(private contactService: ContactService) {
   
   }

  ngOnInit(): void {
    // const listData = this.contactService.getContact();
    this.listCustomer();
  }

  listCustomer =()=>{
    
    this.contactService.getContact().subscribe(item=>{
      this.listContact = item
      console.log(item)
    },error=>{
      console.log("Error API all contact")
    })
  }
  getRandomId = () => {
    return Math.floor((Math.random()*1000)+1000);
  }
  testFunc =()=>{
    this.objectContactById=null;
  }
  
  addNewContact =(formCreate:NgForm)=>{
    const idCreate = this.getRandomId();
    const name = formCreate.form.value.email;
    const password =  formCreate.form.value.password;
    const newData= {id:idCreate,name:name,password:password}
    this.contactService.addNewContact(newData).subscribe(item=>{
      console.log('thành công')
      this.listCustomer();
    },error=>{
      console.log("Create fail")
    })
  
  }

  updateByContactId =(formCreate: NgForm)=>{
    const name = formCreate.form.value.email;
    const password =  formCreate.form.value.password;
    const newData= {id:this.objectContactById.id,name:name,password:password}
    console.log(newData)
    this.contactService.updateByContactId(this.objectContactById.id,newData).subscribe(item=>{
      console.log('Cập nhật thành công')
      this.listCustomer();
    },error=>{
      console.log("Edit fail")
    })
  }
  
  // getById = (id) =>{
  //   this.contactService.getById(id).subscribe(item=>{

  //   })
  //   console.log(id)
  // }

  getById =(id)=>{
    this.contactService.getByIdContactService(id).subscribe((item:any)=>{
      this.objectContactById = item;
      console.log( this.objectContactById )
    },error=>{
      console.log("Error API get Id")
    })
  }

  deleteById = (id) =>{
    this.contactService.deleteByIdContactServ(id).subscribe((item)=>{
      console.log('Xóa thành công',item)
      this.listCustomer();
    },error=>{
      console.log("Error API delete")
    })
  }

  testHttpParams(){
    this.contactService.testHttpParamsServ().subscribe((item:any)=>{
      // console.log(item)
    })
  }

}
