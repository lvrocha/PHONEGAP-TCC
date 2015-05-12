$(document).ready(function () {
  getsessions();
  lista_alunos();
  $('#lancar_presenca').click(function () {
    verificaData();
  });
});