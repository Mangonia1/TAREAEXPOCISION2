import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable,Operator } from 'rxjs';
import { Person } from '../models/Person';
import { catchError } from 'rxjs/operators'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private request: HttpClient) { }

  URL:string='https://my-json-server.typicode.com/Mangonia1/demo/Person/';
  URLget:string='https://my-json-server.typicode.com/Mangonia1/demo/db/';

 //Get Persons
 getPersons(): Observable<any>{

   return this.request.get<Person[]>(this.URLget);
  }
//Add Persons
newPerson(p:any){
const header = new HttpHeaders().set('Content-Type','application-json; charset=utf-8');
return this.request.post(this.URL,JSON.stringify(p),{headers:header}).pipe(catchError(this.handleError));
}
//Delete Persons
deletePerson(id:any){
  
return this.request.delete("https://my-json-server.typicode.com/Mangonia1/demo/Person/"+id).pipe(catchError(this.handleError)).subscribe();
}


  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw(error.status);
  };

}


