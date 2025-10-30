const lookupBtn = document.getElementById('lookup');
const usernameInput = document.getElementById('username');

lookupBtn.addEventListener('click', async function() {
  const username = usernameInput.value.trim();
  
  if (!username) {
    console.error('Please enter a GitHub username');
    return;
  }
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const user = await response.json();
    
    const profilePic = document.getElementById('profilePic');
    profilePic.innerHTML = `<img src="${user.avatar_url}" alt="Profile picture" style="width: 200px; height: 200px;">`;
    
    document.getElementById('nameCell').textContent = user.name || 'N/A';
    document.getElementById('blogCell').textContent = user.blog || 'N/A';
    document.getElementById('createdCell').textContent = user.created_at || 'N/A';
    
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
  }
});