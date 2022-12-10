const resultSuccess = document.getElementById('result-success');
const resultError = document.getElementById('result-error');

function onChange(type) {
  if (type === 'A') {
    const A = document.getElementById("nilaiA").value;
    document.getElementById('A').innerHTML = A;
  } else if (type === 'B') {
    const B = document.getElementById("nilaiB").value;
    document.getElementById('B').innerHTML = B;
  } else {
    const C = document.getElementById("nilaiC").value;
    document.getElementById('C').innerHTML = C;
  }
}

function onSubmit() {
  const A = Number(document.getElementById('nilaiA').value);
  const B = Number(document.getElementById('nilaiB').value);
  const C = Number(document.getElementById('nilaiC').value);

  const adrat = Math.pow(B, 2) - 4 * A * C;
  const mutlak = Math.abs(adrat);

  let x1 = 0;
  let x2 = 0;

  if (adrat > 0) {
    x1 = (-B + Math.sqrt(mutlak)) / (2 * A);
    x2 = (-B - Math.sqrt(mutlak)) / (2 * A);

    document.getElementById('x1').innerHTML = x1.toFixed(2);
    document.getElementById('x2').innerHTML = x2.toFixed(2);
    resultSuccess.style.display = 'block';
    resultError.style.display = 'none';
  } else {
    resultError.style.display = 'block';
    resultSuccess.style.display = 'none';
  }
}

function onReset() {
  document.getElementById("A").innerHTML = 'A';
  document.getElementById("B").innerHTML = 'B';
  document.getElementById("C").innerHTML = 'C';
  resultSuccess.style.display = 'none';
  resultError.style.display = 'none';
  document.getElementById('x1').value = 0;
  document.getElementById('x2').value = 0;
  document.getElementById('nilaiA').value = 0;
  document.getElementById('nilaiB').value = 0;
  document.getElementById('nilaiC').value = 0;
}
