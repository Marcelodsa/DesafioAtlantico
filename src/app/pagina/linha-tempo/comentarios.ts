export class Comentarios{
    id: number;
    postId: number;
    email: String;
    body: String;

    constructor(id: number, postId: number, email: String, body: String){
        this.id= id;
        this.postId= postId;
        this.email= email;
        this.body= body;
    }
}