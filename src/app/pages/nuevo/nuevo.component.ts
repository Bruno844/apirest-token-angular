import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { PostsI } from '../../models/posts.interface';
import { UserService } from '../../user/user.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public nuevoForm : FormGroup;

  constructor(private fb:FormBuilder, private route: Router, private apiService: UserService) { 
    this.nuevoForm = fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  salir(){
    this.route.navigate(['dashboard'])
  }

  postForm(form: PostsI){
    this.apiService.postBlog(form).subscribe(data =>{
      console.log(data);
      this.route.navigate(['dashboard']);
      alert('creado con exito!');
    })
  }
}
