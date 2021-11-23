import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private cookie: CookieService) {}

    // Implementaciòn del metodo, que obtendrá la petición y la alterará (como su nombre lo dice “intercepta”), retornando un Observable 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.cookie.get('token');
        let request = req;

        //Validamos si el token existe
        if (token) {
            //Clonamos el token y lo mandamos en la cabecera de todas las peticiones HTTP
            request = req.clone({
                setHeaders: {
                //Autorizaciòn de tipo Bearer + token
                authorization: `Bearer ${ token }`
                }
            });
        }
        return next.handle(request); //retorna el evento que le pasamos por parametro, en este caso la request del token clonada
    }
}