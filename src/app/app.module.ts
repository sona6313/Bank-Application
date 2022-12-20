import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CreditComponent } from './components/credit/credit.component';
import { DeleteaccountComponent } from './components/deleteaccount/deleteaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashbordComponent,
    LoginComponent,
    TransactionComponent,
    CreditComponent,
    DeleteaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
