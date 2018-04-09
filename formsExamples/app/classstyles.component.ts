import { Component } from '@angular/core';

@Component({
	selector: 'classstyles',
	template: ` <div class="myclass"> Class and Styles </div>
				<div [class.myclass1]="applyclass"> Class and Styles on condition </div>
				<div [style.color]="applyblue?'blue':'black'"> Apply style</div>
				
	`,
	styles: [`
				.myclass {color:red}
				.myclass1 {color:green}
			`]
})

export class ClassstylesComponent{
	 applyclass=true;
	 applyblue=true;
}