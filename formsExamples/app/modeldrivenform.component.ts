import { Component } from '@angular/core'
import { FormGroup,FormControl,Validators } from '@angular/forms'
@Component(
	{
		selector:'modeldriven-form',
		templateUrl:`./template2.html`,
		styles:[`
		input.ng-invalid{border-left:5px solid red;}
		input.ng-valid{border-left:5px solid green;}
		`]
	}
)

export class ModeldrivenformComponent{
	userForm = new FormGroup(
	{
		name:new FormControl('brandon',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
		email:new FormControl(),
		address: new FormGroup(
		{
				street: new FormControl(),
				city: new FormControl(),
				postalcode: new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$'))
		}
		)
	}
	);
	onSubmit(){
		console.log(this.userForm.value);
	}
	
}