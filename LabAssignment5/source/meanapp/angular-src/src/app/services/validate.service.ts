import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

/* 
 * Regular expression to validate email entry. Obtained from the following link.
 * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * 
 */
  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
