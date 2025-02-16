export class Person{
    #name;
    #profession;
    #degree;
    #birthdayDate;
    #idCPF;
    #cep;
    constructor(name, profession, degree, birthdayDate, idCPF, cep){
        this.#name = name;
        this.#profession = profession;
        this.#degree = degree;
        this.#birthdayDate = birthdayDate;
        this.#idCPF = idCPF;
        this.#cep = cep;
    }

    getName(){
        return this.#name;
    } 

    getProfession(){
        return this.#profession;
    } 

    getDegree(){
        return this.#degree;
    } 

    getBirthdayDate(){
        return this.#birthdayDate;
    } 

    getIdCPF(){
        return this.#idCPF;
    } 

    getCep(){
        return this.#cep;
    }

    getAge(){
        let birth = new Date(this.#birthdayDate);
        let today = new Date();
        let age = today.getFullYear() - birth.getFullYear(); 
        
        let monthDiff = today.getMonth() - birth.getMonth();
        let dayDiff = today.getDate() - birth.getDate();

        if((monthDiff < 0) || ((monthDiff == 0) && dayDiff < 0)){
            age--;
        }
        if(age >= 0)
            return age;

        return null;
    }

    setName(name_input){
        this.#name = name_input;
    }
}

//var person1 = new Person("Mateus BU", "Engineer", "Post Graduation", "1997-02-05", "123.456.789-74", "98523-125");