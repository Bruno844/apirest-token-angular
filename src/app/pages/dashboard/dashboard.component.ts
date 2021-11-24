import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service';
import {AuthInterceptorService} from '../../user/auth-interceptor.service';
import {Router} from '@angular/router';
import {PostsI} from '../../models/posts.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posteos!: PostsI[];

  public islogged: boolean = false; //SE INICIA EN FALSO
  public yetlogged:boolean = true;

  constructor(private userService: UserService,  private interceptor: AuthInterceptorService, private router: Router) { }

  ngOnInit(): void {

    //SI EL TOKEN LO TIENE EL USUARIO,PODRA MOSTRAR EL BOTON DE AGREGAR UN NUEVO POST
    if(this.userService.getToken()){
      this.islogged = true;
      this.yetlogged = false;
    }else{
      this.islogged;
    }

    //----------------me muestre todos los post una vez iniciada el componente
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.userService.getAllBlogs().subscribe((data: any) =>{
      console.log(data);
      this.posteos = data.posts //el posts hace referencia al objeto que me trae la api
    }, error => {
      console.log(error);
    })
  }

  //metodo que recibe un evento al dar click en crear nuevo post
  nuevoPost(){
   this.router.navigate(['nuevo'])
  }

  //redireccion hacia login si mo esta registrado
  redirectToLogin(){
    this.router.navigate(['login']);
  }


}

