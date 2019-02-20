import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { Validators , FormBuilder } from '@angular/forms';
import { JarwisService } from 'app/services/jarwis.service';
import { SnotifyService } from 'ng-snotify';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

public	form = { 
	task_name: '',
	startdate : new Date().toISOString(),
	enddate : new Date().toISOString()
	}
  public error = '';
  
    constructor(
      public network: UserService, 
      public fb: FormBuilder,
      public jarwish: JarwisService,
      public notify: SnotifyService ) {
    }

    ngOnInit() {
      
    }

    saveTodoData(){
	  	this.jarwish.addtask(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      )
  }
  
  handleResponse(data){
    if(data.success = true){
      this.notify.success('Task added succesfully', {timeout: 2000});
    }else
    {
      this.notify.error('Something went wrong ', {timeout: 2000});
    }
  }

  handleError(error){
      this.notify.error('Wrong Crendential');
      this.error = error.error.error;
  }

}
