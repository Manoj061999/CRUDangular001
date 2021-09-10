import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  //Order
  order:any;
  createOrder: any;

  OrderData = new FormGroup({
    orderId : new FormControl(''),
    paymentmethod : new FormControl(['']),
    customername : new FormControl(''),
    email : new FormControl(''),
    branch : new FormControl(['']),
    pincode : new FormControl(''),
    phone : new FormControl('')
  })
  
  //Login Order
  Login: any;
  LoginOrder: any;

  OrderLogindata = new FormGroup({
    email : new FormControl(''),
    phone : new FormControl('')
  })
  

  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit(): void {
  }



  OrderDetails(){
    console.log(this.OrderData.value);
  }
  LoginFunction(){
    console.log(this.OrderLogindata.value);
  }



//Order
  CreateOrderFun(){
    this.data.CreateOrder(this.OrderData).subscribe((data: {})=>{
      console.log(data);
      this.order = data;
      this.createOrder = this.order.Result; 
      
    })
  }

//Login Order
  LoginOrderFun(){
    this.data.LoginOrders(this.OrderLogindata).subscribe((data: {})=>{
      console.log(data);
      this.Login = data;
      this.LoginOrder = this.Login.Result;
      console.log(this.LoginOrder);
    })
  }



}
