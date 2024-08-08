const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const campoA = document.getElementById('campoA').value;
  const campoB = document.getElementById('campoB').value;

  if (campoB > campoA) {
    resultDiv.innerHTML = '<p style="color: green;">Formulário válido!</p>';
  } else {
    resultDiv.innerHTML = '<p style="color: red;">Formulário inválido. Campo B deve ser maior que Campo A.</p>';
  }
});