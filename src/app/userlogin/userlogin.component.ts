import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  logindata = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })

  find: any;
  login: any;
  
  constructor(private route:ActivatedRoute , private router:Router , private data:DataService) { }

  ngOnInit(): void {
  }

  loginFunction(){
    console.log(this.logindata.value);
  }

  //login....

  getUserLoginFun(){
    this.data.findUser(this.logindata).subscribe((data: {}) => {
    console.log(data);
    this.find = data;
    this.login = this.find.Result;  //denoted in html {{login}}
    })
  }
}
