import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';

import {Router} from '@angular/router' //modulo que nos permite que si el usuario esta logeado, lo lleve a la pagina principal

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;


  constructor(private userService: UserService , private router: Router) { }

  ngOnInit(): void {
    this.checkToken();
  } //el ngOninit sirve para ejecutar funciones apenas inicie la aplicacion

  checkToken(){
    if(this.userService.getToken()){
      this.router.navigate(['dashboard'])
    }
  } //funcion, que si existe un token en nuestro local storage o cookie, nos redireccione enseguida a la ventana principal, en vez de andar iniciando a cada rato

  login(){
    const user = {email: this.email , password: this.password};
    this.userService.login(user)
    .subscribe(data => {
      this.userService.setToken(data.token); //tome el token que llama desde la api
      this.router.navigate(['dashboard']); //si el inicio de sesion resulto correcto,me redirija a la pagina de dashboard
    })
    //muestro por consola los valores obtenidos por las variables de email y password, que estarian guardadas en const user
  }

}
