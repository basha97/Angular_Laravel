import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JarwisService } from 'app/services/jarwis.service';
import { TokenService } from 'app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form = {
      email: null,
      name: null,
      password: null,
      password_confirmation: null
  };

  public error = [];

  constructor(
      private jarwish: JarwisService,
      private token: TokenService,
      private router: Router
      ) { }

  ngOnInit() {
  }

  onSubmit(){
      this.jarwish.signup(this.form).subscribe(
          data =>  this.handleResponse(data),
          error => this.handleError(error) 
      );
  }

  handleResponse(data){
      this.token.handle(data.access_token);
      this.router.navigateByUrl('/login');
  }

  handleError(error){
      this.error = error.error.errors;
  } 

}
