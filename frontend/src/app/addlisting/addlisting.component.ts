import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Listmodel } from '../listmodel';
@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {

conditions:string[]=['New','Almost New','Slight Damage','Worn','Select Book Condition'];
conditionselect='Select Book Condition';
book='';
author='';
imgurl='';
price:number;
mymessage="";
display=false;

  constructor(private _userservice:UserService,private router:Router) { }

  ngOnInit() {
  }
  submititem(){
    var conditionnumber:number;
    switch(this.conditionselect){
      case 'New':conditionnumber=4;
      break;
      case 'Almost New':conditionnumber=3;
      break;
      case 'Slight Damage':conditionnumber=2;
      break;
      case 'Worn':conditionnumber=1;
      break;
      default:
      conditionnumber=-1;
    }
    var list:Listmodel={
      seller:this._userservice.getemail(),
      book:this.book,
      author:this.author,
      img:this.imgurl,
      price:this.price,
      condition:conditionnumber,
      description:`This book was about a bird who didn't yet know how to fly.The bird has to decide if it will try to fly, but it was not sure if it wants to. The bird thought, "If I never 
      forever endeavor" then I won't ever learn. On one wing, he worries he might fail and on the other wing he thinks of how he may succeed. He worries that if he tries, he may get lost in 
      the world. That makes him want to stay in his nest where he's safe.I think this book would help other children to learn that trying new things can be scary, but sometimes when we try,
       we can find things that make us happy too. And this book will help others know that mistakes are okay and part of learning.
      My favorite part is that the bird tried and learned that she could fly. I also liked that I read this book because it gave me a chance to talk to mom about making mistakes and how I don't 
      like making them. Then I learned they are good and part of learning. 
      Boys and girls who are 3 to 8 years old would like this book because it teaches about trying a new thing and how it's important to get past being scared so you can learn new things.
      I give the book 5 stars since I think it's important for other children to learn about courage. `
    }
    var error='';
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    var urltest=re.test(this.imgurl);
    if(this.book.length===0){
      error+="Enter Book Name";
      this.mymessage=error;
      this.display=true;
      return;
    }
    if(this.author.length===0){
      error+="Enter Author Name";
      this.mymessage=error;
      this.display=true;
      return;
    }
    if(urltest===false){
      error+="URL is Invalid";
      this.mymessage=error;
      this.display=true;
      return;

    }
    var rate=this.price+'';
    console.log(rate.length);
    console.log(this.price);
    
    
    if(rate==='undefined'){
      error+="Enter Book Price";
      this.mymessage=error;
      this.display=true;
      return;
    }
    if(conditionnumber===-1){
      error+="Select Book Condition";
      this.mymessage=error;
      this.display=true;
      return;
    }

    this._userservice.addnewbookitem(list).subscribe(mymsg=>{
      console.log(mymsg);
      this.mymessage=mymsg;
      this.display=true;
    })
  }
  onclose(){
    this.display=false;
    if(this.mymessage==='successfully added new list item'){
      console.log("Successfully added item");
      this.router.navigate(['/listing']);
    }
  }

}
