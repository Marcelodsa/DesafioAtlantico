import { Injectable } from "@angular/core";
import { Posts } from "../pagina/linha-tempo/posts";


@Injectable()
export class ComentarioServico{
    private _post: Posts ;

    public obterPost(): Posts {
        return this._post;
    }
    public guardarPost(value: Posts) {
        this._post = value;
    }
}