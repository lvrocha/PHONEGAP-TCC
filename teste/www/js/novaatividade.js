$(document).ready(function(){
	getsessions();
	carregaTipoAtividade();

	$("a#cadastrar").click(function(){
		var disciplina;
		var serie;
		var turma;
		var tipoatividade;
		var descricao;
		var valor;

		disciplina = $("span#id_disciplina").html();
		serie = $("span#id_serie").html();
		turma = $("span#id_turma").html();
		tipoatividade = $("#tipoatividade").val();
		descricao = $("#descricao").val();
		valor = $("#valor").val();
		
		
		valida_atividade(disciplina, serie, turma, tipoatividade, descricao, valor);
		
	});

});




