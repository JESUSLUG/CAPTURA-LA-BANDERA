$(document).ready(function() {
    // Ocultar todas las descripciones al cargar la página
    $('.desc').hide();

    // Mostrar u ocultar las descripciones al hacer clic en las "bolitas"
    $('.flag').click(function() {
        // Mostrar la descripción correspondiente
        $(this).closest('li').find('.desc').toggle();
    });
 // Verificar respuestas al hacer clic en el botón "Verificar"
 $('.check-answer').click(function() {
        var answerInput = $(this).closest('.desc').find('.answer');
        var userAnswer = answerInput.val().toLowerCase();
        var correctAnswer = 'hola'; // Coloca aquí la respuesta correcta correspondiente

        // Compara la respuesta del usuario con la respuesta correcta
        if (userAnswer === correctAnswer) {
            answerInput.prop('disabled', true); // Desactiva el campo de respuesta
            $(this).prop('disabled', true); // Desactiva el botón "Verificar"
            $(this).closest('.desc').find('.result').text('¡Respuesta correcta!');
        } else {
            $(this).closest('.desc').find('.result').text('Respuesta incorrecta. Inténtalo de nuevo.');
        }
    });
});