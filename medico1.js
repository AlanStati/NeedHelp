document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.option-button:not(#next-button):not(#return-button)');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.toggle('selected');
        });
    });
});
