import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
listings=[];
  constructor(private _userservice:UserService,private router:Router) { }

  ngOnInit() {
    this._userservice.getuserlisting().subscribe(alllist=>{
      console.log(alllist);
       var stringify=JSON.stringify(alllist);
     this.listings=JSON.parse(stringify);
  });
  }
  
  onremove(listing){
    this._userservice.removeuserlisting(listing.id).subscribe(mymsg=>{
      console.log(mymsg);
       if(mymsg==='Successfully removed the advertisement for this book'){
        this._userservice.getuserlisting().subscribe(alllist=>{
          console.log(alllist);
           var stringify=JSON.stringify(alllist);
         this.listings=JSON.parse(stringify);
      });
       }else{
         console.log('Error In Deleting the advertisement for this book');
         
       }
  });
  }

}
