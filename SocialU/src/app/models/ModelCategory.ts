export class ModelCategory{
    
    constructor(_id: string, title: string, content: string, urlImg: string){
        this._id = _id;
        this.title = title;
        this.content = content;
        this.urlImg = urlImg;
    }

    _id: string;
    title: string;
    content: string;
    urlImg: string;
}