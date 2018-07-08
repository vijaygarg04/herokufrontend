import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogmsg',
  templateUrl: './dialogmsg.component.html',
  styleUrls: ['./dialogmsg.component.css']
})
export class DialogmsgComponent implements OnInit {
@Input('mymessage') public mymessage;
@Input('display') public display;
@Input('moveto') public moveto;
@Input('ismove') public ismove;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onclose(){


    this.mymessage="";
    if(this.ismove === true){
      this.router.navigate([moveTo]);
      }
  }

}
