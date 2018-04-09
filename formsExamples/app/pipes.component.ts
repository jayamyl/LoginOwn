import { Component } from '@angular/core';

@Component({
	selector: 'pipe',
	template: `  
		<h2>{{8.567}}
		<h2>{{8.567 | number:'1.2-3'}}</h2>
		<h2>{{8.567 | number:'2.2-3'}}</h2>
		<h2>{{8.567 | number:'2.4-4'}}</h2>
		<h2>{{8.567 | number:'2.2-2'}}</h2>
		<h2>{{8.99 | currency:'EUR'}}</h2>
		<h2>{{8.99 | currency:'USD':true}}</h2>
		<h2> {{date}} </h2>
		<h2> {{date | date:'fullDate'}} </h2>
		<h2> {{date | date:'shortDate'}} </h2>
		<h2> {{date | date:'mediumTime'}} </h2>
	`
})

export class PipesComponent{
	 public date = new Date();
}