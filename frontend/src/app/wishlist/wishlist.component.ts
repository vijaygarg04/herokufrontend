import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
listings=[];
email='';
  constructor(private _userservice:UserService,private router:Router) { }

  ngOnInit() {
    this._userservice.getmywishlist().subscribe(alllist=>{
      console.log(alllist);
       var stringify=JSON.stringify(alllist);
     this.listings=JSON.parse(stringify);
     this.email=this._userservice.getemail();
   });
  }
  remove(listing){
    console.log("frontend");
    
    var bookid=listing.id;
    var userid=this._userservice.getemail();
    this._userservice.removefromwishlist(bookid,userid).subscribe(mymsg => {
      console.log(mymsg)
    if(mymsg==='successfully removed from wishlist'){
      this.router.navigate(['/listing']);
    }
    }
  );
  }

}
