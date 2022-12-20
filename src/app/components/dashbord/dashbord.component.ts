// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DatabaseService} from '../dashbord/database.service'


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent  implements OnInit {
  loginDate:any
  account:any
  name:any
  balance:any
  accno:any
  constructor(private db:DatabaseService,private router:Router) { 
    this.loginDate=new Date
    this.account=JSON.parse(localStorage.getItem('accountNumber')||'')
    this.name=JSON.parse(localStorage.getItem('name')||'')
    this.balance=JSON.parse(localStorage.getItem('balance')||'')
  }
  ngOnInit(): void {
    
    if(!localStorage.getItem('accountNumber')){
      alert("please login again")
      this.router.navigateByUrl('')  
    }  
  }
  deleteAccount(){
    this.accno=JSON.parse(localStorage.getItem('accountNumber')||'')
    console.log(this.accno)
  }
  cancel(){
    this.accno=''
  }
  deleteac(event:any){
    alert("account deleted")
    this.router.navigateByUrl('')  
  }
  }



