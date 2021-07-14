export class Usuario{
    id: number;
    email: String;
    name: String;
    username: String;

    constructor(id: number, email: String, name: String, username: String){
        this.id=id;
        this.email=email;
        this.name= name;
        this.username= username;
    }
}