

function lista_alunos() {

  var linhainicial;

  linhainicial = "<tr><td>Aguarde...</td><td>Aguarde...</td></tr>";

  $("#lista_alunos").empty();
  $("#lista_alunos").append(linhainicial);

  $.ajax({
    type: "POST",
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/lista_alunos',
    ContentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      $("#lista_alunos").empty();
      $.each(data, function (i, item) {

        linhainicial = "<tr><td>" + data[i].nome + "</td><td><input name='chk_presenca[]' type='checkbox' class='chk_presenca' id='chk_presenca' value='" + data[i].id + "' /></td></tr>";

        $("#lista_alunos").append(linhainicial);
      });
    },
    complete: function () {

    }
  });
}

function salvarPresenca() {

  var datapresenca;
  var id_disciplina;

  var chk_presenca = new Array();

  $("input[name='chk_presenca[]']:checked").each(function (i) {
    chk_presenca[i] = $(this).val();
  });

  datapresenca = $('#input_date').val();

  id_disciplina = $('#id_disciplina').html();

  $.ajax({

    type: 'POST',
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/registraPresenca',
    data: {
      datapresenca: datapresenca,
      chk_presenca: chk_presenca,
      id_disciplina: id_disciplina
    },
    success: function (data) {
      if (data == '1') {
        $("#myResponse").html('<div class="alert alert-success" role="alert">Presença inserida com sucesso! <a href="principal.html" class="alert-link">Voltar</a></div>');
      } else {
        $("#myResponse").html('<div class="alert alert-danger" role="alert">Houve algum erro durante a inserção!</div>');
      };

    }

  });

  return false;
}

function verificaData() {
  var data = $('#input_date').val();

  if (data == '') {
    alert('Preencha a data que será lançada a presença!');
    return false;
  } else {
    salvarPresenca();
  };
}

function lista_tarefas(){
  
}

function valida_atividade(disciplina, serie, turma, tipoatividade, descricao, valor){
	
	if (disciplina == ""){
		alert("Não existe disciplina setada!");
		return false;
	}else if(serie == ""){
		alert("Não existe serie setada!");
		return false;
	}else if(turma == ""){
		alert("Não existe turma setada!");
		return false;
	}else if(tipoatividade==""){
		alert("Escolha um tipo de atividade!");
		return false;
	}else if(descricao==""){
		alert("Informe uma descrição para atividade");
		return false;
	}else if(valor==""){
		alert("Informe um valor para atividae");
		return false;
	}else{
		cadastraAtividade(disciplina, serie, turma, tipoatividade, descricao, valor);
	}	
}

function cadastraAtividade(disciplina, serie, turma, tipoatividade, descricao, valor){
  $.ajax({
    type: 'POST',
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/cadastra_atividade',
    data: {
      'disciplina' : disciplina,
      'serie' : serie,
      'turma' : turma,
      'tipoatividade' : tipoatividade,
      'descricao' : descricao,
      'valor' : valor,
    },
    success: function(data){      
      $("#resultado").html(data);
    }
  });
}



function getsessions() {
  $('span#disciplina').empty();
  $('span#disciplina').append("Aguarde...");
  $('span#serie').empty();
  $('span#serie').append("Aguarde...");
  $('span#turma').empty();
  $('span#turma').append("Aguarde...");
  $("#id_disciplina").empty();
  $("#id_serie").empty();
  $("#id_turma").empty();
  
  $.ajax({
    type: "POST",
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/getSessions',
    ContentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, item) {
        $('span#disciplina').empty();
        $('span#disciplina').append(data[i].disciplina);
        $('span#serie').empty();
        $('span#serie').append(data[i].serie);
        $('span#turma').empty();
        $('span#turma').append(data[i].turma);
        $("#id_disciplina").append(data[i].id_disciplina);
        $("#id_serie").append(data[i].id_serie);
        $("#id_turma").append(data[i].id_turma);        
      });
    },
    complete: function () {

    }
  });

}

function Disciplinas() {
  $('#disciplina').empty();
  $('#disciplina').append("<option>Aguarde....</option>");
  $.ajax({
    type: "POST",
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/dropdown_disciplina',
    ContentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      $('#disciplina').empty();
      $('#disciplina').append("<option>Selecione a Disciplina</option>");
      $.each(data, function (i, item) {
        $('#disciplina').append("<option value='" + data[i].id + "'>" + data[i].descricao + "</option>");
      });
    },
    complete: function () {

    }
  });
};

function carregaTipoAtividade(){
  $("#tipoatividade").empty();
  $('#tipoatividade').append("<option>Aguarde....</option>");
  $.ajax({
    type: "POST",
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/dropdown_tipoatividade',
    ContentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      $('#tipoatividade').empty();
      $('#tipoatividade').append('<option value="" >Selecione o tipo de atividade</option>');
      $.each(data, function (i, item) {
        $('#tipoatividade').append("<option value='" + data[i].id + "'>" + data[i].descricao + "</option>");
      });
    },
    complete: function () {

    }
  });
}


function Serie() {
  var materia = $('#disciplina').val();
  $('#serie').empty();
  $('#serie').append("<option>Aguarde....</option>");
  $.ajax({
    type: "POST",
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/dropdown_serie',
    ContentType: "application/json; charset=utf-8",
    dataType: "json",
    data: {
      'materia': materia
    },
    success: function (data) {
      $('#serie').empty();
      $('#serie').append("<option>Selecione a Série</option>");
      $.each(data, function (i, item) {
        $('#serie').append("<option value='" + data[i].id + "'>" + data[i].descricao + "</option>");
      });
    },
    complete: function () {

    }
  });
};

function atividade(){
  $("#tipoatividade").empty();
  $('#tipoatividade').append("<option>Aguarde....</option>");
    $.ajax({
    type: "POST",
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/dropdown_tipoatividade',
    ContentType: "application/json; charset=utf-8",
    dataType: "json",
    data: {
      'serie': serie
    },
    success: function (data) {
      $('#tipoatividade').empty();
      $('#tipoatividade').append("<option>Selecione o tipo da atividade</option>");
      $.each(data, function (i, item) {
        $('#tipoatividade').append("<option value='" + data[i].id + "'>" + data[i].descricao + "</option>");
      });
    },
    complete: function () {

    }
  });
}

function Turma() {
  var serie = $('#serie').val();
  $('#turma').empty();
  $('#turma').append("<option>Aguarde....</option>");
  $.ajax({
    type: "POST",
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/dropdown_turma',
    ContentType: "application/json; charset=utf-8",
    dataType: "json",
    data: {
      'serie': serie
    },
    success: function (data) {
      $('#turma').empty();
      $('#turma').append("<option>Selecione a Série</option>");
      $.each(data, function (i, item) {
        $('#turma').append("<option value='" + data[i].id + "'>" + data[i].descricao + "</option>");
      });
    },
    complete: function () {

    }
  });
};