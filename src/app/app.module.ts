import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { routing } from './app.routing';
import {HttpModule} from "@angular/http";
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
	
  ],
  imports: [
    BrowserModule,
	LoginModule,
	ReactiveFormsModule,
	routing,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
