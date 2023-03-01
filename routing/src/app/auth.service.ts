import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accesToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  constructor() { }

  isLogged(): boolean {
    return !!sessionStorage.getItem("acces-token");
  }

  login(email: string, password: string): boolean {
    if (email == "admin@admin.com" && password == "123456") {
      sessionStorage.setItem("acces-token", this.accesToken);
      return true;
    }

    return false;
  }

  logout() {
    sessionStorage.clear();
  }
}
