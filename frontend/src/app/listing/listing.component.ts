import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listings=[
  ];
  email:string;
  srch:string="";
  conditions=[];


    ngOnInit(){
        this._userservice.getalllisting().subscribe(alllist=>{
         console.log(alllist);
          var stringify=JSON.stringify(alllist);
        this.listings=JSON.parse(stringify);
        this.email=this._userservice.getemail();
        this.updatecondition();
      });
    }
    updatecondition(){
      for(var i=0;i<this.listings.length;i++){
        switch(this.listings[i].cond){
          case 1: this.conditions[i]="Wore";
          break;
          case 2: this.conditions[i]="Slight Damage";
          break;
          case 3: this.conditions[i]="Almost New";
          break;
          case 4: this.conditions[i]="New";
          break;
          default: this.conditions[i]="Not Mentioned"
          break;

        }
      }
    }

    constructor(private _userservice:UserService,private router:Router) {

    }

     onSelect(listing){
        console.log(listing.id);
        this.router.navigate(['/listing',listing.id]);
     }

      sortbypricelowtohigh(){
        console.log("sort func called");
        
        this._userservice.getsorteddatabypricelowtohigh().subscribe(alllist=>{
          console.log(alllist);
           var stringify=JSON.stringify(alllist);
         this.listings=JSON.parse(stringify);
       });
     }
     sortbypricehightolow(){
      this._userservice.getsorteddatabypricehightolow().subscribe(alllist=>{
        console.log(alllist);
         var stringify=JSON.stringify(alllist);
       this.listings=JSON.parse(stringify);
     });
     }
     sortbyconditiongoodtobad(){
      this._userservice.getsorteddatabyconditiongoodtobad().subscribe(alllist=>{
        console.log(alllist);
         var stringify=JSON.stringify(alllist);
       this.listings=JSON.parse(stringify);
     });
     }
     sortbyconditionbadtogood(){
      this._userservice.getsorteddatabyconditionbadtogood().subscribe(alllist=>{
        console.log(alllist);
         var stringify=JSON.stringify(alllist);
       this.listings=JSON.parse(stringify);
     });
     }
     searchbook(){
       console.log(this.srch);
       this._userservice.searchbook(this.srch).subscribe(alllist=>{
        var stringify=JSON.stringify(alllist);
        this.listings=JSON.parse(stringify);
       });
     }
  

 
     
}

