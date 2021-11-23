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
  constructor(private apiUser: UserService,  private interceptor: AuthInterceptorService, private router: Router) { }

  ngOnInit(): void {
    
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.apiUser.getAllBlogs().subscribe((data: any) =>{
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


}
