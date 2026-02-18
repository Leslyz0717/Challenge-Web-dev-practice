document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-garstin');
    const quoteDiv = document.getElementById('garstin-quote');

    if(toggleButton && quoteDiv) {
        toggleButton.addEventListener('click', function() {
            if(quoteDiv.style.display === 'none' ) {
                quoteDiv.style.display = 'block';
                toggleButton.textContent = 'Hide Garstin\'s words';
            } else {
                quoteDiv.style.display = 'none';
                toggleButton.textContent = 'Show Garstin\'s words';
            }
        });
    }
});