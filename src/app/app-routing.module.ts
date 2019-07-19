import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './home/faculty/faculty.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SecurityGuard } from './security.guard';
import { RegisterComponent } from './register/register.component';
import { EditComponent} from './home/edit/edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SecurityGuard],
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'faculty', component: FacultyComponent},
      {path: 'edit', component: EditComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'register', component: RegisterComponent},
  
  
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
