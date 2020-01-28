export class ModelComment{

    _id: string;
    comment: string;
    autor_comment: string;
    date_comment: string;

    constructor(_id: string, comment: string, autor_comment: string, date_comment: string){
        this._id = _id;
        this.comment = comment;
        this.autor_comment = autor_comment;
        this.date_comment = date_comment;
    }
}