import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    UserComponent,
    PageNotFoundComponent,
    BlogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
