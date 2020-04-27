import { History } from './../History';
import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {
  allTheHistory:History[];
  username = '';

  constructor(private myservice:MyserviceService, private _router:Router) {
    this.myservice.getUserName()
    .subscribe(
      data => this.username= data.toString(),
     // error => this._router.navigate(['/getstarted/product/signin'])
    )
   }

  ngOnInit(): void {
    this.myservice.getAllTheHistory().subscribe(
      res=>{
        console.log(res);
        this.allTheHistory = res;
      }
    );
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/getstarted/product/signin']);
  }

}
