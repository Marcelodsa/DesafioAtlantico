import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageServico } from './servicos/localStorageServico';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atlantico-social';

  constructor (private localStorageServico: LocalStorageServico, private router: Router){}

  mostrarNavbar():boolean{
    if (this.localStorageServico.get("usuarioAtual") != null ){
      return true;
    }
    return false;
  }

  logout(): void{
    console.log("pau no cu do vitor");
    this.localStorageServico.clear();
    this.router.navigate(['/login']);
  }
}
