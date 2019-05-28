import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { RoutingService } from '../../services/routing.service'


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor( public service:RoutingService) { }
  model: any = {};
  ngOnInit() {
  }
  options:Array<string>=["Hombre","Mujer"];
  fName:string = "";
  fP:string= "";
  fM:string= "";
  fSex:string= "";
  fAge:string= "";
  fEmail:string= "";
  ficon:string= "";
  iconoptions:Array<string>=["fas fa-archive",
  "fas fa-ad",
  "fas fa-archway",
  "fas fa-angle-right",
  "fas fa-adjust",
  "fas fa-allergies",
  "fas fa-anchor",
  "fas fa-american-sign-language-interpreting",
  "fas fa-angry",
  "fas fa-arrow-alt-circle-left"];
  
  icons:Array<string>=[
    "fas fa-archive",
    "fas fa-ad",
    "fas fa-archway",
    "fas fa-angle-right",
    "fas fa-adjust",
    "fas fa-allergies",
    "fas fa-anchor",
    "fas fa-american-sign-language-interpreting",
    "fas fa-angry",
    "fas fa-arrow-alt-circle-left" 
  ]
  
  

   
   data:Person[]=[];
  onSubmit(){
    
    this.service.newPerson(new Person("1",this.model.fName,this.model.fP,this.model.fM,this.model.fSex,this.model.fAge,this.model.fEmail,this.model.ficon)).subscribe();
  }

  public getRandom() {
    return Math.floor(Math.random() * 9) + 0;
    
  }
}
