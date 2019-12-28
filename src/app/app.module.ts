import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksService } from './services/books.service';
import { BooksDashboardComponent } from './components/admin/books-dashboard/books-dashboard.component';
import { NgbDateCustomParserFormatter} from './utils/dateformat';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { UsersDashboardComponent } from './components/admin/users-dashboard/users-dashboard.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksDashboardComponent,
    UsersDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [BooksService, {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
