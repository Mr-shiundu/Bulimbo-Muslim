
const upButton = document.querySelector('.up');

upButton.addEventListener('click', () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Get all links with hash (#) within the document
const links = document.querySelectorAll('a[href^="#"]');

// Iterate over each link
links.forEach(link => {
    // Add click event listener to each link
    link.addEventListener('click', function(e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Get target element ID from href attribute
        const targetId = this.getAttribute('href').substring(1);

        // Find the target element based on ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll to the target element with smooth behavior
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
