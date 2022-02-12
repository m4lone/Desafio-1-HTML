$(function () {
  $("#answer").on("submit", function (e) {
    e.preventDefault();
    let resultadoSelecionado = $("input:checked");
    const resultado = {
      selecionado: resultadoSelecionado.val(),
      certo: $(".resposta-certa").val(),
    };

    if (resultado.selecionado == resultado.certo) {
      resultadoSelecionado.parent().addClass("resultado_certo");
    } else {
      resultadoSelecionado.parent().addClass("resultado_errado");
    }
    $("input[type=submit]").prop("disabled", true);
    $("input[type=radio]").prop("disabled", true);

    setInterval(function () {
      window.location.reload();
    }, 6000);
  });
});
