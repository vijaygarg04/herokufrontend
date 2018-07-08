import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mymessges',
  templateUrl: './mymessges.component.html',
  styleUrls: ['./mymessges.component.css']
})
export class MymessgesComponent implements OnInit {
  
  
  messagesarray=[];
  msgs=[];
  myemail="";
  show=false;
  msgtosend:string="";
  mymessage="";
  display=false;
  msgreport="";
  displayreport=false;
  submsg="";
  msgtoreply;
  srch="";
  constructor(private _userservice:UserService,private router:Router) { }

  ngOnInit() {
     
    this.getallmessages();
    
  }
  getallmessages(){
    this._userservice.getallmessages().subscribe(allmsgs=>{
      console.log(allmsgs);
       var stringify=JSON.stringify(allmsgs);
       console.log("data");
       console.log(stringify);
     this.messagesarray=JSON.parse(stringify);
     this.myemail=this._userservice.getemail();
     this.extractdata();
  });
  }
  extractdata(){
    this.msgs=[];
    for(var i=0;i<this.messagesarray.length;i++){
      var currmsg=this.messagesarray[i];
      var obj={
        message:"",
        id:"",
        fromorto:"",
        text:""
        
      }
      obj.message=currmsg.msg;
      obj.id=currmsg.bookid;
      if(currmsg.sender===this.myemail){
          obj.fromorto="TO:";
          obj.text=currmsg.receiver
      }else{
        obj.fromorto="FROM:";
        obj.text=currmsg.sender;
      }
      this.msgs.push(obj);
    }
    
  }
  reply(msg){
    console.log(JSON.stringify(msg));
    
    console.log("reply"+msg);
this.msgtoreply=msg
      this.show=true;
  }
  cancel(){
    this.displayreport=false;
    this.submsg="";
    this.show=!this.show;
    this.msgtosend="";
  }
  sendmsg(){
    this.displayreport=true;
        console.log(this.msgtosend);
    
        this._userservice.sendmsg(this.msgtoreply.id,this.msgtoreply.text,this.msgtosend).subscribe(mymsg=>{
          console.log(mymsg);
          this.submsg=mymsg;
          this.mymessage="";
          // this.cancel();
          this.getallmessages();
            
        });
        
    
      }
      getsentby(){
        this._userservice.getallmessagessendbyme().subscribe(allmsgs=>{
          console.log(allmsgs);
           var stringify=JSON.stringify(allmsgs);
           console.log("data");
           console.log(stringify);
         this.messagesarray=JSON.parse(stringify);
         this.myemail=this._userservice.getemail();
         this.extractdata();
      });
      }
      getreceivedby(){
        this._userservice.getallmessagesreceivedtome().subscribe(allmsgs=>{
          console.log(allmsgs);
           var stringify=JSON.stringify(allmsgs);
           console.log("data");
           console.log(stringify);
         this.messagesarray=JSON.parse(stringify);
         this.myemail=this._userservice.getemail();
         this.extractdata();
      });
      }
      searchbyusermsg(){
        this._userservice.getallmessagessendorreceivedby(this.srch).subscribe(allmsgs=>{
          console.log(allmsgs);
           var stringify=JSON.stringify(allmsgs);
           console.log("data");
           console.log(stringify);
         this.messagesarray=JSON.parse(stringify);
         this.myemail=this._userservice.getemail();
         this.extractdata();
      });
      }

}
