import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LocalStorageServico } from './servicos/localStorageServico';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private localStorageServico: LocalStorageServico) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        if (this.localStorageServico.get("usuarioAtual") != null ){
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}