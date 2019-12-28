import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  userToAdd: Users = new Users();
  userToEdit: Users = new Users();
  public users: Users[] = [];
  public subscription: Subscription;
  public userIDParam: number;
  constructor(private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.subscription = this.usersService.getAllUsers().subscribe((users: Users[]) => {
      this.users = users;
      this.users.sort((a, b) => (a.id > b.id) ? 1 : -1);
    });
  }

  addUser() {
    this.subscription = this.usersService.add(this.userToAdd).subscribe((message: Object) => {
      console.log(message);
      this.loadAllUsers();
    });

    this.userToAdd.setEmpty();
  }

  deleteUser(id: number) {
    const answer = window.confirm(`Delete User ID ${id} ??`)
    if (answer) {
      this.subscription = this.usersService.delete(id).subscribe((message: Object) => {
        this.loadAllUsers();
      });
    }
  }

  passEditParams(users: Users) {
    this.userToEdit.id = users.id;
    this.userToEdit.username = users.username;
  }

  editUser() {
    this.subscription = this.usersService.update(this.userToEdit).subscribe((message: Object) => {
      console.log(message);
      this.loadAllUsers();
    });
  }

}
