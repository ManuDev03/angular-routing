import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'users',canActivateChild:[AuthGuard] ,component:UsersComponent,children:[
    {path:':id/:name', component:UserComponent}
  ]},
  {path:'blog', component:BlogComponent},
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**', redirectTo: '/not-found'}


 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
