import { Usuario } from "./usuarios";

export class Posts{
    id: number;
    title: String;
    userId: number;
    body: String;
    autor: Usuario;
    
    constructor(id: number, title: String, userId: number, body: String){
        this.id=id;
        this.title=title;
        this.userId=userId;
        this.body=body;
    }
}
  
