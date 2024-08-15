function togglePopup(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the popup element
    const popup = document.getElementById('popup');

    // Toggle the 'hidden' class to show or hide the popup
    if (popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');
    } else {
        popup.classList.add('hidden');
    }
}
