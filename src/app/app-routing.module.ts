import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksDashboardComponent } from './components/admin/books-dashboard/books-dashboard.component';
import { UsersDashboardComponent } from './components/admin/users-dashboard/users-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'books-admin',
    component: BooksDashboardComponent, canActivate: [AuthGuard]
  }
  ,
  {
    path: 'users-admin',
    component: UsersDashboardComponent, canActivate: [AuthGuard]
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
