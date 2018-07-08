import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule,routingComponent} from './app-routing.module'
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpecificListingComponent } from './specific-listing/specific-listing.component';
import { FormsModule }   from '@angular/forms';
import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MymessgesComponent } from './mymessges/mymessges.component';
import { AboutComponent } from './about/about.component';
import { FilterComponent } from './filter/filter.component';
import { MylistComponent } from './mylist/mylist.component';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from './footer/footer.component';
import { DialogmsgComponent } from './dialogmsg/dialogmsg.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent,
    SpecificListingComponent,
    AddlistingComponent,
    WishlistComponent,
    MymessgesComponent,
    AboutComponent,
    FilterComponent,
    MylistComponent,
    ChatComponent,
    FooterComponent,
    DialogmsgComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
