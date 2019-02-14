import { Component, OnInit  } from '@angular/core';
import { UserService} from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JarwisService } from 'app/services/jarwis.service';
import { TokenService } from 'app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { SnotifyService } from 'ng-snotify';


// import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public form = {
    email: null,
    password: null
}
    loading = false;
    submitted = false;
    returnUrl: string;

    public error = null ;

  constructor(
    public network: UserService,
    public fb: FormBuilder,
    private jarwish: JarwisService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService,
    private notify: SnotifyService

    ) { }

  ngOnInit() {
  }

  onSubmit(){
      this.jarwish.login(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error) 
    );
  }

  handleResponse(data){
    this.notify.success('You are logged in', {timeout: 3000});
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
}

handleError(error){
    this.notify.error('Wrong Crendential');
    this.error = error.error.error;
}

}
