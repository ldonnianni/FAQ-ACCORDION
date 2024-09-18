// Path to the plus and minus icons
const plusIconSrc = './assets/images/icon-plus.svg';
const minusIconSrc = './assets/images/icon-minus.svg'

// Function to close all accordion items except the clicked one
function closeAllAccordions(excludeHeader) {
    document.querySelectorAll('.accordion-header').forEach(header => {
        if (header != excludeHeader) {
        header.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
        header.nextElementSibling.classList.remove('open');
        header.querySelector('.toggle-icon').src = plusIconSrc
        };
    })
}


// Function to toggle de accordion content
function toggleAccordion(event) {
    const header = event.currentTarget;
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');
    
    //close all other accordions except the current one
    closeAllAccordions(header);


    // Toggle the current accordion
    if(isOpen) {
        content.classList.remove('open');
        header.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
        header.querySelector('.toggle-icon').src = plusIconSrc;
    } else {
        content.classList.add('open');
        header.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        header.querySelector('.toggle-icon').src = minusIconSrc
    }

}



// Add event listeners to all accordion headers

document.querySelectorAll('.accordion-header').forEach(header => {
    // Click event to toggle the accordion content
    header.addEventListener('click', toggleAccordion);

    // Keydown event to handle Enter key to toggle the accordion
    header.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            toggleAccordion(event)
        }
    })
})