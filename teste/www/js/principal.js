$(document).ready(function () {
	Disciplinas();
	$('#disciplina').change(function () {
		Serie();
		$('#serie').change(function () {
            Turma();
		});
	});

});

function salvarDados(pagina) {
	//verificar se todos os dados do formulario estao preechidos
    
	if (($('#disciplina').val() == '') || ($('#serie').val() == '') || ($('#turma').val() == '')) {
		alert('Preencha os filtros para continuar!');
	} else {

		var disciplina = $('#disciplina').val();
		var serie = $('#serie').val();
		var turma = $('#turma').val();

		$.ajax({
            type: 'POST',
            url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/salva_sessions',
            data: {
				'disciplina': disciplina,
				'serie': serie,
				'turma': turma
            },
            success: function (data) {
				window.location.href = pagina + ".html";
            },
            error: function (xhr, type) {
				alert('Houve algum erro no servidor. Contacte o Administrador!');
            }



		});
		return false;
	};
}