import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators, FormArray} from '@angular/forms'
import { getMaxListeners } from 'process';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutGroup:FormGroup
  test:string="";
  constructor(private formBuilder:FormBuilder) {
    // this.checkoutGroup =formBuilder.group({  //=new FormGroup  building the form using formBuilder
    //   email:new FormControl(),// in the formbuilder - we are creating a group of form element   
    //   password:new FormControl(), //these should be exactly same as your form
    //   terms:new FormControl(), // we can also have it dynamic - we will learn in next coming tutorials
    // })
    ///validation
    this.checkoutGroup =formBuilder.group({  
      email:['',[Validators.minLength(5),
                Validators.required, 
                Validators.email]], 
      password:['',Validators.required],
      terms:['',Validators.requiredTrue],
      listItem:formBuilder.array([
        formBuilder.group({
          itemId:[1],
          itemName:['Trần Lê Trung Hiếu'],
          itemCity:['Thành phố Hồ Chí Minh'],
          itemDone:[false,Validators.requiredTrue]
        })
      ]),
      // listData:formBuilder.array([
      //   new FormControl(['Hieu']),
      //   new FormControl(['Tran']),
      // ])
    })
   

   }

  ngOnInit(): void {
    // this.checkoutGroup.setValue({ //using setValue method- we are setting entire Form value
    //   email:'tranletrunghieu1234@gmail.com',

    // }) 
    this.checkoutGroup.patchValue({ //using pathValue method- we are setting entire Form value
      email:'tranletrunghieu1234@gmail.com',
      password:'test',
      terms:true,
    })
    console.log('test',this.checkoutGroup.get('listItem').value)
    // this.checkoutGroup.get('listItem').patchValue([{ //using pathValue method- we are setting entire Form value
    //   itemId:[1],
    //   itemName:['Hoàng Hà'],
    //   itemCity:['Bạc Liêu'],
    //   itemDone:[false,Validators.requiredTrue]
    // }])
    // this.checkoutGroup.get('email').valueChanges.subscribe(item=>{ // lấy giá trị từng formcontrolname
    //   console.log("item",item)
    //   this.test= item
    // })
    this.checkoutGroup.valueChanges.subscribe(item=>{ // lấy all giá trị formgroup
      this.test= item
    })
    // this.checkoutGroup.get('email').statusChanges.subscribe(item=>{ //single formControll
    //   //console.log("item",item)
    // })
    this.checkoutGroup.statusChanges.subscribe(item=>{ //check form is valid or invalid
      console.log("item",item)
    })
  }
  postData=()=>{
    console.log("checkoutGroup",this.checkoutGroup);
    console.log("checkoutGroupemail",this.checkoutGroup.value.email);
    console.log("checkoutGroupemailpassword",this.checkoutGroup.value.password);
    console.log("checkoutGroupemailterms",this.checkoutGroup.value.terms);

    //this.resetForm()
  }
  resetForm =()=>{
    this.checkoutGroup.reset();
  }
  get getItem(){
    return  this.checkoutGroup.get('listItem') as FormArray;
  }

  addNewItem=()=>{
    const getItemLength = this.getItem.length;
    const newItem = this.formBuilder.group({
      itemId:[getItemLength+1],
      itemName:['das'],
      itemCity:['ccc'],
      itemDone:[false,Validators.requiredTrue]
    })
    this.getItem.push(newItem)
  }
  removeItem=(index)=>{
    this.getItem.removeAt(index);
  }
}
