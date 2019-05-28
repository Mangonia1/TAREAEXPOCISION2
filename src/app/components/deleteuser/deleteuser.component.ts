import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../services/routing.service'
import { Person } from '../../models/Person';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(public service:RoutingService) { }

  fID:string = "";
    list:Person[]=[];
  ngOnInit() {
  //  this.service.getPersons().subscribe( list => {
    // this.list = list});
    this.service.getPersons().subscribe(list =>{this.list.push(list)});
     // console.log(this.list);
  }

  onSubmit()
  {
    this.service.deletePerson(this.fID);
  }
  }


