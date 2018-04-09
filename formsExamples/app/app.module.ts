import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials.component'
import { ClassstylesComponent } from './classstyles.component'
import { EventComponent } from './event.component'
import { StructuredirectivesComponent } from './structuredirectives.component'
import { AttributedirectivesComponent } from './attributedirectives.component'
import { PipesComponent } from './pipes.component'
import { TemplateformComponent } from './templateform.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ModeldrivenformComponent } from './modeldrivenform.component'
import { ModeldrivenformbuilderComponent } from './modeldrivenformbuilder.component'
import { EmployeelistComponent } from './employeelist.component';
import { HttpModule } from'@angular/http';

@NgModule({
  declarations: [
    AppComponent,
	TutorialsComponent,
	ClassstylesComponent,
	EventComponent,
	StructuredirectivesComponent,
	AttributedirectivesComponent,
	PipesComponent,
	TemplateformComponent,
	ModeldrivenformComponent,
	ModeldrivenformbuilderComponent,
	EmployeelistComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
	FormsModule ,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
