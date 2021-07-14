import { Injectable } from "@angular/core";
import { Usuario } from "../pagina/linha-tempo/usuarios";

@Injectable()
export class UsuarioServico{
    private _usuarios: Usuario[]= [];

    public obterUsuarios(): Usuario[] {
        return this._usuarios;
    }
    public guardarUsuarios(value: Usuario[]) {
        this._usuarios = value;
    }
}