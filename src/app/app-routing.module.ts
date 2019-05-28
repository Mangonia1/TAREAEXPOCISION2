import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from "./components/userlist/userlist.component";
import { NewuserComponent } from "./components/newuser/newuser.component"
import { DeleteuserComponent } from "./components/deleteuser/deleteuser.component"
const routes: Routes = [
  {path: 'users', component: UserlistComponent },
  {path: 'add', component: NewuserComponent },
  {path: 'delete', component: DeleteuserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
