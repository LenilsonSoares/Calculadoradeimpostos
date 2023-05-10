window.addEventListener('DOMContentLoaded', function() {
  var btnCalcular = document.getElementById('btnCalcular');

  btnCalcular.addEventListener('click', function() {
      var valorInicial = parseFloat(document.getElementById('txtvalorinicial').value);
      var taxa = parseFloat(document.getElementById('txttaxa').value);
      var periodo = parseInt(document.getElementById('txtperiodo').value);

      if (isNaN(valorInicial) || isNaN(taxa) || isNaN(periodo)) {
          alert('Por favor, preencha todos os campos com valores numéricos.');
          return;
      }

      var juros = (valorInicial * taxa * periodo) / 100;
      var total = valorInicial + juros;

      document.getElementById('txtjuros').value = juros.toFixed(2);
      document.getElementById('txttotal').value = total.toFixed(2);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");
});