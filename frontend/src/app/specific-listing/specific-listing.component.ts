import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-specific-listing',
  templateUrl: './specific-listing.component.html',
  styleUrls: ['./specific-listing.component.css']
})
export class SpecificListingComponent implements OnInit {

  constructor(private _userservice:UserService,private route:ActivatedRoute,private router:Router) { }

  myid;
  show=false;
  msgtosend:string="";
  mymessage="";
  display=false;
  msgreport="";
  displayreport=false;
  submsg="";

  listitem={
    id:1,
    seller:'vijay',
    book:'christ',
    author:'munna bhai',
    image:'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
    price:300,
    cond:4,
    description:'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
  };
  condition="";
  sellerinfo;
  ngOnInit() {
    // Snapshot will not work if we redirect to the same component
    // let book= this.route.snapshot.paramMap.get('book');
    // console.log(book);

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      console.log(id);
      this.myid=id;
      this._userservice.getlistingbyid(id).subscribe(alllist=>{
        console.log(alllist);
         var stringify=JSON.stringify(alllist);
       var listings=JSON.parse(stringify);
       this.listitem=listings[0];
       console.log(this.listitem.seller);
       switch(this.listitem.cond){
        case 1: this.condition="Wore";
        break;
        case 2: this.condition="Slight Damage";
        break;
        case 3: this.condition="Almost New";
        break;
        case 4: this.condition="New";
        break;
        default: this.condition="Not Mentioned"
        break;

      }
       this._userservice.getuserbyid(this.listitem.seller).subscribe(alllist=>{
        console.log(alllist);
         var stringify=JSON.stringify(alllist);
       var sellers=JSON.parse(stringify);
       this.sellerinfo=sellers[0];
       
     });
     });
    });


    
  }
  addtowishlist(){
    console.log("method called");
    
    this._userservice.addtowishlist(this.listitem.id).subscribe(mymsg => {
      this.mymessage=mymsg;
      this.display=true;
      console.log(mymsg)
   
    }
  );
  }
  onclose(){
    this.display=false;
    if(this.mymessage==='Id Password Match Successfully'){
      console.log(this._userservice.getemail());
      this.router.navigate(['/listing']);
    }
  }
  chat(){
console.log("msg");

      this.cancel();
  }
  sendmsg(){
this.displayreport=true;
    console.log(this.msgtosend);

    this._userservice.sendmsg(this.listitem.id,this.listitem.seller,this.msgtosend).subscribe(mymsg=>{
      console.log(mymsg);
      this.submsg=mymsg;
      this.mymessage="";
        // this.cancel();
        
    });
    

  }
  cancel(){
    this.displayreport=false;
    this.submsg="";
    this.show=!this.show;
    this.msgtosend="";
  }

  

}
