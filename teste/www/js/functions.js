function getsessions() {
  $('span#disciplina').empty();
  $('span#disciplina').append("Aguarde...");
  $('span#serie').empty();
  $('span#serie').append("Aguarde...");
  $('span#turma').empty();
  $('span#turma').append("Aguarde...");

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