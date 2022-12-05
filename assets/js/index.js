const resultSuccess = document.getElementById('result-success');
const resultError = document.getElementById('result-error');

function onSubmit() {
  const A = Number(document.getElementById('nilaiA').value);
  const B = Number(document.getElementById('nilaiB').value);
  const C = Number(document.getElementById('nilaiC').value);

  const adrat = Math.pow(B, 2) - 4 * A * C;

  let x1 = 0;
  let x2 = 0;

  if (adrat > 0) {
    x1 = (-B + Math.sqrt(adrat)) / (2 * A);
    x2 = (-B - Math.sqrt(adrat)) / (2 * A);

    document.getElementById('x1').innerHTML = x1.toFixed(2);
    document.getElementById('x2').innerHTML = x2.toFixed(2);
    resultSuccess.style.display = 'block';
    resultError.style.display = 'none';
  } else {
    resultError.style.display = 'block';
  }
}

function onReset() {
  resultSuccess.style.display = 'none';
  resultError.style.display = 'none';
  document.getElementById('x1').value = 0;
  document.getElementById('x2').value = 0;
  document.getElementById('nilaiA').value = 0;
  document.getElementById('nilaiB').value = 0;
  document.getElementById('nilaiC').value = 0;
}
