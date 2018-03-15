import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    CommonModule,
	ReactiveFormsModule,
	
  ],
  declarations: [
  LoginComponent
],
providers: [AuthenticationService],
})
export class LoginModule { 
	
}
