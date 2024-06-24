document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.option-button:not(#next-button):not(#return-button)');
    var nextButton = document.getElementById('next-button');

    nextButton.addEventListener('click', function() {
        var dorAoMovimentarSelected = false;

        buttons.forEach(function(button) {
            if (button.textContent.trim() === 'Dor ao movimentar' && button.classList.contains('selected')) {
                dorAoMovimentarSelected = true;
            }
        });

        if (dorAoMovimentarSelected) {
            window.location.href = 'ficha3.html';
        } else {
            window.location.href = 'ficha.html';
        }
    });

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.toggle('selected');
        });
    });
});
