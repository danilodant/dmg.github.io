function cl(params) {
  console.log(params)
}

$(".enviar").click(function (e) {
  e.preventDefault();
  validaCamposContato();
});

function validaCamposContato() {
  var array = $(".form-control");
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if ($(element).val() == '') {
      var nomeDoCampo = $(element).prop("id").substr(7);
      var retorno = criaToast(nomeDoCampo)
      $("#caixaDeToast").append(retorno);
    }
  }
  $(".toast").toast('show');
  destroiToastVelho();
};

function destroiToastVelho() {
  $('.toast').on('hidden.bs.toast', function () {
    $(this).remove();
  })
};

function criaToast(string) {
  var botao = $("<button>").addClass("ml-2").addClass("mb-1").addClass("close").attr("data-dismiss", "toast").attr("aria-label", "close")
  .append($("<span>").attr("aria-hidden","true").html("&times;"));
  var strong = $("<strong>").addClass("mr-auto").text("Aviso");

  var head = $("<div>").addClass("toast-header").append(strong).append(botao);

  var body = $("<div>").addClass("toast-body").text("Campo " + string + " é obrigatório");

  var toast = $("<div>").addClass("toast").attr("role", "alert").attr("aria-live", "assertive").attr("aria-atomic", "true").attr("data-delay","1500000");

  toast.append(head).append(body);

  return toast;
};

{/* <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div> */}