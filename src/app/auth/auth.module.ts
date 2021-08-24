import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    NewUserComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
