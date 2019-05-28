import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../services/routing.service'
import { Person } from '../../models/Person';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(public service:RoutingService) { }
list:Person[]=[];
  ngOnInit() {
  //  this.service.getPersons().subscribe( list => {
    // this.list = list});
    this.service.getPersons().subscribe(list =>{this.list.push(list)});
     // console.log(this.list);
  }
  
}
