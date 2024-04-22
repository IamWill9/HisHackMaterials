document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.createElement('button');
    themeToggle.style.cssText = 'position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px; background-color: grey; border: none; cursor: pointer;';
    document.body.appendChild(themeToggle);

    function updateButtonText() {
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Update the button text upon toggle
        updateButtonText();
        // Save the user's theme preference to localStorage
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Check the saved theme preference and update the theme accordingly
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    // Ensure the correct initial button text is set
    updateButtonText();
});
