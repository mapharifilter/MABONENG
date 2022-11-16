import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  jwt  = new JwtHelperService();

  constructor() { }

  getDataStrored(token :string)
  {
    return this.jwt.decodeToken(token);

  }
}
