document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.option-button:not(.return-button)');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
        });
    });
});
