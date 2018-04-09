import { Component,OnInit } from '@angular/core'
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
@Component(
	{
		selector:'modeldriven-formbuilder',
		templateUrl:`./template2.html`,
		styles:[`
		input.ng-invalid{border-left:5px solid red;}
		input.ng-valid{border-left:5px solid green;}
		`]
	}
)

export class ModeldrivenformbuilderComponent implements OnInit{
	userForm :FormGroup;
	constructor (private _formBuilder: FormBuilder){}
	ngOnInit(){
		this.userForm = this._formBuilder.group({
				name:['Brandon',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
				email:[],
				address:this._formBuilder.group(
				{
					street:[],
					city:[],
					postalcode:[null,[Validators.pattern('^[1-9][0-9]{4}$')]]
				})
		});

	}
	
		onSubmit(){
		console.log(this.userForm.value);
	}
	
}