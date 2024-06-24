document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');
    
    modal.style.display = 'block';
   
    closeButton.onclick = function() {
        modal.style.display = 'none';
        window.location.href = 'index.html'; 
    }
   
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            window.location.href = 'index.html'; 
        }
    }
});
