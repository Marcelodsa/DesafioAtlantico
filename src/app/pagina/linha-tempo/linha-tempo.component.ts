import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { Posts } from './posts';
import { Usuario } from './usuarios';
import { UsuarioServico } from 'src/app/servicos/servicoUsuario';
import { ComentarioServico } from 'src/app/servicos/servicoComentario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css']
})
export class LinhaTempoComponent implements OnInit {
  posts : Posts[] = [];
  usuarios : Usuario[]= [];
  showFiller = false;
 
  constructor(
    private http: HttpClient, 
    private usuarioServico: UsuarioServico, 
    private comentarioServico: ComentarioServico, 
    private router: Router) { }

  ngOnInit(): void {
    this.usuarios= this.usuarioServico.obterUsuarios();
    this.carregarPosts();
  }

  chamaApi(): Observable<any>{
    return this.http.get<Posts[]>("https://jsonplaceholder.typicode.com/posts");
  }

  encontrarUsuario(post: Posts): Usuario{
    let usuario:Usuario= this.usuarios.filter(user=>user.id == post.userId)[0];
    return usuario;
  }

  carregarPosts(){
    this.chamaApi().subscribe(response =>{
      this.posts = response;
      this.posts.sort(this.ordenarPosts);
    
    }, err => {
      console.log(err);
    })
  }

  ordenarPosts(a: Posts, b: Posts){
    return b.id - a.id;
  }

  carregarPostComentarios(post:Posts){
    post.autor= this.encontrarUsuario(post);
    this.comentarioServico.guardarPost(post);
    this.router.navigate(["comentarios"]);
  }
}