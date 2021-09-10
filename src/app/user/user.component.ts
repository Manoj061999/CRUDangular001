import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Data, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata = new FormGroup({
    username : new FormControl(''),
    userid : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    phone : new FormControl(''),
    address : new FormControl(''),
    gender : new FormControl([''])
  })

  create: any;
  users: any;

  constructor(private route:ActivatedRoute , private router:Router , private data:DataService) { }

  ngOnInit(): void {
  }

UserFunction(){
  console.log(this.userdata.value);
}

//REGISTRATION (create operator)............

getUserFun(){
  console.log(this.userdata.value);
    this.data.addUser(this.userdata).subscribe((data: {}) => {  
      console.log(data);
      this.create = data;
      this.users = this.create.Result;   //denoted in html {{users}}
    })
}

}
