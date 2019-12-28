import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'books-admin';
  currentUser= false;
  constructor(private authenticationService: AuthenticationService, private router: Router

  ) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('currentUser'))
    if(localStorage.getItem('currentUser') != null){
      this.currentUser = true;
      console.log('test')
    } else{
      this.currentUser = false;
    }
  }

  logOut() {
    this.authenticationService.logout();
    alert('Logout success !!!');
    this.currentUser = false;
    this.router.navigate(['/login']);
  }
}
