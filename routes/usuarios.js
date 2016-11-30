exports.listar = function(req,res){
	req.getConnection(function(err, conexao){
		var sql = conexao.query('select * from usuario', function(err, resultado){
			if (err) 
				console.log("erro no select", err);
			res.render('listar', {title:"Lista", usuario:resultado});
		});
	});
};
exports.inserir = function(req,res){
	res.render('cadastro',{title: "Cadastrar Usuario"});
};
exports.salvar = function(req,res){
	var param = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, conexao){
		var dados = {
			nome: param.nome,
			email: param.email,
			telefone: param.telefone,
			sexo: param.sexo
		};
		var sql = conexao.query("insert into usuario set ?",dados, function(err){
			if(err)
				console.log("Erro ao inserir: %s", err);
			res.redirect("/usuarios");
		})
	})
};
exports.deletar = function(req,res){
	var id = req.params.id_usuario;
	req.getConnection(function(err,conexao){
		conexao.query("delete from usuario where id_usuario = ?",[id],function(err){
			if(err)
				console.log("Erro ao deletar: %s", err);
			res.redirect("/usuarios");
		})
	})
};
exports.editar = function(req,res){
	var id_usuario = req.params.id_usuario;
	req.getConnection(function(err,conexao){
		var sql = conexao.query("select * from usuario where id_usuario = ?",[id_usuario],function(err,resultado){
			if(err)
				console.log("Erro no select por id: %s", err);
			res.render("editar",{title:"Editar Usuario", usuario:resultado});
		});

	});
};
exports.salvar_edicao = function(req, res){
	var param = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id_usuario;

	req.getConnection(function(err, conexao){
		var dados = {
			nome: param.nome,
			email: param.email,
			telefone: param.telefone,
			sexo: param.sexo
		};
		conexao.query("update usuario set ? where id_usuario = ?",[dados,id],function(err){
			if(err)
				console.log("Erro ao Atualizar: %s",err);
			res.redirect("/usuarios");
		});
	});
};