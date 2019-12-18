import { ModelInterest } from './ModelInterest'

export class ModelUser {

    _id: string;
    nameUser: string;
    firtsName: string;
    lastName: string;
    gender: string;
    dateBirth: string;
    career: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    interestList: Array<ModelInterest>;
}