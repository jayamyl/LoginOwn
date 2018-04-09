import { Component } from '@angular/core';

@Component({
	selector: 'struct-directive',
	template: ` 
	<p *ngIf="ShowElement">ngIf show element</p>
	<div [ngSwitch]="color">
		<p *ngSwitchCase="'blue'">Blue</p>
		<p *ngSwitchCase="'orange'">Orange</p>
		<p *ngSwitchCase="'red'">Red</p>
		<p *ngSwitchDefault>Invalid</p>
	</div>
	<ul>
		<li *ngFor="let color of colors">{{color}}</li>
	<ul>
	`
})

export class StructuredirectivesComponent{
	public ShowElement=true;
	public color='blue';
	public colors = ['blue','orange','green'];
}