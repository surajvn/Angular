import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from'../apiservice.service';
// import { from } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

fetchDatas:any[];

  constructor(private apiService:ApiserviceService) { 
   
    this.onGetData();

  }

  onGetData(){
   this.apiService.getServeData().subscribe(
     (newData:any[])=>{console.log(newData);
      this.fetchDatas=newData
    },
     (error)=>console.log(error)
    );

  }

  ngOnInit() {
  }

}
