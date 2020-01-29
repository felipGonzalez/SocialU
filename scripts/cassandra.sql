use socialU;

create table publication(
    id uuid primary key,
    id_user text, 
    title text, 
    content text, 
    author text, 
    date Date, 
    category text,
    comments set<text>,
    likes int
);

insert into publication(id, id_user, title, content, author, date, category, comments, likes) values (now(),'123', 'ejemplo', 'este es el contenido', 'Felipe Gonzalez', '2020-6-20', 'cine', {'1', '2'}, 3);

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

    INSERT into themes (theme) VALUES ({{"name":"hello", "description": "world"}});

    INSERT into themes JSON 'theme: {{"name":"hello", "description": "world"}}';