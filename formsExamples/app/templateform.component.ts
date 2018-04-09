import { Component } from '@angular/core'

@Component(
	{
		'selector':'template-form',
		'templateUrl':`./template1.html`
	}
)

export class TemplateformComponent{
	myName="Jayakumar";
	onSubmit(value: any){
		console.log(value);
	}
	
}	