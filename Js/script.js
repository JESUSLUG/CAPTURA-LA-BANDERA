$(document).ready(function() {
    // Ocultar todas las descripciones al cargar la página
    $('.desc').hide();

    // Puntuación inicial
    var score = 0; // Puntaje inicial con 100 puntos (puedes ajustar esto)

    // Función para actualizar la puntuación
    function updateScore(points) {
        score += points;
        $('.score').text('Puntos: ' + score);
    }

    // Función para desbloquear una pregunta si el usuario tiene suficientes puntos
    function unlockQuestion(pointsRequired, questionDesc) {
        if (score >= pointsRequired) {
            // Mostrar una confirmación antes de descontar los puntos
            var confirmation = confirm("¿Deseas descontar 100 puntos para ver la descripción?");
            if (confirmation) {
                // Descuenta los puntos
                score -= pointsRequired;
                $('.score').text('Puntos: ' + score);
    
                // Muestra la descripción y la pista
                $(questionDesc).show(); // Muestra la descripción de la pregunta
                $(questionDesc + ' .hint').text('La pista es: ¡Aquí va la pista!'); // Agrega la pista
            }
        } else {
            alert("No tienes suficientes puntos para desbloquear esta pregunta.");
        }
    }

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
            updateScore(100); // Suma 100 puntos por respuesta correcta
        } else {
            $(this).closest('.desc').find('.result').text('Respuesta incorrecta. Inténtalo de nuevo.');
        }
    });

    // Bloquear la pregunta inicialmente
    $('.desc-question1').hide();

    // Desbloquear la pregunta 1 si el usuario tiene suficientes puntos
    $('.unlock-question1').click(function() {
        var pointsRequired = 100; // Puntos necesarios para desbloquear esta pregunta
        var questionDesc = '.desc-question1'; // Selector de la descripción de la pregunta
        unlockQuestion(pointsRequired, questionDesc);
    });

    // Puedes agregar más preguntas y botones de desbloqueo siguiendo el mismo patrón

});

