   /**
	*
	* Dependencias de Modulos
	*
	*/

	var express = require("express");
	var routes = require("./routes");
	var http = require("http");
	var path = require("path");

	var usuarios = require("./routes/usuarios");
	var app = express();

	var conexao = require("express-myconnection");
	var mysql = require("mysql");

	// todos os ambientes

	app.set("views", path.join(__dirname, "views"));
	app.set("view engine", "ejs");
	
	app.use(express.logger("dev"));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());

	app.use(express.static(path.join(__dirname, "public")));

	app.use(
		conexao(mysql,{
			host: "localhost",
			user: "root",
			password: "root",
			port: 3307,
			database:"mydb"
		}, "pool")
	);

	app.get("/", routes.index);
	app.get("/usuarios", usuarios.listar);
	app.get("/usuarios/cadastro", usuarios.inserir);
	app.post("/usuarios/cadastro", usuarios.salvar);
	app.get("/usuarios/excluir/:id_usuario", usuarios.deletar);
	app.get("/usuarios/editar/:id_usuario", usuarios.editar);
	app.post("/usuarios/editar/:id_usuario", usuarios.salvar_edicao);

	app.use(app.router);

	http.createServer(app).listen(3000, function(){
		console.log("Servidor do Crud rodando...");
	});





