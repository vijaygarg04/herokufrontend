import { Component, OnInit } from '@angular/core';
import { Usermodel }    from '../usermodel';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
name="";
email="";
college="";
address="";
phonenumber:number;
password="";
mymessage="";
display=false;

  constructor(private _userservice:UserService,private router:Router) { }

  ngOnInit() {
  }
  
  signup(){
    console.log(this.name+"--"+this.email+"--"+this.college+"--"+this.address+"--"+this.password+"--"+this.phonenumber);
    var user:Usermodel={
      name:this.name,
      email:this.email,
      college:this.college,
      address:this.address,
      phonenumber:this.phonenumber,
      password:this.password
    }
    var error='';
    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  var serchfind = regexp.test(this.email);
  if(this.name.length===0){
    error+="Enter Name";
  }

  if(serchfind===false){
    error=error+"Email format Invalid"
    this.mymessage=error;
      this.display=true;
      return;
  }
  if(this.college.length===0){
    error+="Enter College";
    this.mymessage=error;
      this.display=true;
      return;
  }
  if(this.address.length===0){
    error+="Enter Address";
    this.mymessage=error;
      this.display=true;
      return;
  }
  var phone=this.phonenumber+'';
  if(phone.length!=10){
    error+=' Phone number Invalid'
    this.mymessage=error;
      this.display=true;
      return;
  }
  if(this.password.length===0){
    error+=' Enter Password'
    this.mymessage=error;
      this.display=true;
      return;
  }
  if(error.length>0){
    this.mymessage=error;
      this.display=true;
      return;
  }else{
    
    this._userservice.adduser(user).subscribe(mymsg => {
      this.mymessage=mymsg;
      this.display=true;
    
    }
  );
  }
}
  onclose(){
    this.display=false;
    if(this.mymessage==='successfully added new user'){
      this.router.navigate(['/login']);
    }
  }


}
