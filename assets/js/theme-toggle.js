document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('checkbox');
  const body = document.body;
  const currentTheme = localStorage.getItem('theme');

  // Apply saved theme on initial load
  if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
      themeToggle.checked = true;
    }
  } else {
    // Default to light mode if no preference is saved
    // Or, you could check system preference here if desired:
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   body.classList.add('dark-mode');
    //   themeToggle.checked = true;
    //   localStorage.setItem('theme', 'dark-mode');
    // }
  }

  themeToggle.addEventListener('change', function () {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode'); // Or simply remove the item: localStorage.removeItem('theme');
    }
  });
});
