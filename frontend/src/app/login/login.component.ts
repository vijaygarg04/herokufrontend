import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { verifyModel } from '../verifymodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email="";
  password="";
  mymessage="";
display=false;
  constructor(private _userservice:UserService,private router:Router) { }

  ngOnInit() {
  }
verifyaccount(){
  var error='';
  var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  var serchfind = regexp.test(this.email);
  if(serchfind===false){
    error=error+"Email format Invalid";
    this.display=true;
    this.mymessage=error;
    return;
  }
  if(this.password.length===0){
    error+='Password Cannot Be Blank';
    this.display=true;
    this.mymessage=error;
    return;
  }
  if(error.length>0){
    this.display=true;
    this.mymessage=error;
    return;
  }else{
  var user:verifyModel={
    email:this.email,
    password:this.password
}
this._userservice.verifyuser(user).subscribe(user => {
  this.mymessage=user;
  this.display=true;
});

  }

}
onclose(){
  this.display=false;
  if(this.mymessage==='Id Password Match Successfully'){
    this._userservice.setemail(this.email);
    console.log(this._userservice.getemail());
    this.router.navigate(['/listing']);
  }
}
}
