import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {
  Users: any;
  finduser: any;
  product: any;
  findproduct: any;
  Orders: any;
  findOrder: any;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.fetchuser()
    this.fetchproduct()
    this.fetchOrders()
  }

  //show all the record from Mongodb .........

  a = false;
  b = false;

  fetchuser(){
    return this.data.getUsers().subscribe((items:any)=> {
      console.log(items)
      this.Users = items;
      this.finduser =this.Users.Result;

      //condition
      if(this.finduser=="No Records FOUND"){
        this.a=false;
        this.b=true;
      }else{
        this.a=true;
        this.b=false;
      }
  })
  }

  yes = false;
  no  = false;

  fetchproduct(){
    return this.data.getProduct().subscribe((items:any)=>{
      console.log(items);
      this.product = items;
      this.findproduct = this.product.Result;

      //condition
      if(this.findproduct=="No Records FOUND"){
        this.yes=false;
        this.no=true;
      }else{
        this.yes=true;
        this.no=false;
      }
    })
  }

  correct = false;
  wrong = false;

  fetchOrders(){
    return this.data.getOrders().subscribe((items:any)=>{
      console.log(items);
      this.Orders = items;
      this.findOrder = this.Orders.Result;

      //condition
      if(this.findOrder=="no records FOUND"){
        this.correct = false;
        this.wrong = true;
      }else{
        this.correct = true;
        this.wrong = false;
      }
    })
  }
}
