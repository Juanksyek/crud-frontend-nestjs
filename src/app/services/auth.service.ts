import { NuevoUsuarioDto } from './../models/nuevo-usuario.dto';
import { Observable } from 'rxjs';
import { LoginUsuarioDto } from './../models/login-ususario.dto';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL;

  constructor(private httpClient: HttpClient) { }

  login(dto: LoginUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'login', dto);
  }

  registro(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', dto);
  }
}