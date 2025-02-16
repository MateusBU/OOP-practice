import { Person } from "./person.js";

class Admin extends Person{

    #idAdmin;
    constructor(idAdmin, name, profession, degree, birthdayDate, idCPF, cep){
        super(name, profession, degree, birthdayDate, idCPF, cep);
        this.#idAdmin = idAdmin;
    }

    getIdAdmin(){
        return this.#idAdmin;
    }
}



var admin1 = new Admin("015/04","Carlos RE ", "Manager", "Master", "1980-04-10", "147.987.456-74", "96374-520");