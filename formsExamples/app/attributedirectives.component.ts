import { Component } from '@angular/core';

@Component({
	selector: 'attr-directive',
	template: ` 
		<p [ngClass]="{classone:cone,classtwo:ctwo}">Attribute Directive</p>
		<button (click)='toggle()'>toggle</button>
		<p [ngStyle]="{'font-style':style,'font-size':size}">Style attr</p>
	`,
	styles:[`
				.classone{color:blue}
				.classtwo{color:red}
			`]
})

export class AttributedirectivesComponent{
	public cone=true;
	public ctwo=false;
	public style='italic';
	public size=30;
	toggle(){
		this.cone=!this.cone;
		this.ctwo=!this.ctwo;
	}
}