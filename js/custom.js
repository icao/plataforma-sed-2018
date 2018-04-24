document.addEventListener("DOMContentLoaded", function() {
    addOverlayEvents('presentation');
    addOverlayEvents('financing');
    addOverlayEvents('indices');
    addOverlayEvents('methodology');
    addOverlayEvents('references');
});

const addOverlayEvents = selector => {
    document.querySelector(`.js-open-${selector}`).addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelector(`.overlay-${selector}`).style.display = 'block';
    })

    document.querySelector(`.js-close-overlay-${selector}`).addEventListener('click', (e) => {
        e.preventDefault();

        e.target.parentNode.parentNode.parentNode.style.display = 'none';
    })
}
