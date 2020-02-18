import { ModelComment } from './ModelComment';

export class ModelPublication {

    id: string;
    id_user: string;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
    likes: number;
    comments: Array<string>;

    constructor(id_user: string, author: string) {
        this.id_user = id_user;
        this.author = author;
        this.comments = new Array<string>();
        this.likes = 0;
    }
}