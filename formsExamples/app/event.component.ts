import { Component } from '@angular/core';

@Component({
	selector: 'eventtut',
	template: ` <button (click)="onClick(demoinput.value)">click</button>
				<input type="text" value="hello" #demoinput> <br>
				<input type="text" [(ngModel)]="fname">
				<input type="text" [(ngModel)]="lname">
				Name: {{fname}}{{lname}}
	`
})

export class EventComponent{
	public fname;
	public lname;
	 onClick(value){
		 alert(value);
	 }
}