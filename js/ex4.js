const form = document.getElementById('sampleForm');
const table = document.getElementById('formDataTable');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  
  const rows = table.querySelectorAll('tr:not(:first-child)');
  rows.forEach(row => row.remove());
  
  for (const [key, value] of formData.entries()) {
    const row = table.insertRow();
    const keyCell = row.insertCell(0);
    const valueCell = row.insertCell(1);
    
    keyCell.textContent = key;
    valueCell.textContent = value;
  }
});