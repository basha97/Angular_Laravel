import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter  } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor(public http: HttpClient) {

	}

	api : string = "http://basha.test/api";

	saveUser(data){
		console.log(data); 
		let url = `${this.api}/saveData`;		
  		// let url = 'http://basha.test/api/saveData?username='+username+'&password='+password+'&name='+name+'&email='+email+'&number='+number+'&age='+age;
  		return this.http.post(url,data);
  	}

  	logindata(data){
       console.log(data); 
      let url = `${this.api}/login`;
      return this.http.post(url, data);
    }
	
}

// {username:'username',password:'password',name:'name',number:'number',email:'email',age:'age'}
// constructor(public http: HttpClient) {	}
// 	 api : string = "http://basha.test/api/";
// 	UserSave(name,email,number,age,username,password){
// 		console.log(name,email,number,age,username,password);  		
//   		let url = 'http://basha.test/api/saveData?username='+username+'&password='+password+'&name='+name+'&email='+email+'&number='+number+'&age='+age;
//   		return this.http.get(url);

//   	}