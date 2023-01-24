import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

class User {
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email
  }
  name: string = '';
  email: string = '';
}

@Component({
  selector: 'app-registration-section',
  templateUrl: './registration-section.component.html',
  styleUrls: ['./registration-section.component.scss']
})
export class RegistrationSectionComponent {
  constructor(private http: HttpClient) { }
  name : string | undefined
  email : string | undefined
  
  sendForm() {
    let user = new User(this?.name as string, this?.email as string)
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json', });
    // const options = { 
    //   headers: headers,
    //   observe: 'response' as 'response',
    //   responseType: 'text'
    // };
    let req = this.http.post('http://localhost:3000/', user, { 
      headers: headers,
      observe: 'response' as 'response',
      responseType: 'text'
    });
    req.subscribe( function(resp) {
      console.log(resp.body);
    });
  }
}
