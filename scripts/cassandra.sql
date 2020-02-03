use socialU;

create table publication(
    id text primary key,
    id_user text, 
    title text, 
    content text, 
    author text, 
    date Date, 
    category text,
    comments set<text>,
    likes int
);

insert into publication(id, id_user, title, content, author, date, category, comments, likes) values (now(),'123', 'ejemplo', 'este es el contenido', 'Felipe Gonzalez', '2020-6-20', 'cine', ['1', '2'], 3);

insert into theme JSON 
    {
        "name": "Geek", "description":"1"
    },
    {
        "name": "Cultura", "description":"2"
    }
    ;

    create type theme(
        name text,
        description text
    );

    create table themes(
        id int PRIMARY KEY,
        theme list<frozen<theme>>
    );

    create table publication(
    id_user text,
    title text,
    content text,
    author text,
    date text,
    category text,
    likes int,
    comments list<text>
    )

    create table publication(
        id text primary key,
        id_user text,
        author text,
        title text,
        category text,
        content text,
        date text,
        likes int,
        comments list<text>
    )

    INSERT into themes (theme) VALUES ({{"name":"hello", "description": "world"}});

    INSERT into ejemplo JSON '
        {
            "id": 1,
            "id_user": "id",
            "title": "title123",
            "content": "contenido", 
            "author": "Felipe", 
            "date": "2020-10-02",
            "category": "deporte", 
            "likes":2 
    }';


    db.publication.aggregate([
     {
         $project: { _id: 0}
     }
    ]);