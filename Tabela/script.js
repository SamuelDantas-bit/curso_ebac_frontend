const contactTable = document.getElementById('contact-table');
const contactList = document.getElementById('contact-list');
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
  `;
  contactList.appendChild(newRow);

  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
});