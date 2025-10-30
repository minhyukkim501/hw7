const form = document.getElementById('countriesForm');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  try {
    const name = document.getElementById('name').value.trim();
    
    const checkboxes = document.querySelectorAll('input[name="country"]:checked');
    const countries = [];
    
    checkboxes.forEach(checkbox => {
      countries.push({
        name: checkbox.value,
        year: parseInt(checkbox.getAttribute('data-year'))
      });
    });
    

    const data = {
      name: name,
      countries: countries
    };
    
    console.log('Sending data:', data);
    

    const response = await fetch('https://thejsway-server.herokuapp.com/api/countries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.text();
    console.log(result);
    
  } catch (error) {
    console.error('Error:', error);
  }
});