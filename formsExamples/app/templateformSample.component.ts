import { Component } from '@angular/core'

@Component(
	{
		'selector':'tempdrivensample1',
		'templateUrl':`./template3.html`
	}
)

export class TemplateformSample1Component{
	onSubmit(value: any){
		console.log(value);
	}
	
}