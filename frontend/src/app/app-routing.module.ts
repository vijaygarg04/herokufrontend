import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ListingComponent } from "./listing/listing.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SpecificListingComponent } from "./specific-listing/specific-listing.component";
import {FormsModule} from '@angular/forms';
import { AddlistingComponent } from "./addlisting/addlisting.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { MymessgesComponent } from "./mymessges/mymessges.component";
import { AboutComponent } from "./about/about.component";
import { MylistComponent } from "./mylist/mylist.component";
import { ChatComponent } from "./chat/chat.component";


const routes:Routes=[
    { path: '', redirectTo:"/login", pathMatch:"full"},
    { path: 'login', component:LoginComponent},
    { path: 'about', component:AboutComponent},
    { path: 'signup', component:SignupComponent},
    {path: 'listing', component:ListingComponent},
    {path: 'addlisting',component:AddlistingComponent},
    {path: 'listing/:id', component:SpecificListingComponent},
    {path: 'mywishlist', component:WishlistComponent},
    {path: 'mymessages', component:MymessgesComponent},
    {path: 'viewlist', component:MylistComponent},
    {path: 'chat/:id', component:ChatComponent},
    {path: '**', component:PageNotFoundComponent}
];
export const routingComponent=[LoginComponent,SignupComponent,ListingComponent,
    NavbarComponent,PageNotFoundComponent,
    SpecificListingComponent,AddlistingComponent,
     WishlistComponent,MymessgesComponent,AboutComponent,
     MylistComponent,ChatComponent
 ];

@NgModule({
    imports:[RouterModule.forRoot(routes),
        FormsModule
    ],
    exports:[RouterModule]

})
export class AppRoutingModule{

}

