import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component(
	{
		selector:'emp-list',
		template:`
			<h2>Employee List</h2>
			<h2>{{errorMsg}}</h2>
			<ul *ngFor="let employee of employees">
				<li> {{employee.Name}}</li>
			</ul>`
	}
)
export class EmployeelistComponent implements OnInit{
	employees =[];
	constructor(private _employeeService :EmployeeService){}
	errorMsg : String;
	
	ngOnInit(){
	this._employeeService.getEmployees()
	.subscribe(resEmployeeData => this.employees = resEmployeeData,resErrorMsg=> this.errorMsg=resErrorMsg);
	
	console.log(this.employees);
	}
}