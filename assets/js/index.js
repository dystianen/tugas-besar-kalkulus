const resultSuccess = document.getElementById('result-success');
const resultError = document.getElementById('result-error');

function onChange(type) {
  if (type === 'A') {
    const A = document.getElementById('nilaiA').value;
    document.getElementById('A').innerHTML = A;
  } else if (type === 'B') {
    const B = document.getElementById('nilaiB').value;
    document.getElementById('B').innerHTML = B;
  } else {
    const C = document.getElementById('nilaiC').value;
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

  const denominator = 2 * A;
  const squareroot = Math.sqrt(mutlak);

  if (adrat > 0) {
    x1 = (-B + squareroot) / denominator;
    x2 = (-B - squareroot) / denominator;

    document.getElementById('x1').innerHTML = x1.toFixed(2);
    document.getElementById('x2').innerHTML = x2.toFixed(2);
    resultSuccess.style.display = 'block';
    resultError.style.display = 'none';
  } else {
    resultSuccess.style.display = 'block';
    let x_second = (-1 * B) / denominator;
    let positive_num_sec = (squareroot / denominator).toFixed(2) + 'i';
    let negative_num_sec = ((-1 * squareroot) / denominator).toFixed(2) + 'i';
    document.getElementById('x1').innerHTML = x_second.toFixed(2) + ' + ' + positive_num_sec;
    document.getElementById('x2').innerHTML = x_second.toFixed(2) + ' ' + negative_num_sec;
  }
}

function onReset() {
  document.getElementById('A').innerHTML = 'A';
  document.getElementById('B').innerHTML = 'B';
  document.getElementById('C').innerHTML = 'C';
  resultSuccess.style.display = 'none';
  resultError.style.display = 'none';
  document.getElementById('x1').value = 0;
  document.getElementById('x2').value = 0;
  document.getElementById('nilaiA').value = 0;
  document.getElementById('nilaiB').value = 0;
  document.getElementById('nilaiC').value = 0;
}
