import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-readuser',
  templateUrl: './readuser.component.html',
  styleUrls: ['./readuser.component.css']
})
export class ReaduserComponent implements OnInit {
  showuser = new FormGroup({
    email : new FormControl('')
  })
  show: any;
  readuser: any;
  
  constructor(private route:ActivatedRoute , private router:Router , private data:DataService) { }

  ngOnInit(): void {
  }

  showFunction(){
    console.log(this.showuser.value);
  }
  
  showuserFun(){
    this.data.userdetails(this.showuser).subscribe((data: {}) => {
    console.log(data);
    this.show = data;
    this.readuser = this.show.Result;
    })
  }
}
