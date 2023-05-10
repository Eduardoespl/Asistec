function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hola") {
        return "Hola, puedes preguntarme sobre lo que nesecites!";
    }
    else if (input == "hola") {
        return "Hola, puedes preguntarme sobre lo que nesecites!";
    }
    else if (input == "adios") {
        return "Hablaremos luego!";
    } 
    else if (input == "¿Cuándo se hace el Servicio Social?") {
        return "El Servicio Social puedes realizarlo a partir de 7mo Semestre.";
    }
    else if (input == "cuando se puede hacer el servicio social") {
        return "El Servicio Social puedes realizarlo a partir de 7mo Semestre.";
    }
    else if (input == "¿Cuándo se hace el servicio social?") {
        return "El Servicio Social puedes realizarlo a partir de 7mo Semestre.";
    }
    else if (input == "a partir de que semestre se hace el servicio social") {
        return "El Servicio Social puedes realizarlo a partir de 7mo Semestre.";
    }
    else if (input == "cuando puedo empezar el servicio social") {
        return "El Servicio Social puedes realizarlo a partir de 7mo Semestre.";
    }
    //many if else statements for the chatbot to respond to the user difertns fomrs of cuando puedo empezar el servicio social
    else if (input == "¿Cuándo se hace el servicio social?") {
        return "El Servicio Social puedes realizarlo a partir de 7mo Semestre.";
    }
    else if (input == "¿Cuántos créditos de actividades complementarias necesito para realizar mi Servicio Social?"){
        return "Son un total de 5 créditos que constan de un crédito de 1 tutorías y los faltantes de cualquier programa (máximo 2 por programa y no repetir actividades)"
    }
    else if (input == "Cuantos créditos necesito"){
        return "Son un total de 5 créditos que constan de un crédito de 1 tutorías y los faltantes de cualquier programa (máximo 2 por programa y no repetir actividades)"
    }
    else if (input == "¿Cómo acreditar el inglés?"){
        return "1) Presentando cualquier certificado que acredite el nivel de B.</br> 2) Aplicar el examen de Oxford dentro de la Institución.</br> 3) Inscríbete al curso de inglés que oferta la institución y cursa los 10 niveles. "
    }
    else if (input == "como acreditar el ingles"){
        return "1) Presentando cualquier certificado que acredite el nivel de B.</br> 2) Aplicar el examen de Oxford dentro de la Institución.</br> 3) Inscríbete al curso de inglés que oferta la institución y cursa los 10 niveles. "
    }
    else if (input == "como puedo acreditar el ingles"){
        return "1) Presentando cualquier certificado que acredite el nivel de B.</br> 2) Aplicar el examen de Oxford dentro de la Institución.</br> 3) Inscríbete al curso de inglés que oferta la institución y cursa los 10 niveles. "
    }
    else if (input == "ingles"){
        return "1) Presentando cualquier certificado que acredite el nivel de B.</br> 2) Aplicar el examen de Oxford dentro de la Institución.</br> 3) Inscríbete al curso de inglés que oferta la institución y cursa los 10 niveles. "
    }
    else if (input == "como acreditar el ingles"){
        return "1) Presentando cualquier certificado que acredite el nivel de B.</br> 2) Aplicar el examen de Oxford dentro de la Institución.</br> 3) Inscríbete al curso de inglés que oferta la institución y cursa los 10 niveles. "
    }
    else{
        return "No entiendo lo que dices, puedes repetirlo de otra forma?";
    }
    
}