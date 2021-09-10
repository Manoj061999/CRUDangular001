
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  show: any;
  details: any;

  //product form group

  productdetails = new FormGroup({
    productname : new FormControl(''),
    productId : new FormControl(''),
    customerId : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(''),
    date : new FormControl(''),
    phone : new FormControl(''),
    address : new FormControl('')
  })

  find: any;

  //find product form group
  finddetails = new FormGroup({
    email:new FormControl(''),
    customerId: new FormControl('')
  })

  update: any;
  result: any;

  //update product 
  updatedetails = new FormGroup({
    customerId : new FormControl(''),
    phone : new FormControl(''),
    address : new FormControl('')
  })

  Delete: any;

  //delete product
  deletedata = new FormGroup({
    customerId : new FormControl('')
  })

  //show product
  showdata = new FormGroup({
    email : new FormControl('')
  })
  showpro: any;
  
  
  

  constructor(private route:ActivatedRoute , private router: Router , private data:DataService) { }

  ngOnInit(): void {
  }

  //product
  productfunction(){
    console.log(this.productdetails.value);
  }
  
  //find product
  findFunction(){
    console.log(this.finddetails.value);
  }

  //update product 
  updateFunction(){
    console.log(this.updatedetails.value);
  }

  //Delete product
  deleteFunction(){
    console.log(this.deletedata.value);
  }

  //show product
  showproductFunction(){
    console.log(this.showdata.value);
  }






  //product
  productFun(){
    this.data.addproduct(this.productdetails).subscribe((data: {}) => {
      console.log(data);
      this.show = data;
      this.details = this.show.Result;
      })
  }

//find product
  findproductFun(){
    this.data.findproduct(this.finddetails).subscribe((data: {})=> {
      console.log(data);
      this.show = data;
      this.find = this.show.Result;
    })
  }

  //update product
  updateproductFun(){
    this.data.updateproduct(this.updatedetails).subscribe((data: {})=>{
      console.log(data);
      this.result = data;
      this.update = this.result.Result;
      // console.log(this.update,"update");

    })
  }

  //delete product
  deleteproductFun(){
    this.data.deleteProduct(this.deletedata).subscribe((data: {})=>{
      console.log(data);
      this.result = data;
      this.Delete = this.result.Result;
      // console.log(this.Delete,"DELETE");
    })
  }


  correct = false;
  wrong = false;


  //show product
  showproductFun(){
    this.data.ShowProduct(this.showdata).subscribe((data: {})=>{
      console.log(data,"hii");
      this.result = data;
      this.showpro = this.result.Result;
      //condition
      if(this.showpro=="NO RECORD"){
        this.correct = false;
        this.wrong = true;
      }else{
        this.correct = true;
        this.wrong = false;
      }
     })
  }

}
