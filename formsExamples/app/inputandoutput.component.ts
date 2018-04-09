import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'input-ouput',
	template: ` 
		 <p> Input from Parent </p>
		 <label>Enter child Component value</label>
		 <input type="text" #childtxt (keyup)="onChange(childtxt.value)">	
		 <p>Value from parent Component is</p>
		 {{ParentData}}
	` ,
	inputs:[`parentData`],
	outputs:[`childEvent`]
})

export class InputoutputComponent{
	 public parentData: string;
	 childEvent = new EventEmitter<string>();
	 onChange(value:string){
		 this.childEvent.emit(value);
	 }
	 
}