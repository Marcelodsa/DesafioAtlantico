import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { Usuario } from '../linha-tempo/usuarios'
import { UsuarioServico } from 'src/app/servicos/servicoUsuario';
import { LocalStorageServico } from 'src/app/servicos/localStorageServico';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: Usuario[]= [];
  constructor(private router: Router, private http: HttpClient, private usuarioServico: UsuarioServico, private localStorageServico: LocalStorageServico) { }

  username="";
  ngOnInit(): void {
    this.carregarPosts();
  }

  chamaApi(): Observable<any>{
    return this.http.get<Usuario[]>("https://jsonplaceholder.typicode.com/users");
  }

  carregarPosts(){
    this.chamaApi().subscribe(response =>{
      this.usuarios = response;
      
      //console.log(JSON.stringify(this.usuarios));
    
    }, err => {
      //this.toastr.error("Erro!", "Não foi possível obter o histórico de imagens, falha ao se comunicar com o servidor", {progressBar : true});
      console.log("deu rim");
    })
  }

  login():void {
    if(this.username == 'admin'){
      this.localStorageServico.set("usuarioAtual", this.username);
      this.usuarioServico.guardarUsuarios(this.usuarios);
      this.router.navigate(["linha-tempo"]);
    }else {
      alert("Invalid credentials");
    }
  }


  
}
