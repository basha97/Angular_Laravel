import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { Validators , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

	formData = this.fb.group({
		username: ['', Validators.required],
		password: ['', [Validators.required, Validators.minLength(6)]],
		name: '',
		email: '',
		number: '',
		age: '',
		
	});
	errMsg: false;
    constructor(public network: UserService, public fb: FormBuilder ) {
    }

    ngOnInit() {
    }

    saveData(){
	  	this.network.saveUser(this.formData.value)
	  		.subscribe((res:any)=>{
	  			console.log(res);
	  			if(res.message == 'same email'){
	  				// var username = true;
	  				// this.errMsg = true;
	  			}
	  			 else if  (res.message == true) 
	  			{
	  				this.formData.reset();
	  			}
	  		},
	  	e=>{
	  		console.log(e);
	  	});
	}

}
