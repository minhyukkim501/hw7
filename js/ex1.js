async function loadPaintings() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const paintings = await response.json();
    
    const tableBody = document.querySelector('#paintings tbody');
    
    paintings.forEach(painting => {
      const row = tableBody.insertRow();
      
      const nameCell = row.insertCell(0);
      const yearCell = row.insertCell(1);
      const artistCell = row.insertCell(2);
      
      nameCell.textContent = painting.name;
      yearCell.textContent = painting.year;
      artistCell.textContent = painting.artist;
    });
    
  } catch (error) {
    console.error('Error loading paintings:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadPaintings);