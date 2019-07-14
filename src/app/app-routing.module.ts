import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './home/faculty/faculty.component';
import { StudentComponent } from './home/student/student.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SecurityGuard } from './security.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SecurityGuard],
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'faculty', component: FacultyComponent},
      {path: 'student', component: StudentComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
