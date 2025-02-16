// Function to apply the selected theme and update the radio buttons accordingly
function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme); // Apply the theme to the HTML element
    if (theme === 'dark') {
        document.getElementById('darkMode').checked = true;  // Select the dark mode radio button
    } else {
        document.getElementById('lightMode').checked = true; // Select the light mode radio button
    }
}

// Call this function on page load to set the radio buttons based on the current theme
function initializeTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light'; // Default to light theme if none is set
    applyTheme(currentTheme); // Set the theme and select the appropriate radio button
}

// Event listeners for when the user selects a theme using the radio buttons
document.getElementById('lightMode').addEventListener('change', function() {
    if (this.checked) {
        applyTheme('light'); // Apply light theme when selected
    }
});

document.getElementById('darkMode').addEventListener('change', function() {
    if (this.checked) {
        applyTheme('dark'); // Apply dark theme when selected
    }
});

// Example of how the theme can be changed elsewhere in the website (e.g., via a separate button)
function changeThemeExternally(newTheme) {
    applyTheme(newTheme); // Apply the new theme
}

// Initialize theme on page load
initializeTheme();

// Example button to simulate external theme change (replace with your actual theme-switching logic)
document.getElementById('externalThemeChangeButton').addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Toggle theme
    changeThemeExternally(newTheme); // Change theme and update radio buttons
});
