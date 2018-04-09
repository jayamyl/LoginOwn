import { Component } from '@angular/core';

@Component({
	selector: 'my-tut',
	template: `<h2>{{title}}</h2>
				<h3>Header from H3</h3>
				<img [src]="imgLink"><br>
----------------------------------------------------------<br>

`,
	styles: [`
				h3 {color:red}
			`]
})

export class TutorialsComponent{
	title="Jaya tutorials";
	imgLink = "http://lorempixel.com/400/200";
}