## CRUD-NodeJS


> Node js 

> ejs 

> Express JS 3  Deprecated &#x1F534;

> MySQL

### Dependencies
>package.json

```json
"dependencies": {
		"ejs":"^1.0.0",
		"express": "3.5.1",
		"express-myconnection": "1.0.4",
		"mysql": "2.2.0"
}
```

### Query Tables

```sql
  CREATE TABLE USUARIO(
    id_usuario BIGINT not_null auto_increment primary key,
    nome varchar(255),
    email varchar(255),
    telefone varchar(20),
    sexo char(1)
  );

```
