import { Component, OnInit } from '@angular/core';
import { Comentarios } from '../linha-tempo/comentarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { Posts } from '../linha-tempo/posts';
import { ComentarioServico } from 'src/app/servicos/servicoComentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios : Comentarios[] = [];
  postAtual : Posts;

  constructor(private http: HttpClient, private comentarioServico: ComentarioServico) { }

  ngOnInit(): void {
    this.postAtual= this.comentarioServico.obterPost();
    this.carregarComentarios();
  }

  chamaApi(): Observable<any>{
    return this.http.get<Comentarios[]>(`https://jsonplaceholder.typicode.com/comments?postId=${this.postAtual.id}`);
  }

  carregarComentarios(){
   this.chamaApi().subscribe(response =>{
      this.comentarios = response;
    }, err => {
      console.log(err);
    })
  }
}
