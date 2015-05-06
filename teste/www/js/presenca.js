

function listaalunos() {

  var linhainicial;

  linhainicial = "<tr><td>Aguarde...</td><td>Aguarde...</td></tr>";

  $("#lista_alunos").empty();
  $("#lista_alunos").append(linhainicial);

  $.ajax({
    type: "POST",
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/getalunos',
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

  var chk_presenca = new Array();

  $("input[name='chk_presenca[]']:checked").each(function (i) {
    chk_presenca[i] = $(this).val();
  });

  datapresenca = $('#input_date').val();

  $.ajax({

    type: 'POST',
    url: 'http://localhost/projetos/TCC_WEBSERVICE/inicio/salvaPresenca',
    data: {
      datapresenca: datapresenca,
      chk_presenca: chk_presenca
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

$(document).ready(function () {
  getsessions();
  listaalunos();
  $('#lancar_presenca').click(function () {
    verificaData();
  });
});