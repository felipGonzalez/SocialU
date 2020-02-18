export class ModelComment{

    _id: string;
    comment: string;
    autor_comment: string;
    date_comment: string;

    constructor(autor_comment: string){
        this.autor_comment = autor_comment;
    }
}