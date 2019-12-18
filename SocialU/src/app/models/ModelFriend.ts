export class ModelFriend{

    constructor(nameUser: string, firtsName: string, lastName: string, gender: string,
        dateBirth: string, career: string, email: string, phone: string){
        this.nameUser = nameUser;
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateBirth = dateBirth;
        this.career = career;
        this.email = email;
        this.phone = phone;
    }

    nameUser: string;
    firtsName: string;
    lastName: string;
    gender: string;
    dateBirth: string;
    career: string;
    email: string;
    phone: string;
}