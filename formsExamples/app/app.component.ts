import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component'
import { EmployeeService } from './employee.service'

@Component({
  selector : 'app-root',
  template : `
    <h1>Hello world from Jaya</h1>
	<h4>Header from h4</h4>
	<my-tut> </my-tut>
	<classstyles></classstyles>
	<eventtut></eventtut>
	<struct-directive></struct-directive>
	<attr-directive></attr-directive><br>
	<pipe></pipe><br>
	<template-form></template-form>
	<modeldriven-form> </modeldriven-form><br>
	<modeldriven-formbuilder> </modeldriven-formbuilder><br>
	<emp-list></emp-list>
	<tempdrivensample1></tempdrivensample1>
	`,
	styles:[` h4 {color :orange}`],
	providers:[EmployeeService]
  
})

export class AppComponent {
  public childData:string;
}