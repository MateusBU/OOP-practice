import { Person } from "./person.js";

class User extends Person{
    #idUser;
    #sector;
    #salaryHour;
    constructor(idUser, sector, salaryHour, name, profession, degree, birthdayDate, idCPF, cep){
        super(name, profession, degree, birthdayDate, idCPF, cep);
        this.#idUser = idUser;
        this.#sector = sector;
        this.#salaryHour = salaryHour;
    }

    getIdUser(){
        return this.#idUser;
    }

    getSector(){
        return this.#sector;
    }

    getSalaryHour(){
        return this.#salaryHour;
    }

    getSalaryMonth(hours, extraHours){
        let extraHoursTotal = 0;
        if(extraHours > 20){
            extraHoursTotal = (20 * 0.5 * this.getSalaryHour()) + ((extraHours - 20) * this.getSalaryHour());
        }
        else{
            extraHoursTotal = (extraHours * 0.5 * this.getSalaryHour());
        }

        
        return (hours * this.getSalaryHour()) + extraHoursTotal;
    }
}

var user1 = new User("100/04","R&D", "20","Mateus BU", "Engineer", "Post Graduation", "1997-02-05", "123.456.789-74", "98523-125");

console.log(user1.getIdUser());

console.log(user1.getSalaryMonth(10,21));