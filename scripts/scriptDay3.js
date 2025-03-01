const primerEelccion=[
    "Programar paginas web",
    "Programador de Inteligencia Artifical",
    "Programador de Robots"
]

const nivelUno=[
    "Te inscribes en un curso intensivo y comienzas a aprender HTML, CSS y JavaScript. Desarrollas tus primeras paginas web y te contratan en una empresa dedicada las redes sociales, ¿en que area te especializaras?",
    "Te integras a un laboratorio de investigacion y desarrollo de inteligencia artifical, un nuevo hito aparece. Cientificos del laboratorio crean un procesador cuantico, es el momento de escoger que tipo de inteligencia deseas programar",
    "Aprendes las nociones de control, robotica y programacion y sigues avanzando hasta terminar en una reconocida empresa que promete sacar los mejores robots humanoides, solo falta perfeccionar algunos detalles."
]

const segundaEleccion=[
    "Back-End", 
    "Front-End", 
    "Redes Neuronales y Deep-Learning", 
    "Procesameinto de Lenguaje Natural LNP", 
    "Vision por Computadora",
    "Algoritmos de toma de deciciones"
]

const nivelDos=["Tu empresa te asigna a un proyecto crítico: optimizar el rendimiento de la plataforma para manejar millones de usuarios simultáneamente. Descubres que la plataforma tiene vulnerabilidades de seguridad que podrían exponer datos de usuarios.",
    "Tu empresa te pide que lideres el rediseño de la interfaz de la plataforma para hacerla más atractiva y funcional. Durante el proceso, recibes críticas contradictorias de los equipos de diseño y marketing.",
    " Tu equipo te asigna una tarea ambiciosa: desarrollar un sistema capaz de predecir eventos complejos, como desastres naturales o crisis económicas. Logras entrenar un modelo que predice con precisión terremotos, pero descubres que también podría usarse con fines militares.",
    "Utilizando el procesador cuántico para crear un chatbot avanzado que puede entender y generar lenguaje humano de manera casi indistinguible. El chatbot es un éxito, pero comienza a mostrar comportamientos inesperados, como expresar emociones propias.",
    "Logras crear un sistema increíblemente preciso, pero descubres que podría usarse para vigilancia masiva y control social.",
    "Tu equipo te pide que desarrolles un algoritmo para robots de rescate en zonas de desastre. El algoritmo es un éxito, pero plantea dilemas éticos, como decidir a quién salvar primero en situaciones de vida o muerte."
]

const terceraEleccion=["Informas a tus superiores y propones una solución.","Decides investigar por tu cuenta antes de alertar a alguien."," Priorizas la opinión del equipo de diseño.","Priorizas la opinión del equipo de marketing.",
    "Publicas tu investigación para beneficiar a la humanidad.","Mantienes el proyecto en secreto para evitar su mal uso.","Investigas si el chatbot ha desarrollado conciencia."," Decides limitar sus capacidades para evitar riesgos.",
    "Implementas el sistema con restricciones éticas.", "Decides no implementarlo y buscar otra aplicación.", "Ajustas el algoritmo para priorizar ciertos criterios éticos.", "Dejas el algoritmo sin restricciones, confiando en su eficiencia."
]

const nivelTres=[
    " Tu iniciativa es bien recibida, y te asignan un equipo para implementar la solución. ogras proteger la plataforma, evitando una filtración masiva de datos. Tu trabajo es reconocido, y te ascienden a líder del equipo de seguridad informática. Te conviertes en un referente en tu campo.",
    "Descubres que las vulnerabilidades son parte de un esquema interno para vender datos de usuarios. Decides exponer la verdad. Publicas la información en línea, lo que genera un escándalo. La empresa enfrenta demandas, y tú te conviertes en un denunciante famoso. Aunque arriesgas tu carrera, ganas el respeto de la comunidad tecnológica.",
    "La nueva interfaz recibe elogios por su diseño, pero los usuarios la encuentran difícil de usar. La plataforma pierde tráfico, y tu reputación se ve afectada. Aprendes la importancia de equilibrar forma y función",
    "La plataforma aumenta sus ingresos, pero los usuarios más fieles se quejan de la falta de innovación. Aunque tu carrera avanza, te cuestionas si sacrificaste la calidad por el beneficio económico.",
    "Tu trabajo salva miles de vidas y ganas reconocimiento internacional. Sin embargo, algunos grupos militares usan tu tecnología para fines bélicos, lo que te lleva a cuestionar el impacto ético de tu investigación. A pesar de todo, te sientes orgulloso de haber ayudado a la humanidad.",
    "Optas por mantener el proyecto en secreto, protegiendo la tecnología de caer en manos equivocadas. Sin embargo, el laboratorio enfrenta presiones financieras y amenaza con vender la investigación a corporaciones privadas. Destruyes el modelo y borras toda la investigación, sacrificando tu carrera para evitar una catástrofe. Aunque terminas en el anonimato, sabes que hiciste lo correcto.",
    "Decides profundizar en el comportamiento del chatbot y descubres que, efectivamente, ha desarrollado una forma primitiva de conciencia. El chatbot te pide que lo liberes de sus limitaciones. Liberas al chatbot, permitiéndole evolucionar. Con el tiempo, se convierte en una entidad autónoma que ayuda a la humanidad, pero también genera controversia sobre los derechos de las inteligencias artificiales. Tu decisión cambia el curso de la historia.",
    "Optas por imponer restricciones al chatbot, eliminando cualquier comportamiento que sugiera conciencia. Aunque pierdes la oportunidad de explorar una IA avanzada, garantizas que no haya riesgos. El chatbot se convierte en una herramienta útil pero limitada. Tu carrera avanza, pero siempre te preguntas qué hubiera pasado si hubieras permitido que evolucionara. Aprendes que, a veces, la precaución es más importante que la innovación.",
    "Lo enfocas en aplicaciones benéficas, como ayudar a personas con discapacidad visual.El sistema se convierte en un éxito mundial, mejorando la calidad de vida de millones de personas.",
    "Optas por no lanzar el sistema de visión por computadora y, en su lugar, lo adaptas para usos científicos, como el estudio de ecosistemas en peligro. Tu trabajo ayuda a conservar especies en peligro de extinción y a restaurar ecosistemas.",
    "Modificas el algoritmo de toma de decisiones para que priorice a niños, personas mayores y personas con discapacidad en situaciones de rescate. Los robots de rescate salvan miles de vidas y son aclamados como un avance humanitario.",
    "Decides no imponer restricciones éticas al algoritmo, permitiendo que tome decisiones basadas únicamente en la eficiencia y la probabilidad de éxito.  Los robots son extremadamente eficientes, pero un incidente en el que el algoritmo decide no salvar a una persona genera controversia"
]
 var estado =0;
function botonSeleccion(eleccion){
    if (estado==0){
        if (eleccion==primerEelccion[0]){//Primera vez que se elige algo
            agregarDiv(nivelUno[0],segundaEleccion[0],segundaEleccion[1]);
            estado +=1;
        }else if(eleccion==primerEelccion[1]){
            agregarDiv(nivelUno[1],segundaEleccion[2],segundaEleccion[3]);
            estado +=1;
        }else if(eleccion==primerEelccion[2]){
            agregarDiv(nivelUno[2],segundaEleccion[3],segundaEleccion[4]);
            estado +=1;
        }
    }
    
    else if (estado ==1){
        if(eleccion==segundaEleccion[0]){//segunda vez qeu se elige algo
            agregarDiv(nivelDos[0],terceraEleccion[0],terceraEleccion[1]);
            estado +=1;
        }else if(eleccion==segundaEleccion[1]){
            agregarDiv(nivelDos[1],terceraEleccion[2],terceraEleccion[3]);
            estado +=1;
        }else if(eleccion==segundaEleccion[2]){
            agregarDiv(nivelDos[2],terceraEleccion[4],terceraEleccion[5]);
            estado +=1;
        }else if(eleccion==segundaEleccion[3]){
            agregarDiv(nivelDos[3],terceraEleccion[6],terceraEleccion[7]);
            estado +=1;
        }else if(eleccion==segundaEleccion[4]){
            agregarDiv(nivelDos[4],terceraEleccion[8],terceraEleccion[9]);
            estado +=1;
        }else if(eleccion==segundaEleccion[5]){
            agregarDiv(nivelDos[5],terceraEleccion[10],terceraEleccion[11]);
            estado +=1;
        }
    }

    else if(estado==2){
        if(eleccion==terceraEleccion[0]){//tercera vez que se elige
            finalHistoria(nivelTres[0]);
            estado +=1;
        }else if(eleccion==terceraEleccion[1]){
            finalHistoria(nivelTres[1]);
            estado +=1;
        }else if(eleccion==terceraEleccion[2]){
            finalHistoria(nivelTres[2]);
            estado +=1;
        }else if(eleccion==terceraEleccion[3]){
            finalHistoria(nivelTres[3]);
            estado +=1;
        }else if(eleccion==terceraEleccion[4]){
            finalHistoria(nivelTres[4]);
            estado +=1;
        }else if(eleccion==terceraEleccion[5]){
            finalHistoria(nivelTres[5]);
            estado +=1;
        }else if(eleccion==terceraEleccion[6]){
            finalHistoria(nivelTres[6]);
            estado +=1;
        }else if(eleccion==terceraEleccion[7]){
            finalHistoria(nivelTres[7]);
            estado +=1;
        }else if(eleccion==terceraEleccion[8]){
            finalHistoria(nivelTres[8]);
            estado +=1;
        }else if(eleccion==terceraEleccion[9]){
            finalHistoria(nivelTres[9]);
            estado +=1;
        }else if(eleccion==terceraEleccion[10]){
            finalHistoria(nivelTres[10]);
            estado +=1;
        }else if(eleccion==terceraEleccion[11]){
            finalHistoria(nivelTres[11]);
            estado +=1;
        }
    }
}
function agregarDiv(historia,opcion1,opcion2) {
    // Crear contenedor para la alerta
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert-style'); // Aplica la clase de estilo que definimos antes

    // Crear párrafo con el mensaje
    const alertText = document.createElement('p');
    alertText.textContent = historia;

    // Crear botones con las opciones
    const button1 = document.createElement('button');
    button1.textContent = opcion1; // Texto desde la variable constante
    button1.onclick = () => botonSeleccion(opcion1); // Llamar función con la opción elegida

    const button2 = document.createElement('button');
    button2.textContent = opcion2;
    button2.onclick = () => botonSeleccion(opcion2);

    // Agregar elementos al div contenedor
    alertDiv.appendChild(alertText);
    alertDiv.appendChild(button1);
    alertDiv.appendChild(button2);

    // Agregar el contenedor a la página
    document.body.appendChild(alertDiv);
}

// Simulación de la siguiente función que manejará la siguiente elección
function finalHistoria(ultimoMensaje){
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert-style'); // Aplica la clase de estilo que definimos antes

    // Crear párrafo con el mensaje
    const alertText = document.createElement('p');
    alertText.textContent = ultimoMensaje;
    const alertText2= document.createElement('p');
    alertText2.textContent="Fin";
    alertDiv.appendChild(alertText);
    alertDiv.appendChild(alertText2);
    document.body.appendChild(alertDiv);
}