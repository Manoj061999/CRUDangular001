import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';


//user : registration.. (user.component.ts)
export class user {
  UserName: String | undefined;
	UserId: String | undefined;
	email: String | undefined;
	password: String | undefined;
	phone: Number | undefined;
  address: String | undefined;
  gender : string | undefined;
}

//userlogin : login.....(userlogin.component.ts)
export class userlogin {
  email: string | undefined;
  password : string | undefined;
}

//readuser
export class showuser {
  email: string | undefined;
}

//product
export class product {
  productname:String | undefined;
  productId:String | undefined;
  customerId:String | undefined;
  email:String | undefined;
  age:Number | undefined;
  date:string | undefined;
  phone:Number | undefined;
  address:String | undefined;
  }

  //find product details
  export class findproduct {
    email:String | undefined;
    customerId:String | undefined;
  }

  //update product details
  export class UpdatePro {
    _id : string | undefined;
    CustomerId : string | undefined;
    phone : number | undefined;
    address : string | undefined;
  }

  //delete product
  export class Deletepro {
    CustomerId : string | undefined;
  }

  //show product
  export class showProduct {
    email : string | undefined;
  }

  //Order
  export class Order {
    orderId:String | undefined;
	  paymentmethod:String | undefined;
    customername:String | undefined;
	  email:String | undefined;
    branch:String | undefined;
    pincode:Number | undefined;
    phone:Number | undefined;
  }

  //loginOrder
  export class LoginOrder {
    email : string | undefined;
    phone  : Number | undefined;
  } 

  export class showOrder {
    email : string | undefined;
  }

  export class updateOrder {
    email : string | undefined;
    customername : string | undefined;
    pincode : Number | undefined;
  }

  export class DeleteOrder {
    email : string | undefined;
  }


@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:5000';
  AddResult: any;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }




  
  //dsiplay the records from the database (MongoDb)..........

  //show-all-user.component.ts   //user
  getUsers(): Observable<user> {
    return this.httpClient.get<user>(this.endPoint + '/api/readalluser');
  }

  //show-all-user.component.ts   //product
  getProduct(): Observable<product> {
    return this.httpClient.get<product>(this.endPoint + '/api/ShowOne');
  }

  //show-all-users.component.ts  //Orders
  getOrders(): Observable<Order> {
    return this.httpClient.get<Order>(this.endPoint +'/api/FindallOrders');
  }




















  //getting values from the angular ..........
  //userRegistration (user.component.ts)...........

  addUser(data: FormGroup): Observable<user> {
    
    let senddata={
      "UserName":data.value.username,
      "UserId":data.value.userid,
      "email":data.value.email,
      "password":data.value.password,
      "phone":data.value.phone,
      "address":data.value.address,
      "gender":data.value.gender
    }
    console.log(senddata,"userdetails")
    return this.httpClient.post<user>(this.endPoint + '/api/register', JSON.stringify(senddata), this.httpHeader)
  }

  
  //userlogin (userlogin.component.ts).........
  findUser(data: FormGroup): Observable<userlogin> {

    let finddata ={
      "email":data.value.email,
      "password":data.value.password
    }
    console.log(finddata,"userlogin")
    return this.httpClient.post<userlogin>(this.endPoint +'/api/login', JSON.stringify(finddata), this.httpHeader)
  }


  //finding document by using emailId ...... readuser.component.ts
  userdetails(data: FormGroup): Observable<showuser> {

    let showdata = {
      "email":data.value.email
    }
    console.log(showdata,"showuserdetails")
    return this.httpClient.post<showuser>(this.endPoint +'/api/showuser', JSON.stringify(showdata), this.httpHeader)
  }


  //product
addproduct(data: FormGroup): Observable<product> {

  let savedata = {
    "productname":data.value.productname,
	  "productId":data.value.productId,
    "customerId":data.value.customerId,
	  "email":data.value.email,
    "age":data.value.age,
	  "date":data.value.date,
	  "phone":data.value.phone,
    "address":data.value.address
  }

  console.log(savedata,"product")
  return this.httpClient.post<product>(this.endPoint +'/api/product', JSON.stringify(savedata), this.httpHeader)
}


//find product (product.component.ts)
findproduct(data: FormGroup): Observable<findproduct> {

  let finddata = {
    "email":data.value.email,
    "customerId":data.value.customerId
  }
  console.log(finddata,"findproduct");
  return this.httpClient.post<findproduct>(this.endPoint +'/api/findproduct', JSON.stringify(finddata), this.httpHeader)
}


//update product (product.component.ts)
updateproduct(data: FormGroup): Observable<UpdatePro> {

  let updatedata = {
    "customerId":data.value.customerId,
    "phone":data.value.phone,
    "address":data.value.address,
  }
  console.log(updatedata,"update product");
  return this.httpClient.post<UpdatePro>(this.endPoint +'/api/updateproduct', JSON.stringify(updatedata), this.httpHeader)
}


//delete product
deleteProduct(data: FormGroup): Observable<Deletepro> {

  let deletedata = {
    "customerId":data.value.customerId
  }
  console.log(deletedata,"delete product");
  return this.httpClient.post<Deletepro>(this.endPoint +'/api/deleteproduct', JSON.stringify(deletedata), this.httpHeader)
}


//show product
ShowProduct(data: FormGroup): Observable<showProduct> {

  let showdata = {
    "email":data.value.email
  }
  console.log(showdata,"show product");
  return this.httpClient.post<showProduct>(this.endPoint +'/api/showproduct', JSON.stringify(showdata), this.httpHeader)
}


//Order
CreateOrder(data: FormGroup): Observable<Order> {

  let createdata = {
    "orderId":data.value.orderId,
	  "paymentmethod":data.value.paymentmethod,
    "customername":data.value.customername,
	  "email":data.value.email,
    "branch":data.value.branch,
	  "pincode":data.value.pincode,
	  "phone":data.value.phone
  }
  console.log(createdata,"create Order");
  return this.httpClient.post<Order>(this.endPoint +'/api/Order', JSON.stringify(createdata), this.httpHeader)
}


//LoginOrder
LoginOrders(data: FormGroup): Observable<LoginOrder> {

  let orderdata = {
    "email":data.value.email,
    "phone":data.value.phone
  }
  console.log(orderdata,"Login Order");
  return this.httpClient.post<LoginOrder>(this.endPoint +'/api/loginOrder', JSON.stringify(orderdata), this.httpHeader)
}


//showOrder
ShowOrdersData(data: FormGroup): Observable<showOrder> {

  let showdata = {
    "email":data.value.email
  }
  console.log(showdata,"show Order");
  return this.httpClient.post<showOrder>(this.endPoint +'/api/ShowDetails', JSON.stringify(showdata), this.httpHeader)
}


//updateOrder
UpdateOrderData(data: FormGroup): Observable<updateOrder> {

  let updatedata = {
    "email":data.value.email,
    "customername":data.value.customername,
    "pincode":data.value.pincode
  }
  console.log(updatedata,"update Order");
  return this.httpClient.post<updateOrder>(this.endPoint +'/api/updateOrder', JSON.stringify(updatedata), this.httpHeader)
}

//DeleteOrder
DeleteOrderData(data:  FormGroup): Observable<DeleteOrder> {

  let deletedata = {
    "email":data.value.email
  }
  console.log(deletedata,"delete Order");
  return this.httpClient.post<DeleteOrder>(this.endPoint +'/api/DeleteOrder', JSON.stringify(deletedata), this.httpHeader)
}















}
