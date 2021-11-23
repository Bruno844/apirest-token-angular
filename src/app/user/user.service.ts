import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'
import {PostsI} from '../models/posts.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  static getToken() {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient , private cookies: CookieService) { 
  }

  login(user: any):Observable<any>{
    return this.http.post<any>('http://api.whit.com.ar:8065/api/login', user);
    //retorno y tomo el metodo post para la llamada de la api,
    //con el observable, espero que me devuelva cualquier valor, con lo cual me suscribo para tomar todos los cambios y obtener una respuesta
  }

  setToken(token: string){
    this.cookies.set("token", token)
  }
  //guardar el token

  getToken(){
    return this.cookies.get("token");
  }
  //recuperar el token


  getAllBlogs():Observable<PostsI[]>{

    return this.http.get<PostsI[]>('http://api.whit.com.ar:8065/api/posts/all');
  }


  postBlog(form:PostsI):Observable<any>{
    return this.http.post<any>('http://api.whit.com.ar:8065/api/posts/add', form)
  }
}
