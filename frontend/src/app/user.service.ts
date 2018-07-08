import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from './usermodel';
import { HttpHeaders } from '@angular/common/http';
import { verifyModel } from './verifymodel';
import { Observable } from 'rxjs';
import { Listmodel } from './listmodel';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="";
  constructor(private http:HttpClient){}
  
  myemail:string="";

  setemail(email){
      this.myemail=email;
  }
  getemail(){
      return this.myemail;
  }
  
  adduser(user:Usermodel){
    var obj={user:user};
    var myurl=this.url+"/adduser"
return  this.http.post<string>(myurl ,obj,httpOptions);

}
verifyuser(user:verifyModel):Observable<string>{
var myurl=this.url+"/verifyuser?email="+user.email+"&password="+user.password
  return  this.http.get<string>(myurl);
}

addnewbookitem(list:Listmodel){
  var obj={list:list};
  var myurl=this.url+"/addlisting";
return  this.http.post<string>(myurl ,obj,httpOptions);
}
getalllisting(){
  var myurl=this.url+"/getalllisting";
  return this.http.get<string>(myurl);

}
getsorteddatabypricelowtohigh(){
  var myurl=this.url+"/sortbypricelowtohigh";
  return this.http.get<string>(myurl);
}
getsorteddatabypricehightolow(){
  var myurl=this.url+"/sortbypricehightolow";
  return this.http.get<string>(myurl);
}
getsorteddatabyconditiongoodtobad(){
  var myurl=this.url+"/sortbyconditiongoodtobad";
  return this.http.get<string>(myurl);
}
getsorteddatabyconditionbadtogood(){
  var myurl=this.url+"/sortbyconditionbadtogood";
  return this.http.get<string>(myurl);
}
searchbook(search:string){
  var myurl=this.url+"/searchbook?search="+search;
  return this.http.get<string>(myurl);
}
getuserlisting(){
  var myurl=this.url+"/getuserlisting?user="+this.getemail();
  return this.http.get<string>(myurl);
}
removeuserlisting(id){
  var myurl=this.url+"/removebook?id="+id;
  return this.http.get<string>(myurl);
}
getlistingbyid(id){
  var myurl=this.url+"/getbook?id="+id;
  return this.http.get<string>(myurl);
}
addtowishlist(bookid){
  var userid=this.getemail();
  var myvalue={
    userid:userid,
    bookid:bookid
  }
  var obj={wish:myvalue};
  var myurl=this.url+"/addtowishlist";
return  this.http.post<string>(myurl ,obj,httpOptions);
}

getmywishlist(){
  var userid=this.getemail();
  var myurl=this.url+"/mywishlist?user="+userid;
  return this.http.get<string>(myurl);

}
removefromwishlist(bookid,userid){
  var data={
    bookid:bookid,
    userid:userid
  }
  var obj={data:data};
  var myurl=this.url+"/removefromwishlist"
return  this.http.post<string>(myurl ,obj,httpOptions);
}
sendmsg(id,seller,msg){
  var data={
    id:id,
    receiver:seller,
    msg:msg,
    sender:this.getemail()

  }
  var obj={data:data};
  var myurl=this.url+"/sendmsg"
return  this.http.post<string>(myurl ,obj,httpOptions);
}

getuserbyid(seller){
  var userid=seller;
  var myurl=this.url+"/getuser?user="+userid;
  return this.http.get<string>(myurl);
}

getallmessages(){
  var userid=this.getemail();
  var myurl=this.url+"/getmsg?user="+userid;
  return this.http.get<string>(myurl);

}
getallmessagessendbyme(){
  var userid=this.getemail();
  var myurl=this.url+"/getmsgsendbyme?user="+userid;
  return this.http.get<string>(myurl);
}

getallmessagesreceivedtome(){
  var userid=this.getemail();
  var myurl=this.url+"/getmsgreceivedbyme?user="+userid;
  return this.http.get<string>(myurl);
}
getallmessagessendorreceivedby(srch){
  var userid=this.getemail();
  var otherid=srch;
  var myurl=this.url+"/getmsgsendorreceivedby?user="+userid+"&other="+otherid;
  return this.http.get<string>(myurl);

}

}
