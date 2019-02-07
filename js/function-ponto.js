$(document).ready(function () {
  $("body")
    .hide()
    .delay("200")
    .fadeIn("slow");

  $("#mesSelect").hide();
  $("#btnimprimir").hide();
  $("#tabela").hide();
  $("#btnVoltar").hide();
  $("#linha").hide();
  $("#rodap").hide();

  var inputs = $("input").on("keyup", verificarInputs);
  function verificarInputs() {
    const preenchidos = inputs.get().every(({ value }) => value);
    $("button").prop("disabled", !preenchidos);
  }

  // $("#Nomeassinatura").hide();

  $("#btntabela").click(function () {
    $("#btnimprimir").removeAttr("disabled");
  });

  $("#mes").change(function () {
    var option = $("#mes option:selected").text();
    document.getElementById("mesSelect").innerHTML = option;
  });

  $("#nome2").on("change", function () {
    var local = $(this).val();

    $("#cargo2").val(local);
  });
});

(function () {
  var local = document.getElementById("nome2");
  var option = "";
  var jsonData = [
    {
      nome: "Funcionário 01º",
      cargo: "Estagiário"
    },
    {
      nome: "Funcionário 02º",
      cargo: "Desenvolvedor"
    },
    {
      nome: "Funcionário 03º",
      cargo: "Desenvolvedor Web"
    },
    {
      nome: "Funcionário 04º",
      cargo: "Administrativo"
    },
    {
      nome: "Funcionário 05º",
      cargo: "Desenvolvedora Front end"
    }
  ];

  jsonData.forEach(function (i) {
    var opt1 = document.createElement("option");
    opt1.text = i.nome;
    opt1.value = i.cargo;
    local.add(opt1, null);
  });
})();

(function buscaMes() {
  var mesAno = new Array(
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "dezembro"
  );

  var diaAssinatura;
  var now = new Date();
  diaAssinatura = now.getDate();
  diaAssinatura = diaAssinatura < 10 ? "0" + diaAssinatura : diaAssinatura;
  document.getElementById("dataAssinatura").innerText =
    diaAssinatura +
    " de " +
    mesAno[now.getMonth()] +
    " de " +
    now.getFullYear();
})();

var SelectFeriado;
function foo(select) {
  SelectFeriado = select.closest("tr").cells;
  var mensagem = "<td>Feriado</td>";
  console.log(select.closest("tr td select").value)
  if (select.value.toLowerCase() == "vazio") mensagem = "<td>---</td>";

  for (var i = 0; i < SelectFeriado.length; i++) {
    if (i > 0 && i < 6) {
      SelectFeriado[i].innerHTML = mensagem;
    }
  }
  horasTotais();
}

function calculaHora(inicio, fim) {
  var horaInicio = inicio.split(":")[0],
    minutoInicio = inicio.split(":")[1];

  var horaFim = fim.split(":")[0],
    minutoFim = fim.split(":")[1];

  var diferencaHora = horaFim - horaInicio;
  var diferencaMinutos = minutoFim - minutoInicio;

  return diferencaHora * 60 + diferencaMinutos;
}

function montaHora(valor) {
  return formataNumero(parseInt(valor / 60)) + ":" + formataNumero(valor % 60);
}

function formataNumero(numero) {
  if (numero < 10) return "0" + numero;

  return numero;
}

function ponth() {
  $("#mesSelect").fadeIn("slow");
  $("#tabela").fadeIn("slow");
  $("#btnimprimir").fadeIn("slow");
  var nome = $("#nome2 option:selected").text();
  $("#nome1").text(nome + " - ");
  var cargo = $("#cargo2").val();
  $("#cargo1").text(cargo);

  // var barra = "_______________________________";
  // $("#barra").text(barra);

  var assinatura = "Assinatura do Funcionário";
  $("#assinatura").text(assinatura);

  var Ano = $("#ano2").val();
  $("#ano1").text(Ano);
  var Ano = document.getElementById("ano2").value; //Nome

  document.getElementById("ano1").innerHTML = "/ " + Ano;
  var entrada, saida;
  var e = document.getElementById("mes");
  var itemSelecionado = e.options[e.selectedIndex].value;
  //isntanciando o objeto date
  var data = new Date("01");
  //montando os dias, meses e anos.
  dia = data.getDay();
  mes = document.getElementById("mes");
  ano = document.getElementById("ano2").value;
  //Ajeitando com o zero a esquerda
  dia = dia < 10 ? "0" + dia : dia;
  mes = itemSelecionado;
  data_pronta = dia + "/" + mes + "/" + ano;

  document.getElementById("tbody").innerHTML = "comandos";
  let lastDay = new Date(ano, +mes + 1, 0);
  console.log(mes);
  let newdate = new Date();
  let body = "";

  //DECLARAÇÃO DE ARRAYS
  document.getElementById("tbody").innerHTML = "";

  for (let i = 1; i <= lastDay.getDate(); i++) {
    //dias da sema = na
    newdate = new Date(ano, mes, i);
    var radom = Math.floor(Math.random() * 10 + 1);

    diaSemana = newdate.getDay();
    entrada = retornaHora(1);
    saida = retornaHora(2);

    this.numEntrada = entrada.minutosEntrada;
    this.cal_hora = entrada.horaEntrada + entrada.minutosEntrada;
    this.cal_hora2 = entrada.horaAlmoco + entrada.minutosAlmoco;
    if (diaSemana == 0 || diaSemana == 6) {
      entrada.horaEntrada = "-";
      entrada.minutosEntrada = "--";
      entrada.horaAlmoco = "-";
      entrada.minutosAlmoco = "--";
      //saida
      saida.horaEntrada = "-";
      saida.minutosEntrada = "--";
      saida.horaAlmoco = "-";
      saida.minutosAlmoco = "--";
      entrada.final_hora = "-";
      cal_hora = "--";
      hora_diafinal = "---";
    }
    var horasDias = +calculaHora(
      entrada.horaEntrada + entrada.minutosEntrada,
      entrada.horaAlmoco + entrada.minutosAlmoco
    );
    horasDias += +calculaHora(
      saida.horaEntrada + saida.minutosEntrada,
      saida.horaAlmoco + saida.minutosAlmoco
    );

    let dataValida =
      diaSemana == 0 || diaSemana == 6 ? "---" : montaHora(horasDias);

    body +=
      "<tr align='center'>" +
      "<td>" +
      formataNumero(i) +
      "/" +
      formataNumero(+mes + 1) +
      "/" +
      ano +
      "</td>" +
      "<td>" +
      entrada.horaEntrada +
      entrada.minutosEntrada +
      "</td>" +
      "<td>" +
      entrada.horaAlmoco +
      entrada.minutosAlmoco +
      "</td>" +
      "<td>" +
      saida.horaEntrada +
      saida.minutosEntrada +
      "</td>" +
      "<td>" +
      saida.horaAlmoco +
      saida.minutosAlmoco +
      "</td>" +
      "<td>" +
      dataValida +
      "</td>" +
      "<td><select onchange=foo(this) id'status'>" +
      "<option values='0'>Nao</option>" +
      "<option values='1'>Sim</option>" +
      "<option values='2'>Vazio</option>" +
      "</td>" +
      "</tr>";
  }
  body +=
    "<tr align='center'>" +
    "<td>" +
    "</td>" +
    "<td>" +
    "</td>" +
    "<td>" +
    "</td>" +
    "<td>" +
    "</td>" +
    "<td>" +
    "Total Mês:" +
    "</td>" +
    "<th id='tot_horas'>" +
    "</th>" +
    "<td></td>" +
    "</tr>";
  horasDias = 0;
  //pega os dias da td e faz a conta
  var tr = document.getElementsByTagName("td");
  for (let i = 1; i <= tr.length - 2; i++) {
    let finaldia = td[i].childNodes[(1, 2, 3, 4)].textContent.split(":")[1];
    if (finaldia != undefined) pegafinaldia += +finaldia;
  }
  //final conta
  document.getElementById("tbody").innerHTML = body;
  horasTotais();
}
function horasTotais() {
  //pega os valores da tr e soma
  var tr = document.getElementsByTagName("tr");
  var minutosTotais = 0;
  for (let i = 1; i <= tr.length - 2; i++) {
    let td = tr[i].childNodes[5].textContent.split(":");
    if (td.length > 1) minutosTotais += +(td[0] * 60) + +td[1];
  }
  document.getElementById("tot_horas").innerText = montaHora(minutosTotais);
}

function retornaHora(horario) {
  var minutosSaida = Math.floor(Math.random() * 10 + 1);
  var diferencaSaida = Math.floor(Math.random() * 56 + 1);
  var minutos;
  var minutos2;
  var diferenca = Math.floor(Math.random() * minutosSaida + 1);

  minutos = minutosSaida + diferenca;
  if (horario == 1) {
    //Manha
    return {
      horaEntrada: "08:",
      minutosEntrada: formataNumero(diferenca),
      horaAlmoco: "12:",
      minutosAlmoco: formataNumero(minutosSaida),
      final_hora: "08:",
      minutos
    };
  } else if (horario == 2) {
    //Tarde
    return {
      horaEntrada: "14:",
      minutosEntrada: formataNumero(minutosSaida),
      horaAlmoco: "18:",
      minutosAlmoco: formataNumero(diferencaSaida),
      minutos
    };
  }
}
function imprimir() {
  // var elements = document.getElementById("cadastro");
  // elements.style.display = "none";
  // var elements = document.getElementById("mes");
  // elements.style.display = "none";
  // var elements = document.getElementById("imp");
  // elements.style.display = "none";
  // var elements = document.getElementById("btntabela");
  // elements.style.display = "none";
  $("#cadastro").hide();
  $("#mes").hide();
  $("#btntabela").hide();

  $("#btnimprimir").hide();

  $("#linha").fadeIn("slow");

  $("#rodap")
    .fadeIn("slow")
    .delay("100");

  const filename = $("#nome2 option:selected").text();;

  html2canvas(document.querySelector("#nodeToRenderAsPDF")).then(canvas => {
    let pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 10, 211, 211);
    pdf.save(filename);
  });
  //alterar
  $("#rodap").hide();
  $("#linha").hide();
  $("#btnVoltar").fadeIn("slow");
}
