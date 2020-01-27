export class ModelPublication {

    constructor(_id: string, id_user: string, title: string, content: string, author: string, date: Date, category: string) {
        this._id = _id;
        this.id_user = id_user;
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
        this.category = category;
        
    }


    _id: string;
    id_user: string;
    title: string;
    content: string;
    author: string;
    date: Date;
    category: string;
}