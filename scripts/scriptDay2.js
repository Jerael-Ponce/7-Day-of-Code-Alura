const respuestas = [
    "Ah, el lenguaje favorito de los masoquistas. Te encanta que algo funcione perfecto en un navegador y explote en otro. Y ni hablemos de los `undefined`.",
    "Eso ni cuenta como lenguaje de programación, amigo. Es como decir que el origami es ingeniería estructural.",
    "Ah, te gusta la comodidad, ¿no? Código limpio, sintaxis sencilla… pero espera a que te pidan optimización en tiempo real.",
    "Básicamente, hablas con bases de datos todo el día. Eres el médium de los datos, el chamán del SELECT * FROM universe.",
    "JavaScript pero con reglas. Eres el tipo que se pone cinturón y tirantes al mismo tiempo ‘por seguridad’.",
    "Tienes superpoderes, pero también puedes borrar todo tu sistema con una línea mal escrita. Vives al filo de la navaja.",
    "Ah, el lenguaje corporativo por excelencia. Nada como escribir 10 líneas para imprimir ‘Hola, mundo’ y luego tomarte un café de tres horas.",
    "Te encanta la estructura, el orden y… probablemente trabajas con Unity o en una empresa que usa .NET y no te dejan salir.",
    "Eres un veterano de guerra. Has visto punteros, segmentación de memoria y sigues aquí. Respeto total.",
    "Directo al metal. No necesitas abstracciones ni comodidades. Probablemente aún codificas en un editor de texto sin resaltado de sintaxis."
];

const respuestaEdad = [
    "¡Vaya, que eres joven! Te está tocando programar en modo fácil: sin punteros, sin memoria dinámica y con tutoriales en YouTube en lugar de foros oscuros de los 90.", // Menos de 10 años
    "Eres el futuro del código. Puedes aprender cualquier lenguaje en una tarde y aún tienes energía para discutir en Reddit sobre cuál es el mejor framework.", // 10-19 años
    "Estás en tu prime. Lo suficientemente joven para aprender rápido y lo suficientemente viejo para saber que no debes confiar en tutoriales de 3 minutos en TikTok.", // 20-29 años
    "Sabes que el código no es solo escribir líneas, sino hacerlas mantenibles. Ya has sobrevivido al menos a una reescritura total de un proyecto, y aún sigues aquí.", // 30-39 años
    "Tienes la paciencia de un santo y la sabiduría de alguien que ha visto cómo los mismos errores se repiten con nombres más modernos. Si algo falla, sabes que la culpa es del junior (aunque no se lo digas).", // 40-49 años
    "Tu conocimiento es legendario. Es probable que hayas programado cuando las pantallas eran verdes y las computadoras hacían más ruido que un coche viejo. Y sin embargo, sigues al día. Respeto total.", // 50-59 años
    "Eres un maestro del código. Has visto modas venir y desaparecer. Probablemente escribiste código en papel antes de que existieran los IDEs. Si alguien dice que ‘el software antes era mejor’, tú puedes confirmar si es verdad." // Más de 60 años
];

function PrediccionPersonalidad() {
    let nombre = document.getElementById('Nombre').value.toUpperCase();
    let edad = parseInt(document.getElementById('Edad').value);
    let lenguaje = document.getElementById('Lenguaje').value;

    if (nombre.trim() === '' || isNaN(edad) || lenguaje === 'default') {
        alert("Ingresa datos válidos");
        return; // Evita que siga ejecutándose la función
    }

    let mensaje = `¡Buenas buenas, ${nombre}!\nPara tus ${edad} años. `;

    // Selección de halago por edad
    if (edad < 10) {
        mensaje += respuestaEdad[0] + "\n";
    } else if (edad < 20) {
        mensaje += respuestaEdad[1] + "\n";
    } else if (edad < 30) {
        mensaje += respuestaEdad[2] + "\n";
    } else if (edad < 40) {
        mensaje += respuestaEdad[3] + "\n";
    } else if (edad < 50) {
        mensaje += respuestaEdad[4] + "\n";
    } else if (edad < 60) {
        mensaje += respuestaEdad[5] + "\n";
    } else {
        mensaje += respuestaEdad[6] + "\n";
    }

    // Respuesta según lenguaje
    const lenguajes = [
        "JavaScript", "HTML/CSS", "Python", "SQL", "TypeScript", "Bash/Shell", "Java", "C#", "C++", "C"
    ];
    
    if (lenguajes.includes(lenguaje)) {
        mensaje += `¿${lenguaje}? \n${respuestas[lenguajes.indexOf(lenguaje)]}`;
    } else if (lenguaje === 'Otro') {
        mensaje += `¿${lenguaje}? \n¡Qué interesante elección!`;
    }

    mostrarAlert(mensaje);
}
function mostrarAlert(mensaje) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert-style');
    alertDiv.innerText = mensaje;

    document.body.appendChild(alertDiv);

    // Eliminar el alert después de 5 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 10000);
}