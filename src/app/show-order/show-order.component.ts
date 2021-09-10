import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  show: any;
  showdata: any;
  //find
  showOrder = new FormGroup({
    email : new FormControl('')
  })

  updatedata: any;
  update: any;
  //update
  updateOrders = new FormGroup({
    email : new FormControl(''),
    customername : new FormControl(''),
    pincode : new FormControl('')
  })

  //DELETE
  deletedata = new FormGroup({
    email : new FormControl('')
  })
  
details = false;
  
  



  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }



  ngOnInit(): void {
  }
  

  //find
  ShowOrderFunction(){
    console.log(this.showOrder.value);
  }

  //update
  Updatedetails(){
    console.log(this.updateOrders.value);
  }

  //delete
  deleteOrderFunction(){
    console.log(this.deletedata.value);
  }





a = false;
b = false;



 //find
  showOrdersFun(){
    this.data.ShowOrdersData(this.showOrder).subscribe((data: {}) => {
      console.log(data);
      this.show = data;
      this.showdata = this.show.Result;
      
      //condition
      if(this.showdata=="No Records Found"){
        this.a=false;
        this.b=true;
      }else{
        this.a=true;
        this.b=false;
      }
      })
  }

  //update
UpdateOrderFun(){
  this.data.UpdateOrderData(this.updateOrders).subscribe((data: {}) =>{
    console.log(data);
    this.update = data;
    this.updatedata = this.update.Result;
  })
}

//delete
DeleteFun(){
  this.data.DeleteOrderData(this.deletedata).subscribe((data: {})=> {
    console.log(data);
  })
}
}
