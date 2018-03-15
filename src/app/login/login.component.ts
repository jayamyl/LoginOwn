import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private users ;
  constructor(
  private fb: FormBuilder,
   private authenticationService: AuthenticationService,
   private route: ActivatedRoute,
   private router: Router
  ) { 
  this.createForm();
  }
	
	ngOnInit() {
	}
	
   createForm() {
    this.loginForm = this.fb.group({
		username: ['', Validators.required ],
		password:['',Validators.required]
	});
   }
  login(data){
	  this.authenticationService.login()
            .subscribe(users => {
                this.users = users;
				//console.log(this.users);
				
				this.router.navigate(['dashboard']);
            });
			
		/*	
	  //console.log(this.loginForm.value.username);
	  this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(
                data => {
                   // this.router.navigate([this.returnUrl]);
				   console.log(data); alert(data);
				   this.UserData = data;
                },
                error => {
                    
                });
				
				console.log(this.UserData);*/
  }

}
