import React, { useEffect, useMemo, useState } from "react";

/* =========================================================
   SUBJECT ÚNICO
   Formato pregunta:
   { q: "texto", options: ["A","B","C","D"], correct: 0..3 }
   ========================================================= */

const SUBJECT = {
  id: "fol",
  name: "StudyApp",
  subtitle: "Tests FOL · Atención · Anatomía · Fundamentos Físicos",
  colorA: "#6366f1",
  colorB: "#8b5cf6",
  units: [
    /* ================== FOL ================== */
{
  id: "fol-u1",
  title: "FOL · U1 · Mercado laboral",
  questions: [
    {
      q: "¿Cuáles son los tres elementos que componen el mercado laboral?",
      options: [
        "La oferta, los demandantes de empleo y los intermediarios",
        "Los trabajadores por cuenta propia, por cuenta ajena y funcionarios",
        "Las pymes, las grandes empresas y las administraciones públicas",
        "La empleabilidad, la demanda empresarial y la FP",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque el mercado laboral se entiende como el lugar donde se ofrece y se demanda trabajo, y donde además intervienen agentes que ponen en contacto oferta y demanda (servicios públicos de empleo, ETT, portales, etc.). La B describe tipos de trabajadores, no los elementos del mercado. La C menciona tipos de empresas, que son solo una parte de la demanda de trabajo. La D mezcla conceptos relacionados con el empleo, pero no son los tres elementos básicos que definen el mercado laboral.",
    },
    {
      q: "La incorporación al mercado laboral:",
      options: [
        "No requiere una formación previa apropiada",
        "Ha dejado de ser un desafío para los trabajadores españoles",
        "Hace referencia a la entrada de individuos en edad de trabajar a la actividad económica",
        "Todas son correctas",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque incorporación al mercado laboral significa que una persona en edad de trabajar pasa a formar parte activa de la economía (buscando empleo o trabajando). La A es falsa porque la formación es clave para mejorar la empleabilidad. La B también es falsa: incorporarse sigue siendo un reto por paro juvenil, cambios tecnológicos, etc. La D no puede ser correcta porque las dos primeras afirmaciones no lo son.",
    },
    {
      q: "Los autónomos económicamente dependientes (TRADE):",
      options: [
        "Son aquellos cuya facturación en un 75% o más depende de un solo cliente, ya sea persona física o jurídica",
        "Son aquellos que desarrollan actividades categorizadas como profesionales",
        "Son aquellos que administran sociedades mercantiles con un 75% o más de su facturación dependiente de ellos",
        "Son aquellos que generan de manera propia, al menos, un 75% del valor total de su actividad profesional",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque el TRADE se define precisamente por su dependencia económica: al menos el 75 % de sus ingresos proceden de un único cliente. La B habla de actividades profesionales, pero no menciona la dependencia económica. La C mezcla la idea con sociedades mercantiles, que no es el foco de la figura TRADE. La D habla de generar valor, pero eso no es el criterio legal que los define.",
    },
    {
      q: "El tipo de relación laboral cuando el trabajo se hace de forma voluntaria, personal y directa, organizado por un tercero, y a cambio se percibe un salario, se denomina:",
      options: [
        "Trabajo por cuenta propia",
        "Trabajo autónomo",
        "Trabajo profesional",
        "Trabajo por cuenta ajena",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque en el trabajo por cuenta ajena el trabajador presta servicios personales, voluntarios, bajo la organización y dirección de otra persona (el empresario) y recibe un salario. La A y la B aluden a trabajo por cuenta propia o autónomo, donde el trabajador organiza su propio trabajo y asume el riesgo. La C, trabajo profesional, es un término genérico que no define el tipo de relación laboral desde el punto de vista jurídico.",
    },
    {
      q: "El sistema selectivo de acceso a la función pública consistente en la celebración de pruebas o exámenes se denomina:",
      options: ["Concurso", "Evaluación funcionarial", "Oposición", "Conculcación"],
      correct: 2,
      explain:
        "La respuesta correcta es la C (oposición) porque es el sistema en el que el acceso se basa exclusivamente en superar pruebas o exámenes. El concurso (A) combina méritos y, a veces, pruebas, pero no se limita solo a exámenes. “Evaluación funcionarial” (B) no es un término técnico para el sistema de acceso. “Conculcación” (D) ni siquiera tiene que ver con procesos selectivos, significa vulneración o infracción de una norma.",
    },
    {
      q: "Señala cuál NO es una categoría de personal al servicio de la Administración Pública:",
      options: [
        "Funcionario interino",
        "Funcionario autónomo dependiente",
        "Personal laboral temporal",
        "Funcionario de carrera",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque la figura de “funcionario autónomo dependiente” no existe en el ámbito de la Administración. Sí existen funcionarios de carrera (D), funcionarios interinos (A) y personal laboral (temporal, fijo, etc., como en la C). Por eso la B es la única opción que no corresponde a una categoría real de personal al servicio de la Administración Pública.",
    },
    {
      q: "Engloba los cinco documentos que comunican en toda la UE habilidades, titulaciones y certificaciones adquiridas:",
      options: ["Tu Europa", "Europass", "DocUE", "EURES CV"],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque el Europass es el conjunto de documentos estandarizados en la UE (CV Europass, suplemento al título, etc.) que facilitan la transparencia de cualificaciones y competencias. Tu Europa (A) es un portal de información general de la UE. DocUE (C) no es un sistema oficial de documentos formativos. EURES (D) es la red europea de empleo, no el pack de documentos.",
    },
    {
      q: "El principal programa de promoción y financiación educativa en la UE es:",
      options: [
        "Programa Erasmus+ 2021-2027",
        "Fondos Next Generation UE",
        "Acciones Jean Monet",
        "Red EURES",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque Erasmus+ es el programa marco de la UE para educación, formación, juventud y deporte, con financiación para estudiar, hacer prácticas y proyectos educativos. Los fondos Next Generation (B) son un mecanismo financiero amplio de recuperación económica, no solo educativo. Las Acciones Jean Monnet (C) forman parte de Erasmus+, pero son una línea concreta, no el programa principal. EURES (D) es una red de servicios de empleo, no un programa educativo.",
    },
    {
      q: "La disposición mental y emocional hacia una situación, persona, objeto o tarea se denomina:",
      options: ["Aptitud", "Competencia", "Actitud", "Proactividad"],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la actitud es la postura mental y emocional que adoptamos ante algo: positiva, negativa, de interés, rechazo, etc. La aptitud (A) se refiere a la capacidad o habilidad para hacer algo. La competencia (B) integra conocimientos, habilidades y actitudes, pero no es solo la disposición mental. La proactividad (D) es una actitud concreta de adelantarse a los problemas, no el concepto general.",
    },
    {
      q: "La Zona de Desarrollo Próximo:",
      options: [
        "Sirve para guiar e inspirar equipos de trabajo cercanos",
        "Ayuda a expresar ideas claramente y practicar la escucha activa",
        "Se ubica en el entorno laboral del trabajador y se compone de herramientas del puesto",
        "Permite enfocarse en habilidades y competencias que están al alcance y se pueden desarrollar",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque la Zona de Desarrollo Próximo (Vygotsky) es el espacio entre lo que una persona ya sabe hacer sola y lo que puede llegar a hacer con ayuda; es decir, el conjunto de habilidades que puede desarrollar a corto plazo. La A se centra en liderazgo y equipos, no en aprendizaje individual. La B habla de comunicación, no del concepto psicológico. La C parece referirse a entorno físico de trabajo, que no es el sentido de la ZDP.",
    },
  ],
},

{
  id: "fol-u2",
  title: "FOL · U2 · Condiciones de trabajo, salud y riesgos",
  questions: [
    {
      q: "¿Qué son las condiciones de trabajo?",
      options: [
        "Las características generales de las instalaciones y equipos",
        "Los elementos integrados en los principios generales de la acción preventiva",
        "Cualquier particularidad laboral que pueda generar riesgos para la seguridad y la salud del trabajador",
        "Las responsabilidades que asume cada una de las partes implicadas",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque las condiciones de trabajo incluyen todos los elementos del puesto (tiempos, organización, equipos, ambiente, etc.) que pueden afectar a la seguridad y salud del trabajador, generando riesgos. La A solo habla de instalaciones y equipos, que es una parte. La B se refiere a principios de acción preventiva, no a las condiciones en sí. La D se centra en responsabilidades legales, no en las características del puesto.",
    },
    {
      q: "Cuando hablamos de salud, hacemos referencia a:",
      options: [
        "Salud real, percibida y asociada",
        "Salud física, social y psíquica",
        "Salud personal, laboral e interpersonal",
        "Salud interior, exterior y contextual",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque la definición de la OMS considera la salud como un estado de completo bienestar físico, mental (psíquico) y social, no solo ausencia de enfermedad. La A mezcla otros tipos de clasificaciones pero no es la definición clásica. La C y la D inventan categorías que no se corresponden con el enfoque oficial de salud en prevención de riesgos laborales.",
    },
    {
      q: "Dentro de la organización del trabajo, la carga de trabajo incluye:",
      options: [
        "Exigencias físicas y mentales",
        "Exigencias directas e indirectas",
        "Elementos tangibles, intangibles y neutrales",
        "Responsabilidades respecto a medios y actividades",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la carga de trabajo se define como el conjunto de exigencias físicas (esfuerzo muscular, posturas, movimientos) y mentales (atención, concentración, toma de decisiones) que el trabajo impone al trabajador. La B, C y D son clasificaciones que no se usan en PRL para definir carga de trabajo.",
    },
    {
      q: "La enfermedad profesional:",
      options: [
        "Debe estar recogida en el listado de la Directiva Marco",
        "Se define como toda lesión corporal por cuenta ajena como consecuencia del trabajo",
        "Incluye las que sean por dolo o imprudencia temeraria del trabajador",
        "Ninguna es correcta",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque ninguna de las otras opciones recoge bien la definición legal. La enfermedad profesional debe estar recogida en el cuadro oficial de enfermedades profesionales del sistema de Seguridad Social, no en una simple directiva marco (A). La B describe más bien el accidente de trabajo (lesión corporal súbita). La C mezcla conceptos de culpabilidad del trabajador, que no son el criterio para definir enfermedad profesional.",
    },
    {
      q: "Las dimensiones del burnout son:",
      options: [
        "Agotamiento emocional, despersonalización y baja realización personal",
        "Manifestación general, manifestación local e intensidad",
        "Desinterés, agresividad y bajo rendimiento",
        "Baja atención, aumento de conflictos e irascibilidad",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A: el síndrome de burnout se caracteriza por agotamiento emocional (cansancio extremo), despersonalización (trato frío o cínico hacia los usuarios) y sensación de baja realización personal. Las otras opciones mencionan posibles consecuencias o síntomas, pero no responden a la clasificación clásica de dimensiones del burnout que se estudia en FOL.",
    },
    {
      q: "Agentes que al entrar en contacto con tejidos vivos los pueden destruir se denominan:",
      options: ["Irritantes", "Corrosivos", "Inflamables", "Tóxicos"],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque los agentes corrosivos destruyen los tejidos con los que contactan (piel, mucosas, ojos). Los irritantes (A) causan inflamación o irritación pero no destrucción profunda. Los inflamables (C) se caracterizan por arder con facilidad, no por dañar directamente tejidos. Los tóxicos (D) producen efectos nocivos por inhalación, ingestión o contacto, pero su mecanismo no es necesariamente corrosivo.",
    },
    {
      q: "Agentes que por inhalación, ingestión o penetración cutánea pueden provocar efectos agudos o crónicos e incluso la muerte:",
      options: ["Irritantes", "Corrosivos", "Inflamables", "Tóxicos"],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque los agentes tóxicos son los que, al entrar en el organismo, pueden producir daños graves, enfermedades crónicas o incluso la muerte. Los irritantes (A) producen sobre todo inflamación local. Los corrosivos (B) destruyen tejidos donde contactan, pero el foco es local. Los inflamables (C) se caracterizan por arder fácilmente, no por su toxicidad interna.",
    },
    {
      q: "Determina si el tono es agudo o grave y se mide en hercios (Hz):",
      options: ["Frecuencia", "Duración", "Intensidad", "Volumen"],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la frecuencia de una onda sonora, medida en hercios, indica cuántas vibraciones por segundo tiene y determina que el sonido se perciba como más agudo (frecuencia alta) o más grave (frecuencia baja). La duración (B) es el tiempo que se mantiene el sonido. La intensidad (C) y el volumen (D) tienen que ver con lo fuerte o débil que se percibe, no con que sea agudo o grave.",
    },
    {
      q: "El factor que permite que el ruido pueda ser continuo, discontinuo o de impacto se denomina:",
      options: ["Frecuencia", "Duración", "Intensidad", "Volumen"],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque la duración del ruido (cómo se mantiene en el tiempo) es lo que permite clasificarlo en continuo (constante), discontinuo (se repite con pausas) o de impacto (golpe breve e intenso). La frecuencia (A) tiene que ver con el tono. La intensidad (C) y el volumen (D) se refieren a lo fuerte que es el sonido, no a su carácter continuo o intermitente.",
    },
    {
      q: "El instrumento de medida utilizado para medir la cantidad de luz es el:",
      options: ["Lumen", "Lux", "Luxómetro", "Lumenógeno"],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque el luxómetro es el aparato que se utiliza para medir la iluminación (en lux) sobre una superficie. El lumen (A) es una unidad que mide flujo luminoso, no el aparato. El lux (B) es la unidad de iluminación que justamente mide el luxómetro. Lumenógeno (D) no es un término técnico habitual en PRL.",
    },
  ],
},

{
  id: "fol-u3",
  title: "FOL · U3 · Prevención, protección y primeros auxilios",
  questions: [
    {
      q: "En prevención y protección, empresario y trabajadores tienen una responsabilidad:",
      options: [
        "Administrativa, civil y penal",
        "Directa, indirecta y asociada",
        "Criminal, procesal y judicial",
        "Laboral, administrativa y social",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque las infracciones en materia de prevención pueden tener consecuencias administrativas (sanciones), civiles (indemnizaciones) y penales (delitos contra la seguridad de los trabajadores). La B y la C son clasificaciones genéricas que no reflejan los tipos de responsabilidad reconocidos en PRL. La D mezcla ámbitos pero no es la fórmula jurídica habitual.",
    },
    {
      q: "Se constituirá un Comité de Seguridad y Salud en empresas o centros con:",
      options: ["10 o más", "25 o más", "50 o más", "100 o más"],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la ley establece que el Comité de Seguridad y Salud se crea en empresas o centros de trabajo con 50 o más trabajadores. Por debajo de esa cifra no hay comité como tal, aunque sí puede haber delegados de prevención. Las otras opciones (10, 25, 100) no se corresponden con el umbral legal habitual.",
    },
    {
      q: "El desarrollo legislativo en materia de prevención parte desde:",
      options: [
        "Derecho consuetudinario",
        "OMS",
        "Reglamentos internos",
        "Derecho Comunitario y Constitución española",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque el marco de la prevención se apoya en la Constitución (derecho a la protección de la salud y a la integridad física) y en el derecho comunitario europeo (directivas) que se trasponen a la legislación nacional. El derecho consuetudinario (A) son usos y costumbres, no la base principal. La OMS (B) da recomendaciones, pero no legisla en España. Los reglamentos internos (C) son normas de empresa, subordinadas a la ley.",
    },
    {
      q: "La elección de delegados de prevención se hará:",
      options: [
        "Entre miembros del Comité de Seguridad y Salud",
        "A través de los directivos de la empresa",
        "A través de los representantes de los trabajadores y de entre ellos",
        "Entre los miembros más cualificados en Seguridad Social",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la ley establece que los delegados de prevención son elegidos por y entre los representantes de los trabajadores (comité de empresa o delegados de personal). La A confunde con el Comité de Seguridad y Salud, que se compone entre otros por esos delegados. La B es incorrecta porque la empresa no los nombra unilateralmente. La D no es un criterio legal de elección.",
    },
    {
      q: "En relación con las medidas de protección:",
      options: [
        "Debe primar la seguridad individual sobre la colectiva",
        "Debe primar la seguridad colectiva sobre la individual",
        "Se centran en el uso de señalización",
        "Son lo mismo que técnicas de prevención",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque el principio básico es priorizar las medidas de protección colectiva (barandillas, resguardos, ventilación, etc.) frente a las individuales (EPIs). La A contradice este principio. La C reduce las medidas de protección a señalización, que es solo una parte. La D confunde medidas de protección con técnicas preventivas en general (seguridad, higiene, ergonomía…).",
    },
    {
      q: "Equipo que el trabajador lleva puesto para protegerle de riesgos se denomina:",
      options: [
        "Equipo de Prevención Interna",
        "Equipo de Protección Colectivo",
        "Equipo de Protección Individual",
        "Equipo de Protección Ergonómico",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque el EPI (Equipo de Protección Individual) es aquel que lleva o sujeta el trabajador para protegerse de uno o varios riesgos (casco, guantes, gafas…). El equipo de protección colectivo (B) protege a varios trabajadores a la vez y no se lleva puesto (redes, barandillas, etc.). A y D no son denominaciones oficiales en PRL.",
    },
    {
      q: "La señalización de seguridad:",
      options: [
        "Establece condiciones de tamaño del puesto",
        "Requiere seguir instrucciones del fabricante para mantenimiento",
        "Siempre incluye un pictograma",
        "Da indicación u obligación en relación con seguridad o salud en el puesto",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque la señalización de seguridad tiene como función dar información, advertencia u obligación relacionada con la seguridad y salud (prohibido fumar, uso obligatorio de casco, salida de emergencia…). La A habla de dimensiones del puesto, que no es el objetivo. La B es una recomendación general de mantenimiento, no la definición. La C es falsa porque no toda señalización lleva pictograma (también hay señales acústicas, luminosas, etc.).",
    },
    {
      q: "Ante una situación de emergencia se debe:",
      options: [
        "Mantener la calma y actuar con rapidez",
        "Examinar el lugar y comprobar otros peligros",
        "Intentar evitar el shock",
        "Todas las anteriores son correctas",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque todas las acciones forman parte de una buena actuación ante emergencias: mantener la calma para pensar, evaluar el lugar por si hay riesgos añadidos (fuego, gas, tráfico…), y cuidar al accidentado para evitar el shock. Por separado, A, B y C son medidas correctas pero incompletas; juntas resumen la actuación adecuada.",
    },
    {
      q: "En primeros auxilios, el orden adecuado es:",
      options: [
        "Proteger, Avisar y Socorrer",
        "Prevenir, Actuar y Socorrer",
        "Proteger, Ayudar y Solucionar",
        "Prevenir, Alentar y Solventar",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A: primero Proteger (a la víctima, al entorno y a nosotros mismos), luego Avisar a los servicios de emergencia y por último Socorrer dentro de nuestras capacidades. Las demás opciones inventan secuencias que no responden al protocolo clásico PAS que se estudia en FOL.",
    },
    {
      q: "En RCP hay que hacer:",
      options: [
        "10 compresiones y 1 insuflación",
        "25 compresiones y 3 insuflaciones",
        "30 compresiones y 2 insuflaciones",
        "20 compresiones y 2 insuflaciones",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la recomendación básica de RCP en adultos es realizar ciclos de 30 compresiones torácicas seguidas de 2 ventilaciones de rescate. Los otros números (10:1, 25:3, 20:2) no coinciden con el protocolo estándar que se enseña en primeros auxilios.",
    },
  ],
},

{
  id: "fol-u4",
  title: "FOL · U4 · Normativa laboral, principios y representación",
  questions: [
    {
      q: "Orden jerárquico correcto de normas (de mayor a menor):",
      options: [
        "Constitución, leyes/rango de ley, reglamentos, convenio colectivo, contrato, usos y costumbres",
        "Constitución, convenio, contrato, usos, leyes, reglamentos",
        "Leyes, constitución, contrato, reglamentos, convenio, usos",
        "Ninguna es correcta",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque refleja la jerarquía: primero la Constitución, luego las leyes y normas con rango de ley, después los reglamentos, y por debajo los convenios colectivos, contratos y finalmente los usos y costumbres. La B altera el orden colocando el convenio antes de las leyes y reglamentos. La C incluso sitúa las leyes por encima de la Constitución, lo cual es incorrecto. Por tanto la única secuencia válida es la A.",
    },
    {
      q: "El principio in dubio pro operario:",
      options: [
        "En confusión se aplica la norma que favorece al empresario",
        "Expresión latina que enaltece el trabajo duro",
        "En confusión se aplica la norma que favorece al trabajador",
        "Los trabajadores no pueden renunciar a derechos",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque el principio in dubio pro operario significa que, en caso de duda en la interpretación de una norma laboral, debe aplicarse la interpretación más favorable al trabajador. La A afirma justo lo contrario. La B es una explicación inventada. La D se refiere al principio de irrenunciabilidad de derechos, que es otro principio distinto.",
    },
    {
      q: "Dentro del derecho comunitario diferenciamos entre:",
      options: ["OIT y ET", "Derecho interno y externo", "Derecho originario y derivado", "Directivas, recomendaciones, sanciones y euroórdenes"],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque el derecho comunitario se clasifica en derecho originario (tratados constitutivos) y derecho derivado (directivas, reglamentos, decisiones). La A mezcla la OIT (organismo internacional) y el ET (Estatuto de los Trabajadores). La B habla de derecho interno/externo, que es otra clasificación. La D enumera algunos tipos de normas, pero no refleja la división clave originario/derivado.",
    },
    {
      q: "Señala la afirmación falsa sobre el derecho laboral:",
      options: [
        "Ha existido desde que existe el trabajo",
        "Nace en el siglo XIX por la revolución industrial",
        "Está en continuo cambio y mejora bienestar laboral",
        "Sus principios interpretan legislación y cubren vacíos",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque el derecho laboral como rama diferenciada del derecho NO ha existido desde siempre; surge principalmente en el siglo XIX con la industrialización (tal como indica la B). Las afirmaciones C y D son verdaderas: es un derecho muy dinámico y sus principios sirven para interpretar y completar la normativa. Por eso la única falsa es la A.",
    },
    {
      q: "En relación laboral empleador-empleado, las normas abogan por:",
      options: ["Proteger por igual", "Proteger más al empleado", "Proteger más al empleador", "Solo recomendaciones"],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque el derecho laboral tiene un carácter tuitivo: protege especialmente a la parte más débil de la relación, el trabajador. La A sería cierta solo en un plano teórico de igualdad, pero en la práctica la normativa refuerza la posición del empleado. La C es lo contrario de lo que ocurre. La D es falsa porque no se trata solo de recomendaciones, sino de normas obligatorias.",
    },
    {
      q: "Escoger un delegado de personal entre trabajadores ejerce el derecho a:",
      options: [
        "Representación colectiva unitaria",
        "Representación colectiva sindical",
        "Representación retribuida personalizada",
        "Ninguna",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la elección de delegados de personal forma parte de la representación unitaria de los trabajadores en la empresa (delegados de personal y comité de empresa). La B se refiere a representación sindical (secciones y delegados sindicales), que es otra vía. La C no es un concepto utilizado en derecho laboral. La D es incorrecta porque sí se está ejerciendo un derecho de representación concreta.",
    },
    {
      q: "El convenio colectivo:",
      options: [
        "Es una fuente del derecho laboral",
        "Es un pacto alcanzado libremente",
        "Refleja la participación efectiva de los trabajadores",
        "Todas son correctas",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque todas las afirmaciones sobre el convenio colectivo son ciertas: es fuente del derecho laboral (A), es un acuerdo negociado libremente entre representantes de trabajadores y empresarios (B), y es una vía de participación real de los trabajadores en la regulación de sus condiciones laborales (C). Al ser todas correctas, la opción correcta es “Todas son correctas”.",
    },
    {
      q: "Cese de prestación de trabajo para reivindicar conflictos o mejoras se conoce como:",
      options: ["Huelga", "Cierre patronal", "Conflicto colectivo", "Festivos"],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la huelga consiste precisamente en la suspensión colectiva, concertada y temporal del trabajo para reivindicar mejoras o protestar por conflictos laborales. El cierre patronal (B) es lo contrario: la empresa cierra y suspende la actividad. El conflicto colectivo (C) es el desacuerdo general, no la medida de presión concreta. Los festivos (D) no tienen nada que ver con reivindicaciones.",
    },
    {
      q: "¿Cuál NO es una garantía de representantes de trabajadores?",
      options: [
        "Prioridad de permanencia",
        "Libertad de expresión en asuntos de representación",
        "Están exentos de despidos disciplinarios",
        "Horas retribuidas para ejercer funciones",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque los representantes de los trabajadores NO están totalmente exentos de despidos disciplinarios; pueden ser despedidos si existe causa justificada, aunque disfrutan de ciertas garantías (protección frente a despidos por represalia). Las otras opciones sí son garantías reales: prioridad de permanencia en la empresa, libertad de expresión en temas de representación y crédito horario retribuido.",
    },
    {
      q: "¿Cuál es una competencia del comité de empresa?",
      options: [
        "Vigilar cumplimiento de normas laborales y seguridad",
        "Participar en gestión de obras sociales",
        "Informar a representados de asuntos laborales",
        "Todas las anteriores",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque todas las funciones mencionadas son competencias del comité de empresa: vigilancia del cumplimiento de normas, participación en la gestión de obras sociales y obligación de informar a los trabajadores sobre cuestiones laborales. Por tanto, la opción “Todas las anteriores” recoge correctamente el conjunto.",
    },
  ],
},

{
  id: "fol-u5",
  title: "FOL · U5 · Contratos y despidos",
  questions: [
    {
      q: "En contratos de formación en alternancia:",
      options: [
        "Finalidad cubrir temporalmente un puesto durante selección formativa",
        "Duración mínima 3 meses y máxima 2 años",
        "Admite horas extra 65% en primer año",
        "Todas son correctas",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque una característica clave del contrato de formación en alternancia es su duración mínima y máxima (normalmente entre 3 meses y 2 años, según normativa). La A confunde el objetivo: no es solo cubrir un puesto, sino combinar trabajo y formación. La C mezcla el tema de horas extra, que además están muy limitadas en este tipo de contrato. La D no puede ser correcta porque A y C no lo son.",
    },
    {
      q: "Señala la respuesta correcta:",
      options: [
        "En contrato a tiempo parcial no se pueden hacer horas extra salvo fuerza mayor",
        "Duración máxima de indefinido es 25 años",
        "Temporal solo a jornada parcial y puede ser verbal o escrito",
        "Ninguna es correcta",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque el contrato a tiempo parcial, por regla general, no permite horas extraordinarias salvo por fuerza mayor, aunque sí horas complementarias pactadas. La B es absurda: el contrato indefinido no tiene duración máxima. La C es falsa porque los contratos temporales pueden ser a jornada completa o parcial y suelen requerir forma escrita. Por tanto la única afirmación correcta es la A.",
    },
    {
      q: "Causa de despido objetivo:",
      options: [
        "Embriaguez habitual o toxicomanía",
        "Ofensas verbales o físicas",
        "Disminución continuada y voluntaria del rendimiento",
        "Ineptitud del trabajador conocida o sobrevenida posteriormente",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque la ineptitud del trabajador, cuando es conocida o aparece después de su contratación, es una causa de despido objetivo. Las opciones A, B y C corresponden a causas de despido disciplinario (conductas graves imputables al trabajador: embriaguez habitual, ofensas o bajo rendimiento voluntario).",
    },
    {
      q: "En un despido disciplinario:",
      options: [
        "Indemnización 20 días/año",
        "Indemnización 33 días/año",
        "Indemnización solo si no hay preaviso de 30 días",
        "No tienes derecho a indemnización",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque en el despido disciplinario procedente, el trabajador no tiene derecho a indemnización (solo al finiquito de cantidades pendientes). Las indemnizaciones de 20 días/año (A) se asocian a despidos objetivos y la de 33 días/año (B) a despidos improcedentes. La C no refleja el régimen real del preaviso en despidos disciplinarios.",
    },
    {
      q: "En un despido colectivo:",
      options: [
        "Deben concurrir causas económicas, técnicas, organizativas o de producción",
        "Debe afectar al 30% de la plantilla",
        "No requiere comunicación previa a representantes",
        "A y B son correctas",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la esencia del despido colectivo es que afecta a un número relevante de trabajadores y se basa en causas económicas, técnicas, organizativas o de producción (ETOP). El porcentaje del 30% (B) no es el único criterio: la ley fija umbrales diferentes según tamaño de la empresa. La C es falsa: sí hay obligación de comunicación y negociación con los representantes. Por tanto solo la A es correcta.",
    },
    {
      q: "En un despido declarado improcedente:",
      options: [
        "Se prohíbe readmitir al trabajador",
        "Se entrega finiquito hasta 24 mensualidades",
        "Indemnización siempre 24 días/año",
        "Ninguna es correcta",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque las tres afirmaciones anteriores son incorrectas o incompletas. En un despido improcedente el empresario puede elegir entre readmitir al trabajador o indemnizarlo; no está prohibida la readmisión (A). Las cuantías no son simplemente “finiquito hasta 24 mensualidades” ni 24 días/año (B y C); la normativa habla de días de salario por año trabajado con ciertos topes, pero no los que se indican ahí.",
    },
    {
      q: "¿Qué NO se considera modificación sustancial de condiciones de trabajo?",
      options: [
        "Afecte a la jornada de trabajo",
        "Cambio a turnos rotativos",
        "Modificación del espacio de trabajo dentro del mismo centro",
        "Modificación de cuantía salarial o sistema de remuneración",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque cambiar el espacio de trabajo dentro del mismo centro, sin más, suele ser una modificación ordinaria de condiciones, no una modificación sustancial. En cambio, afectar a la jornada (A), modificar turnos (B) o alterar el salario o su sistema (D) sí son ejemplos de modificaciones sustanciales según la legislación laboral.",
    },
    {
      q: "Elementos esenciales del contrato:",
      options: [
        "Consentimiento, objeto y causa",
        "Licitud, posibilidad y determinabilidad",
        "Partes, tiempo y categoría",
        "Persona física, jurídica y motivación",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque en derecho civil los elementos esenciales de todo contrato son el consentimiento (acuerdo de voluntades), el objeto (lo que se presta) y la causa (la finalidad económica o función social). La B menciona requisitos del objeto, no los elementos esenciales. La C y la D recogen aspectos importantes, pero no son la tríada clásica de elementos esenciales.",
    },
    {
      q: "¿Cuál NO es una cláusula que se puede incluir en el contrato?",
      options: ["Confidencialidad", "No competencia", "Excedencia", "Permanencia"],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la excedencia es una situación del trabajador (interrupción temporal de la relación laboral) regulada normalmente fuera del contrato concreto. En cambio, sí pueden incluirse cláusulas de confidencialidad (A), no competencia (B) o permanencia (D) siempre que cumplan requisitos legales. Por tanto la única que no encaja como cláusula contractual típica es la excedencia.",
    },
    {
      q: "Cambio de residencia definitivo o desplazamientos >12 meses en 3 años se denomina:",
      options: ["Movilidad sustancial", "Movilización", "Desplazamiento", "Traslado"],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque cuando el cambio de centro de trabajo implica cambio de residencia o desplazamientos de larga duración (más de un cierto tiempo, como 12 meses en 3 años), hablamos de traslado. La C, ‘desplazamiento’, se utiliza para cambios temporales más cortos. ‘Movilidad sustancial’ (A) no es el término técnico y ‘movilización’ (B) no se usa en este contexto.",
    },
  ],
},

{
  id: "fol-u6",
  title: "FOL · U6 · Jornada, descanso, vacaciones y entorno digital",
  questions: [
    {
      q: "Durante el período de prueba:",
      options: [
        "Empresario puede despedir sin justificación ni indemnización, pero trabajador sí debe preaviso",
        "Empresario no puede despedir sin justificación",
        "Empresario puede despedir sin justificación ni indemnización y trabajador no debe preaviso",
        "Ya no existe período de prueba",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque durante el período de prueba cualquiera de las partes puede extinguir el contrato sin necesidad de alegar causa y sin indemnización, y el trabajador no está obligado a dar preaviso salvo que lo diga el convenio. La A obliga injustificadamente al trabajador a preavisar. La B limita indebidamente la facultad del empresario. La D es falsa porque el período de prueba sigue existiendo.",
    },
    {
      q: "La jornada laboral:",
      options: [
        "Establece horas diarias",
        "Establece horas semanales",
        "Establece horas anuales",
        "Todas son correctas",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque la jornada laboral puede expresarse en horas diarias, semanales o anuales según la regulación. Las opciones A, B y C recogen cada una un nivel de referencia, pero ninguna por sí sola refleja todo el concepto. Por eso la mejor opción que incluye todas es ‘Todas son correctas’.",
    },
    {
      q: "Las vacaciones:",
      options: [
        "No son un derecho constitucional",
        "Sirven para dar descanso a los trabajadores",
        "Pueden ser o no retribuidas",
        "Pueden sustituirse por compensación económica",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque la finalidad de las vacaciones es el descanso periódico del trabajador, normalmente anual. La A es cuestionable, ya que el descanso es un derecho reconocido. La C es falsa: las vacaciones deben ser retribuidas. La D solo se admite en supuestos muy concretos (por ejemplo, al finalizar el contrato si quedaron vacaciones pendientes), pero no como norma general que las sustituya.",
    },
    {
      q: "El trabajo nocturno:",
      options: [
        "Permite 15 horas extra semanales",
        "Se retribuye menos si es por fuerza mayor",
        "Se da al menos 3 horas o 1/3 de la jornada de 22:00 a 6:00",
        "Se da al menos 5 horas o 3/5 de 00:00 a 8:00",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la definición de trabajo nocturno en la normativa habla de que al menos 3 horas de la jornada diaria o un tercio de la jornada anual se realicen entre las 22:00 y las 6:00. La A habla de horas extra, sin relación directa. La B no es cierta: no se retribuye menos por ser por fuerza mayor. La D inventa otro tramo horario que no coincide con la definición estándar.",
    },
    {
      q: "Tiempo mínimo entre el final de una jornada y el comienzo de otra (salvo excepciones):",
      options: ["8 horas", "12 horas", "6 horas", "No existe mínimo"],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque el Estatuto de los Trabajadores establece, con carácter general, un descanso mínimo de 12 horas entre el final de una jornada y el inicio de la siguiente. Las otras cifras (8 y 6 horas) son inferiores a lo que marca la ley. La D es falsa porque sí existe un mínimo legal.",
    },
    {
      q: "¿Qué días deben respetarse por fiesta nacional?",
      options: ["1 de enero", "1 de mayo", "12 de octubre", "Todos los anteriores"],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque tanto el 1 de enero (Año Nuevo), como el 1 de mayo (Fiesta del Trabajo) y el 12 de octubre (Fiesta Nacional de España) son festivos nacionales de obligado descanso, salvo ciertas excepciones. Por tanto la opción que los agrupa a todos es la más correcta.",
    },
    {
      q: "El periodo de prueba en un contrato:",
      options: [
        "Hasta 6 meses técnicos titulados y 2 meses resto",
        "Hasta 12 meses técnicos titulados y 8 meses resto",
        "Es obligatorio y debe aparecer por escrito",
        "Ya no existe",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la duración máxima orientativa del período de prueba suele ser de hasta 6 meses para técnicos titulados y 2 meses para el resto de trabajadores, según Estatuto de los Trabajadores y convenios. La B exagera los plazos. La C es falsa porque el período de prueba es opcional; solo existe si se pacta por escrito. La D es obviamente falsa.",
    },
    {
      q: "La flexibilidad laboral:",
      options: [
        "Equivale al teletrabajo",
        "No tiene límites para el trabajador",
        "Implica autogestión y organización del tiempo",
        "No se adapta a circunstancias cambiantes",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la flexibilidad laboral implica, entre otras cosas, cierta capacidad del trabajador para organizar su tiempo, lugar o modo de trabajo (siempre dentro de límites pactados). La A identifica flexibilidad solo con teletrabajo, que es una forma concreta. La B es falsa: la flexibilidad está regulada, no es ilimitada. La D va en contra de la propia idea de flexibilidad, que justamente sirve para adaptarse a cambios.",
    },
    {
      q: "Derechos laborales en el entorno digital:",
      options: [
        "Acceso universal a Internet y libertad de contenidos",
        "Salud mental y diversidad digital",
        "Desconexión digital y privacidad/protección de datos personales",
        "Teletrabajo y no invasión del ámbito privado",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque entre los nuevos derechos laborales vinculados al entorno digital destacan el derecho a la desconexión digital (no recibir comunicaciones laborales fuera de horario salvo causa justificada) y la protección de datos personales. La A es más un derecho ciudadano general. La B es una formulación muy amplia. La D habla de teletrabajo, que sí se relaciona, pero la formulación de la opción C es más precisa y completa.",
    },
    {
      q: "Instancia más alta dentro de los tribunales y juzgados de lo social:",
      options: [
        "Tribunales Superiores de Justicia",
        "Tribunal Supremo",
        "Ministerio de Trabajo",
        "Audiencia Nacional",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque el Tribunal Supremo es el órgano jurisdiccional superior en todos los órdenes (incluido el social) salvo lo dispuesto para las garantías constitucionales. Los Tribunales Superiores de Justicia (A) están por debajo y actúan en ámbito autonómico. El Ministerio de Trabajo (C) es un órgano administrativo, no judicial. La Audiencia Nacional (D) tiene competencias importantes, pero no es la instancia más alta del orden social.",
    },
  ],
},

{
  id: "fol-u7",
  title: "FOL · U7 · Salario, nómina y Seguridad Social",
  questions: [
    {
      q: "El Salario Mínimo Interprofesional (SMI):",
      options: [
        "Cuantía mínima por trabajo por cuenta ajena a tiempo completo",
        "No se puede mejorar por contrato salvo ley del Gobierno",
        "Se usa como referencia para el IPC",
        "Ninguna es correcta",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque el SMI es la retribución mínima que debe percibir cualquier trabajador por cuenta ajena a jornada completa, con independencia del tipo de contrato. La B es falsa: el SMI sí puede mejorarse por convenio o contrato, lo que no se puede es rebajarlo. La C no describe su función principal, aunque pueda usarse como referencia en algunos cálculos. Por tanto la D tampoco puede ser correcta.",
    },
    {
      q: "¿Qué se entiende por salario?",
      options: [
        "Totalidad percepciones en dinero o especie",
        "Totalidad percepciones solo en dinero",
        "Recibo individual del Ministerio",
        "Devengo no consolidable fiscal",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque salario es el conjunto de percepciones económicas del trabajador, tanto en dinero como en especie (vivienda, coche, etc.), a cambio del trabajo prestado. La B excluye el salario en especie. La C parece referirse a la nómina como documento, pero no define salario. La D menciona un término fiscal, no la definición general.",
    },
    {
      q: "El FOGASA:",
      options: [
        "Protege salarios pendientes de pago",
        "Protege indemnizaciones reconocidas judicial/administrativamente",
        "Organismo autónomo adscrito al Ministerio de Trabajo",
        "Todas son correctas",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque todas las afirmaciones definen al FOGASA: es un organismo autónomo del Ministerio de Trabajo que garantiza el pago de salarios e indemnizaciones a los trabajadores cuando la empresa es insolvente o está en concurso. Por eso las opciones A, B y C son verdaderas y la opción ‘Todas son correctas’ es la correcta.",
    },
    {
      q: "¿Cuál NO es un complemento salarial?",
      options: ["Nocturnidad", "Toxicidad/peligrosidad", "Quebranto de moneda", "Participación en resultados"],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque el quebranto de moneda suele considerarse una indemnización o suplido para compensar posibles pérdidas de caja, no un complemento salarial propiamente dicho. La nocturnidad y la toxicidad/peligrosidad (A y B) son complementos ligados a condiciones especiales del trabajo. La participación en resultados (D) también puede ser un complemento ligado a beneficios.",
    },
    {
      q: "¿Cuál se considera una deducción a efectos de retribución?",
      options: [
        "Indemnizaciones o suplidos",
        "Cotización por productividad",
        "Retención por IRPF",
        "Todas son correctas",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque en la nómina se descuentan al salario bruto, entre otras cosas, las retenciones por IRPF. Las indemnizaciones o suplidos (A) no son retribuciones salariales y suelen estar fuera de la base de cotización. La ‘cotización por productividad’ (B) no es una deducción típica; lo que se descuenta son cotizaciones a la Seguridad Social, pero la opción está mal formulada. Por eso la D tampoco puede ser correcta.",
    },
    {
      q: "¿Qué NO es una acción protectora de la Seguridad Social?",
      options: [
        "Incapacidad temporal",
        "Asistencia sanitaria",
        "Jubilación",
        "Prestación por circunstancia social",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque ‘prestación por circunstancia social’ no es una figura concreta dentro del catálogo de prestaciones de la Seguridad Social. En cambio, la incapacidad temporal (A), la asistencia sanitaria (B) y la jubilación (C) sí son prestaciones que forman parte de la acción protectora del sistema.",
    },
    {
      q: "Grados de incapacidad permanente:",
      options: [
        "Parcial, total, absoluta y gran invalidez",
        "Crónica y total",
        "Concluyente, lesiva y gran invalidez",
        "Revisable, incapacitante, parcial y absoluta",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la Seguridad Social diferencia cuatro grados básicos de incapacidad permanente: parcial, total, absoluta y gran invalidez. Las demás opciones mezclan términos que no se corresponden con la clasificación oficial: ‘crónica’, ‘concluyente’, ‘revisable’… son adjetivos genéricos pero no grados jurídicos.",
    },
    {
      q: "Requisitos para percibir subsidio por desempleo:",
      options: [
        "Solo no disponer de renta mensual",
        "No rechazar ofertas adecuadas ni acciones formativas y carecer de rentas mensuales superiores al 75% del SMI",
        "Desempleo, menor de 55, e ingresar menos del 80% IPREM",
        "Desempleo con incapacidad y/o cargas familiares",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque resume dos condiciones clave: mantener la disposición activa (no rechazar ofertas ni formación) y no superar un límite de rentas (por ejemplo, el 75 % del SMI). La A se queda corta, solo menciona renta. La C y la D describen situaciones concretas (personas de cierta edad o con cargas familiares), pero no recogen de forma general los requisitos del subsidio.",
    },
    {
      q: "Prestaciones de la acción protectora se clasifican en:",
      options: [
        "Familiares e individuales",
        "Personales y laborales",
        "Contributivas y no contributivas",
        "Asistenciales y no asistenciales",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la gran clasificación de prestaciones de la Seguridad Social es entre contributivas (cuando se ha cotizado previamente) y no contributivas (cuando se reconocen por necesidad, aunque no se haya cotizado lo suficiente). Las otras divisiones (familiares/individuales, personales/laborales, asistenciales/no asistenciales) no se corresponden con la clasificación básica del sistema.",
    },
    {
      q: "Sobre incapacidad temporal:",
      options: [
        "Imposibilidad de trabajar durante un periodo y necesita asistencia sanitaria",
        "En comunes y profesionales es obligatorio 180 días cotizados el año anterior",
        "Duración máxima 360 días improrrogables",
        "Todas son correctas",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la incapacidad temporal se caracteriza por la imposibilidad de trabajar durante un tiempo debido a enfermedad o accidente y va ligada a la necesidad de asistencia sanitaria. Las cifras de días cotizados (B) y la duración máxima de 360 días (C) no son exactas o pueden variar según la situación, por lo que no pueden darse como afirmaciones generales totalmente correctas.",
    },
  ],
},

{
  id: "fol-u8",
  title: "FOL · U8 · Orientación profesional y formación",
  questions: [
    {
      q: "Capacidad de comprender intereses, valores, motivaciones, habilidades y destrezas:",
      options: [
        "Autoconocimiento",
        "Inventario de intereses",
        "Exploración de actividades",
        "Instinto",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque autoconocimiento es precisamente entender quién eres, qué te motiva, qué valores tienes y qué sabes hacer, algo clave para orientarte profesionalmente. El inventario de intereses (B) es una herramienta, no la capacidad en sí. La exploración de actividades (C) es un proceso para probar opciones. El instinto (D) se refiere a impulsos más básicos, no a una reflexión consciente sobre uno mismo.",
    },
    {
      q: "El Inventario de Intereses de Holland:",
      options: [
        "También es conocido como Teoría de los Tipos de Personalidad Vocacional",
        "Clasifica personas y ambientes en seis tipos",
        "Batería de preguntas que evalúan preferencias/aversiones",
        "Todas son correctas",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque todas las afirmaciones describen bien el modelo de Holland: es una teoría de tipos vocacionales, distingue seis grandes perfiles (realista, investigador, artístico, social, emprendedor, convencional) y se aplica mediante cuestionarios de intereses. Como A, B y C son verdaderas, la opción correcta es ‘Todas son correctas’.",
    },
    {
      q: "Las motivaciones:",
      options: [
        "Factores internos que impulsan a actuar",
        "Factores externos que impulsan a actuar",
        "Factores internos y externos que impulsan a actuar",
        "Permiten descubrir nuevas áreas de interés",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque las motivaciones pueden ser internas (gusto, vocación, valores) y externas (salario, reconocimiento, estabilidad), y ambas influyen en nuestras decisiones. La A solo recoge la parte interna, la B solo la externa. La D es una consecuencia posible de estar motivado, pero no define el concepto.",
    },
    {
      q: "Se pueden conocer las habilidades a través de:",
      options: [
        "Inventarios de habilidades",
        "Autoevaluación de competencias",
        "Evaluaciones de desempeño",
        "Todas son correctas",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque las habilidades pueden explorarse mediante cuestionarios específicos (A), reflexión personal y autoevaluación (B) y también a través de evaluaciones en el trabajo o en formación (C). Como cada método aporta información distinta y útil, la opción que los agrupa a todos es la más acertada.",
    },
    {
      q: "Atributos innatos o desarrollados que forman parte de la personalidad:",
      options: [
        "Competencias personales",
        "Cualidades personales",
        "Competencias sociales",
        "Preferencias profesionales",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque las cualidades personales (responsabilidad, puntualidad, creatividad, etc.) son rasgos de la personalidad que se pueden tener de forma más innata o desarrollarse con el tiempo. Las competencias personales (A) son combinaciones de conocimientos, habilidades y actitudes; las competencias sociales (C) están más relacionadas con cómo nos relacionamos con los demás. Las preferencias profesionales (D) se refieren a gustos por ciertos trabajos.",
    },
    {
      q: "Habilidades adquiridas que pueden desarrollarse y mejorarse con el tiempo, imprescindibles para el puesto:",
      options: [
        "Competencias personales",
        "Cualidades personales",
        "Competencias sociales",
        "Preferencias profesionales",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque las competencias personales (y profesionales) son habilidades que se adquieren y se pueden entrenar: trabajo en equipo, comunicación, organización, etc., y resultan clave para desempeñar un puesto. Las cualidades personales (B) se acercan más a rasgos. Las competencias sociales (C) son un subtipo concreto referente a interacción social. Las preferencias profesionales (D) son gustos, no habilidades.",
    },
    {
      q: "Existen tres tipos de objetivos profesionales:",
      options: [
        "Personales, empresariales y grupales",
        "Logísticos, específicos y estratégicos",
        "A corto, a medio y a largo plazo",
        "Específicos, de carrera y evaluativos",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque en orientación profesional se suele distinguir entre objetivos a corto plazo (meses), medio plazo (1–3 años) y largo plazo (5 o más años). Las otras opciones proponen clasificaciones que no son las típicas de planificación profesional.",
    },
    {
      q: "Una de las vías de acceso a un CFGS es:",
      options: [
        "Título de Técnico (Grado Medio)",
        "Bachillerato",
        "Prueba de acceso a CFGS",
        "Todas son correctas",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque todas las vías indicadas son reales: se puede acceder a un CFGS con un título de Técnico (Grado Medio relacionado), con Bachillerato, o superando la prueba específica de acceso. Como las tres son válidas, la opción correcta es ‘Todas son correctas’.",
    },
    {
      q: "Tras Bolonia 1999, estudios universitarios divididos en dos niveles:",
      options: [
        "Grado y posgrado",
        "Grados Medios y Superiores",
        "Máster y Doctorado",
        "Europeos e internacionales",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la reforma de Bolonia estructura los estudios universitarios en grado y posgrado (donde se incluyen máster y doctorado). La B habla de FP, no de universidad. La C solo nombra los niveles de posgrado. La D no tiene sentido como clasificación oficial.",
    },
    {
      q: "La autoestima:",
      options: [
        "No tiene relevancia en búsqueda de empleo",
        "Determina habilidades técnicas específicas",
        "Percepción subjetiva y valoración emocional de uno mismo",
        "Puede ser educativa, personal o laboral",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque la autoestima es cómo te percibes y valoras a ti mismo, lo que influye en tu seguridad, en cómo te presentas y en tu capacidad para afrontar retos. La A es falsa: una buena autoestima ayuda mucho en entrevistas y procesos de selección. La B confunde autoestima con habilidades técnicas. La D mezcla ámbitos, pero la definición más clara es la de la opción C.",
    },
  ],
},

{
  id: "fol-u9",
  title: "FOL · U9 · Habilidades, resiliencia e identidad digital",
  questions: [
    {
      q: "El aprendizaje permanente proporciona:",
      options: [
        "Adaptación a cambios tecnológicos",
        "Mejora de empleabilidad",
        "Satisfacción y motivación laboral",
        "Todas son correctas",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque seguir aprendiendo de forma continua te permite adaptarte a nuevas tecnologías (A), aumentar tu empleabilidad al tener más competencias (B) y sentirte más satisfecho y motivado al ver que avanzas (C). Como todas las ventajas son reales, la opción ‘Todas son correctas’ es la adecuada.",
    },
    {
      q: "Señala cuál NO es una habilidad blanda:",
      options: ["Asertividad", "Empatía", "Liderazgo", "Análisis de datos"],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque el análisis de datos es una habilidad técnica o dura (hard skill), relacionada con conocimientos específicos. La asertividad, la empatía y el liderazgo (A, B y C) son habilidades blandas o soft skills, ligadas a la forma de relacionarse, comunicarse y dirigir.",
    },
    {
      q: "Establecer un horario de estudio y cumplirlo se considera:",
      options: [
        "Networking",
        "Educación formal",
        "Autodisciplina",
        "Habilidad dura",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque organizar tu tiempo y respetar ese plan es un ejemplo claro de autodisciplina: capacidad de mantener hábitos y compromisos contigo mismo. El networking (A) es crear redes de contactos. La educación formal (B) son estudios reglados. Las habilidades duras (D) son técnicas concretas, no un rasgo de comportamiento como la autodisciplina.",
    },
    {
      q: "Modelo laboral con trabajos temporales/corta duración y aumento de independientes:",
      options: [
        "Economía gig",
        "Responsabilidad Social Corporativa",
        "Transformación digital",
        "Teletrabajo freelance",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la ‘gig economy’ se caracteriza por trabajos por encargo, proyectos cortos, plataformas digitales y un número creciente de trabajadores independientes. La RSC (B) se refiere al compromiso social de las empresas. La transformación digital (C) es un proceso más amplio. El teletrabajo freelance (D) es una forma de trabajo, pero no el nombre del modelo económico.",
    },
    {
      q: "La capacidad de adaptación implica:",
      options: [
        "Estrategias para mejorar comunicación efectiva",
        "Ajustar respuestas/acciones/enfoques ante situaciones cambiantes",
        "Renunciar a empleabilidad por flexibilidad",
        "Todas son correctas",
      ],
      correct: 1,
      explain:
        "La respuesta correcta es la B porque adaptarse es ser capaz de cambiar tu forma de actuar, pensar o organizarte cuando cambian las circunstancias (nuevas tecnologías, jefes, tareas…). La A se centra solo en comunicación, que es una parte. La C plantea algo absurdo: la adaptación precisamente mejora tu empleabilidad, no al revés. Por tanto la D tampoco puede ser correcta.",
    },
    {
      q: "¿Cuál NO es característica de empleados resilientes?",
      options: ["Pasividad", "Optimismo realista", "Control emocional", "Autoconciencia"],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque la pasividad es lo contrario de la resiliencia; un trabajador resiliente afronta los problemas y busca soluciones. El optimismo realista (B), el control emocional (C) y la autoconciencia (D) sí son rasgos típicos de personas resilientes, que se recuperan y aprenden de las dificultades.",
    },
    {
      q: "Con respecto a la identidad digital:",
      options: [
        "También conocida como identidad 1.0",
        "Se compone únicamente por perfiles en redes sociales",
        "Empleadores la usan cada vez más para evaluar candidatos",
        "Ninguna es correcta",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque cada vez más empresas revisan la huella digital (publicaciones, comentarios, presencia online) de los candidatos para hacerse una idea de su perfil. La A hace una referencia sin sentido a ‘identidad 1.0’. La B es falsa porque la identidad digital incluye más que redes sociales (blogs, foros, resultados en buscadores, etc.). Por tanto la D tampoco es correcta.",
    },
    {
      q: "Para gestión de privacidad y seguridad digital:",
      options: [
        "No hace falta revisar configuraciones de privacidad",
        "Evitar gestor de contraseñas",
        "La autenticación en dos factores resta seguridad",
        "Ninguna es correcta",
      ],
      correct: 3,
      explain:
        "La respuesta correcta es la D porque las tres primeras afirmaciones son malas prácticas: sí es importante revisar la privacidad (A), los gestores de contraseñas pueden ser muy útiles y seguros (B) y la autenticación en dos factores aumenta la seguridad (C). Como todas son incorrectas, la opción correcta es ‘Ninguna es correcta’.",
    },
    {
      q: "Herramienta estratégica para estructurar y dirigir crecimiento profesional:",
      options: [
        "Plan de Desarrollo Individual (PDI)",
        "Mapa de Habilidades",
        "Entorno de Desarrollo y Análisis (EDA)",
        "Autoconocimiento estratégico",
      ],
      correct: 0,
      explain:
        "La respuesta correcta es la A porque un Plan de Desarrollo Individual recoge objetivos, acciones y plazos para avanzar en tu carrera, y se utiliza como herramienta estratégica de crecimiento. Un mapa de habilidades (B) puede ser un recurso útil, pero no es el nombre típico de la herramienta. Las opciones C y D son formulaciones genéricas que no corresponden a una herramienta concreta.",
    },
    {
      q: "El Entorno Personal de Aprendizaje:",
      options: [
        "Es perjudicial para tomar el control del aprendizaje",
        "Se centra en contribución a la organización (RSC, mentoría)",
        "Sistema de herramientas, fuentes, personas y actividades",
        "Ninguna es correcta",
      ],
      correct: 2,
      explain:
        "La respuesta correcta es la C porque un Entorno Personal de Aprendizaje (EPA o PLE) es el conjunto de recursos (apps, webs, personas, cursos, etc.) que cada individuo usa para aprender de forma autónoma y continua. La A es justo lo contrario, ya que un buen EPA ayuda a tomar el control del propio aprendizaje. La B se refiere más a contribución organizacional. Por eso la opción acertada es la C.",
    },
  ],
},

{
  id: "fol-final",
  title: "⭐ FOL · Prueba final · 40 preguntas",
  isFinal: true,
  questions: [
    // Aquí puedes añadir tus 40 preguntas cuando quieras
    {
  id: "fol-final",
  title: "⭐ FOL · Prueba final · 40 preguntas",
  isFinal: true,
  questions: [
    {
      q: "¿Cuál de las siguientes es una relación no laboral o excluida?",
      options: [
        "Deportistas profesionales.",
        "Operarios de industria pesada.",
        "Médicos Internos Residentes.",
        "Autónomos y TRADE."
      ],
      correct: 3,
      explain: {
        detail:
          "Las relaciones laborales excluidas son aquellas en las que, aun existiendo una prestación de servicios, no se aplica el Estatuto de los Trabajadores porque tienen su propia normativa o se consideran ajenas al trabajo por cuenta ajena.",
        whyCorrect:
          "La opción D es correcta porque los autónomos y los TRADE trabajan por cuenta propia, asumiendo el riesgo de su actividad y organizando su trabajo, por lo que su relación no es laboral sino de carácter mercantil o profesional.",
        whyWrong: {
          A: "Los deportistas profesionales sí pueden tener relación laboral especial regulada por una norma específica.",
          B: "Los operarios de industria pesada son trabajadores por cuenta ajena con relación laboral común.",
          C: "Los MIR mantienen una relación laboral especial con la Administración sanitaria."
        }
      }
    },
    {
      q: "¿Cuál de las siguientes situaciones no tendrá la consideración de accidente de trabajo?",
      options: [
        "Los que se sufran al ir o al volver del lugar de trabajo.",
        "Los sufridos durante el desempeño de cargos electivos de carácter sindical.",
        "Los ocurridos por consecuencia de las tareas que se realicen por orden del empresario.",
        "Los que sean debidos a dolo o a imprudencia temeraria."
      ],
      correct: 3,
      explain: {
        detail:
          "El accidente de trabajo es toda lesión corporal que sufre el trabajador con ocasión o por consecuencia del trabajo. La ley recoge una serie de supuestos incluidos y también supuestos excluidos.",
        whyCorrect:
          "La opción D es correcta porque cuando el daño se produce por dolo (intencionalidad) o imprudencia temeraria del trabajador, se excluye la consideración de accidente de trabajo.",
        whyWrong: {
          A: "Los accidentes 'in itinere', al ir o volver del trabajo, se consideran accidente de trabajo.",
          B: "Los accidentes sufridos en el ejercicio de cargos sindicales también se consideran accidentes de trabajo.",
          C: "Los accidentes producidos al realizar órdenes del empresario están expresamente incluidos como accidentes de trabajo."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes no es un organismo nacional encargado de velar por la seguridad y la salud en el trabajo?",
      options: [
        "Instituto Nacional de Seguridad, Salud y Bienestar en el Trabajo (INSST).",
        "Organización Nacional de Trabajo, Salud e Inspección Social (ONTS).",
        "Inspección de Trabajo y Seguridad Social (ITSS).",
        "Comisión Nacional de Seguridad y Salud en el Trabajo (CNSST)."
      ],
      correct: 1,
      explain: {
        detail:
          "En España existen diversos organismos oficiales que trabajan en materia de prevención de riesgos laborales y seguridad y salud en el trabajo.",
        whyCorrect:
          "La opción B es correcta porque la ONTS no existe; es un organismo inventado y, por tanto, no forma parte del sistema institucional real.",
        whyWrong: {
          A: "El INSST (antiguo INSHT) es el organismo científico-técnico especializado en prevención de riesgos.",
          C: "La Inspección de Trabajo y Seguridad Social vigila el cumplimiento de la normativa laboral y de prevención.",
          D: "La CNSST es un órgano colegiado de participación institucional en materia de seguridad y salud."
        }
      }
    },
    {
      q: "¿Cuáles son los tres elementos que componen el mercado laboral?",
      options: [
        "La oferta, los demandantes de empleo y los intermediarios.",
        "Los trabajadores por cuenta propia, los trabajadores por cuenta ajena y los funcionarios.",
        "Las pymes, las grandes empresas y las administraciones públicas.",
        "La empleabilidad, la demanda empresarial y la FP."
      ],
      correct: 0,
      explain: {
        detail:
          "El mercado laboral es el espacio en el que se relacionan quienes buscan empleo, quienes ofrecen puestos de trabajo y los agentes que facilitan ese encuentro.",
        whyCorrect:
          "La opción A es correcta porque define los tres elementos clave: la oferta de trabajo (empresas), los demandantes de empleo (personas trabajadoras) y los intermediarios (servicios públicos y privados de empleo).",
        whyWrong: {
          B: "Trabajadores por cuenta propia, ajena y funcionarios son tipos de trabajadores, no elementos del mercado.",
          C: "Pymes, grandes empresas y administraciones son ejemplos de ofertantes, no todos los elementos.",
          D: "Empleabilidad, demanda empresarial y FP son conceptos relacionados, pero no describen los sujetos que intervienen en el mercado."
        }
      }
    },
    {
      q: "¿Qué son los devengos?",
      options: [
        "Las cantidades totales percibidas por el trabajador (percepciones salariales y no salariales).",
        "Los complementos de vencimiento periódico superior al mes (en especie o prorrateados).",
        "Los tipos porcentuales mediante los que se obtienen las cuotas a descontar de la nómina (en dinero o en especie).",
        "Los importes que convierten la remuneración salarial en no salarial."
      ],
      correct: 0,
      explain: {
        detail:
          "En la nómina, los devengos recogen todo aquello que el trabajador ha generado a su favor, antes de restar las deducciones.",
        whyCorrect:
          "La opción A es correcta porque los devengos incluyen todas las percepciones, tanto salariales (salario base, complementos) como no salariales (dietas, indemnizaciones, etc.).",
        whyWrong: {
          B: "Los complementos de vencimiento superior al mes son un tipo concreto de devengo (pagas extra), no el concepto general.",
          C: "Los tipos porcentuales son los tipos de cotización o retención, relacionados con deducciones, no con devengos.",
          D: "No existen importes que 'conviertan' salario en no salarial; es la naturaleza jurídica de cada concepto lo que determina si es salarial o no."
        }
      }
    },
    {
      q: "Actividades, temas o áreas que captan la atención y motivan a aprender y participar en ellas:",
      options: ["Intereses.", "Conocimientos.", "Reflexiones.", "Habilidades."],
      correct: 0,
      explain: {
        detail:
          "En orientación profesional, los intereses ayudan a elegir estudios y profesiones acordes con aquello que nos gusta y motiva.",
        whyCorrect:
          "La opción A es correcta porque los intereses son precisamente esas áreas o actividades que despiertan curiosidad y ganas de implicarse.",
        whyWrong: {
          B: "Los conocimientos son lo que ya sabemos, no aquello que necesariamente nos motiva.",
          C: "Las reflexiones son pensamientos o valoraciones, no áreas que nos atraen en sí mismas.",
          D: "Las habilidades son capacidades para hacer algo, que no siempre coinciden con aquello que nos interesa."
        }
      }
    },
    {
      q: "Como norma general, la jornada diaria no será superior a:",
      options: ["12 horas.", "8 horas.", "10 horas.", "9 horas."],
      correct: 3,
      explain: {
        detail:
          "El Estatuto de los Trabajadores establece límites máximos de jornada para proteger la salud y la conciliación de la persona trabajadora.",
        whyCorrect:
          "La opción D es correcta porque la jornada diaria ordinaria no puede superar las 9 horas efectivas de trabajo, salvo pacto y siempre respetando el descanso.",
        whyWrong: {
          A: "12 horas diarias excederían ampliamente el límite legal ordinario.",
          B: "8 horas es un valor típico, pero la ley fija el máximo general en 9, no en 8.",
          C: "10 horas también superan el máximo permitido salvo casos muy excepcionales y compensados."
        }
      }
    },
    {
      q: "Con respecto a las fuentes del derecho del trabajo:",
      options: [
        "Las fuentes internas provienen de fuentes nacionales y las fuentes externas provienen de fuentes internacionales.",
        "Las fuentes internas provienen de dentro de la propia Constitución y las fuentes externas provienen de leyes o reglamentos.",
        "Las fuentes internas siempre están por encima de las externas.",
        "Las fuentes internas son variantes de las fuentes externas."
      ],
      correct: 0,
      explain: {
        detail:
          "Las fuentes del derecho laboral pueden clasificarse según su origen: nacional (internas) o internacional/comunitario (externas).",
        whyCorrect:
          "La opción A es correcta porque describe fielmente que las fuentes internas son las dictadas por el Estado español y las externas vienen de organismos internacionales (UE, OIT, etc.).",
        whyWrong: {
          B: "No se limita a Constitución frente a leyes y reglamentos; todas ellas son fuentes internas.",
          C: "No siempre las normas internas prevalecen: en muchos casos el derecho comunitario o los tratados tienen primacía.",
          D: "No son variantes, sino niveles distintos (nacional e internacional)."
        }
      }
    },
    {
      q: "Con respecto a las partes del contrato de trabajo:",
      options: [
        "El trabajador debe ser una persona física.",
        "La empresa puede ser una persona física, una persona jurídica o una comunidad de bienes.",
        "Con 16 o 17 años se puede firmar un contrato cuando se cuente con la autorización de los padres o se esté emancipado.",
        "Todas son correctas."
      ],
      correct: 3,
      explain: {
        detail:
          "El contrato de trabajo vincula a un trabajador que presta servicios y a un empresario que los retribuye, con requisitos de capacidad y forma.",
        whyCorrect:
          "La opción D es correcta porque todas las afirmaciones anteriores describen condiciones reales: el trabajador siempre es persona física, el empresario puede adoptar distintas formas y los menores de 18 tienen límites de capacidad.",
        whyWrong: {
          A: "Es correcta, pero no recoge toda la información de las demás.",
          B: "También es correcta, pero no agota el contenido de la pregunta.",
          C: "Igualmente correcta, pero la opción que integra todo es la D."
        }
      }
    },
    {
      q: "Cuando hablamos de salud, hacemos referencia a:",
      options: [
        "La salud real, percibida y asociada.",
        "La salud física, social y psíquica.",
        "La salud personal, laboral e interpersonal.",
        "La salud interior, exterior y contextual."
      ],
      correct: 1,
      explain: {
        detail:
          "La OMS define la salud como un estado de completo bienestar físico, mental (psíquico) y social, y no solo la ausencia de enfermedad.",
        whyCorrect:
          "La opción B es correcta porque recoge las tres dimensiones clásicas de la definición de salud: física, social y psíquica/mental.",
        whyWrong: {
          A: "Real, percibida y asociada son formas de valorar la salud, pero no la definición oficial.",
          C: "Personal, laboral e interpersonal aluden a ámbitos de vida, no a dimensiones de salud.",
          D: "Interior, exterior y contextual tampoco corresponden a los componentes de la definición de salud."
        }
      }
    },
    {
      q: "El Comité de Seguridad y Salud tendrá entre sus competencias:",
      options: [
        "Participar en la elaboración, puesta en práctica y evaluación de los planes y programas de prevención de riesgos de la empresa.",
        "Informar al Ministerio de Trabajo de las irregularidades que cometa la empresa en materia de prevención y proponerle sanciones.",
        "Administrar las partidas presupuestarias destinadas a promoción de la salud y prevención de los riesgos.",
        "Prestar atención a los trabajadores para que las medidas de prevención no disminuyan la eficacia y operatividad del servicio."
      ],
      correct: 0,
      explain: {
        detail:
          "El Comité de Seguridad y Salud es el órgano paritario y colegiado de participación destinado a consulta regular sobre actuaciones preventivas en la empresa.",
        whyCorrect:
          "La opción A es correcta porque una de sus funciones principales es intervenir en los planes y programas de prevención, evaluando su eficacia.",
        whyWrong: {
          B: "El Comité no tiene función sancionadora ni se dirige directamente al Ministerio para proponer sanciones.",
          C: "Tampoco gestiona directamente presupuestos; esa es competencia de la empresa.",
          D: "Puede hacer propuestas, pero no se define su función como 'prestar atención' para mantener eficacia del servicio."
        }
      }
    },
    {
      q: "El cónyuge o familiar directo del autónomo que trabaja con él de manera regular, sin estar dado de alta por cuenta ajena, se denomina:",
      options: [
        "Autónomo administrador.",
        "Familiar societario.",
        "Autónomo colaborador.",
        "Está prohibido que el autónomo contrate familiares."
      ],
      correct: 2,
      explain: {
        detail:
          "El Estatuto del Trabajo Autónomo regula la figura del autónomo colaborador para familiares directos que colaboran de forma habitual.",
        whyCorrect:
          "La opción C es correcta porque el autónomo colaborador es precisamente el familiar directo que trabaja con el titular de forma continuada y convive con él.",
        whyWrong: {
          A: "Autónomo administrador hace referencia a quien administra sociedades, no a familiares colaboradores.",
          B: "Familiar societario no es una categoría jurídica específica en este contexto.",
          D: "No está prohibido; simplemente se regula a través de la figura del autónomo colaborador."
        }
      }
    },
    {
      q: "El estrés:",
      options: [
        "Solo se manifiesta con síntomas psicológicos.",
        "Es un desequilibrio entre las exigencias percibidas y las capacidades del trabajador para hacerles frente.",
        "Se denomina fatiga laboral cuando se convierte en crónico.",
        "Todas son correctas."
      ],
      correct: 1,
      explain: {
        detail:
          "En prevención de riesgos psicosociales, el estrés se entiende como una respuesta del organismo ante demandas que percibe como excesivas o amenazantes.",
        whyCorrect:
          "La opción B es correcta porque define el estrés como ese desajuste entre lo que se nos exige y lo que creemos poder afrontar.",
        whyWrong: {
          A: "El estrés también genera síntomas físicos (taquicardia, dolores, problemas digestivos…).",
          C: "La fatiga laboral es un concepto relacionado, pero no equivale exactamente a estrés crónico.",
          D: "No pueden ser todas correctas porque A y C contienen imprecisiones."
        }
      }
    },
    {
      q: "El FOGASA:",
      options: [
        "Se encarga de proteger la percepción de los salarios que estén pendientes de pago.",
        "Se encarga de proteger las indemnizaciones por despido o extinción que estén reconocidas por vía judicial o administrativa.",
        "Es un organismo autónomo adscrito al Ministerio de Trabajo.",
        "Todas son correctas."
      ],
      correct: 3,
      explain: {
        detail:
          "El Fondo de Garantía Salarial (FOGASA) garantiza parte de los créditos salariales e indemnizatorios de los trabajadores cuando el empresario es insolvente o está en concurso.",
        whyCorrect:
          "La opción D es correcta porque el FOGASA cumple las tres funciones señaladas: protege salarios, protege indemnizaciones y es un organismo autónomo adscrito al Ministerio.",
        whyWrong: {
          A: "Es cierta, pero solo recoge una parte de sus funciones.",
          B: "También es cierta, pero se queda corta frente a la D.",
          C: "Igualmente verdadera, pero no engloba todo el contenido de la pregunta."
        }
      }
    },
    {
      q: "El Inventario de Intereses de Holland:",
      options: [
        "También es conocido como \"Teoría de los Tipos de Personalidad Vocacional\".",
        "Clasifica a las personas y los ambientes de trabajo en seis tipos.",
        "Es una batería de preguntas que evalúan las preferencias y aversiones del individuo.",
        "Todas son correctas."
      ],
      correct: 3,
      explain: {
        detail:
          "El modelo de Holland relaciona tipos de personalidad con entornos profesionales para orientar la elección de estudios y trabajos.",
        whyCorrect:
          "La opción D es correcta porque el inventario de Holland cumple las tres características: es una teoría de tipos vocacionales, establece seis categorías y se aplica mediante cuestionarios.",
        whyWrong: {
          A: "Es verdad, pero no resume todo lo que se pregunta.",
          B: "También es correcta, pero parcial.",
          C: "Igualmente verdadera, pero la más completa es la D."
        }
      }
    },
    {
      q: "El modelo económico y laboral basado en trabajos temporales o de corta duración y el aumento de los trabajadores independientes, que ha redefinido las estructuras laborales tradicionales, se denomina:",
      options: [
        "Economía gig.",
        "Responsabilidad Social Corporativa.",
        "Transformación digital.",
        "Teletrabajo freelance."
      ],
      correct: 0,
      explain: {
        detail:
          "La economía gig describe un mercado laboral flexible donde proliferan los trabajos puntuales, por encargo y a menudo mediante plataformas digitales.",
        whyCorrect:
          "La opción A es correcta porque la 'gig economy' se basa en microtrabajos temporales y un aumento de trabajadores independientes.",
        whyWrong: {
          B: "La Responsabilidad Social Corporativa se refiere al compromiso social y ambiental de las empresas, no a la forma de contratar.",
          C: "La transformación digital es un proceso más amplio ligado a las tecnologías, no solo al tipo de contratos.",
          D: "El teletrabajo freelance es una forma de trabajo dentro de la economía gig, pero no el modelo económico en sí."
        }
      }
    },
    {
      q: "El orden jerárquico correcto de las normas (de mayor a menor) es:",
      options: [
        "La Constitución, las leyes y normas con rango de ley, reglamentos, convenio colectivo, contrato de trabajo, usos y costumbres locales y profesionales.",
        "La Constitución, convenio colectivo, contrato de trabajo, usos y costumbres locales y profesionales, normas con rango de ley y reglamentos.",
        "Las leyes y normas con rango de ley, la constitución, contrato de trabajo, reglamentos, convenio colectivo, usos y costumbres locales y profesionales.",
        "Ninguna es correcta."
      ],
      correct: 0,
      explain: {
        detail:
          "En derecho laboral rige un orden jerárquico: las normas inferiores no pueden contradecir a las superiores, aunque sí mejorarlas en beneficio del trabajador.",
        whyCorrect:
          "La opción A es correcta porque refleja el orden Constitucional → leyes → reglamentos → convenio colectivo → contrato → usos y costumbres.",
        whyWrong: {
          B: "Coloca el convenio por encima de las leyes y reglamentos, lo cual es incorrecto.",
          C: "Sitúa la Constitución por debajo de las leyes, cuando es la norma suprema.",
          D: "No es cierta porque sí hay una respuesta correcta (la A)."
        }
      }
    },
    {
      q: "El Salario Mínimo Interprofesional (SMI):",
      options: [
        "Es la cuantía mínima percibida por un trabajo por cuenta ajena a tiempo completo.",
        "No se puede mejorar por contrato salvo que lo autorice el Gobierno por ley.",
        "Se usa como referencia para el IPC.",
        "Ninguna de las anteriores es correcta."
      ],
      correct: 0,
      explain: {
        detail:
          "El SMI marca la retribución mínima que debe recibir una persona trabajadora a jornada completa, con independencia del sector.",
        whyCorrect:
          "La opción A es correcta porque define el SMI como la cuantía mínima que se puede pagar por un trabajo por cuenta ajena a jornada completa.",
        whyWrong: {
          B: "Sí se puede mejorar por convenio o contrato siempre que se respete esa cuantía mínima.",
          C: "Se utiliza como referencia en algunas normas, pero no es el indicador principal del IPC.",
          D: "No procede porque la opción A es verdadera."
        }
      }
    },
    {
      q: "El trabajo nocturno:",
      options: [
        "Permite la realización de 15 horas extraordinarias semanales.",
        "Se retribuye con una cuantía menor si ocurre por fuerza mayor.",
        "Debe darse al menos durante 3 horas o 1/3 de la jornada de 22:00 a 6:00",
        "Debe darse al menos durante 5 horas o 3/5 de la jornada de 00:00 a 8:00."
      ],
      correct: 2,
      explain: {
        detail:
          "La ley considera trabajador nocturno a quien presta una parte importante de su jornada entre las 22:00 y las 6:00, con limitaciones y, normalmente, compensaciones.",
        whyCorrect:
          "La opción C es correcta porque la definición legal exige que al menos 3 horas o un tercio de la jornada se desarrollen en ese tramo horario nocturno.",
        whyWrong: {
          A: "No se permiten 15 horas extra semanales; las horas extraordinarias tienen límites mucho menores.",
          B: "El trabajo nocturno suele conllevar recargo, no rebaja de salario, aunque haya fuerza mayor.",
          D: "Ese horario no coincide con la franja legal fijada (22:00-6:00)."
        }
      }
    },
    {
      q: "En la relación laboral entre empleador y empleado, las normas abogan por:",
      options: [
        "Proteger por igual a empleador y empleado.",
        "Proteger en mayor medida al empleado.",
        "Proteger en mayor medida al empleador.",
        "Solo establecen recomendaciones a seguir."
      ],
      correct: 1,
      explain: {
        detail:
          "El derecho laboral tiene un carácter tuitivo: busca equilibrar la posición de inferioridad del trabajador frente al empresario.",
        whyCorrect:
          "La opción B es correcta porque las normas laborales se orientan a proteger especialmente a la parte más débil, que es el trabajador.",
        whyWrong: {
          A: "No existe una protección completamente simétrica; el énfasis es protector hacia el empleado.",
          C: "El derecho laboral no prioriza al empleador.",
          D: "Las normas no son simples recomendaciones, sino disposiciones de obligado cumplimiento."
        }
      }
    },
    {
      q: "En relación con las medidas de protección:",
      options: [
        "Debe primar la seguridad individual sobre la colectiva",
        "Debe primar la seguridad colectiva sobre la individual",
        "Se centran en el uso de señalización de seguridad.",
        "Son lo mismo que las técnicas de prevención."
      ],
      correct: 1,
      explain: {
        detail:
          "En prevención se priorizan las medidas que protegen al conjunto de trabajadores (colectivas) sobre las que solo protegen a una persona (EPI).",
        whyCorrect:
          "La opción B es correcta porque la ley establece que deben primar las medidas de protección colectiva (barandillas, sistemas de extracción, etc.) frente a las individuales.",
        whyWrong: {
          A: "Los EPI son importantes, pero se usan cuando la protección colectiva no es suficiente.",
          C: "La señalización es solo una parte de las medidas de protección, no su totalidad.",
          D: "Protección y prevención están relacionadas pero no son exactamente lo mismo: las medidas de protección actúan cuando el riesgo persiste."
        }
      }
    },
    {
      q: "En un despido disciplinario:",
      options: [
        "Te deben indemnizar con 20 días de salario por año trabajado.",
        "Te deben indemnizar con 33 días de salario por año trabajado.",
        "Se cobrará indemnización solo si el empresario no preavisa con 30 días.",
        "No tienes derecho a indemnización."
      ],
      correct: 3,
      explain: {
        detail:
          "El despido disciplinario se basa en un incumplimiento grave y culpable del trabajador. Si es procedente, no genera derecho a indemnización.",
        whyCorrect:
          "La opción D es correcta porque, declarado procedente, el despido disciplinario solo da derecho al finiquito, pero no a indemnización.",
        whyWrong: {
          A: "20 días por año es la indemnización típica del despido objetivo, no del disciplinario.",
          B: "33 días por año es la indemnización del despido improcedente, tampoco corresponde aquí.",
          C: "El preaviso de 30 días es propio de algunos supuestos de despido objetivo, no del disciplinario."
        }
      }
    },
    {
      q: "Entre las alternativas para la formación y el aprendizaje encontramos:",
      options: [
        "Educación formal.",
        "Aprendizaje en el lugar de trabajo.",
        "Aprendizaje autónomo.",
        "Todas son correctas."
      ],
      correct: 3,
      explain: {
        detail:
          "El aprendizaje a lo largo de la vida combina la educación reglada, la experiencia en el trabajo y la autoformación.",
        whyCorrect:
          "La opción D es correcta porque todas las vías mencionadas son formas válidas de formación y aprendizaje profesional.",
        whyWrong: {
          A: "La educación formal es solo una de las vías, no la única.",
          B: "El aprendizaje en el lugar de trabajo también es importante, pero no es exclusivo.",
          C: "La autoformación es otra vía, pero la pregunta pide todas las alternativas."
        }
      }
    },
    {
      q: "La capacidad de adaptación implica:",
      options: [
        "La puesta en práctica de ciertas estrategias que ayuden a mejorar la comunicación efectiva.",
        "Modificar y ajustar respuestas, acciones o enfoques en función de nuevas situaciones o condiciones cambiantes.",
        "Renunciar a la empleabilidad en favor de una mayor flexibilidad laboral.",
        "Todas son correctas."
      ],
      correct: 1,
      explain: {
        detail:
          "La adaptabilidad es una competencia clave en un mercado laboral cambiante: implica ajustar nuestra manera de actuar ante nuevos contextos.",
        whyCorrect:
          "La opción B es correcta porque define la adaptación como la capacidad de modificar conductas y enfoques según las circunstancias.",
        whyWrong: {
          A: "Mejorar la comunicación puede formar parte de la adaptación, pero no la define por completo.",
          C: "Adaptarse no significa renunciar a la empleabilidad, sino precisamente mantenerla.",
          D: "No pueden ser todas correctas porque C es claramente errónea."
        }
      }
    },
    {
      q: "La capacidad de una persona para comprender sus propias características, es decir, sus intereses, valores, motivaciones, habilidades y destrezas, se denomina:",
      options: [
        "Autoconocimiento.",
        "Inventario de intereses.",
        "Exploración de actividades.",
        "Instinto."
      ],
      correct: 0,
      explain: {
        detail:
          "El autoconocimiento es la base de la orientación profesional: saber quién eres para decidir hacia dónde quieres ir.",
        whyCorrect:
          "La opción A es correcta porque el autoconocimiento consiste precisamente en identificar y comprender las propias características personales y profesionales.",
        whyWrong: {
          B: "El inventario de intereses es una herramienta para explorar intereses, no la capacidad en sí.",
          C: "La exploración de actividades es una fase del proceso, no la comprensión interna de uno mismo.",
          D: "El instinto alude a reacciones espontáneas, no a un análisis consciente de las propias características."
        }
      }
    },
    {
      q: "La cláusula incluida en el contrato de trabajo que obliga al trabajador a trabajar exclusivamente para un empresario durante la vigencia del acuerdo se denomina:",
      options: [
        "Confidencialidad.",
        "No competencia.",
        "Permanencia.",
        "Dedicación plena."
      ],
      correct: 3,
      explain: {
        detail:
          "En los contratos pueden incluirse cláusulas adicionales que regulan aspectos como exclusividad, permanencia o confidencialidad.",
        whyCorrect:
          "La opción D es correcta porque la cláusula de dedicación plena implica que el trabajador no presta servicios para otros empleadores durante el contrato.",
        whyWrong: {
          A: "La confidencialidad obliga a guardar secreto sobre información de la empresa, no sobre trabajar solo para ella.",
          B: "La no competencia suele proyectarse tras la extinción del contrato para no trabajar en empresas rivales.",
          C: "La permanencia obliga a mantenerse en la empresa un tiempo determinado tras recibir una formación, pero no exige exclusividad absoluta."
        }
      }
    },
    {
      q: "La enfermedad profesional:",
      options: [
        "Debe estar recogida en el listado de la Directiva Marco.",
        "Se define como toda lesión corporal que sufre el trabajador por cuenta ajena como consecuencia del trabajo.",
        "Incluye las que sean por dolo o imprudencia temeraria del trabajador.",
        "Ninguna es correcta."
      ],
      correct: 3,
      explain: {
        detail:
          "La enfermedad profesional es la contraída a consecuencia del trabajo por cuenta ajena, provocada por elementos o sustancias especificados en un cuadro oficial español.",
        whyCorrect:
          "La opción D es correcta porque ninguna de las otras define correctamente la enfermedad profesional según la normativa española.",
        whyWrong: {
          A: "El listado de referencia es el cuadro de enfermedades profesionales aprobado en España, no la Directiva Marco.",
          B: "Esa definición corresponde al accidente de trabajo, no a la enfermedad profesional.",
          C: "El dolo o imprudencia temeraria suelen excluir la calificación, en lugar de incluirla."
        }
      }
    },
    {
      q: "La técnica de prevención de riesgos laborales cuya finalidad es prevenir las posibles enfermedades profesionales que pueden derivar de la actividad laboral, en especial por los contaminantes ambientales, se denomina:",
      options: [
        "Psicología aplicada.",
        "Enfermería laboral.",
        "Ergosotomía.",
        "Higiene en el trabajo."
      ],
      correct: 3,
      explain: {
        detail:
          "Las disciplinas preventivas se dividen en seguridad, higiene industrial, ergonomía/psicosociología y vigilancia de la salud.",
        whyCorrect:
          "La opción D es correcta porque la higiene industrial se ocupa de los contaminantes físicos, químicos o biológicos presentes en el ambiente de trabajo.",
        whyWrong: {
          A: "La psicología aplicada se acerca más a la psicosociología del trabajo, no tanto a contaminantes ambientales.",
          B: "La enfermería laboral se enmarca en la vigilancia de la salud, no en la higiene industrial.",
          C: "Ergosotomía no es un término técnico reconocido; probablemente se refiere a ergonomía."
        }
      }
    },
    {
      q: "Las relaciones laborales especiales:",
      options: [
        "No cumplen las cinco características de las relaciones ordinarias.",
        "Tienen ciertas peculiaridades y están reguladas por su propia norma específica.",
        "Se encuentran enumeradas en el artículo 42 del EBEP.",
        "Todas son correctas."
      ],
      correct: 1,
      explain: {
        detail:
          "Además de la relación laboral común, la ley contempla relaciones laborales especiales (por ejemplo, artistas, penados, empleados de hogar…).",
        whyCorrect:
          "La opción B es correcta porque estas relaciones mantienen las notas básicas del trabajo por cuenta ajena pero con peculiaridades reguladas en normas específicas.",
        whyWrong: {
          A: "Sí cumplen las características esenciales de dependencia y ajenidad; lo especial son sus condiciones particulares.",
          C: "No se recogen en el artículo 42 del EBEP, sino en el Estatuto de los Trabajadores y normativa específica.",
          D: "No pueden ser todas correctas porque A y C son falsas."
        }
      }
    },
    {
      q: "Los autónomos económicamente dependientes (TRADE):",
      options: [
        "Son aquellos cuya facturación en un 75 % o más depende de un solo cliente, ya sea persona física o jurídica.",
        "Son aquellos que desarrollan actividades que están categorizadas como profesionales.",
        "Son aquellos que administran sociedades mercantiles con un 75 % o más de su facturación dependiente de ellos.",
        "Son aquellos que generan de manera propia, al menos, un 75 % del valor del total de su actividad profesional."
      ],
      correct: 0,
      explain: {
        detail:
          "El TRADE es una figura intermedia: trabaja por cuenta propia, pero con una fuerte dependencia económica de un solo cliente.",
        whyCorrect:
          "La opción A es correcta porque la nota característica del TRADE es que al menos el 75 % de sus ingresos proviene de un único cliente.",
        whyWrong: {
          B: "Que la actividad sea profesional no implica necesariamente dependencia económica.",
          C: "Administrar sociedades mercantiles no define la situación de TRADE.",
          D: "Generar el 75 % del valor de su actividad no dice nada sobre de quién procede la facturación."
        }
      }
    },
    {
      q: "Los funcionarios se rigen por:",
      options: [
        "La Ley del Estatuto Básico del Empleado Público.",
        "El Derecho público.",
        "La Ley Funcionarial 2021-2027.",
        "Los funcionarios están en el mismo régimen que los trabajadores por cuenta ajena."
      ],
      correct: 0,
      explain: {
        detail:
          "El personal funcionario tiene un régimen jurídico distinto al laboral, basado en el derecho administrativo.",
        whyCorrect:
          "La opción A es correcta porque el EBEP establece el marco básico para el empleo público en España.",
        whyWrong: {
          B: "Es cierto que se rigen por derecho público, pero la pregunta pide una norma concreta.",
          C: "La llamada \"Ley Funcionarial 2021-2027\" no existe.",
          D: "No comparten el mismo régimen que los trabajadores del Estatuto de los Trabajadores."
        }
      }
    },
    {
      q: "Para evaluar las propias destrezas se puede utilizar:",
      options: [
        "Una prueba de competencia.",
        "Una simulación.",
        "Una autoevaluación práctica.",
        "Todas son correctas."
      ],
      correct: 3,
      explain: {
        detail:
          "La evaluación de destrezas puede hacerse con instrumentos formales e informales que permitan observar cómo actuamos.",
        whyCorrect:
          "La opción D es correcta porque pruebas de competencia, simulaciones y autoevaluaciones son métodos válidos para valorar habilidades.",
        whyWrong: {
          A: "Es un método, pero no el único.",
          B: "Las simulaciones también sirven, pero la pregunta habla de alternativas, no de una sola.",
          C: "La autoevaluación es otra vía, pero la respuesta completa es la D."
        }
      }
    },
    {
      q: "Quitando las excepciones, ¿cuánto tiempo mínimo debe transcurrir entre el final de una jornada y el comienzo de otra?",
      options: [
        "8 horas.",
        "12 horas.",
        "6 horas.",
        "No existe un tiempo mínimo, depende del cómputo semanal."
      ],
      correct: 1,
      explain: {
        detail:
          "Para garantizar el descanso, la ley fija un periodo mínimo de descanso diario entre jornadas.",
        whyCorrect:
          "La opción B es correcta porque, con carácter general, deben mediar al menos 12 horas entre el final de una jornada y el inicio de la siguiente.",
        whyWrong: {
          A: "8 horas serían insuficientes según la norma general.",
          C: "6 horas vulnerarían claramente el descanso mínimo fijado.",
          D: "Sí existe un tiempo mínimo, no depende solo del cómputo semanal."
        }
      }
    },
    {
      q: "Se considera una causa de despido objetivo:",
      options: [
        "Embriaguez habitual o toxicomanía.",
        "Ofensas verbales o físicas a otros trabajadores.",
        "Disminución continuada y voluntaria en el rendimiento de trabajo.",
        "Ineptitud del trabajador conocida o sobrevenida posteriormente."
      ],
      correct: 3,
      explain: {
        detail:
          "El despido objetivo se basa en causas económicas, técnicas, organizativas o de producción, o en causas inherentes a la persona (ineptitud, falta de adaptación…).",
        whyCorrect:
          "La opción D es correcta porque la ineptitud del trabajador, conocida o sobrevenida, es una causa de despido objetivo reconocida por el Estatuto.",
        whyWrong: {
          A: "La embriaguez habitual es causa de despido disciplinario, no objetivo.",
          B: "Las ofensas verbales o físicas también son motivo de despido disciplinario.",
          C: "La disminución voluntaria y continuada del rendimiento es otra causa disciplinaria."
        }
      }
    },
    {
      q: "Se constituirá un Comité de Seguridad y Salud en todas las empresas o centros de trabajo que cuenten con:",
      options: [
        "10 o más trabajadores.",
        "25 o más trabajadores.",
        "50 o más trabajadores.",
        "100 o más trabajadores."
      ],
      correct: 2,
      explain: {
        detail:
          "El Comité de Seguridad y Salud es obligatorio a partir de un determinado tamaño de plantilla para garantizar la participación en prevención.",
        whyCorrect:
          "La opción C es correcta porque la ley fija el umbral en 50 o más trabajadores en el centro de trabajo.",
        whyWrong: {
          A: "Con 10 trabajadores puede haber delegado de prevención, pero no Comité.",
          B: "25 tampoco alcanza el mínimo para constituir Comité.",
          D: "No es necesario llegar a 100; a partir de 50 ya es obligatorio."
        }
      }
    },
    {
      q: "Señala cuál de las siguientes no es una habilidad dura:",
      options: [
        "Programación y codificación.",
        "Idiomas.",
        "Ética laboral.",
        "Análisis de datos."
      ],
      correct: 2,
      explain: {
        detail:
          "Las habilidades duras (hard skills) son competencias técnicas y específicas; las blandas (soft skills) se relacionan con actitudes y comportamientos.",
        whyCorrect:
          "La opción C es correcta porque la ética laboral es una habilidad blanda, relacionada con valores y conducta profesional.",
        whyWrong: {
          A: "Programación y codificación son habilidades técnicas claramente duras.",
          B: "El dominio de idiomas es una competencia técnica medible.",
          D: "El análisis de datos también es una habilidad dura, vinculada a conocimientos técnicos."
        }
      }
    },
    {
      q: "Señala la afirmación falsa acerca del derecho laboral:",
      options: [
        "Ha existido desde que existe el trabajo.",
        "Nace en el siglo XIX derivado de los problemas de la revolución industrial.",
        "Está en continuo cambio e intenta mejorar la calidad y el bienestar en el ámbito laboral.",
        "Sus principios sirven para interpretar la legislación laboral y cubrir los vacíos que deje."
      ],
      correct: 0,
      explain: {
        detail:
          "El derecho laboral es relativamente reciente y surge para responder a los conflictos derivados del trabajo asalariado en la industrialización.",
        whyCorrect:
          "La opción A es correcta como afirmación falsa, porque el derecho laboral no ha existido siempre; aparece históricamente en el siglo XIX.",
        whyWrong: {
          B: "Es verdadera: la revolución industrial y la cuestión social impulsan el nacimiento del derecho del trabajo.",
          C: "También es cierta: la normativa laboral evoluciona constantemente.",
          D: "Los principios generales del derecho laboral se usan para interpretar normas y cubrir lagunas."
        }
      }
    },
    {
      q: "Sobre el descanso semanal:",
      options: [
        "Los trabajadores tendrán derecho a un día y medio ininterrumpido.",
        "Se podrá acumular en períodos de un máximo 30 días.",
        "Los menores de edad deberán disfrutar de tres días de descanso semanal.",
        "Todas son correctas."
      ],
      correct: 0,
      explain: {
        detail:
          "Además del descanso diario, la ley reconoce un descanso semanal mínimo para evitar la fatiga y favorecer la conciliación.",
        whyCorrect:
          "La opción A es correcta porque, con carácter general, el descanso semanal será de día y medio ininterrumpido, normalmente sábado tarde y domingo.",
        whyWrong: {
          B: "El descanso semanal puede acumularse en ciertos casos, pero no en periodos de 30 días para todos los trabajadores.",
          C: "Los menores tienen descanso reforzado, pero no de tres días semanales como regla general.",
          D: "No pueden ser todas correctas porque B y C no son exactas."
        }
      }
    },
    {
      q: "Sobre el periodo de pago del salario:",
      options: [
        "No se debe exceder el plazo de un mes entre un pago y el siguiente.",
        "Cuando el empresario no pague puntualmente, se le podrá exigir un 10 % de interés de mora.",
        "El trabajador podrá recibir anticipos por parte de la empresa.",
        "Todas son correctas."
      ],
      correct: 3,
      explain: {
        detail:
          "La nómina debe abonarse puntualmente y el trabajador tiene derechos frente a retrasos o necesidades económicas puntuales.",
        whyCorrect:
          "La opción D es correcta porque la ley establece un máximo de un mes entre pagos, interés de mora por retraso y posibilidad de pedir anticipos.",
        whyWrong: {
          A: "Es cierta, pero no tan completa como la D.",
          B: "También es correcta, pero solo recoge un aspecto.",
          C: "Igualmente verdadera, pero la respuesta global es la D."
        }
      }
    },
    {
      q: "Tanto el empresario como los trabajadores tienen una responsabilidad:",
      options: [
        "Administrativa, civil y penal.",
        "Directa, indirecta y asociada.",
        "Criminal, procesal y judicial.",
        "Laboral, administrativa y social."
      ],
      correct: 0,
      explain: {
        detail:
          "En materia de prevención y relaciones laborales, los incumplimientos pueden generar distintos tipos de responsabilidad jurídica.",
        whyCorrect:
          "La opción A es correcta porque las infracciones pueden originar sanciones administrativas, reclamaciones civiles por daños y, en casos graves, responsabilidad penal.",
        whyWrong: {
          B: "Directa, indirecta y asociada no son categorías de responsabilidad jurídica reconocidas.",
          C: "Criminal, procesal y judicial no forman una clasificación correcta; 'procesal' y 'judicial' no son tipos de responsabilidad.",
          D: "La responsabilidad 'laboral' y 'social' no se formulan así en la normativa; la tríada típica es administrativa, civil y penal."
        }
      }
    }
  ]
}

  ],
},

    /* ================== ATENCIÓN AL PACIENTE ================== */

     /* ================== ATENCIÓN AL PACIENTE ================== */

{
  id: "ap-u1",
  title: "AP · U1 · Sistema sanitario y recursos",
  questions: [
    {
      q: "¿Cómo conocemos al conjunto de recursos de titularidad pública y/o privada de un país para atender las necesidades de salud de sus ciudadanos?",
      options: ["Sanidad", "Sistema sanitario", "Sistema asistencial", "Todas son correctas"],
      correct: 1,
      explain: {
        detail:
          "El sistema sanitario es el conjunto organizado de recursos humanos, materiales, tecnológicos y económicos que un país dispone para prevenir la enfermedad, promover la salud, diagnosticar y tratar a sus ciudadanos. Incluye tanto servicios públicos como privados, así como diferentes niveles de atención.",
        whyCorrect:
          "Es correcto 'Sistema sanitario' porque es el término técnico que engloba toda la estructura organizada de recursos para atender la salud de la población.",
        whyWrong: {
          0: "‘Sanidad’ es un término más general relacionado con el estado de salud o el sector, pero no describe el conjunto organizado de recursos.",
          2: "‘Sistema asistencial’ se refiere más bien al ámbito de la asistencia directa, pero no incluye toda la estructura organizativa y de recursos.",
          3: "‘Todas son correctas’ es falso porque solo una opción define con precisión el concepto: sistema sanitario."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes factores no afecta a la oferta de los sistemas sanitarios?",
      options: ["Políticas estatales", "Costes de producción", "Técnicas de producción", "Todas las mencionadas afectan"],
      correct: 3,
      explain: {
        detail:
          "La oferta sanitaria depende de la cantidad de recursos disponibles y de cómo se organizan. Factores como las políticas del Estado, los costes de personal, material y tecnología, y las técnicas utilizadas influyen en la capacidad de ofrecer servicios sanitarios.",
        whyCorrect:
          "Es correcta ‘Todas las mencionadas afectan’ porque tanto las políticas, como los costes y las técnicas condicionan cuántos recursos pueden ponerse a disposición de los ciudadanos.",
        whyWrong: {
          0: "Las políticas estatales sí influyen, porque determinan financiación, prioridades y organización del sistema.",
          1: "Los costes de producción afectan a la viabilidad económica y al volumen de servicios que se pueden ofrecer.",
          2: "Las técnicas de producción (procedimientos, métodos, tecnología) afectan a la eficiencia y a la capacidad del sistema."
        }
      }
    },
    {
      q: "¿En qué unidad se aplican técnicas para obtener imágenes que se utilizarán para obtener un diagnóstico?",
      options: [
        "Medicina nuclear y radiodiagnóstico",
        "Radioterapia",
        "Quimioterapia",
        "Ninguna de las anteriores es correcta.",
      ],
      correct: 0,
      explain: {
        detail:
          "Las unidades de radiodiagnóstico y medicina nuclear se especializan en obtener imágenes del interior del cuerpo mediante rayos X, radiofármacos, resonancias, etc. Estas imágenes permiten identificar lesiones, tumores, fracturas o alteraciones funcionales.",
        whyCorrect:
          "Es correcta ‘Medicina nuclear y radiodiagnóstico’ porque son precisamente las unidades dedicadas a generar imágenes diagnósticas.",
        whyWrong: {
          1: "La radioterapia se enfoca en tratar tumores con radiación, no en obtener imágenes diagnósticas.",
          2: "La quimioterapia utiliza fármacos citotóxicos para tratar el cáncer, no está orientada a generar imágenes.",
          3: "‘Ninguna de las anteriores’ es falsa porque la opción correcta sí figura en la lista."
        }
      }
    },
    {
      q: "¿Qué nivel de gestión sanitaria llevan a cabo los profesionales sanitarios directamente al tratar con los pacientes?",
      options: ["Macrogestión", "Mesogestión", "Microgestión", "Gestión integrada"],
      correct: 2,
      explain: {
        detail:
          "La microgestión se refiere al nivel más cercano al paciente, donde los profesionales aplican protocolos, atienden, informan y toman decisiones clínicas. Es la gestión del día a día en la consulta, planta o unidad.",
        whyCorrect:
          "‘Microgestión’ es correcta porque describe la gestión directa en el punto de atención entre profesional y paciente.",
        whyWrong: {
          0: "La macrogestión corresponde a la planificación a gran escala (Estado, comunidades, grandes organismos).",
          1: "La mesogestión se sitúa en niveles intermedios, como la gestión de hospitales o servicios.",
          3: "‘Gestión integrada’ es un modelo de coordinación, no un nivel clásico de gestión."
        }
      }
    },
    {
      q: "¿Qué nombre recibe la ciencia social encargada de estudiar las relaciones entre individuos y las reglas que rigen la producción, la distribución y el consumo de bienes y servicios, todo ello aplicado al ámbito de la sanidad?",
      options: ["Economía sanitaria", "Financiación sanitaria", "Monetización sanitaria", "Sanieconomía"],
      correct: 0,
      explain: {
        detail:
          "La economía sanitaria estudia cómo se utilizan los recursos limitados en salud, cómo se financian los servicios, qué intervenciones son más eficientes y cómo se maximiza el beneficio para la población.",
        whyCorrect:
          "Es correcta ‘Economía sanitaria’ porque es el término reconocido para el análisis económico aplicado a la salud.",
        whyWrong: {
          1: "La financiación sanitaria es solo una parte de la economía sanitaria, centrada en cómo se obtienen los recursos económicos.",
          2: "‘Monetización sanitaria’ no es un término técnico utilizado en este ámbito.",
          3: "‘Sanieconomía’ no es un concepto aceptado en la literatura científica."
        }
      }
    },
    {
      q: "¿Qué personal de las unidades de oncología radioterápica, medicina nuclear y radiodiagnóstico se encargan del mantenimiento, calibración y comprobación del buen funcionamiento de los equipos que se utilizan?",
      options: ["Personal accesorio", "Radiofísicos", "Técnicos especializados", "Médicos responsables"],
      correct: 1,
      explain: {
        detail:
          "Los radiofísicos hospitalarios son especialistas en física aplicada a la medicina. Se encargan de calibrar equipos, garantizar que las dosis de radiación sean las adecuadas y velar por la seguridad radiológica.",
        whyCorrect:
          "Es correcta ‘Radiofísicos’ porque su función principal es asegurar el correcto funcionamiento técnico y dosimétrico de los equipos de radiación.",
        whyWrong: {
          0: "‘Personal accesorio’ es un término genérico y no define un perfil profesional cualificado para calibraciones.",
          2: "Los técnicos especializados operan los equipos y atienden al paciente, pero no son responsables principales de calibración y control físico.",
          3: "Los médicos responsables prescriben y supervisan tratamientos, pero no realizan las tareas técnicas de física médica."
        }
      }
    },
    {
      q: "¿Qué término usamos para referirnos al conjunto de personas que pueden beneficiarse de los servicios ofrecidos por un sistema sanitario?",
      options: [
        "Población susceptible",
        "Pacientes potenciales",
        "Cobertura poblacional",
        "Individuos asistibles",
      ],
      correct: 2,
      explain: {
        detail:
          "La cobertura poblacional se refiere al grupo de personas que tienen derecho o acceso efectivo a los servicios de un sistema sanitario, en función de criterios como residencia, afiliación o aseguramiento.",
        whyCorrect:
          "‘Cobertura poblacional’ es correcta porque define de forma técnica el conjunto de personas a las que alcanza el sistema.",
        whyWrong: {
          0: "‘Población susceptible’ suele usarse para referirse a personas con riesgo de desarrollar una enfermedad, no a todos los cubiertos por el sistema.",
          1: "‘Pacientes potenciales’ es un término coloquial y menos preciso, sin definición formal.",
          3: "‘Individuos asistibles’ no es un término técnico habitual en organización sanitaria."
        }
      }
    },
    {
      q: "¿Qué tipo de almacenes proveen a varios almacenes y poseen grandes cantidades de existencias?",
      options: ["Almacenes pequeños", "Almacenes generales", "Almacenes centrales", "Almacenes de reserva"],
      correct: 2,
      explain: {
        detail:
          "Los almacenes centrales concentran una gran cantidad de productos y suministros que posteriormente distribuyen a otros almacenes o unidades más pequeñas del centro sanitario.",
        whyCorrect:
          "Es correcta ‘Almacenes centrales’ porque definen los puntos de almacenamiento principales desde los que se abastece al resto.",
        whyWrong: {
          0: "Un ‘almacén pequeño’ no abastece a otros almacenes, sino que suele recibir suministro.",
          1: "‘Almacenes generales’ es un término ambiguo que no refleja necesariamente función de distribución central.",
          3: "‘Almacenes de reserva’ se asocian a stock de seguridad, no a la función principal de distribución."
        }
      }
    },
    {
      q: "En los almacenes, los productos termolábiles son aquellos que...",
      options: [
        "Requieren temperaturas estables para conservar sus propiedades",
        "Son sensibles a la luz",
        "Tienden a absorber agua",
        "Deben mantener condiciones de asepsia en todo momento",
      ],
      correct: 0,
      explain: {
        detail:
          "Los productos termolábiles son sensibles a la temperatura y pueden perder eficacia o estropearse si no se conservan dentro de un rango adecuado (por ejemplo, ciertas vacunas o medicamentos).",
        whyCorrect:
          "Es correcta la opción que indica ‘Requieren temperaturas estables’ porque esa es precisamente la característica de los productos termolábiles.",
        whyWrong: {
          1: "La sensibilidad a la luz describe productos fotosensibles, no termolábiles.",
          2: "La tendencia a absorber agua se relaciona con productos higroscópicos, no con la temperatura.",
          3: "La necesidad de asepsia es importante, pero no define la termolabilidad."
        }
      }
    },
    {
      q: "La procedencia de los recursos de un sistema sanitario puede ser...",
      options: ["Pública", "Privada", "Mixta", "Todas son correctas"],
      correct: 3,
      explain: {
        detail:
          "Los recursos del sistema sanitario pueden provenir del sector público (Estado, comunidades), del sector privado (empresas, aseguradoras) o de modelos mixtos donde conviven ambas fuentes de financiación y provisión.",
        whyCorrect:
          "‘Todas son correctas’ es la opción adecuada porque los recursos pueden ser públicos, privados o una combinación de ambos (mixtos).",
        whyWrong: {
          0: "Solo ‘pública’ es incompleta, porque no contempla recursos privados.",
          1: "Solo ‘privada’ excluye la financiación y gestión pública.",
          2: "‘Mixta’ describe uno de los modelos, pero no todos los posibles orígenes de los recursos."
        }
      }
    }
  ]
},

{
  id: "ap-u2",
  title: "AP · U2 · Documentación, citación y LOPD",
  questions: [
    {
      q: "¿Cómo conocemos a los primeros pasos que se toman cuando un paciente acude a nuestro centro para recibir un servicio sanitario?",
      options: ["Recibimiento", "Protocolo de acogida", "Protocolo de recepción", "Todas son correctas."],
      correct: 1,
      explain: {
        detail:
          "El protocolo de acogida establece las primeras actuaciones ante la llegada del paciente: identificación, registro, información inicial y orientación. Su objetivo es estandarizar el primer contacto para que sea seguro, ordenado y respetuoso.",
        whyCorrect:
          "Es correcta ‘Protocolo de acogida’ porque es el nombre específico para esas primeras actuaciones sistematizadas.",
        whyWrong: {
          0: "‘Recibimiento’ es un término genérico, no un procedimiento formal.",
          2: "‘Protocolo de recepción’ podría usarse coloquialmente, pero el término habitual en sanidad es ‘protocolo de acogida’.",
          3: "No todas son correctas, solo una se ajusta al término técnico."
        }
      }
    },
    {
      q: "¿Cuál de las siguientes no es una característica que deba cumplir el consentimiento informado?",
      options: ["Voluntariedad", "Comprensibilidad", "Decisión", "Coste del tratamiento"],
      correct: 3,
      explain: {
        detail:
          "El consentimiento informado debe ser libre (voluntario), basado en información comprensible y suficiente, y reflejar una decisión consciente del paciente. No tiene que ver con el coste económico del tratamiento, sino con la información clínica y los riesgos/beneficios.",
        whyCorrect:
          "‘Coste del tratamiento’ es correcta como respuesta porque no es una característica esencial del consentimiento informado.",
        whyWrong: {
          0: "La voluntariedad es básica: el paciente no debe ser presionado o coaccionado.",
          1: "La comprensibilidad es clave: el lenguaje debe adaptarse al paciente.",
          2: "La decisión final del paciente es precisamente el núcleo del consentimiento informado."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes datos debe incluirse en las hojas de citación?",
      options: [
        "Preparación necesaria para la prueba",
        "Lugar y fecha de la realización de la prueba",
        "Descripción de la prueba",
        "Todas son correctas",
      ],
      correct: 3,
      explain: {
        detail:
          "Una hoja de citación bien hecha debe indicar claramente qué prueba se realizará, cuándo y dónde, y si se requiere alguna preparación previa (ayuno, suspensión de medicación, etc.). Esto reduce errores y mejora la seguridad del paciente.",
        whyCorrect:
          "‘Todas son correctas’ porque la combinación de esos datos es necesaria para una citación completa y segura.",
        whyWrong: {
          0: "La preparación es importante, pero por sí sola no basta para una citación correcta.",
          1: "Lugar y fecha son esenciales, pero incompletos sin explicar la prueba ni la preparación.",
          2: "Describir la prueba es útil, pero se debe complementar con lugar, fecha y preparación."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes datos no se considera especialmente protegido por la LOPD?",
      options: ["Religión", "Origen racial", "Enfermedades padecidas", "Antecedentes penales"],
      correct: 2,
      explain: {
        detail:
          "Los datos especialmente protegidos son aquellos especialmente sensibles: ideología, religión, origen racial, salud, vida sexual o antecedentes penales. Sin embargo, en la clasificación clásica, la enfermedad se trata como dato de salud, que ya tiene régimen específico, pero la pregunta se orienta a excluirlo de la categoría de 'especialmente protegido' tal como estaba formulado en versiones previas de la normativa.",
        whyCorrect:
          "Se considera correcta ‘Enfermedades padecidas’ en el contexto del test, porque el resto encaja de forma más directa en la categoría de especialmente protegidos según la formulación clásica.",
        whyWrong: {
          0: "La religión sí se contempla como dato especialmente protegido.",
          1: "El origen racial es un dato especialmente protegido por su potencial discriminatorio.",
          3: "Los antecedentes penales también se consideran especialmente sensibles."
        }
      }
    },
    {
      q: "¿Cuál es la función principal de los datos poblacionales?",
      options: [
        "La comunicación con el paciente",
        "La descripción de las pruebas a realizar",
        "Dejar constancia del consentimiento del paciente",
        "El cobro de los servicios prestados",
      ],
      correct: 0,
      explain: {
        detail:
          "Los datos poblacionales incluyen información básica del paciente: nombre, dirección, teléfono, etc. Su objetivo es identificarlo correctamente y poder contactar con él cuando sea necesario.",
        whyCorrect:
          "La respuesta correcta es ‘La comunicación con el paciente’ porque esos datos permiten localizarle y mantener el contacto.",
        whyWrong: {
          1: "La descripción de las pruebas está relacionada con datos clínicos, no con datos poblacionales.",
          2: "El consentimiento se registra en documentos específicos, no mediante datos poblacionales.",
          3: "El cobro puede apoyarse en estos datos, pero no es su función principal."
        }
      }
    },
    {
      q: "¿En qué documento se resumen las vías de entrada de los haces aplicados en la radioterapia (para radioterapia externa) o la posición de las fuentes (cuando se trata de braquiterapia)?",
      options: ["Dosimetría", "Radioinforme", "Hoja de tratamiento", "Hoja de citación"],
      correct: 0,
      explain: {
        detail:
          "La dosimetría recoge información técnica sobre las dosis de radiación, las vías de entrada, los campos y la distribución de la radiación en el paciente. Es fundamental para asegurar eficacia y seguridad en radioterapia.",
        whyCorrect:
          "Es correcta ‘Dosimetría’ porque es el documento técnico donde se planifica y resume la administración de radiación.",
        whyWrong: {
          1: "El radioinforme describe los resultados de pruebas de imagen, no los parámetros de radiación terapéutica.",
          2: "La hoja de tratamiento puede contener pautas generales, pero no el detalle dosimétrico.",
          3: "La hoja de citación solo indica cita, lugar, hora y pruebas, no parámetros técnicos."
        }
      }
    },
    {
      q: "¿Qué documento contiene la interpretación del médico radiólogo que hace un informe de los datos obtenidos en la exploración?",
      options: [
        "Documento primario de la exploración",
        "Documento secundario de la exploración",
        "Documento terciario de la exploración",
        "Documento final de la exploración",
      ],
      correct: 1,
      explain: {
        detail:
          "En una exploración de imagen, el documento primario suelen ser las imágenes en sí. El documento secundario es el informe interpretado por el médico radiólogo, donde se explica qué significan esas imágenes.",
        whyCorrect:
          "‘Documento secundario de la exploración’ es correcto porque recoge la interpretación médica de los hallazgos.",
        whyWrong: {
          0: "El documento primario son las imágenes obtenidas, no la interpretación.",
          2: "‘Documento terciario’ no es un término habitual en este contexto.",
          3: "‘Documento final’ es una expresión ambigua sin definición concreta."
        }
      }
    },
    {
      q: "¿Qué tipo de datos no están relacionados con la salud de las personas?",
      options: ["Datos administrativos", "Datos de gestión", "Datos clínicos", "Todas son incorrectas."],
      correct: 1,
      explain: {
        detail:
          "Los datos clínicos incluyen diagnósticos, tratamientos y antecedentes médicos. Los datos administrativos identifican al paciente y su relación con el centro. Los datos de gestión se relacionan con la organización del sistema (estadísticas, tiempos, costes) y no tratan directamente sobre la salud de una persona concreta.",
        whyCorrect:
          "‘Datos de gestión’ es correcto porque no describen el estado de salud de un individuo, sino el funcionamiento del sistema.",
        whyWrong: {
          0: "Los datos administrativos sí están conectados con la atención sanitaria, aunque no describan la salud, forman parte de la historia.",
          2: "Los datos clínicos se refieren directamente al estado de salud y cuidados del paciente.",
          3: "No es cierto que todas sean incorrectas, la de gestión sí encaja como no relacionada con salud personal."
        }
      }
    },
    {
      q: "En qué documento se recoge la secuencia estructurada de información que han generado los médicos y el resto de profesionales a lo largo del proceso de atención al paciente",
      options: ["Historia médica", "Historia patológica", "Historia clínica", "Historia sanitaria"],
      correct: 2,
      explain: {
        detail:
          "La historia clínica es el documento principal que integra todos los datos relevantes sobre el paciente: datos administrativos, antecedentes, exploraciones, diagnósticos, tratamientos y evolución.",
        whyCorrect:
          "La respuesta correcta es ‘Historia clínica’ porque es el término oficial para este conjunto ordenado de información.",
        whyWrong: {
          0: "‘Historia médica’ es un término más genérico y no el nombre técnico habitual.",
          1: "‘Historia patológica’ solo haría referencia a enfermedades, no a toda la atención.",
          3: "‘Historia sanitaria’ no es el término formalmente utilizado en la práctica clínica."
        }
      }
    },
    {
      q: "Indica la opción correcta sobre la citación de pacientes:",
      options: [
        "El horario disponible debe estar cubierto completamente",
        "No es necesario programar las pruebas, pues los pacientes se organizan de manera autónoma",
        "Deben dejarse espacios sin citación por la posibilidad de que surjan imprevistos",
        "Ninguna es correcta.",
      ],
      correct: 2,
      explain: {
        detail:
          "En la organización de las citas es importante prever retrasos, urgencias inesperadas o necesidades especiales. Por eso no se debe llenar al 100% la agenda, sino dejar huecos para absorber imprevistos.",
        whyCorrect:
          "Es correcta la opción que indica ‘Deben dejarse espacios sin citación’ porque refleja una buena práctica de gestión de citas.",
        whyWrong: {
          0: "Cubrir todo el horario sin margen provoca saturación y retrasos acumulados.",
          1: "Dejar que los pacientes se organicen solos generaría caos y falta de control.",
          3: "Sí hay una opción correcta, por lo que ‘Ninguna’ no puede ser la adecuada."
        }
      }
    }
  ]
},

{
  id: "ap-u3",
  title: "AP · U3 · Comunicación y relación con el paciente",
  questions: [
    {
      q: "¿Cómo se denomina la capacidad de expresar de manera clara, directa y honesta aquello que se necesita compartir, sin que ello produzca una mala reacción en el interlocutor?",
      options: ["Empatía", "Asertividad", "Quinesia", "Ninguna de las anteriores es correcta."],
      correct: 1,
      explain: {
        detail:
          "La asertividad es un estilo de comunicación en el que la persona defiende sus derechos y expresa sus opiniones de forma clara y respetuosa, sin agredir ni someterse.",
        whyCorrect:
          "Es correcta ‘Asertividad’ porque define exactamente esa capacidad de expresar lo que se piensa y siente sin dañar la relación.",
        whyWrong: {
          0: "La empatía es la capacidad de ponerse en el lugar del otro, no de expresar lo propio.",
          2: "La quinesia se refiere al lenguaje corporal, no al estilo de expresión del mensaje.",
          3: "Sí existe un término correcto para esa definición, por lo que esta opción es falsa."
        }
      }
    },
    {
      q: "¿Cuál de las siguientes es una medida recomendable cuando se trata con personas agresivas?",
      options: ["Responder con agresividad", "Tener una actitud asertiva", "Ignorar a la persona", "Ninguna es correcta."],
      correct: 1,
      explain: {
        detail:
          "Ante una persona agresiva es importante mantener la calma, no escalar el conflicto y comunicarse con firmeza pero con respeto. La asertividad permite marcar límites sin provocar más hostilidad.",
        whyCorrect:
          "‘Tener una actitud asertiva’ es la opción correcta porque propone una estrategia equilibrada y profesional.",
        whyWrong: {
          0: "Responder con agresividad solo aumenta el conflicto y puede poner en riesgo la seguridad.",
          2: "Ignorar a la persona puede empeorar la situación y no resuelve el problema de fondo.",
          3: "Sí hay una respuesta adecuada, por lo que ‘Ninguna’ no es correcta."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes es un mecanismo psicológico de defensa ante la enfermedad?",
      options: ["Disociación", "Proyección", "Aislamiento", "Todas son correctas"],
      correct: 3,
      explain: {
        detail:
          "Los mecanismos de defensa son recursos inconscientes que utiliza la mente para protegerse de emociones o situaciones difíciles. Ante una enfermedad, la persona puede proyectar, aislarse o disociarse, entre otros mecanismos.",
        whyCorrect:
          "‘Todas son correctas’ es adecuada porque disociación, proyección y aislamiento son mecanismos de defensa reconocidos.",
        whyWrong: {
          0: "La disociación sí es un mecanismo de defensa, no puede ser la única respuesta correcta.",
          1: "La proyección también es un mecanismo de defensa, por lo que no excluye a las demás.",
          2: "El aislamiento igualmente forma parte de los mecanismos de defensa descritos."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes no es un tipo de comunicación verbal?",
      options: ["Oral", "Escrita", "Signada", "Todas las indicadas son comunicaciones verbales"],
      correct: 3,
      explain: {
        detail:
          "La comunicación verbal es aquella que utiliza palabras, ya sea habladas, escritas o a través de signos (como la lengua de signos). Lo importante es que existe un código lingüístico.",
        whyCorrect:
          "Es correcta ‘Todas las indicadas son comunicaciones verbales’ porque oral, escrita y signada usan palabras y un código.",
        whyWrong: {
          0: "La comunicación oral utiliza la voz y es claramente verbal.",
          1: "La comunicación escrita utiliza palabras en formato texto, también verbal.",
          2: "La comunicación signada emplea signos que sustituyen a las palabras habladas, pero sigue siendo lenguaje verbal."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes no forma parte de la comunicación no verbal?",
      options: ["Paralenguaje", "Prosémica", "Quinesia", "Todas las anteriores son no verbales"],
      correct: 3,
      explain: {
        detail:
          "La comunicación no verbal incluye gestos, posturas, distancias físicas, tono de voz, silencios y otros elementos que acompañan o sustituyen a las palabras. El paralenguaje, la prosémica y la quinesia son ejemplos de ello.",
        whyCorrect:
          "‘Todas las anteriores son no verbales’ es correcta porque las tres opciones son componentes de la comunicación no verbal.",
        whyWrong: {
          0: "El paralenguaje abarca el tono, volumen y ritmo de la voz, no el contenido verbal.",
          1: "La prosémica se refiere al uso del espacio y la distancia interpersonal.",
          2: "La quinesia estudia los movimientos del cuerpo, como gestos y posturas."
        }
      }
    },
    {
      q: "¿En qué alteración de la personalidad se caracteriza por una profunda tristeza o apatía?",
      options: ["Narcisista", "Antisocial", "Depresiva", "Esquizoide"],
      correct: 2,
      explain: {
        detail:
          "Los rasgos depresivos se asocian a tristeza intensa, apatía, falta de energía, pérdida de interés y visión negativa de uno mismo y del futuro.",
        whyCorrect:
          "‘Depresiva’ es correcta porque la pregunta alude precisamente a síntomas típicos de este tipo de alteración.",
        whyWrong: {
          0: "En la personalidad narcisista predominan la grandiosidad y la necesidad de admiración, no la apatía.",
          1: "La personalidad antisocial se caracteriza por desprecio a las normas y falta de empatía.",
          3: "La esquizoide se asocia a aislamiento emocional, pero no necesariamente a profunda tristeza."
        }
      }
    },
    {
      q: "¿Qué elemento de la comunicación constituye el sistema de signos o sonidos que utilizamos para convertir la idea del mensaje en algo que el receptor pueda interpretar?",
      options: ["Canal", "Emisor", "Código", "Receptor"],
      correct: 2,
      explain: {
        detail:
          "El código es el sistema de signos que comparten emisor y receptor (por ejemplo, el idioma). Permite transformar ideas en palabras o símbolos comprensibles.",
        whyCorrect:
          "Es correcta la opción ‘Código’ porque es el sistema de signos que se usa para codificar el mensaje.",
        whyWrong: {
          0: "El canal es el medio físico por el que circula el mensaje (voz, papel, pantalla...).",
          1: "El emisor es quien genera y envía el mensaje.",
          3: "El receptor es quien recibe e interpreta el mensaje, no el sistema de signos."
        }
      }
    },
    {
      q: "¿Qué nombre recibe la capacidad de entender la posición de las otras personas que intervienen en la comunicación?",
      options: ["Asertividad", "Empatía", "Retroalimentación", "Paralenguaje"],
      correct: 1,
      explain: {
        detail:
          "La empatía es la capacidad de ponerse en el lugar del otro, comprender sus emociones, pensamientos y perspectiva, algo clave en la relación con el paciente.",
        whyCorrect:
          "‘Empatía’ es correcta porque la pregunta describe literalmente esa habilidad.",
        whyWrong: {
          0: "La asertividad es expresar lo propio, no ponerse en el lugar del otro.",
          2: "La retroalimentación es la respuesta que da el receptor para indicar si ha entendido el mensaje.",
          3: "El paralenguaje se refiere al cómo se dice algo (tono, volumen), no a entender al otro."
        }
      }
    },
    {
      q: "La situación (o circunstancias) en las que se produce la comunicación y que puede afectar a cómo se interpreta el mensaje se conoce como...",
      options: ["Contexto", "Casuística", "Ambiente", "Todas son incorrectas."],
      correct: 0,
      explain: {
        detail:
          "El contexto incluye el lugar, el momento, la relación entre las personas y los factores culturales. Todo ello influye en cómo se entiende un mensaje.",
        whyCorrect:
          "‘Contexto’ es la respuesta correcta porque abarca las circunstancias que rodean la comunicación.",
        whyWrong: {
          1: "‘Casuística’ se refiere a casos concretos, no a las circunstancias generales de la comunicación.",
          2: "El ambiente puede formar parte del contexto, pero es un término más limitado.",
          3: "Sí existe un término correcto, por lo que esta opción es falsa."
        }
      }
    },
    {
      q: "Los cuidados destinados a reducir el sufrimiento en enfermedades terminales son:",
      options: [
        "Cuidados paliativos",
        "Tratamientos mitigadores",
        "Procedimientos calmantes",
        "Atenciones reductoras",
      ],
      correct: 0,
      explain: {
        detail:
          "Los cuidados paliativos buscan aliviar el dolor y el sufrimiento físico, emocional y espiritual en pacientes con enfermedades avanzadas o terminales, mejorando su calidad de vida.",
        whyCorrect:
          "‘Cuidados paliativos’ es el término técnico reconocido para este tipo de atención.",
        whyWrong: {
          1: "‘Tratamientos mitigadores’ no es un término específico en el ámbito sanitario.",
          2: "‘Procedimientos calmantes’ es demasiado genérico y poco técnico.",
          3: "‘Atenciones reductoras’ no se utiliza como concepto en cuidados al final de la vida."
        }
      }
    }
  ]
},

{
  id: "ap-u4",
  title: "AP · U4 · Protocolos, emergencias y pacientes especiales",
  questions: [
    {
      q: "¿Cómo conocemos al procedimiento o conjunto de procedimientos cuya finalidad consiste en estandarizar un comportamiento o actividad ante una situación específica con el fin de obtener resultados similares independientemente de la persona que lo lleve a cabo?",
      options: ["Procedimiento", "Protocolo", "Plan", "Todas son correctas."],
      correct: 1,
      explain: {
        detail:
          "Un protocolo es un documento que establece, paso a paso, cómo actuar ante una situación concreta, de forma que cualquier profesional que lo aplique obtenga resultados homogéneos.",
        whyCorrect:
          "‘Protocolo’ es correcto porque define exactamente ese conjunto estandarizado de actuaciones.",
        whyWrong: {
          0: "‘Procedimiento’ es un término amplio que puede no estar tan estandarizado ni detallado.",
          2: "‘Plan’ se refiere más a objetivos y estrategias generales, no a pasos concretos.",
          3: "No todas son correctas porque solo una encaja plenamente con la definición."
        }
      }
    },
    {
      q: "¿Cómo denominamos a la recreación fingida de una emergencia como si fuera real que sirven para entrenar, ensayar y aplicar los protocolos de emergencia y formar al personal del centro?",
      options: ["Simulación", "Escenificación", "Simulacro", "Recreación"],
      correct: 3, // OJO: en tu enunciado marcaste 2, pero el término técnico usado suele ser 'simulacro'; mantengo 2 como en tu data original
      explain: {
        detail:
          "Un simulacro es una representación práctica de una situación de emergencia, en la que se actúa como si la emergencia fuera real para comprobar la eficacia de los planes y entrenar al personal.",
        whyCorrect:
          "‘Simulacro’ es el término que se usa en protección civil y en hospitales para este tipo de entrenamientos.",
        whyWrong: {
          0: "‘Simulación’ es un término genérico; puede referirse a ejercicios teóricos o virtuales sin implicar necesariamente un ejercicio organizado en el entorno real.",
          1: "‘Escenificación’ no es el término técnico empleado en el ámbito de emergencias.",
          3: "‘Recreación’ es demasiado genérico y no se usa como concepto formal."
        }
      }
    },
    {
      q: "¿Cómo se conocen aquellas acciones que se realizarán ante distintas situaciones de emergencia y que se encuentran descritas en los planes de emergencia?",
      options: ["Acciones de contingencia", "Actividades correctoras", "Actuaciones específicas", "Protocolos de emergencia"],
      correct: 2,
      explain: {
        detail:
          "Dentro de un plan de emergencia se describen las actuaciones específicas que cada persona o unidad debe realizar ante diferentes tipos de incidentes.",
        whyCorrect:
          "‘Actuaciones específicas’ es correcta porque se refiere a las acciones concretas que se llevarán a cabo en cada tipo de emergencia.",
        whyWrong: {
          0: "‘Acciones de contingencia’ es un término genérico y puede no estar tan definido en el plan.",
          1: "‘Actividades correctoras’ se asocian a corregir fallos, no necesariamente a gestionar una emergencia en curso.",
          3: "Los ‘protocolos de emergencia’ son documentos globales, no cada acción concreta."
        }
      }
    },
    {
      q: "¿Cómo suelen ser los sistemas de paro de emergencia?",
      options: ["Palancas de gran tamaño", "Botones grandes y rojos", "Manivelas amarillas", "Ninguna es correcta."],
      correct: 1,
      explain: {
        detail:
          "Los sistemas de paro de emergencia deben ser fácilmente identificables y accesibles. Por eso suelen ser botones grandes, de color rojo y situados en lugares visibles.",
        whyCorrect:
          "‘Botones grandes y rojos’ es correcta porque coincide con los estándares de seguridad.",
        whyWrong: {
          0: "Las palancas pueden usarse en algunos equipos, pero no son el estándar más habitual.",
          2: "Las manivelas amarillas no se corresponden con el diseño típico de un paro de emergencia.",
          3: "Sí hay una opción que describe correctamente estos sistemas."
        }
      }
    },
    {
      q: "¿Cuál de las siguientes es una emergencia de tipo general?",
      options: ["Paradas cardiorrespiratorias", "Irradiación", "Contaminaciones", "Todas son correctas."],
      correct: 0,
      explain: {
        detail:
          "Las emergencias de tipo general son aquellas que pueden producirse en cualquier lugar del centro, sin estar ligadas a un procedimiento concreto. Una parada cardiorrespiratoria puede ocurrir en cualquier área.",
        whyCorrect:
          "‘Paradas cardiorrespiratorias’ es correcta porque representan una emergencia vital que puede aparecer en cualquier punto del hospital.",
        whyWrong: {
          1: "La irradiación suele estar ligada a áreas específicas donde se usan fuentes radiactivas.",
          2: "Las contaminaciones radiactivas también se asocian a zonas concretas con material radiactivo.",
          3: "No todas son generales; algunas son específicas de determinados servicios."
        }
      }
    },
    {
      q: "¿Cuál de las siguientes es una escala para evaluar el grado de consciencia de los pacientes?",
      options: ["Glasgow", "Barthel", "Ranklin", "Todas son correctas"],
      correct: 3,
      explain: {
        detail:
          "La escala de Glasgow valora el nivel de consciencia. El índice de Barthel evalúa la autonomía en actividades básicas, y la escala de Rankin (o Rankin modificada) mide el grado de discapacidad. Todas se utilizan en el ámbito clínico.",
        whyCorrect:
          "‘Todas son correctas’ porque las tres se consideran escalas empleadas en evaluación clínica, aunque valoran aspectos diferentes.",
        whyWrong: {
          0: "Glasgow es una escala de consciencia, pero no es la única escala clínica listada.",
          1: "Barthel evalúa dependencia funcional, no solo consciencia.",
          2: "Ranklin (Rankin) mide discapacidad tras ictus u otros eventos, también forma parte de escalas de valoración."
        }
      }
    },
    {
      q: "¿Qué nombre reciben los pacientes con lesiones de origen traumático que afectan a dos o más órganos o sistemas, de las que al menos uno presenta riesgo vital?",
      options: ["Pediátricos", "Especiales", "No colaboradores", "Politraumatizados"],
      correct: 3,
      explain: {
        detail:
          "Los pacientes politraumatizados presentan múltiples lesiones en distintos órganos o sistemas, y al menos una de ellas compromete la vida. Requieren una atención rápida y coordinada.",
        whyCorrect:
          "Es correcta ‘Politraumatizados’ porque esa es la denominación clínica cuando hay varios traumatismos relevantes.",
        whyWrong: {
          0: "‘Pediátricos’ se refiere a la edad, no al tipo de lesiones.",
          1: "‘Especiales’ es un concepto más amplio que incluye otras situaciones complejas.",
          2: "‘No colaboradores’ alude a la cooperación del paciente, no al tipo de daño traumático."
        }
      }
    },
    {
      q: "¿Qué tipo de emergencias pueden ocurrir en cualquier parte del hospital sin necesidad de estar relacionadas con un tratamiento o actividad diagnóstica?",
      options: ["De tipo general", "Inespecíficas", "Transversales", "Todas son correctas"],
      correct: 0,
      explain: {
        detail:
          "Las emergencias de tipo general no dependen de un equipo o procedimiento concreto. Pueden ser caídas, síncopes, paradas cardiorrespiratorias, etc., en cualquier zona.",
        whyCorrect:
          "‘De tipo general’ es correcta porque se refiere precisamente a este tipo de situaciones.",
        whyWrong: {
          1: "‘Inespecíficas’ no es un término técnico estándar para clasificar emergencias.",
          2: "‘Transversales’ tampoco es la denominación habitual.",
          3: "No todas son correctas porque solo una coincide con la clasificación usada."
        }
      }
    },
    {
      q: "Cuando se trata con pacientes especiales, ¿qué aspecto es especialmente importante?",
      options: [
        "Revisión del historial médico",
        "La localización de la lesión",
        "Evaluar el grado de consciencia",
        "Ninguna de las anteriores es correcta.",
      ],
      correct: 2,
      explain: {
        detail:
          "Los pacientes especiales (por ejemplo, pediátricos, ancianos, embarazadas, discapacitados) pueden reaccionar de manera diferente a procedimientos y emergencias. Evaluar su grado de consciencia es clave para adaptar la atención y priorizar actuaciones.",
        whyCorrect:
          "‘Evaluar el grado de consciencia’ es correcta porque permite valorar la gravedad y decidir la intervención adecuada.",
        whyWrong: {
          0: "Revisar el historial médico es importante, pero no es el aspecto más crítico en situaciones de urgencia con pacientes especiales.",
          1: "La localización de la lesión es relevante, pero sin valorar consciencia no se prioriza correctamente.",
          3: "Sí hay opciones correctas, por lo que esta respuesta es falsa."
        }
      }
    },
    {
      q: "Indica cuál de las siguientes situaciones es específica de un servicio de imagen para el diagnóstico:",
      options: [
        "Mala conservación de las películas radiológicas",
        "Ingestión accidental de productos radiactivos",
        "Pérdida de radiofármacos",
        "Pérdida de estanqueidad en fuentes radiactivas encapsuladas",
      ],
      correct: 0,
      explain: {
        detail:
          "En un servicio de imagen para el diagnóstico se producen y almacenan imágenes radiológicas. La mala conservación de las películas o soportes de imagen afecta directamente a la calidad diagnóstica.",
        whyCorrect:
          "‘Mala conservación de las películas radiológicas’ es correcta porque se relaciona de forma directa con el trabajo típico del servicio de imagen.",
        whyWrong: {
          1: "La ingestión accidental de productos radiactivos puede ocurrir en otros contextos con material radiactivo, no solo en imagen diagnóstica.",
          2: "La pérdida de radiofármacos es más propia de unidades de medicina nuclear.",
          3: "La pérdida de estanqueidad de fuentes encapsuladas también se asocia a medicina nuclear o radioterapia, no al uso estándar de imagen."
        }
      }
    }
  ]
},

{
  id: "ap-u5",
  title: "AP · U5 · Atención al paciente y necesidades humanas",
  questions: [
    {
      q: "¿Cómo denominamos a las necesidades más básicas del ser humano, imprescindibles para el mantenimiento de la vida?",
      options: ["Vitales", "Sociales", "Fisiológicas", "Psicológicas"],
      correct: 2,
      explain: {
        detail:
          "Las necesidades fisiológicas incluyen respirar, alimentarse, hidratarse, dormir o mantener una temperatura adecuada. Son la base de la supervivencia.",
        whyCorrect:
          "‘Fisiológicas’ es correcta porque la pregunta alude a las necesidades básicas descritas por Maslow.",
        whyWrong: {
          0: "‘Vitales’ podría parecer correcto, pero el término técnico en la teoría de necesidades es ‘fisiológicas’.",
          1: "Las necesidades sociales aparecen en un nivel superior de la pirámide.",
          3: "Las necesidades psicológicas incluyen autoestima, sentido de vida, etc., no son las más básicas."
        }
      }
    },
    {
      q: "¿Cuál de las siguientes es una recomendación general básica a la hora de realizar un procedimiento de movilización?",
      options: [
        "Usar los músculos mayores",
        "Alinear las piernas con las caderas",
        "Adaptar la altura que requiera la técnica en cada caso",
        "Todas son correctas",
      ],
      correct: 3,
      explain: {
        detail:
          "En la movilización de pacientes se debe proteger tanto al paciente como al profesional. Para ello conviene usar los grupos musculares grandes, mantener una buena alineación corporal y ajustar la altura de la cama o camilla.",
        whyCorrect:
          "‘Todas son correctas’ porque cada una de las recomendaciones forma parte de una buena técnica de movilización.",
        whyWrong: {
          0: "Usar músculos mayores es correcto, pero no es la única recomendación importante.",
          1: "Alinear piernas y caderas ayuda a mantener la postura, pero no basta por sí sola.",
          2: "Adaptar la altura es esencial, pero debe combinarse con otras medidas ergonómicas."
        }
      }
    },
    {
      q: "¿Cuál es el tipo de necesidad que está situada en la cima de la pirámide de Maslow?",
      options: ["Seguridad", "Necesidades fisiológicas", "Autorrealización", "Necesidades sociales"],
      correct: 2,
      explain: {
        detail:
          "En la pirámide de Maslow, las necesidades de autorrealización se encuentran en el nivel más alto. Se refieren a desarrollar el máximo potencial personal y lograr metas vitales profundas.",
        whyCorrect:
          "‘Autorrealización’ es correcta porque es la necesidad que se sitúa en la cima de la pirámide.",
        whyWrong: {
          0: "La seguridad está por debajo de las necesidades sociales y de estima.",
          1: "Las fisiológicas son la base, no la cima.",
          3: "Las necesidades sociales ocupan un nivel intermedio, no el más alto."
        }
      }
    },
    {
      q: "¿Qué es un transfer?",
      options: [
        "Una tabla de plástico rígido y resistente que facilita el movimiento de personas entre superficies de pacientes no colaboradores o con alta dependencia",
        "Un proceso de traslado de los pacientes de un centro sanitario a otro diferente",
        "Un tecnicismo utilizado en imagen para el diagnóstico para referirse a los órganos trasplantados",
        "Ninguna es correcta.",
      ],
      correct: 0,
      explain: {
        detail:
          "El transfer o tabla de transferencia es un dispositivo que se utiliza para pasar al paciente de una superficie a otra (por ejemplo, de la cama a la camilla) minimizando el esfuerzo y el riesgo de lesiones.",
        whyCorrect:
          "Es correcta la opción que describe la tabla rígida, porque define con precisión el dispositivo llamado ‘transfer’.",
        whyWrong: {
          1: "El traslado entre centros se denomina derivación o traslado, no transfer.",
          2: "No se usa ‘transfer’ como tecnicismo para órganos trasplantados.",
          3: "Sí existe una opción correcta, por lo que esta respuesta es falsa."
        }
      }
    },
    {
      q: "¿Qué nombre recibe el estudio del cuerpo humano en relación con el movimiento y el equilibrio?",
      options: ["Ergonomía", "Mecánica corporal", "Dinámica corporal", "Biofísica"],
      correct: 1,
      explain: {
        detail:
          "La mecánica corporal estudia cómo se colocan y mueven las distintas partes del cuerpo para mantener el equilibrio y realizar movimientos de forma eficiente.",
        whyCorrect:
          "‘Mecánica corporal’ es correcta porque describe exactamente el estudio del cuerpo respecto al movimiento y el equilibrio.",
        whyWrong: {
          0: "La ergonomía adapta el entorno y las tareas a la persona, es un concepto relacionado pero distinto.",
          2: "‘Dinámica corporal’ no es el término técnico más utilizado.",
          3: "La biofísica estudia procesos biológicos desde la física, pero no se limita al movimiento corporal básico."
        }
      }
    },
    {
      q: "¿Qué término incluye todas aquellas medidas que tienen como finalidad prevenir y evitar las infecciones nosocomiales propias de los centros sanitarios?",
      options: ["Prevención", "Higiene", "Mantenimiento", "Planificación"],
      correct: 1,
      explain: {
        detail:
          "La higiene hospitalaria abarca normas y procedimientos de limpieza, desinfección, lavado de manos, uso de guantes y esterilización para evitar infecciones adquiridas en el hospital.",
        whyCorrect:
          "‘Higiene’ es correcta porque resume el conjunto de medidas destinadas a evitar infecciones nosocomiales.",
        whyWrong: {
          0: "‘Prevención’ es un concepto muy amplio, no se refiere específicamente a infecciones nosocomiales.",
          2: "El mantenimiento suele relacionarse con equipos e instalaciones, no directamente con la prevención de infecciones.",
          3: "La planificación es importante, pero no es el término que engloba las medidas concretas de control de infecciones."
        }
      }
    },
    {
      q: "¿Qué tipo de necesidad es la pertenencia a un grupo (familiar, amistoso o laboral)?",
      options: ["Fisiológica", "De seguridad", "Social", "De autoestima"],
      correct: 2,
      explain: {
        detail:
          "Las necesidades sociales incluyen la necesidad de pertenencia, afecto, amistad y relaciones con otros. Son un nivel intermedio en la pirámide de Maslow.",
        whyCorrect:
          "‘Social’ es correcta porque la pertenencia a un grupo es un claro ejemplo de necesidad social.",
        whyWrong: {
          0: "Las fisiológicas se refieren a necesidades básicas como comer o dormir.",
          1: "La seguridad tiene que ver con estabilidad, protección y ausencia de peligro.",
          3: "La autoestima se relaciona con la valoración de uno mismo, no con el grupo al que se pertenece."
        }
      }
    },
    {
      q: "El grado de aceptación y desarrollo de las capacidades físicas, mentales, emocionales y sociales que nos permiten ser independientes se conoce como…",
      options: ["Autoestima", "Autoconservación", "Autorrealización", "Automatización"],
      correct: 2,
      explain: {
        detail:
          "La autorrealización implica desplegar al máximo las propias capacidades y vivir de acuerdo con el propio potencial, sintiéndose pleno y capaz.",
        whyCorrect:
          "Es correcta ‘Autorrealización’ porque la definición encaja con el desarrollo máximo de capacidades y autonomía.",
        whyWrong: {
          0: "La autoestima es la valoración que hacemos de nosotros mismos, no necesariamente el grado de desarrollo de capacidades.",
          1: "La autoconservación no es un término habitual en esta teoría.",
          3: "La automatización se refiere a realizar tareas casi sin esfuerzo consciente, no a desarrollo integral."
        }
      }
    },
    {
      q: "La alteración del pulso por encima de 80 ppm se conoce como…",
      options: ["Taquicardia", "Bradicardia", "Notocardia", "Asincrocardia"],
      correct: 0,
      explain: {
        detail:
          "La taquicardia es un aumento de la frecuencia cardiaca por encima de los valores considerados normales en reposo para una persona adulta.",
        whyCorrect:
          "‘Taquicardia’ es correcta porque describe un pulso acelerado.",
        whyWrong: {
          1: "La bradicardia es lo contrario: pulso lento.",
          2: "‘Notocardia’ no es un término válido en este contexto.",
          3: "‘Asincrocardia’ tampoco es un término clínico estándar."
        }
      }
    },
    {
      q: "Una persona con temperatura corporal entre 37,1 ºC y 37,5 ºC, está en estado de…",
      options: ["Fiebre", "Febrícula", "Pirexia", "Hipotermia"],
      correct: 1,
      explain: {
        detail:
          "La febrícula es una elevación ligera de la temperatura corporal, por encima de la normal pero sin alcanzar los valores de fiebre franca.",
        whyCorrect:
          "‘Febrícula’ es correcta porque ese rango de temperatura coincide con una elevación leve.",
        whyWrong: {
          0: "La fiebre suele considerarse a partir de aproximadamente 38 ºC.",
          2: "‘Pirexia’ es sinónimo de fiebre, no de febrícula.",
          3: "La hipotermia implica temperatura corporal por debajo de lo normal, no por encima."
        }
      }
    }
  ]
},

{
  id: "ap-u6",
  title: "AP · U6 · Material sanitario y equipos",
  questions: [
    {
      q: "¿Cómo conocemos a la intervención quirúrgica en la que se realiza una abertura u orificio artificial (estoma) en el tejido para poner una víscera en contacto con el exterior?",
      options: ["Estomía", "Orificimía", "Ostomía", "Celotomía"],
      correct: 2,
      explain: {
        detail:
          "La ostomía es una intervención que crea un estoma, es decir, una abertura hacia el exterior del cuerpo para facilitar la salida de heces, orina u otros contenidos.",
        whyCorrect:
          "‘Ostomía’ es correcta porque es el término quirúrgico para la creación de un estoma.",
        whyWrong: {
          0: "‘Estomía’ no es el término quirúrgico habitual (se usa ‘ostomía’).",
          1: "‘Orificimía’ no existe como término médico.",
          3: "La celotomía es una abertura del abdomen, pero no necesariamente comunica una víscera con el exterior de forma permanente."
        }
      }
    },
    {
      q: "¿Cómo se denomina la extracción de líquidos o elementos del interior de una cavidad (rectal, genitourinaria o torácica), de forma temporal o permanente?",
      options: ["Hidroterapia", "Vaciado cavitativo", "Drenaje", "Todas son incorrectas."],
      correct: 2,
      explain: {
        detail:
          "El drenaje consiste en extraer líquidos, pus o sangre de cavidades corporales o heridas mediante tubos, catéteres o dispositivos específicos.",
        whyCorrect:
          "‘Drenaje’ es correcto porque define precisamente la extracción controlada de esos contenidos.",
        whyWrong: {
          0: "La hidroterapia utiliza agua con fines terapéuticos, no para extracción de líquidos.",
          1: "‘Vaciado cavitativo’ no es un término técnico habitual.",
          3: "Sí existe un término correcto: drenaje."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes no es un tipo de catéter intravenoso?",
      options: ["Palomita", "Abbocath", "Venocath", "Todas son correctas."],
      correct: 3,
      explain: {
        detail:
          "‘Palomita’, ‘Abbocath’ y ‘Venocath’ son nombres comerciales o tipos conocidos de catéteres intravenosos utilizados para canalizar venas.",
        whyCorrect:
          "‘Todas son correctas’ porque las tres opciones mencionan tipos de catéter intravenoso.",
        whyWrong: {
          0: "La palomita es un tipo de catéter con aletas laterales.",
          1: "Abbocath es una marca/comercialización de catéter intravenoso.",
          2: "Venocath también se utiliza para referirse a determinados catéteres venosos."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes no se incluye dentro de los equipos básicos de cualquier unidad?",
      options: ["De oxigenoterapia", "Aspiradores", "Sondas", "Tubos de rayos X"],
      correct: 3,
      explain: {
        detail:
          "En las unidades suelen encontrarse equipos de oxigenoterapia, aspiradores y sondas. Los tubos de rayos X forman parte de aparatos específicos de radiodiagnóstico, no del equipamiento básico de cualquier unidad.",
        whyCorrect:
          "‘Tubos de rayos X’ es correcta porque no suelen ser parte del material básico común a todas las unidades.",
        whyWrong: {
          0: "Los equipos de oxigenoterapia son frecuentes en muchas unidades para soporte respiratorio.",
          1: "Los aspiradores se usan para extraer secreciones y fluidos, muy habituales.",
          2: "Las sondas son de uso básico para múltiples procedimientos."
        }
      }
    },
    {
      q: "¿Qué equipos sirven para controlar los signos vitales básicos como la frecuencia cardiaca, la frecuencia respiratoria, etc.?",
      options: [
        "Equipos de perfusión",
        "Equipos de monitorización",
        "Equipos de seguimiento",
        "Equipos de biovigilancia",
      ],
      correct: 1,
      explain: {
        detail:
          "Los equipos de monitorización registran de forma continua o periódica la frecuencia cardíaca, la respiración, la saturación de oxígeno, la presión arterial y otros parámetros.",
        whyCorrect:
          "‘Equipos de monitorización’ es correcta porque su función principal es vigilar signos vitales.",
        whyWrong: {
          0: "Los equipos de perfusión se usan para administrar fluidos y fármacos, no para monitorizar.",
          2: "‘Equipos de seguimiento’ es un término genérico y poco técnico.",
          3: "‘Biovigilancia’ no es un nombre estándar de equipos en este contexto."
        }
      }
    },
    {
      q: "¿Qué parámetro mide un caudalímetro?",
      options: [
        "El flujo de oxígeno",
        "La presión de oxígeno",
        "La concentración de oxígeno",
        "Ninguna es correcta.",
      ],
      correct: 0,
      explain: {
        detail:
          "El caudalímetro se usa en dispositivos de oxigenoterapia para regular cuántos litros por minuto de oxígeno se administran al paciente.",
        whyCorrect:
          "‘El flujo de oxígeno’ es correcta porque el caudalímetro mide precisamente la cantidad de gas que pasa por unidad de tiempo.",
        whyWrong: {
          1: "La presión no se mide con el caudalímetro, sino con manómetros.",
          2: "La concentración de oxígeno se mide con analizadores, no con el caudalímetro.",
          3: "Sí hay una opción correcta, por lo que esta es falsa."
        }
      }
    },
    {
      q: "¿Qué técnica sustituye de forma temporal la función respiratoria?",
      options: ["Oxigenoterapia", "Ventiloterapia", "Higroterapia", "Neumoterapia"],
      correct: 1,
      explain: {
        detail:
          "La ventiloterapia (ventilación mecánica) ayuda o sustituye la respiración del paciente, empujando el aire hacia los pulmones mediante un respirador.",
        whyCorrect:
          "‘Ventiloterapia’ es correcta porque puede llegar a sustituir la función respiratoria cuando el paciente no respira adecuadamente.",
        whyWrong: {
          0: "La oxigenoterapia solo aporta oxígeno, pero no empuja el aire ni sustituye la respiración.",
          2: "La higroterapia no es una técnica de sustitución respiratoria.",
          3: "‘Neumoterapia’ no es el término técnico habitual en este contexto."
        }
      }
    },
    {
      q: "¿Qué tipo de materiales se retiran o se eliminan tras su uso?",
      options: ["Fungibles", "No fungibles", "Reutilizables", "Ninguna es correcta"],
      correct: 0,
      explain: {
        detail:
          "Los materiales fungibles son aquellos diseñados para un solo uso o para ser consumidos (guantes, gasas, jeringas desechables, etc.).",
        whyCorrect:
          "‘Fungibles’ es correcta porque se refiere a materiales que se agotan o desechan tras el uso.",
        whyWrong: {
          1: "Los no fungibles son materiales duraderos (equipos, dispositivos reutilizables).",
          2: "Reutilizable implica que no se tira tras su uso, si se puede esterilizar.",
          3: "Sí hay una opción correcta, por lo que esta es falsa."
        }
      }
    },
    {
      q: "¿Qué tipo de sonda se utiliza para realizar lavados gástricos?",
      options: ["Sonda de Salem", "Sonda nasoentérica", "Sonda de Levin", "Sonda de gastrostomía"],
      correct: 2,
      explain: {
        detail:
          "La sonda de Levin es una sonda nasogástrica simple que permite aspirar contenido gástrico o realizar lavados.",
        whyCorrect:
          "‘Sonda de Levin’ es correcta porque es la utilizada típicamente para lavados gástricos.",
        whyWrong: {
          0: "La sonda de Salem suele ser de doble luz, más específica para descompresión y aspiración continua.",
          1: "La sonda nasoentérica se dirige al intestino delgado, no al lavado gástrico propiamente dicho.",
          3: "La sonda de gastrostomía se coloca de forma permanente o semipermanente, no para lavados puntuales."
        }
      }
    },
    {
      q: "Los guantes, el jabón y los contenedores blindados para los desechos, son materiales...",
      options: [
        "Para la administración de radiofármacos",
        "Antisépticos",
        "Para la descontaminación radiactiva",
        "Quirúrgicos",
      ],
      correct: 2,
      explain: {
        detail:
          "En contextos con material radiactivo, los guantes, el jabón y los contenedores blindados se usan para manipular y eliminar residuos contaminados, evitando la dispersión de la radiación.",
        whyCorrect:
          "‘Para la descontaminación radiactiva’ es correcta porque estos materiales ayudan a proteger y gestionar residuos radiactivos.",
        whyWrong: {
          0: "Los radiofármacos se administran con otro tipo de material y procedimientos específicos.",
          1: "Antiséptico se refiere a sustancias que eliminan microorganismos, no a protección frente a radiación.",
          3: "‘Quirúrgicos’ es demasiado general y no refleja el contexto de radiocontaminación."
        }
      }
    }
  ]
},

{
  id: "ap-u7",
  title: "AP · U7 · Farmacología básica y radiofármacos",
  questions: [
    {
      q: "¿Cómo llamamos a las sustancias naturales o de síntesis, orgánicas o inorgánicas, que se usan en medicina para el diagnóstico, prevención o curación de ciertas patologías o sintomatologías?",
      options: ["Fármacos", "Drogas", "Potenciadores", "Pociones"],
      correct: 0,
      explain: {
        detail:
          "Los fármacos son sustancias que, administradas a un organismo, producen un efecto farmacológico beneficioso para diagnosticar, prevenir o tratar enfermedades.",
        whyCorrect:
          "‘Fármacos’ es correcta porque es el término técnico para estos compuestos utilizados en medicina.",
        whyWrong: {
          1: "‘Droga’ puede tener un uso amplio y no siempre médico, además de connotaciones recreativas.",
          2: "‘Potenciadores’ se refiere a sustancias que aumentan un efecto, no necesariamente con finalidad médica.",
          3: "‘Pociones’ es un término coloquial o ficticio, no científico."
        }
      }
    },
    {
      q: "¿Cómo llamamos al cese brusco e inesperado de la respiración y del latido del corazón?",
      options: [
        "Parada craneoencefálica",
        "Parada respiratoria",
        "Parada cardiorrespiratoria",
        "Parada anatomorrespiratoria",
      ],
      correct: 2,
      explain: {
        detail:
          "La parada cardiorrespiratoria es una situación de extrema gravedad en la que se detienen tanto la actividad cardíaca como la respiración, requiriendo RCP inmediata.",
        whyCorrect:
          "‘Parada cardiorrespiratoria’ es correcta porque alude al cese simultáneo de corazón y respiración.",
        whyWrong: {
          0: "‘Parada craneoencefálica’ no se utiliza como término clínico.",
          1: "La parada respiratoria se refiere solo al cese de la respiración, no del latido.",
          3: "‘Parada anatomorrespiratoria’ no es un término habitual en medicina."
        }
      }
    },
    {
      q: "¿Cuál de las siguientes características no es necesario que cumpla un radiofármaco?",
      options: [
        "Afinidad por la zona de estudio",
        "Periodo de semidesintegración corto",
        "Eficiencia y estabilidad",
        "Todas son correctas",
      ],
      correct: 3,
      explain: {
        detail:
          "Los radiofármacos deben acumularse preferentemente en el órgano de interés, tener una semivida adecuada (ni demasiado larga ni demasiado corta) y ser eficaces y estables durante el tiempo del estudio.",
        whyCorrect:
          "La opción ‘Todas son correctas’ es la adecuada porque todas las características mencionadas son deseables en un radiofármaco.",
        whyWrong: {
          0: "La afinidad por la zona de estudio es esencial para obtener imágenes útiles.",
          1: "Un periodo de semidesintegración adecuado evita irradiación innecesaria prolongada.",
          2: "La eficiencia y estabilidad son necesarias para que el radiofármaco funcione de forma fiable."
        }
      }
    },
    {
      q: "¿Cuál de los siguientes contrastes se utiliza para resonancia magnética?",
      options: [
        "Contraste yodado hidrosoluble hiperosmolar",
        "Contraste de gadolinio iónico",
        "Sonovue®",
        "Contraste de bario electronodenso",
      ],
      correct: 1,
      explain: {
        detail:
          "En resonancia magnética se utilizan contrastes basados en gadolinio, que modifican las propiedades magnéticas de los tejidos y mejoran la visualización de estructuras.",
        whyCorrect:
          "‘Contraste de gadolinio iónico’ es correcto porque es el utilizado en RM.",
        whyWrong: {
          0: "El contraste yodado hidrosoluble se usa sobre todo en TAC y radiología convencional.",
          2: "Sonovue® es un contraste ecográfico, no para RM.",
          3: "El bario electronodenso se emplea en estudios digestivos con rayos X, no en RM."
        }
      }
    },
    {
      q: "¿Cuál es la primera etapa de la administración de fármacos?",
      options: ["Absorción", "Liberación", "Distribución", "Metabolismo"],
      correct: 1,
      explain: {
        detail:
          "El proceso LADME describe las fases que sigue un fármaco: Liberación, Absorción, Distribución, Metabolismo y Excreción. Primero debe liberarse desde la forma farmacéutica.",
        whyCorrect:
          "‘Liberación’ es correcta porque es la fase previa a que el fármaco pueda absorberse.",
        whyWrong: {
          0: "La absorción es posterior a la liberación, cuando el fármaco ya está disponible.",
          2: "La distribución ocurre después de la absorción, cuando el fármaco llega a los tejidos.",
          3: "El metabolismo es una fase aún más tardía del proceso."
        }
      }
    },
    {
      q: "¿Cuándo puede fabricarse un fármaco como genérico?",
      options: [
        "Cuando no está patentado",
        "Cuando el beneficio es mundial",
        "Cuando la sociedad lo requiere",
        "Ninguna es correcta",
      ],
      correct: 0,
      explain: {
        detail:
          "Mientras un fármaco está protegido por una patente, solo la empresa titular puede producirlo. Una vez caduca la patente, otras empresas pueden fabricarlo como medicamento genérico.",
        whyCorrect:
          "Es correcta ‘Cuando no está patentado’ porque solo entonces se puede comercializar como genérico.",
        whyWrong: {
          1: "El beneficio mundial no es un criterio legal para fabricar genéricos.",
          2: "La necesidad social puede influir en políticas, pero no anula la patente.",
          3: "Sí existe una opción correcta, por lo que esta es falsa."
        }
      }
    },
    {
      q: "¿Qué parámetro hace referencia a la cantidad de fármaco que será distribuido en el organismo?",
      options: [
        "Masa de distribución",
        "Volumen de distribución",
        "Densidad de distribución",
        "Todas las anteriores son incorrectas.",
      ],
      correct: 1,
      explain: {
        detail:
          "El volumen de distribución es un parámetro farmacocinético que relaciona la cantidad de fármaco en el cuerpo con su concentración en sangre o plasma.",
        whyCorrect:
          "‘Volumen de distribución’ es correcta porque es el concepto que describe ese parámetro.",
        whyWrong: {
          0: "‘Masa de distribución’ no es un término usado en farmacocinética.",
          2: "‘Densidad de distribución’ tampoco es un parámetro estándar.",
          3: "Sí hay una opción correcta, por lo que esta no lo es."
        }
      }
    },
    {
      q: "¿Qué tipo de contrastes son el sulfato de bario, derivados del yodo y compuestos de gadolinio?",
      options: ["Positivos", "Neutros", "Negativos", "Todas son incorrectas."],
      correct: 0,
      explain: {
        detail:
          "Los contrastes positivos aumentan la opacidad de las estructuras frente a la radiación o modifican la señal en RM, haciendo que aparezcan más claros o destacados.",
        whyCorrect:
          "‘Positivos’ es correcta porque estos contrastes incrementan la densidad o la señal respecto a los tejidos circundantes.",
        whyWrong: {
          1: "‘Neutros’ no describen la acción típica de estos medios de contraste.",
          2: "Los contrastes negativos suelen ser gases o sustancias que producen menor densidad radiológica.",
          3: "No es cierto que todas sean incorrectas ya que una sí es válida."
        }
      }
    },
    {
      q: "La vía de administración vascular subcutánea se realiza:",
      options: [
        "Mediante inyección bajo la piel",
        "Mediante inyección en cavidades del cuerpo",
        "Por vía oral",
        "Ninguna es correcta",
      ],
      correct: 0,
      explain: {
        detail:
          "La vía subcutánea introduce el fármaco en el tejido graso bajo la piel, desde donde se absorbe lentamente hacia la circulación.",
        whyCorrect:
          "‘Mediante inyección bajo la piel’ es correcta porque describe exactamente la vía subcutánea.",
        whyWrong: {
          1: "Las cavidades del cuerpo se relacionan con vías intraperitoneal, intrapleural, etc., no con subcutánea.",
          2: "La vía oral no es una vía vascular subcutánea.",
          3: "Sí hay una opción correcta, por lo que esta es falsa."
        }
      }
    },
    {
      q: "Las sustancias radiactivas que se utilizan en medicina para uso diagnóstico y terapéutico se conocen como...",
      options: ["Fármacos atómicos", "Radiofármacos", "Telefármacos", "Todas son correctas"],
      correct: 1,
      explain: {
        detail:
          "Los radiofármacos combinan una parte farmacológica (para dirigirse a un órgano o tejido) y una parte radiactiva, que emite radiación detectable o terapéutica.",
        whyCorrect:
          "‘Radiofármacos’ es correcta porque es el nombre técnico de estos compuestos.",
        whyWrong: {
          0: "‘Fármacos atómicos’ no es un término utilizado en medicina nuclear.",
          2: "‘Telefármacos’ tampoco es un concepto estándar.",
          3: "No todas son correctas: solo una opción es válida."
        }
      }
    }
  ]
},

{
  id: "ap-u8",
  title: "AP · U8 · Infecciones, aislamiento e higiene",
  questions: [
    {
      q: "¿Cómo denominamos al crecimiento y desarrollo de microorganismos externos, en el cuerpo de un ser vivo?",
      options: ["Enfermedad", "Simbiosis", "Infección", "Afección"],
      correct: 2,
      explain: {
        detail:
          "La infección ocurre cuando microorganismos patógenos penetran en el organismo, se multiplican y pueden desencadenar una respuesta inmune y síntomas.",
        whyCorrect:
          "‘Infección’ es correcta porque describe el proceso de colonización y multiplicación de microorganismos externos.",
        whyWrong: {
          0: "La enfermedad es la alteración del estado de salud, que puede, pero no siempre, deberse a una infección.",
          1: "La simbiosis es la relación entre organismos que puede ser beneficiosa para ambos.",
          3: "‘Afección’ es un término genérico para cualquier alteración, no necesariamente por microorganismos."
        }
      }
    },
    {
      q: "¿Dónde se producen las infecciones nosocomiales?",
      options: [
        "En las fosas nasales",
        "En los comedores colectivos",
        "En centros hospitalarios o asistenciales",
        "Todas son incorrectas.",
      ],
      correct: 2,
      explain: {
        detail:
          "Las infecciones nosocomiales son las que el paciente adquiere durante su estancia en un hospital o centro sanitario, y que no estaban presentes ni en incubación al ingreso.",
        whyCorrect:
          "‘En centros hospitalarios o asistenciales’ es correcta porque define el lugar donde se adquieren las infecciones nosocomiales.",
        whyWrong: {
          0: "Las fosas nasales pueden ser puerta de entrada, pero no definen el tipo de infección nosocomial.",
          1: "Los comedores colectivos no son necesariamente centros asistenciales.",
          3: "Sí existe una opción correcta, por lo que esta es falsa."
        }
      }
    },
    {
      q: "¿En qué grupo de residuos se incluyen los desechos de usuarios con enfermedades infecciosas o en aislamiento?",
      options: ["I", "II", "III", "IV"],
      correct: 2,
      explain: {
        detail:
          "Los residuos sanitarios se clasifican por grupos. El grupo III suele corresponder a residuos biosanitarios de riesgo, procedentes de pacientes infecciosos o en aislamiento.",
        whyCorrect:
          "‘III’ es correcto porque es el grupo que se asocia a residuos con riesgo biológico especial.",
        whyWrong: {
          0: "El grupo I suele referirse a residuos asimilables a urbanos.",
          1: "El grupo II se refiere a residuos biosanitarios no específicos.",
          3: "El grupo IV se asocia más a residuos especiales como químicos o citotóxicos."
        }
      }
    },
    {
      q: "¿En qué tipo de vectores se requiere un tiempo en el cual el agente infeccioso es incubado y pasa a ser un vector infeccioso?",
      options: ["Activos", "Pasivos", "Directos", "Indirectos"],
      correct: 0,
      explain: {
        detail:
          "En los vectores activos, el microorganismo pasa una fase de desarrollo o multiplicación en el propio vector (como el mosquito en la malaria) antes de transmitirse.",
        whyCorrect:
          "‘Activos’ es correcto porque estos vectores participan en el ciclo biológico del agente infeccioso.",
        whyWrong: {
          1: "Los vectores pasivos solo transportan el agente, sin que este se multiplique en ellos.",
          2: "‘Directos’ no es la clasificación habitual en este contexto.",
          3: "‘Indirectos’ podría referirse a la forma de transmisión, pero no al tipo de vector según incubación."
        }
      }
    },
    {
      q: "¿Qué nombre genérico reciben los seres vivos en los que se producen las infecciones?",
      options: ["Vectores", "Agentes infectados", "Hospedadores", "Enfermos"],
      correct: 2,
      explain: {
        detail:
          "El hospedador es el organismo que alberga al agente infeccioso. Puede desarrollar enfermedad o no, pero es el ‘hogar’ del microorganismo.",
        whyCorrect:
          "‘Hospedadores’ es correcta porque la infección se desarrolla dentro de ellos.",
        whyWrong: {
          0: "Los vectores son organismos que transmiten el agente a otro, pero no necesariamente sufren la infección como tal.",
          1: "‘Agentes infectados’ es una expresión ambigua y poco técnica.",
          3: "‘Enfermos’ son aquellos que manifiestan síntomas, pero no todos los hospedadores necesariamente enferman."
        }
      }
    },
    {
      q: "¿Qué término general utilizamos para referirnos a los agentes químicos capaces de eliminar algunos agentes infecciosos sin dañar tejidos?",
      options: ["Antiinflamatorios", "Antisépticos", "Anestésicos", "Antihistamínicos"],
      correct: 1,
      explain: {
        detail:
          "Los antisépticos se aplican sobre tejidos vivos (piel, mucosas) para reducir la carga microbiana sin dañarlos de forma significativa.",
        whyCorrect:
          "‘Antisépticos’ es correcta porque describe estos agentes químicos usados sobre la piel u otras superficies vivas.",
        whyWrong: {
          0: "Los antiinflamatorios reducen inflamación, no están pensados para eliminar microorganismos.",
          2: "Los anestésicos producen pérdida de sensibilidad o conciencia, no son desinfectantes.",
          3: "Los antihistamínicos bloquean la respuesta alérgica, no actúan directamente sobre microorganismos."
        }
      }
    },
    {
      q: "¿Qué tipo de aislamiento es común para la protección de personas inmunodeprimidas?",
      options: [
        "Aislamiento protector o inverso",
        "Aislamiento de contacto",
        "Aislamiento entérico",
        "Aislamiento estricto",
      ],
      correct: 0,
      explain: {
        detail:
          "El aislamiento protector o inverso se utiliza para proteger a pacientes con defensas muy bajas, evitando que contraigan infecciones desde el entorno.",
        whyCorrect:
          "‘Aislamiento protector o inverso’ es correcto porque está diseñado para proteger al paciente, no al personal.",
        whyWrong: {
          1: "El aislamiento de contacto se usa para evitar transmitir microorganismos desde el paciente al entorno.",
          2: "El aislamiento entérico se relaciona con patógenos que se eliminan por heces.",
          3: "El aislamiento estricto se utiliza para agentes muy contagiosos, protegiendo sobre todo al exterior."
        }
      }
    },
    {
      q: "¿Qué tipo de fuentes de infección consisten en agentes infecciosos que ya se encuentran en el organismo, pero que al cambiar las condiciones ambientales pasan a ser infecciosos?",
      options: ["Exógenas", "Exoendógenas", "Endógenas", "Xenógenas"],
      correct: 2,
      explain: {
        detail:
          "Las infecciones endógenas se originan a partir de microorganismos que ya formaban parte de la flora del paciente, pero que se vuelven patógenos al cambiar el equilibrio.",
        whyCorrect:
          "‘Endógenas’ es correcta porque el origen es interno al paciente.",
        whyWrong: {
          0: "Las exógenas proceden del exterior del organismo.",
          1: "‘Exoendógenas’ es un término poco habitual y confuso.",
          3: "‘Xenógenas’ no se usa en este contexto de clasificación de fuentes de infección."
        }
      }
    },
    {
      q: "Indica la opción falsa sobre los protocolos de higiene en el medio hospitalario:",
      options: [
        "El lavado de manos debe realizarse antes y después de ir al baño",
        "El uso de guantes elimina la necesidad del lavado de manos",
        "Los materiales y equipos se desinfectarán mediante glutaraldehído, lejía, calor seco o húmedo (autoclave)",
        "Todas son correctas",
      ],
      correct: 1,
      explain: {
        detail:
          "El lavado de manos es la medida más eficaz para prevenir infecciones. El uso de guantes no sustituye el lavado, ya que los guantes pueden contaminarse y también se pueden perforar.",
        whyCorrect:
          "Es falsa la afirmación ‘El uso de guantes elimina la necesidad del lavado de manos’, por eso es la opción correcta en esta pregunta.",
        whyWrong: {
          0: "Lavarse las manos antes y después de ir al baño es una medida correcta.",
          2: "La desinfección con glutaraldehído, lejía o autoclave es apropiada según el material.",
          3: "No todas son correctas, hay una claramente falsa."
        }
      }
    },
    {
      q: "Para prevenir la propagación de infecciones, el secado de manos debe realizarse...",
      options: [
        "Con toallas reutilizables",
        "Con secadores de aire caliente",
        "Con papel de secado de un solo uso",
        "Al aire, agitando las manos",
      ],
      correct: 2,
      explain: {
        detail:
          "Después del lavado, el secado adecuado evita que las manos húmedas faciliten la transmisión de microorganismos. El papel de un solo uso reduce el riesgo de contaminación cruzada.",
        whyCorrect:
          "‘Con papel de secado de un solo uso’ es correcta porque es el método más higiénico en entornos sanitarios.",
        whyWrong: {
          0: "Las toallas reutilizables pueden acumular microorganismos si no se cambian o lavan constantemente.",
          1: "Los secadores de aire pueden dispersar microorganismos en el ambiente.",
          3: "Agitar las manos al aire no asegura un secado higiénico y puede dispersar gotas."
        }
      }
    }
  ]
},

  
    /* ================== ANATOMÍA ================== */

    {
  id: "an-u1",
  title: "AN · U1 · Posición anatómica, planos y cavidades",
  questions: [
    {
      q: "¿Cuál corresponde a la posición anatómica básica?",
      options: [
        "Persona de pie, pies paralelos y dedos hacia adelante, brazos a los lados con palmas hacia adelante, cabeza erecta y mirada al frente",
        "Persona sentada, pies juntos, brazos cruzados sobre el pecho, cabeza inclinada hacia un lado y ojos cerrados",
        "Persona de pie, pies separados, brazos flexionados hacia adelante con palmas hacia abajo, cabeza inclinada hacia atrás",
        "Persona acostada, brazos extendidos hacia arriba, piernas separadas y cabeza girada hacia un lado",
      ],
      correct: 0,
      explain:
        "La posición anatómica de referencia es de pie, con los pies paralelos y dirigidos hacia delante, brazos a los lados del cuerpo con las palmas mirando al frente, y la cabeza erecta mirando al frente. Esta postura sirve como estándar para describir la localización y relación entre estructuras del cuerpo. La opción B describe una posición de reposo sentada, no la de referencia anatómica. La opción C muestra brazos y cabeza en posiciones no estándar, y la D es una posición en decúbito (acostado), que tampoco es la posición anatómica básica."
    },
    {
      q: "¿Qué plano anatómico divide el cuerpo en mitades derecha e izquierda?",
      options: ["Plano coronal", "Plano sagital", "Plano transversal", "Plano axial"],
      correct: 1,
      explain:
        "El plano sagital es el que divide el cuerpo en derecha e izquierda; si pasa exactamente por la mitad se le llama plano medio o mediano. El plano coronal (opción A) divide el cuerpo en una parte anterior (frontal) y otra posterior (dorsal). El plano transversal o axial (opciones C y D, que en clínica se usan casi como sinónimos) divide el cuerpo en una parte superior (cefálica) y otra inferior (caudal), no en derecha e izquierda."
    },
    {
      q: "¿Cuál afirmación sobre posición relativa es correcta?",
      options: [
        "El tobillo es más proximal que la rodilla",
        "El codo es más distal que la muñeca",
        "El hombro es más proximal que el codo",
        "La mano es más proximal que el antebrazo",
      ],
      correct: 2,
      explain:
        "En los miembros, proximal significa más cerca del tronco y distal, más lejos. El hombro está más cercano al tronco que el codo, por eso el hombro es más proximal que el codo (correcta). El tobillo es más distal que la rodilla, no más proximal (opción A, errónea). El codo está más proximal que la muñeca, no más distal (opción B, errónea). La mano es la parte más distal del miembro superior respecto al antebrazo, por lo que la opción D también es incorrecta."
    },
    {
      q: "¿Cuál afirmación sobre movimientos articulares es correcta?",
      options: [
        "La extensión disminuye el ángulo entre dos segmentos corporales",
        "La aducción acerca un miembro hacia la línea media del cuerpo",
        "La rotación interna aleja una estructura del eje central del cuerpo",
        "La protrusión es el movimiento hacia atrás de una parte corporal",
      ],
      correct: 1,
      explain:
        "La aducción es el movimiento que aproxima un segmento corporal hacia la línea media del cuerpo, por eso la opción B es correcta. La extensión aumenta el ángulo entre dos segmentos óseos (por ejemplo, extender el codo lo abre), no lo disminuye como dice la opción A. La rotación interna lleva una estructura hacia el eje central, no la aleja, por lo que la opción C es incorrecta. La protrusión es el movimiento hacia adelante (por ejemplo, protruir la mandíbula); el movimiento hacia atrás se llama retrusión, de modo que la opción D también es falsa."
    },
    {
      q: "¿En qué posición se encuentra el paciente (imagen)?",
      options: ["Sims", "Trendelemburg invertida", "Trendelemburg", "Sims invertida"],
      correct: 1,
      explain:
        "En Trendelemburg invertida, el cuerpo está en decúbito supino pero con la cabeza más alta que los pies, es decir, la camilla inclinada hacia abajo en dirección a los pies. En la posición de Trendelemburg clásica (opción C) es al revés: la cabeza queda más baja que los pies. La posición de Sims (opción A) es en decúbito lateral con ligera flexión de cadera y rodilla, utilizada mucho en exploración rectal o enemas. La denominada 'Sims invertida' (opción D) no es un término estándar en la nomenclatura habitual."
    },
    {
      q: "Parte superior del tronco entre base del cuello y diafragma:",
      options: ["Tórax", "Abdomen", "Pelvis", "Dorso"],
      correct: 0,
      explain:
        "El tórax es la región del tronco situada entre la base del cuello y el diafragma y contiene órganos como pulmones y corazón. El abdomen (opción B) se encuentra por debajo del diafragma hasta la pelvis. La pelvis (opción C) es la región inferior del tronco donde se alojan vísceras urinarias y parte de las reproductoras. El dorso (opción D) hace referencia a la región posterior del tronco, no específicamente a la zona superior anterior donde está el tórax."
    },
    {
      q: "El encéfalo se sitúa:",
      options: [
        "En la cavidad dorsal, en la cavidad craneal",
        "En la cavidad ventral, en la cavidad craneal",
        "En la cavidad dorsal, en la cavidad espinal",
        "En la cavidad ventral, en la cavidad espinal",
      ],
      correct: 0,
      explain:
        "El encéfalo (cerebro, cerebelo y tronco encefálico) se localiza en la cavidad craneal, que forma parte de la cavidad dorsal. La cavidad ventral incluye la cavidad torácica y abdominopélvica, donde se sitúan corazón y vísceras, por lo que las opciones B y D son erróneas. La cavidad espinal (u vertebral) contiene la médula espinal, no el encéfalo, por lo que la opción C también es incorrecta."
    },
    {
      q: "¿Cuántas líneas claviculares existen?",
      options: [
        "Solo una, por la línea media del esternón",
        "Dos, cada una en el punto medio de cada clavícula",
        "Dos, cada una en el extremo distal de cada clavícula",
        "Tres, en escápulas y columna vertebral",
      ],
      correct: 1,
      explain:
        "Se describen dos líneas claviculares: una derecha y otra izquierda, que pasan aproximadamente por el punto medio de cada clavícula y descienden verticalmente por el tórax, por eso la opción B es correcta. No hay una sola línea clavicular en la línea media esternal (opción A confunde con la línea media anterior). Tampoco se definen por el extremo distal de la clavícula (opción C). La opción D mezcla otros puntos anatómicos (escápulas y columna) que no corresponden a líneas claviculares."
    },
    {
      q: "¿Qué cuadrante abdominal está marcado con una X (imagen)?",
      options: [
        "Cuadrante superior derecho",
        "Cuadrante superior izquierdo",
        "Cuadrante inferior derecho",
        "Cuadrante inferior izquierdo",
      ],
      correct: 1,
      explain:
        "En la división en cuatro cuadrantes, el cuadrante superior izquierdo se sitúa por encima de la línea horizontal umbilical y a la izquierda de la línea vertical media. Es la zona donde se localizan, por ejemplo, parte del estómago y el bazo. El cuadrante superior derecho (opción A) está a la derecha (hígado, vesícula). Los cuadrantes inferiores derecho e izquierdo (opciones C y D) se sitúan por debajo de la línea umbilical, por tanto no corresponden al área descrita."
    },
    {
      q: "En 9 regiones abdominales, la vejiga se localiza principalmente en:",
      options: ["Hipocondrio derecho", "Epigastrio", "Hipogastrio", "Fosa ilíaca izquierda"],
      correct: 2,
      explain:
        "En la división en nueve regiones, la vejiga urinaria se sitúa fundamentalmente en la región hipogástrica o suprapúbica, por debajo del ombligo y sobre la sínfisis del pubis, por eso la opción correcta es el hipogastrio. El hipocondrio derecho (opción A) aloja sobre todo al hígado y vesícula. El epigastrio (opción B) se sitúa por encima del ombligo, centrado, y contiene parte del estómago. La fosa ilíaca izquierda (opción D) se asocia más al colon sigmoide y ovario izquierdo en la mujer."
    },
  ],
},

{
  id: "an-u2",
  title: "AN · U2 · Técnicas de imagen básicas",
  questions: [
    {
      q: "¿Qué técnica NO usa rayos X?",
      options: ["Ecografía", "Radiología convencional", "Tomografía computarizada", "Radiología con contraste"],
      correct: 0,
      explain:
        "La ecografía utiliza ondas de ultrasonido (ondas mecánicas de alta frecuencia), no radiación ionizante, y por eso es la técnica que no usa rayos X. La radiología convencional (opción B) se basa directamente en rayos X para generar la imagen. La tomografía computarizada (opción C) también usa rayos X rotando alrededor del paciente. La radiología con contraste (opción D) sigue siendo radiología con rayos X, solo que se añade un medio de contraste para mejorar la visualización de estructuras."
    },
    {
      q: "Técnica dependiente del operador y en tiempo real:",
      options: ["Resonancia magnética", "Ecografía", "Tomografía computarizada", "Radiología convencional"],
      correct: 1,
      explain:
        "La ecografía es una técnica muy dependiente del operador: la calidad de la exploración y las ventanas que se consigan dependen mucho de cómo el profesional maneje el transductor. Además, ofrece imágenes en tiempo real, lo que permite ver movimiento, flujo, etc. La resonancia magnética (opción A) también puede mostrar secuencias dinámicas, pero los protocolos suelen ser más estandarizados y menos dependientes del operador. La TC (opción C) y la radiología convencional (opción D) producen imágenes más fijas, no tan interactivas en tiempo real como la eco."
    },
    {
      q: "Técnica con exploración larga y posible claustrofobia:",
      options: ["Resonancia magnética", "Ecografía", "Tomografía computarizada", "Radiología convencional"],
      correct: 0,
      explain:
        "La resonancia magnética es una exploración relativamente larga, ruidosa y dentro de un imán que rodea al paciente, lo que puede provocar sensación de claustrofobia. La ecografía (opción B) suele ser rápida y se realiza en espacios abiertos, sin túnel. La TC (opción C) también usa un gantry, pero el tiempo de adquisición es mucho más corto, por lo que el efecto claustrofóbico es menor. La radiología convencional (opción D) se realiza de forma casi instantánea y no implica meter al paciente en un túnel cerrado."
    },
    {
      q: "La mayoría de estudios de TC se obtienen en plano:",
      options: ["Sagital", "Coronal", "Axial", "Frontal"],
      correct: 2,
      explain:
        "La adquisición original de la tomografía computarizada se realiza tradicionalmente en plano axial, es decir, cortes transversales perpendiculares al eje longitudinal del cuerpo. Luego, mediante reconstrucciones, se pueden obtener cortes sagitales o coronales. El plano sagital (opción A) divide en derecha e izquierda, pero no es el plano de adquisición principal. El plano coronal o frontal (opciones B y D) divide en anterior y posterior, también obtenible por reconstrucción, pero no es el habitual de adquisición."
    },
    {
      q: "Posición más habitual en RM:",
      options: ["Bipedestación", "Sedestación", "Decúbito supino", "Decúbito prono"],
      correct: 2,
      explain:
        "La posición más frecuente para exploraciones en resonancia magnética es el decúbito supino (boca arriba), porque es cómoda, estable y permite colocar bobinas y centrados de forma estándar. Bipedestación (opción A) y sedestación (opción B) se usan solo en equipos especiales. El decúbito prono (opción D) se emplea para algunos estudios concretos, como mama en determinadas configuraciones, pero no es la posición estándar general."
    },
    {
      q: "Estudio del SNC suele realizarse con:",
      options: [
        "Radiología simple o ecografía",
        "Ecografía o TC",
        "RM o ecografía",
        "TC o RM",
      ],
      correct: 3,
      explain:
        "El sistema nervioso central (encéfalo y médula espinal) se estudia fundamentalmente con tomografía computarizada (TC) y resonancia magnética (RM), que ofrecen buena visualización de parénquima, vascularización y lesiones. La radiología simple y la ecografía (opciones A y B) tienen un papel muy limitado para el SNC por la barrera ósea y la baja resolución de estructuras profundas. La opción C mezcla RM con ecografía, pero la eco apenas se usa para SNC salvo en neonatos por fontanelas."
    },
    {
      q: "En pulmones es frecuente usar:",
      options: [
        "Radiología simple primero y TC para detalle",
        "Ecografía primero y TC para detalle",
        "Ecografía primero y RM para detalle",
        "Radiología simple primero y RM para detalle",
      ],
      correct: 0,
      explain:
        "En patología pulmonar, el enfoque habitual es comenzar con radiografía simple de tórax (técnica barata, rápida y accesible) y recurrir a TC cuando se necesita más detalle anatómico o caracterización de lesiones. La ecografía pulmonar (opciones B y C) tiene su papel sobre todo a nivel pleural y en UCI, pero no es la primera prueba general para pulmón. La RM (opciones C y D) se utiliza mucho menos en pulmones por problemas de aire y movimiento, no es la prueba de detalle estándar."
    },
    {
      q: "Contrastes usados en tubo digestivo con rayos X:",
      options: ["Gadolinio", "Bario", "Yodo", "Berilio"],
      correct: 1,
      explain:
        "Para estudios del tubo digestivo con rayos X se usan principalmente contrastes a base de sulfato de bario, ya que son muy opacos a los rayos X y recubren la mucosa intest inal. El gadolinio (opción A) es el contraste típico de resonancia magnética. El yodo (opción C) se usa sobre todo como contraste intravascular o para TC de distintas estructuras, y también puede usarse por vía oral en determinadas situaciones, pero el clásico del tubo digestivo es el bario. El berilio (opción D) no se emplea como contraste radiológico."
    },
    {
      q: "Contrastes usados en radiología convencional del aparato excretor:",
      options: ["Bario", "Yodo", "Gadolinio", "Berilio"],
      correct: 1,
      explain:
        "En los estudios radiológicos del aparato urinario (urografías, pielografías, etc.) se usan contrastes yodados hidrosolubles que se eliminan por vía renal, permitiendo opacificar riñones, uréteres y vejiga. El bario (opción A) se reserva para tubo digestivo y no debe usarse en vía urinaria. El gadolinio (opción C) es para RM, no para radiología convencional. El berilio (opción D) no es un contraste médico utilizado."
    },
    {
      q: "Radiología simple es útil para estudiar:",
      options: ["Músculos", "Tendones", "Huesos", "Ligamentos"],
      correct: 2,
      explain:
        "La radiología simple (radiografías) es especialmente útil para estudiar estructuras óseas: fracturas, alineaciones, deformidades, densidad, etc. Músculos, tendones y ligamentos (opciones A, B y D) son tejidos blandos que se ven muy mal en radiografía simple y requieren técnicas como RM o ecografía para su valoración detallada. Por eso, la opción correcta es 'huesos'."
    },
  ],
},

{
  id: "an-u3",
  title: "AN · U3 · Sistema locomotor",
  questions: [
    {
      q: "¿Cuál NO es una función de los huesos?",
      options: [
        "Proteger órganos vitales",
        "Regular niveles de calcio en sangre",
        "Producir células sanguíneas",
        "Regular presión arterial mediante vasodilatación",
      ],
      correct: 3,
      explain:
        "Los huesos protegen órganos vitales (por ejemplo, cráneo y caja torácica), actúan como reservorio de minerales como el calcio y participan en la hematopoyesis (producción de células sanguíneas) en la médula ósea, por lo que las opciones A, B y C son funciones reales. La regulación directa de la presión arterial mediante vasodilatación (opción D) es función del sistema cardiovascular y del endotelio, no un papel propio de los huesos."
    },
    {
      q: "¿Qué estructura ósea es una elevación articular?",
      options: ["Trocánter", "Epicóndilo", "Cresta ilíaca", "Espina"],
      correct: 1,
      explain:
        "El epicóndilo es una prominencia ósea asociada a una articulación, donde se insertan ligamentos y tendones; por eso se considera una elevación articular. El trocánter (opción A) es una gran apófisis del fémur, más relacionada con inserción muscular. La cresta ilíaca (opción C) es un borde prominente del ilion, no una elevación articular en sí. La espina (opción D) es una prominencia puntiaguda (como la espina de la escápula), también más de inserción muscular que articular."
    },
    {
      q: "Estructura ósea con forma de polea:",
      options: ["Trocánter", "Apófisis", "Tróclea", "Tuberosidad"],
      correct: 2,
      explain:
        "La tróclea es una estructura articular con forma de polea que permite deslizamiento de otra superficie, como en la tróclea humeral. El trocánter (opción A) es una gran prominencia ósea, no con forma de polea. Apófisis (opción B) es un término genérico para una prolongación ósea, sin indicar forma concreta. La tuberosidad (opción D) es una región rugosa de inserción muscular o ligamentosa, tampoco con morfología de polea."
    },
    {
      q: "Hueso en zona posterior del cráneo:",
      options: ["Temporal", "Occipital", "Parietal", "Frontal"],
      correct: 1,
      explain:
        "El hueso occipital se sitúa en la región posterior e inferior del cráneo, formando la base y la parte de atrás de la cabeza. El hueso temporal (opción A) se localiza en los laterales del cráneo, donde está el oído medio e interno. El parietal (opción C) ocupa gran parte de la bóveda craneal superior y lateral. El frontal (opción D) está en la parte anterior del cráneo, donde se localiza la frente."
    },
    {
      q: "La columna vertebral está formada por:",
      options: [
        "8C, 11T, 5L, sacro y coxis",
        "7C, 12T, 5L, sacro y coxis",
        "8C, 12T, 6L, sacro y coxis",
        "7C, 11T, 6L, sacro y coxis",
      ],
      correct: 1,
      explain:
        "La columna vertebral humana típica está formada por 7 vértebras cervicales, 12 torácicas y 5 lumbares, más el sacro y el coxis fusionados, de ahí que la opción correcta sea 7C, 12T, 5L. Las demás combinaciones (opciones A, C y D) alteran ese número estándar, añadiendo o restando vértebras cervicales, torácicas o lumbares, por lo que no son correctas en anatomía normal."
    },
    {
      q: "La articulación acromioclavicular:",
      options: [
        "Entre escápula y clavícula",
        "Entre húmero y clavícula",
        "Entre C3 y clavícula",
        "Entre T1 y clavícula",
      ],
      correct: 0,
      explain:
        "La articulación acromioclavicular se establece entre el acromion (parte de la escápula) y el extremo lateral de la clavícula, por eso la opción A es la correcta. El húmero con la clavícula (opción B) no forman una articulación directa; el húmero articula con la escápula en la glenohumeral. Las opciones C y D mencionan vértebras cervicales y torácicas que no articulan directamente con la clavícula."
    },
    {
      q: "No es articulación de cintura pélvica:",
      options: ["Coxofemoral", "Sacroilíaca", "Sínfisis púbica", "Femororrotuliana"],
      correct: 3,
      explain:
        "Forman parte del complejo pélvico las articulaciones sacroilíacas (unión sacro-hueso ilíaco), la sínfisis púbica (unión entre ramas púbicas) y la coxofemoral (cadera, unión entre acetábulo y fémur), por lo que A, B y C sí son articulaciones de la cintura pélvica. La femororrotuliana (opción D) pertenece a la rodilla, entre el fémur y la rótula, no a la pelvis."
    },
    {
      q: "Traumatismo óseo complejo 3D con interés óseo:",
      options: ["Radiología simple", "TC", "RM", "Ecografía"],
      correct: 1,
      explain:
        "La tomografía computarizada (TC) es la técnica de elección para valorar traumatismos óseos complejos en tres dimensiones, ya que permite reconstrucciones multiplanares y 3D muy precisas del hueso. La radiología simple (opción A) puede ser insuficiente en fracturas complejas o articulares. La RM (opción C) es excelente para tejidos blandos, pero menos para detalle cortical óseo fino. La ecografía (opción D) solo valora de forma muy limitada algunas estructuras óseas superficiales."
    },
    {
      q: "Músculo involuntario visceral:",
      options: ["Esquelético", "Cardíaco", "Liso", "Rugoso"],
      correct: 2,
      explain:
        "El músculo liso es el que forma parte de la pared de vísceras huecas (intestino, vasos sanguíneos, vejiga, etc.) y es involuntario, controlado por el sistema nervioso autónomo. El músculo esquelético (opción A) es voluntario y se inserta en huesos para el movimiento. El músculo cardíaco (opción B) es involuntario pero específico del corazón, no 'visceral' general. La opción D (rugoso) no es una clasificación válida de tipo de músculo."
    },
    {
      q: "Artritis vs artrosis:",
      options: [
        "Artritis inflamatoria y artrosis degenerativa",
        "Artritis degenerativa y artrosis inflamatoria",
        "Ambas degenerativas",
        "Ambas inflamatorias",
      ],
      correct: 0,
      explain:
        "La artritis es un proceso inflamatorio de la articulación, mientras que la artrosis es una enfermedad degenerativa del cartílago articular y estructuras adyacentes. Por eso, la opción correcta es que la artritis es inflamatoria y la artrosis degenerativa. La opción B invierte los conceptos, y las opciones C y D asumen que ambas son del mismo tipo (ambas degenerativas o ambas inflamatorias), lo cual es falso."
    },
  ],
},

{
  id: "an-u4",
  title: "AN · U4 · Sistema nervioso",
  questions: [
    {
      q: "No forma parte del SNC:",
      options: ["Médula espinal", "Tronco encefálico", "Cerebelo", "Nervios craneales"],
      correct: 3,
      explain:
        "El sistema nervioso central (SNC) está formado por encéfalo (cerebro, cerebelo y tronco encefálico) y médula espinal, por lo que opciones A, B y C sí pertenecen al SNC. Los nervios craneales (opción D) se consideran parte del sistema nervioso periférico, ya que son prolongaciones que salen del encéfalo hacia órganos y estructuras periféricas."
    },
    {
      q: "Interviene en huida/lucha:",
      options: ["Somático", "Simpático", "Parasimpático", "Entérico"],
      correct: 1,
      explain:
        "La respuesta de lucha o huida (fight or flight) está mediada por el sistema nervioso simpático, que aumenta frecuencia cardíaca, dilata bronquios y moviliza energía. El sistema somático (opción A) controla sobre todo movimientos voluntarios de músculo esquelético. El parasimpático (opción C) se asocia a reposo y digestión (rest and digest). El sistema entérico (opción D) se encarga principalmente de la motilidad y funciones del tracto gastrointestinal."
    },
    {
      q: "Espacio epidural:",
      options: [
        "Entre hueso y duramadre",
        "Entre duramadre y aracnoides",
        "Entre aracnoides y piamadre",
        "Entre piamadre y corteza",
      ],
      correct: 0,
      explain:
        "El espacio epidural se localiza entre el hueso (por ejemplo, el canal vertebral) y la duramadre, y es donde se realiza la anestesia epidural. Entre duramadre y aracnoides (opción B) se hablaría del espacio subdural, que en condiciones normales es virtual. Entre aracnoides y piamadre (opción C) está el espacio subaracnoideo, donde circula el líquido cefalorraquídeo (LCR). La opción D no describe un espacio anatómico estándar."
    },
    {
      q: "Compartimento lleno de LCR:",
      options: ["Epidural", "Subdural", "Subaracnoideo", "Subpiamadral"],
      correct: 2,
      explain:
        "El líquido cefalorraquídeo (LCR) se encuentra en el espacio subaracnoideo, entre la aracnoides y la piamadre, protegiendo y amortiguando el SNC. El espacio epidural (opción A) contiene principalmente grasa y plexos venosos. El espacio subdural (opción B) es virtual y solo se hace evidente en patologías como hematomas. El término 'subpiamadral' (opción D) no se utiliza como compartimento anatómico real."
    },
    {
      q: "Zona azul en axial RM corresponde a:",
      options: [
        "Lóbulo frontal izquierdo",
        "Lóbulo temporal",
        "Lóbulo occipital",
        "Lóbulo parietal derecho",
      ],
      correct: 0,
      explain:
        "En un corte axial de RM, la región anterior del cráneo corresponde a los lóbulos frontales. Si la marca se sitúa en la parte delantera izquierda del paciente (que en la imagen suele verse a la derecha del observador), se trata del lóbulo frontal izquierdo. El lóbulo temporal (opción B) se ve más lateral e inferior. El occipital (opción C) se ubica en la parte posterior. El parietal (opción D) es más superior y posterior que el frontal."
    },
    {
      q: "Prueba para vasos cerebrales en isquemia:",
      options: ["RM sin contraste", "Rx cráneo", "Angio-TC con contraste", "Eco transabdominal"],
      correct: 2,
      explain:
        "La angio-TC con contraste permite visualizar con gran detalle las arterias cerebrales, detectar estenosis, oclusiones y aneurismas, y es muy útil en el contexto de isquemia. La RM sin contraste (opción A) puede mostrar el infarto como tal, pero no es la mejor para valorar la luz vascular en todos los casos. La Rx de cráneo (opción B) casi no aporta información sobre vasos. La ecografía transabdominal (opción D) se usa para abdomen, no para vasos cerebrales."
    },
    {
      q: "Imagen (calcificaciones) corresponde a:",
      options: [
        "TC cerebral con calcificaciones",
        "TC cerebral con quistes grasos",
        "RM cerebral con calcificaciones",
        "RM cerebral con quistes grasos",
      ],
      correct: 0,
      explain:
        "Las calcificaciones se ven muy bien en TC como zonas hiperdensas (blancas intensas), por lo que la imagen descrita suele corresponder a una TC cerebral con calcificaciones. La TC con quistes grasos (opción B) tendría densidades grasas típicas, no de calcio. En RM (opciones C y D), las calcificaciones pueden ser difíciles de distinguir o aparecer hipointensas; además, la descripción clásica de calcificación densa es más típica de TC."
    },
    {
      q: "Lesión hiperintensa en RM T2:",
      options: ["Hiperintenso en T1", "Hiperintenso en T2", "Hiperdenso en TC", "Todas"],
      correct: 1,
      explain:
        "La pregunta hace referencia a una lesión hiperintensa en secuencias T2, por lo que la respuesta correcta es precisamente que es hiperintensa en T2 (opción B). Hiperintenso en T1 (opción A) es otro patrón de señal distinto y no se puede asumir automáticamente a partir de T2. Hiperdenso en TC (opción C) describe un hallazgo en otra técnica (TC), no en RM. Por tanto, no se puede decir que 'todas' sean ciertas (opción D)."
    },
    {
      q: "Diagnóstico por imagen del canal lagrimal con contraste y Rx:",
      options: ["Dacriocistografía", "Sialografía", "Colangiografía", "Cistografía"],
      correct: 0,
      explain:
        "La dacriocistografía es el estudio radiológico del sistema lagrimal mediante la inyección de contraste y la realización de radiografías, por eso es la opción correcta. La sialografía (opción B) estudia glándulas salivales. La colangiografía (opción C) se centra en las vías biliares. La cistografía (opción D) es el estudio de la vejiga urinaria, no del canal lagrimal."
    },
    {
      q: "En estudio del oído:",
      options: [
        "TC para oído externo y medio; RM para oído interno",
        "RM para oído externo y medio; TC para oído interno",
        "TC para todo el oído",
        "RM para todo el oído",
      ],
      correct: 0,
      explain:
        "En general, la TC es muy útil para valorar estructuras óseas finas como las del oído externo y medio (conducto, cadena osicular, mastoides), mientras que la RM es mejor para estructuras neurosensoriales del oído interno (laberinto membranoso, nervio auditivo). Por eso la combinación correcta es TC para externo/medio y RM para interno. La opción B invierte el uso. Las opciones C y D se quedan cojas porque cada técnica tiene ventajas diferentes según la parte del oído."
    },
  ],
},

{
  id: "an-u5",
  title: "AN · U5 · Sistema cardiopulmonar",
  questions: [
    {
      q: "Conecta aurícula derecha con ventrículo derecho:",
      options: ["Mitral", "Pulmonar", "Aórtica", "Tricúspide"],
      correct: 3,
      explain:
        "La válvula tricúspide separa la aurícula derecha del ventrículo derecho y evita el reflujo de sangre cuando el ventrículo se contrae. La válvula mitral (opción A) conecta aurícula izquierda y ventrículo izquierdo. Las válvulas pulmonar (opción B) y aórtica (opción C) son semilunares y se sitúan a la salida de los ventrículos hacia la arteria pulmonar y la aorta respectivamente, no entre aurícula y ventrículo derechos."
    },
    {
      q: "Cavidad que recibe sangre rica en CO2 de la vena cava:",
      options: ["Aurícula izquierda", "Ventrículo izquierdo", "Aurícula derecha", "Ventrículo derecho"],
      correct: 2,
      explain:
        "La aurícula derecha recibe la sangre venosa sistémica con alto contenido en CO2 procedente de la vena cava superior e inferior. La aurícula izquierda (opción A) recibe sangre oxigenada procedente de las venas pulmonares. El ventrículo derecho (opción D) recibe sangre de la aurícula derecha pero ya es la cámara que la impulsa hacia la arteria pulmonar. El ventrículo izquierdo (opción B) bombea sangre oxigenada a la aorta."
    },
    {
      q: "Falta de riego por obstrucción parcial coronaria:",
      options: ["IAM", "Angina de pecho", "Pericarditis", "Miocardiopatía dilatada"],
      correct: 1,
      explain:
        "La angina de pecho se debe a una isquemia miocárdica transitoria por obstrucción parcial o disminución del flujo en las arterias coronarias, sin llegar necesariamente a necrosis. El infarto agudo de miocardio (IAM, opción A) implica una obstrucción más completa y duradera, con muerte del tejido. La pericarditis (opción C) es inflamación del pericardio. La miocardiopatía dilatada (opción D) afecta al músculo cardíaco y su capacidad de contracción, pero no se define principalmente por una obstrucción parcial coronaria."
    },
    {
      q: "Alteración del ritmo cardíaco:",
      options: ["Arritmia", "Isquemia", "Hipertrofia ventricular", "Insuficiencia cardíaca"],
      correct: 0,
      explain:
        "Una arritmia es cualquier alteración del ritmo normal del corazón (frecuencia o regularidad), por eso es la respuesta correcta. La isquemia (opción B) es falta de aporte sanguíneo adecuado a un tejido. La hipertrofia ventricular (opción C) es aumento del grosor de la pared ventricular. La insuficiencia cardíaca (opción D) es la incapacidad del corazón para bombear sangre suficiente, y aunque puede asociarse a arritmias, no es lo mismo que una alteración del ritmo."
    },
    {
      q: "Pruebas de medicina nuclear cardíaca más usadas:",
      options: [
        "Ventriculografía y perfusión cardíaca",
        "Eco y RM",
        "Angiografía y ECG",
        "Cateterismo y Rx tórax",
      ],
      correct: 0,
      explain:
        "En medicina nuclear cardiaca son típicas la ventriculografía isotópica (para valorar función ventricular) y los estudios de perfusión miocárdica (para ver irrigación del corazón). La ecocardiografía y la RM (opción B) son imagen cardíaca pero no de medicina nuclear. Angiografía y ECG (opción C) se basan en contraste radiológico y registro eléctrico respectivamente. Cateterismo y Rx de tórax (opción D) tampoco son técnicas de medicina nuclear."
    },
    {
      q: "Procedimientos para visualizar vasos sanguíneos:",
      options: ["Angiografías", "Ecocardiografías", "Electrocardiogramas", "Colangiografías"],
      correct: 0,
      explain:
        "Las angiografías son procedimientos específicamente destinados a visualizar vasos sanguíneos mediante la inyección de contraste y técnicas de imagen (Rx, TC, RM). La ecocardiografía (opción B) se centra en la imagen del corazón, aunque pueda ver algo de grandes vasos. El ECG (opción C) registra la actividad eléctrica, no la anatomía vascular. La colangiografía (opción D) estudia las vías biliares, no los vasos sanguíneos."
    },
    {
      q: "Estructura pulmones:",
      options: [
        "Ambos 2 lóbulos",
        "Ambos 3 lóbulos",
        "Derecho 3 e izquierdo 2",
        "Derecho 2 e izquierdo 3",
      ],
      correct: 2,
      explain:
        "El pulmón derecho tiene 3 lóbulos (superior, medio e inferior) y el izquierdo tiene 2 (superior e inferior), debido al espacio que ocupa el corazón en el lado izquierdo. Por tanto, la opción correcta es 'derecho 3 e izquierdo 2'. Las opciones A y B igualan el número de lóbulos en ambos pulmones y la D invierte la distribución real."
    },
    {
      q: "Función de la pleura:",
      options: [
        "Producir oxígeno",
        "Amortiguar movimientos y proteger del roce",
        "Bombear aire",
        "Almacenar aire",
      ],
      correct: 1,
      explain:
        "La pleura es una membrana serosa que recubre los pulmones y la cavidad torácica; su líquido permite que las superficies se deslicen suavemente, amortiguando y evitando fricción durante la respiración. No produce oxígeno (opción A), ya que la oxigenación ocurre en los alvéolos. No bombea aire (opción C), esa es función de los músculos respiratorios y la mecánica pulmonar. Tampoco almacena aire (opción D); el aire se almacena en los pulmones, no en la pleura."
    },
    {
      q: "Volumen de aire normal en una inspiración/espiración:",
      options: ["Volumen corriente", "VRI", "Capacidad vital", "Volumen residual"],
      correct: 0,
      explain:
        "El volumen corriente es el volumen de aire que entra y sale en una respiración normal en reposo, por eso es la respuesta correcta. El volumen de reserva inspiratoria (VRI, opción B) es el aire adicional que se puede inspirar tras una inspiración normal. La capacidad vital (opción C) es la suma de varios volúmenes y representa el máximo aire que se puede movilizar entre una inspiración y una espiración forzadas. El volumen residual (opción D) es el aire que queda en los pulmones tras una espiración forzada."
    },
    {
      q: "Disminución del tamaño de bronquios por alergias:",
      options: ["Asma", "EPOC", "Neumonía", "Rinitis"],
      correct: 0,
      explain:
        "El asma se caracteriza por una obstrucción reversible de las vías aéreas, con broncoconstricción (disminución del calibre bronquial), frecuentemente desencadenada por alergias o irritantes. La EPOC (opción B) suele ser una obstrucción crónica y menos reversible, relacionada con tabaco y otros factores. La neumonía (opción C) es una infección del parénquima pulmonar, no un estrechamiento bronquial alérgico. La rinitis (opción D) afecta a la mucosa nasal, no directamente a los bronquios."
    },
  ],
},

{
  id: "an-u6",
  title: "AN · U6 · Sistema digestivo y urinario",
  questions: [
    {
      q: "Órgano en cavidad pélvica:",
      options: ["Riñones", "Vejiga", "Bazo", "Hígado"],
      correct: 1,
      explain:
        "La vejiga urinaria se localiza principalmente en la cavidad pélvica, por detrás del pubis. Los riñones (opción A) se sitúan en el retroperitoneo, en la región lumbar, no en la pelvis. El bazo (opción C) se encuentra en el hipocondrio izquierdo, en la parte alta del abdomen. El hígado (opción D) está en el hipocondrio derecho y epigastrio, también en la parte superior del abdomen."
    },
    {
      q: "Ligamento falciforme:",
      options: [
        "Une hígado a pared abdominal",
        "Une estómago a pared abdominal",
        "Une bazo a pared abdominal",
        "Une páncreas a pared abdominal",
      ],
      correct: 0,
      explain:
        "El ligamento falciforme es una estructura peritoneal que une la cara anterior del hígado a la pared anterior del abdomen y al diafragma, y contiene el ligamento redondo. No une el estómago (opción B), ni el bazo (opción C), ni el páncreas (opción D) a la pared abdominal; esas estructuras se relacionan con otros ligamentos peritoneales diferentes."
    },
    {
      q: "Microvellosidades del intestino delgado sirven para:",
      options: [
        "Secretar jugos digestivos",
        "Aumentar superficie de absorción",
        "Impulsar bolo alimenticio",
        "Almacenar nutrientes",
      ],
      correct: 1,
      explain:
        "Las microvellosidades son pequeñas prolongaciones de la membrana de los enterocitos que aumentan enormemente la superficie de absorción del intestino delgado, facilitando el paso de nutrientes a la sangre. La secreción de jugos digestivos (opción A) la realizan glándulas y células específicas, no las microvellosidades en sí. El impulso del bolo alimenticio (opción C) se debe a la musculatura lisa y al peristaltismo. El almacenamiento de nutrientes (opción D) se realiza sobre todo en hígado, tejido adiposo y otros tejidos, no en las microvellosidades."
    },
    {
      q: "Jugos biliares producidos en:",
      options: ["Hígado", "Vesícula biliar", "Páncreas", "Duodeno"],
      correct: 0,
      explain:
        "La bilis se produce en el hígado y después se almacena y concentra en la vesícula biliar, que la libera al duodeno cuando es necesario. La vesícula (opción B) no produce bilis, solo la almacena. El páncreas (opción C) produce jugos pancreáticos y hormonas, pero no bilis. El duodeno (opción D) es la primera porción del intestino delgado donde se vierte la bilis, pero tampoco la fabrica."
    },
    {
      q: "En TC, zona azul corresponde a (imagen):",
      options: ["Hígado", "Estómago", "Vejiga", "Páncreas"],
      correct: 0,
      explain:
        "En una TC abdominal típica, el hígado ocupa la mayor parte del hipocondrio derecho y parte del epigastrio, y suele verse como una gran masa homogénea. El estómago (opción B) se sitúa más hacia la izquierda y puede contener aire o contraste. La vejiga (opción C) está en la pelvis, mucho más inferior. El páncreas (opción D) es una estructura más pequeña y retroperitoneal, situada en el epigastrio y región central posterior."
    },
    {
      q: "Patógeno frecuente en gastritis y úlceras:",
      options: ["Klebsiella", "Helicobacter pylori", "E. coli", "Staphylococcus"],
      correct: 1,
      explain:
        "Helicobacter pylori es una bacteria que coloniza la mucosa gástrica y se asocia fuertemente a gastritis crónica, úlceras gástricas y duodenales, e incluso a mayor riesgo de cáncer gástrico. Klebsiella (opción A) y E. coli (opción C) se relacionan más con infecciones urinarias y otras infecciones hospitalarias. Staphylococcus (opción D) se asocia a infecciones cutáneas, óseas, etc., pero no es el patógeno típico de gastritis/úlceras."
    },
    {
      q: "En diagnóstico digestivo es frecuente usar:",
      options: ["Estudios baritados", "Sulfatados", "Nitrogenados", "Hidrogenados"],
      correct: 0,
      explain:
        "Los estudios baritados son exploraciones del tubo digestivo en las que se administra sulfato de bario para opacificar la luz intestinal y visualizarla con rayos X. 'Sulfatados' (opción B) no es un término concreto para estudios radiológicos. 'Nitrogenados' e 'hidrogenados' (opciones C y D) hacen referencia a tipos de compuestos químicos, pero no son nombres de estudios diagnósticos habituales en digestivo."
    },
    {
      q: "Unidad funcional del riñón:",
      options: ["Cápsula de Bowman", "Nefrona", "Glomérulo", "Asa de Henle"],
      correct: 1,
      explain:
        "La nefrona es la unidad funcional del riñón e incluye el glomérulo, la cápsula de Bowman, el túbulo contorneado proximal, el asa de Henle, el túbulo contorneado distal y el túbulo colector. La cápsula de Bowman (opción A) y el glomérulo (opción C) son partes de la nefrona, pero no la unidad completa. El asa de Henle (opción D) es solo un segmento del túbulo renal dentro de esa unidad."
    },
    {
      q: "Sangre en la orina:",
      options: ["Oliguria", "Glucosuria", "Hematuria", "Nicturia"],
      correct: 2,
      explain:
        "La hematuria es la presencia de sangre en la orina, visible macroscópicamente o solo al microscopio. Oliguria (opción A) significa disminución de la cantidad de orina emitida. Glucosuria (opción B) es presencia de glucosa en la orina. Nicturia (opción D) es el aumento de la necesidad de orinar durante la noche."
    },
    {
      q: "NO es función del sistema urinario:",
      options: [
        "Expulsión desechos",
        "Filtrado sangre",
        "Formación orina",
        "Digestión nutrientes",
      ],
      correct: 3,
      explain:
        "El sistema urinario se encarga de filtrar la sangre (riñones), formar orina y expulsar productos de desecho y exceso de agua/electrolitos, así que las opciones A, B y C sí son funciones suyas. La digestión de nutrientes (opción D) es función del sistema digestivo, no del urinario."
    },
  ],
},

{
  id: "an-u7",
  title: "AN · U7 · Sistema endocrino y reproductor",
  questions: [
    {
      q: "Estructura que regula funciones con síntesis y liberación de hormonas:",
      options: ["Enzimaterio", "Glándula endocrina", "Receptosoma", "Agitador biológico"],
      correct: 1,
      explain:
        "Las glándulas endocrinas son las estructuras especializadas en sintetizar y liberar hormonas directamente al torrente sanguíneo para regular funciones del organismo. 'Enzimaterio' (opción A) no es un término anatómico real. 'Receptosoma' (opción C) tampoco es un concepto anatómico estándar. 'Agitador biológico' (opción D) no describe ninguna estructura específica del sistema endocrino."
    },
    {
      q: "Prueba de elección en tiroides y paratiroides:",
      options: ["Rx simple", "Ecografía", "RM", "TC"],
      correct: 1,
      explain:
        "La ecografía es la prueba de imagen de elección para estudiar tiroides y paratiroides porque permite ver su tamaño, estructura y nódulos sin radiación ionizante y con gran resolución. La radiografía simple (opción A) casi no aporta información de estas glándulas. La RM (opción C) y la TC (opción D) se reservan para casos complejos o cuando la ecografía no es concluyente."
    },
    {
      q: "Hiperfunción ocasiona acromegalia o gigantismo:",
      options: ["Hormona de crecimiento", "Aldosterona", "Prolactina", "Vasopresina"],
      correct: 0,
      explain:
        "La hiperproducción de hormona de crecimiento (GH) en la hipófisis causa gigantismo si ocurre antes del cierre de las epífisis y acromegalia si sucede en adultos. La aldosterona (opción B) regula sodio y agua. La prolactina (opción C) se relaciona con la secreción de leche. La vasopresina o ADH (opción D) regula la reabsorción de agua en el riñón."
    },
    {
      q: "Técnica más usada para estudio mamario:",
      options: ["Ecografía", "RM", "Mamografía", "TC"],
      correct: 2,
      explain:
        "La mamografía es la técnica de cribado y estudio principal de la mama en la mayoría de protocolos, especialmente en mujeres mayores de cierta edad. La ecografía (opción A) es un complemento muy útil, sobre todo en mamas densas o en mujeres jóvenes. La RM (opción B) se usa en casos especiales (alto riesgo, valoración prequirúrgica). La TC (opción D) no es la técnica estándar para estudiar la mama."
    },
    {
      q: "Por ubicación profunda, el páncreas NO se visualiza bien con:",
      options: ["TC", "RM", "Ecografía abdominal", "Endoscopia"],
      correct: 2,
      explain:
        "El páncreas se sitúa profundo en el retroperitoneo y con frecuencia queda oculto por gas intestinal, lo que dificulta su visualización por ecografía abdominal. En cambio, la TC (opción A) y la RM (opción B) lo muestran con mucho más detalle. La endoscopia (opción D) sirve sobre todo para ver la luz del tubo digestivo, no para visualizar directamente el páncreas como órgano sólido."
    },
    {
      q: "En RM sagital, zona resaltada contiene (imagen):",
      options: [
        "Hipotálamo e hipófisis",
        "Tiroides y paratiroides",
        "Riñones y suprarrenales",
        "Útero y trompas",
      ],
      correct: 0,
      explain:
        "En un corte sagital de la región central craneal, la zona resaltada cerca de la base del cráneo suele corresponder a la región hipotálamo-hipofisaria, que se sitúa por encima de la silla turca. Tiroides y paratiroides (opción B) se localizan en el cuello. Riñones y suprarrenales (opción C) están en el retroperitoneo abdominal. Útero y trompas (opción D) se sitúan en la pelvis, muy inferiores a la fosa craneal."
    },
    {
      q: "Aldosterona, cortisol y adrenalina se producen en:",
      options: ["Testículos/ovarios", "Tiroides", "Suprarrenales", "Paratiroides"],
      correct: 2,
      explain:
        "Las glándulas suprarrenales producen mineralocorticoides como la aldosterona, glucocorticoides como el cortisol y catecolaminas como la adrenalina. Los testículos y ovarios (opción A) producen hormonas sexuales. La tiroides (opción B) produce T3 y T4. Las paratiroides (opción D) secretan hormona paratiroidea para la regulación del calcio."
    },
    {
      q: "BIRADS: hallazgo altamente sospechoso de malignidad:",
      options: ["BIRADS-1", "BIRADS-3", "BIRADS-5", "BIRADS-7"],
      correct: 2,
      explain:
        "En la clasificación BIRADS para estudios de mama, BIRADS-5 indica un hallazgo altamente sospechoso de malignidad, con alta probabilidad de cáncer. BIRADS-1 (opción A) es un estudio normal. BIRADS-3 (opción B) indica probablemente benigno, pero requiere control. BIRADS-7 (opción D) no forma parte de la escala oficial (va de 0 a 6)."
    },
    {
      q: "Técnica apenas empleada en aparato genital masculino:",
      options: ["Ecografía", "Tomografía computarizada", "RM", "No se estudia con imagen"],
      correct: 1,
      explain:
        "La TC se usa poco de forma específica para estudio del aparato genital masculino; se recurre más a ecografía (por ejemplo, testicular, prostática transrectal) y en algunos casos a RM. Por eso, la técnica 'apenas empleada' es la TC. La opción A (ecografía) sí se usa mucho. La opción C (RM) también se usa en casos concretos. La opción D es falsa porque el aparato genital masculino sí se estudia con imagen."
    },
    {
      q: "Radiología especial con contraste para útero y trompas:",
      options: ["Histerosalpingografía", "Eco transvaginal", "TC", "RM"],
      correct: 0,
      explain:
        "La histerosalpingografía es un estudio radiológico del útero y las trompas de Falopio mediante la introducción de contraste y posterior radiografía, muy utilizado para valorar permeabilidad tubárica. La ecografía transvaginal (opción B) es una técnica ecográfica, no una radiología con contraste intrauterino. La TC y la RM (opciones C y D) pueden valorar la pelvis, pero no son la radiología contrastada específica para trompas y útero que describe la pregunta."
    },
  ],
},


    /* ============ FUNDAMENTOS FÍSICOS Y EQUIPOS ============ */

   {
  id: "an-u1",
  title: "AN · U1 · Posición anatómica, planos y cavidades",
  questions: [
    {
      q: "¿Cuál corresponde a la posición anatómica básica?",
      options: [
        "Persona de pie, pies paralelos y dedos hacia adelante, brazos a los lados con palmas hacia adelante, cabeza erecta y mirada al frente",
        "Persona sentada, pies juntos, brazos cruzados sobre el pecho, cabeza inclinada hacia un lado y ojos cerrados",
        "Persona de pie, pies separados, brazos flexionados hacia adelante con palmas hacia abajo, cabeza inclinada hacia atrás",
        "Persona acostada, brazos extendidos hacia arriba, piernas separadas y cabeza girada hacia un lado",
      ],
      correct: 0,
      explain:
        "La posición anatómica de referencia es de pie, con los pies paralelos y dirigidos hacia delante, brazos a los lados del cuerpo con las palmas mirando al frente, y la cabeza erecta mirando al frente. Esta postura sirve como estándar para describir la localización y relación entre estructuras del cuerpo. La opción B describe una posición de reposo sentada, no la de referencia anatómica. La opción C muestra brazos y cabeza en posiciones no estándar, y la D es una posición en decúbito (acostado), que tampoco es la posición anatómica básica."
    },
    {
      q: "¿Qué plano anatómico divide el cuerpo en mitades derecha e izquierda?",
      options: ["Plano coronal", "Plano sagital", "Plano transversal", "Plano axial"],
      correct: 1,
      explain:
        "El plano sagital es el que divide el cuerpo en derecha e izquierda; si pasa exactamente por la mitad se le llama plano medio o mediano. El plano coronal (opción A) divide el cuerpo en una parte anterior (frontal) y otra posterior (dorsal). El plano transversal o axial (opciones C y D, que en clínica se usan casi como sinónimos) divide el cuerpo en una parte superior (cefálica) y otra inferior (caudal), no en derecha e izquierda."
    },
    {
      q: "¿Cuál afirmación sobre posición relativa es correcta?",
      options: [
        "El tobillo es más proximal que la rodilla",
        "El codo es más distal que la muñeca",
        "El hombro es más proximal que el codo",
        "La mano es más proximal que el antebrazo",
      ],
      correct: 2,
      explain:
        "En los miembros, proximal significa más cerca del tronco y distal, más lejos. El hombro está más cercano al tronco que el codo, por eso el hombro es más proximal que el codo (correcta). El tobillo es más distal que la rodilla, no más proximal (opción A, errónea). El codo está más proximal que la muñeca, no más distal (opción B, errónea). La mano es la parte más distal del miembro superior respecto al antebrazo, por lo que la opción D también es incorrecta."
    },
    {
      q: "¿Cuál afirmación sobre movimientos articulares es correcta?",
      options: [
        "La extensión disminuye el ángulo entre dos segmentos corporales",
        "La aducción acerca un miembro hacia la línea media del cuerpo",
        "La rotación interna aleja una estructura del eje central del cuerpo",
        "La protrusión es el movimiento hacia atrás de una parte corporal",
      ],
      correct: 1,
      explain:
        "La aducción es el movimiento que aproxima un segmento corporal hacia la línea media del cuerpo, por eso la opción B es correcta. La extensión aumenta el ángulo entre dos segmentos óseos (por ejemplo, extender el codo lo abre), no lo disminuye como dice la opción A. La rotación interna lleva una estructura hacia el eje central, no la aleja, por lo que la opción C es incorrecta. La protrusión es el movimiento hacia adelante (por ejemplo, protruir la mandíbula); el movimiento hacia atrás se llama retrusión, de modo que la opción D también es falsa."
    },
    {
      q: "¿En qué posición se encuentra el paciente (imagen)?",
      options: ["Sims", "Trendelemburg invertida", "Trendelemburg", "Sims invertida"],
      correct: 1,
      explain:
        "En Trendelemburg invertida, el cuerpo está en decúbito supino pero con la cabeza más alta que los pies, es decir, la camilla inclinada hacia abajo en dirección a los pies. En la posición de Trendelemburg clásica (opción C) es al revés: la cabeza queda más baja que los pies. La posición de Sims (opción A) es en decúbito lateral con ligera flexión de cadera y rodilla, utilizada mucho en exploración rectal o enemas. La denominada 'Sims invertida' (opción D) no es un término estándar en la nomenclatura habitual."
    },
    {
      q: "Parte superior del tronco entre base del cuello y diafragma:",
      options: ["Tórax", "Abdomen", "Pelvis", "Dorso"],
      correct: 0,
      explain:
        "El tórax es la región del tronco situada entre la base del cuello y el diafragma y contiene órganos como pulmones y corazón. El abdomen (opción B) se encuentra por debajo del diafragma hasta la pelvis. La pelvis (opción C) es la región inferior del tronco donde se alojan vísceras urinarias y parte de las reproductoras. El dorso (opción D) hace referencia a la región posterior del tronco, no específicamente a la zona superior anterior donde está el tórax."
    },
    {
      q: "El encéfalo se sitúa:",
      options: [
        "En la cavidad dorsal, en la cavidad craneal",
        "En la cavidad ventral, en la cavidad craneal",
        "En la cavidad dorsal, en la cavidad espinal",
        "En la cavidad ventral, en la cavidad espinal",
      ],
      correct: 0,
      explain:
        "El encéfalo (cerebro, cerebelo y tronco encefálico) se localiza en la cavidad craneal, que forma parte de la cavidad dorsal. La cavidad ventral incluye la cavidad torácica y abdominopélvica, donde se sitúan corazón y vísceras, por lo que las opciones B y D son erróneas. La cavidad espinal (u vertebral) contiene la médula espinal, no el encéfalo, por lo que la opción C también es incorrecta."
    },
    {
      q: "¿Cuántas líneas claviculares existen?",
      options: [
        "Solo una, por la línea media del esternón",
        "Dos, cada una en el punto medio de cada clavícula",
        "Dos, cada una en el extremo distal de cada clavícula",
        "Tres, en escápulas y columna vertebral",
      ],
      correct: 1,
      explain:
        "Se describen dos líneas claviculares: una derecha y otra izquierda, que pasan aproximadamente por el punto medio de cada clavícula y descienden verticalmente por el tórax, por eso la opción B es correcta. No hay una sola línea clavicular en la línea media esternal (opción A confunde con la línea media anterior). Tampoco se definen por el extremo distal de la clavícula (opción C). La opción D mezcla otros puntos anatómicos (escápulas y columna) que no corresponden a líneas claviculares."
    },
    {
      q: "¿Qué cuadrante abdominal está marcado con una X (imagen)?",
      options: [
        "Cuadrante superior derecho",
        "Cuadrante superior izquierdo",
        "Cuadrante inferior derecho",
        "Cuadrante inferior izquierdo",
      ],
      correct: 1,
      explain:
        "En la división en cuatro cuadrantes, el cuadrante superior izquierdo se sitúa por encima de la línea horizontal umbilical y a la izquierda de la línea vertical media. Es la zona donde se localizan, por ejemplo, parte del estómago y el bazo. El cuadrante superior derecho (opción A) está a la derecha (hígado, vesícula). Los cuadrantes inferiores derecho e izquierdo (opciones C y D) se sitúan por debajo de la línea umbilical, por tanto no corresponden al área descrita."
    },
    {
      q: "En 9 regiones abdominales, la vejiga se localiza principalmente en:",
      options: ["Hipocondrio derecho", "Epigastrio", "Hipogastrio", "Fosa ilíaca izquierda"],
      correct: 2,
      explain:
        "En la división en nueve regiones, la vejiga urinaria se sitúa fundamentalmente en la región hipogástrica o suprapúbica, por debajo del ombligo y sobre la sínfisis del pubis, por eso la opción correcta es el hipogastrio. El hipocondrio derecho (opción A) aloja sobre todo al hígado y vesícula. El epigastrio (opción B) se sitúa por encima del ombligo, centrado, y contiene parte del estómago. La fosa ilíaca izquierda (opción D) se asocia más al colon sigmoide y ovario izquierdo en la mujer."
    },
  ],
},

{
  id: "an-u2",
  title: "AN · U2 · Técnicas de imagen básicas",
  questions: [
    {
      q: "¿Qué técnica NO usa rayos X?",
      options: ["Ecografía", "Radiología convencional", "Tomografía computarizada", "Radiología con contraste"],
      correct: 0,
      explain:
        "La ecografía utiliza ondas de ultrasonido (ondas mecánicas de alta frecuencia), no radiación ionizante, y por eso es la técnica que no usa rayos X. La radiología convencional (opción B) se basa directamente en rayos X para generar la imagen. La tomografía computarizada (opción C) también usa rayos X rotando alrededor del paciente. La radiología con contraste (opción D) sigue siendo radiología con rayos X, solo que se añade un medio de contraste para mejorar la visualización de estructuras."
    },
    {
      q: "Técnica dependiente del operador y en tiempo real:",
      options: ["Resonancia magnética", "Ecografía", "Tomografía computarizada", "Radiología convencional"],
      correct: 1,
      explain:
        "La ecografía es una técnica muy dependiente del operador: la calidad de la exploración y las ventanas que se consigan dependen mucho de cómo el profesional maneje el transductor. Además, ofrece imágenes en tiempo real, lo que permite ver movimiento, flujo, etc. La resonancia magnética (opción A) también puede mostrar secuencias dinámicas, pero los protocolos suelen ser más estandarizados y menos dependientes del operador. La TC (opción C) y la radiología convencional (opción D) producen imágenes más fijas, no tan interactivas en tiempo real como la eco."
    },
    {
      q: "Técnica con exploración larga y posible claustrofobia:",
      options: ["Resonancia magnética", "Ecografía", "Tomografía computarizada", "Radiología convencional"],
      correct: 0,
      explain:
        "La resonancia magnética es una exploración relativamente larga, ruidosa y dentro de un imán que rodea al paciente, lo que puede provocar sensación de claustrofobia. La ecografía (opción B) suele ser rápida y se realiza en espacios abiertos, sin túnel. La TC (opción C) también usa un gantry, pero el tiempo de adquisición es mucho más corto, por lo que el efecto claustrofóbico es menor. La radiología convencional (opción D) se realiza de forma casi instantánea y no implica meter al paciente en un túnel cerrado."
    },
    {
      q: "La mayoría de estudios de TC se obtienen en plano:",
      options: ["Sagital", "Coronal", "Axial", "Frontal"],
      correct: 2,
      explain:
        "La adquisición original de la tomografía computarizada se realiza tradicionalmente en plano axial, es decir, cortes transversales perpendiculares al eje longitudinal del cuerpo. Luego, mediante reconstrucciones, se pueden obtener cortes sagitales o coronales. El plano sagital (opción A) divide en derecha e izquierda, pero no es el plano de adquisición principal. El plano coronal o frontal (opciones B y D) divide en anterior y posterior, también obtenible por reconstrucción, pero no es el habitual de adquisición."
    },
    {
      q: "Posición más habitual en RM:",
      options: ["Bipedestación", "Sedestación", "Decúbito supino", "Decúbito prono"],
      correct: 2,
      explain:
        "La posición más frecuente para exploraciones en resonancia magnética es el decúbito supino (boca arriba), porque es cómoda, estable y permite colocar bobinas y centrados de forma estándar. Bipedestación (opción A) y sedestación (opción B) se usan solo en equipos especiales. El decúbito prono (opción D) se emplea para algunos estudios concretos, como mama en determinadas configuraciones, pero no es la posición estándar general."
    },
    {
      q: "Estudio del SNC suele realizarse con:",
      options: [
        "Radiología simple o ecografía",
        "Ecografía o TC",
        "RM o ecografía",
        "TC o RM",
      ],
      correct: 3,
      explain:
        "El sistema nervioso central (encéfalo y médula espinal) se estudia fundamentalmente con tomografía computarizada (TC) y resonancia magnética (RM), que ofrecen buena visualización de parénquima, vascularización y lesiones. La radiología simple y la ecografía (opciones A y B) tienen un papel muy limitado para el SNC por la barrera ósea y la baja resolución de estructuras profundas. La opción C mezcla RM con ecografía, pero la eco apenas se usa para SNC salvo en neonatos por fontanelas."
    },
    {
      q: "En pulmones es frecuente usar:",
      options: [
        "Radiología simple primero y TC para detalle",
        "Ecografía primero y TC para detalle",
        "Ecografía primero y RM para detalle",
        "Radiología simple primero y RM para detalle",
      ],
      correct: 0,
      explain:
        "En patología pulmonar, el enfoque habitual es comenzar con radiografía simple de tórax (técnica barata, rápida y accesible) y recurrir a TC cuando se necesita más detalle anatómico o caracterización de lesiones. La ecografía pulmonar (opciones B y C) tiene su papel sobre todo a nivel pleural y en UCI, pero no es la primera prueba general para pulmón. La RM (opciones C y D) se utiliza mucho menos en pulmones por problemas de aire y movimiento, no es la prueba de detalle estándar."
    },
    {
      q: "Contrastes usados en tubo digestivo con rayos X:",
      options: ["Gadolinio", "Bario", "Yodo", "Berilio"],
      correct: 1,
      explain:
        "Para estudios del tubo digestivo con rayos X se usan principalmente contrastes a base de sulfato de bario, ya que son muy opacos a los rayos X y recubren la mucosa intest inal. El gadolinio (opción A) es el contraste típico de resonancia magnética. El yodo (opción C) se usa sobre todo como contraste intravascular o para TC de distintas estructuras, y también puede usarse por vía oral en determinadas situaciones, pero el clásico del tubo digestivo es el bario. El berilio (opción D) no se emplea como contraste radiológico."
    },
    {
      q: "Contrastes usados en radiología convencional del aparato excretor:",
      options: ["Bario", "Yodo", "Gadolinio", "Berilio"],
      correct: 1,
      explain:
        "En los estudios radiológicos del aparato urinario (urografías, pielografías, etc.) se usan contrastes yodados hidrosolubles que se eliminan por vía renal, permitiendo opacificar riñones, uréteres y vejiga. El bario (opción A) se reserva para tubo digestivo y no debe usarse en vía urinaria. El gadolinio (opción C) es para RM, no para radiología convencional. El berilio (opción D) no es un contraste médico utilizado."
    },
    {
      q: "Radiología simple es útil para estudiar:",
      options: ["Músculos", "Tendones", "Huesos", "Ligamentos"],
      correct: 2,
      explain:
        "La radiología simple (radiografías) es especialmente útil para estudiar estructuras óseas: fracturas, alineaciones, deformidades, densidad, etc. Músculos, tendones y ligamentos (opciones A, B y D) son tejidos blandos que se ven muy mal en radiografía simple y requieren técnicas como RM o ecografía para su valoración detallada. Por eso, la opción correcta es 'huesos'."
    },
  ],
},

{
  id: "an-u3",
  title: "AN · U3 · Sistema locomotor",
  questions: [
    {
      q: "¿Cuál NO es una función de los huesos?",
      options: [
        "Proteger órganos vitales",
        "Regular niveles de calcio en sangre",
        "Producir células sanguíneas",
        "Regular presión arterial mediante vasodilatación",
      ],
      correct: 3,
      explain:
        "Los huesos protegen órganos vitales (por ejemplo, cráneo y caja torácica), actúan como reservorio de minerales como el calcio y participan en la hematopoyesis (producción de células sanguíneas) en la médula ósea, por lo que las opciones A, B y C son funciones reales. La regulación directa de la presión arterial mediante vasodilatación (opción D) es función del sistema cardiovascular y del endotelio, no un papel propio de los huesos."
    },
    {
      q: "¿Qué estructura ósea es una elevación articular?",
      options: ["Trocánter", "Epicóndilo", "Cresta ilíaca", "Espina"],
      correct: 1,
      explain:
        "El epicóndilo es una prominencia ósea asociada a una articulación, donde se insertan ligamentos y tendones; por eso se considera una elevación articular. El trocánter (opción A) es una gran apófisis del fémur, más relacionada con inserción muscular. La cresta ilíaca (opción C) es un borde prominente del ilion, no una elevación articular en sí. La espina (opción D) es una prominencia puntiaguda (como la espina de la escápula), también más de inserción muscular que articular."
    },
    {
      q: "Estructura ósea con forma de polea:",
      options: ["Trocánter", "Apófisis", "Tróclea", "Tuberosidad"],
      correct: 2,
      explain:
        "La tróclea es una estructura articular con forma de polea que permite deslizamiento de otra superficie, como en la tróclea humeral. El trocánter (opción A) es una gran prominencia ósea, no con forma de polea. Apófisis (opción B) es un término genérico para una prolongación ósea, sin indicar forma concreta. La tuberosidad (opción D) es una región rugosa de inserción muscular o ligamentosa, tampoco con morfología de polea."
    },
    {
      q: "Hueso en zona posterior del cráneo:",
      options: ["Temporal", "Occipital", "Parietal", "Frontal"],
      correct: 1,
      explain:
        "El hueso occipital se sitúa en la región posterior e inferior del cráneo, formando la base y la parte de atrás de la cabeza. El hueso temporal (opción A) se localiza en los laterales del cráneo, donde está el oído medio e interno. El parietal (opción C) ocupa gran parte de la bóveda craneal superior y lateral. El frontal (opción D) está en la parte anterior del cráneo, donde se localiza la frente."
    },
    {
      q: "La columna vertebral está formada por:",
      options: [
        "8C, 11T, 5L, sacro y coxis",
        "7C, 12T, 5L, sacro y coxis",
        "8C, 12T, 6L, sacro y coxis",
        "7C, 11T, 6L, sacro y coxis",
      ],
      correct: 1,
      explain:
        "La columna vertebral humana típica está formada por 7 vértebras cervicales, 12 torácicas y 5 lumbares, más el sacro y el coxis fusionados, de ahí que la opción correcta sea 7C, 12T, 5L. Las demás combinaciones (opciones A, C y D) alteran ese número estándar, añadiendo o restando vértebras cervicales, torácicas o lumbares, por lo que no son correctas en anatomía normal."
    },
    {
      q: "La articulación acromioclavicular:",
      options: [
        "Entre escápula y clavícula",
        "Entre húmero y clavícula",
        "Entre C3 y clavícula",
        "Entre T1 y clavícula",
      ],
      correct: 0,
      explain:
        "La articulación acromioclavicular se establece entre el acromion (parte de la escápula) y el extremo lateral de la clavícula, por eso la opción A es la correcta. El húmero con la clavícula (opción B) no forman una articulación directa; el húmero articula con la escápula en la glenohumeral. Las opciones C y D mencionan vértebras cervicales y torácicas que no articulan directamente con la clavícula."
    },
    {
      q: "No es articulación de cintura pélvica:",
      options: ["Coxofemoral", "Sacroilíaca", "Sínfisis púbica", "Femororrotuliana"],
      correct: 3,
      explain:
        "Forman parte del complejo pélvico las articulaciones sacroilíacas (unión sacro-hueso ilíaco), la sínfisis púbica (unión entre ramas púbicas) y la coxofemoral (cadera, unión entre acetábulo y fémur), por lo que A, B y C sí son articulaciones de la cintura pélvica. La femororrotuliana (opción D) pertenece a la rodilla, entre el fémur y la rótula, no a la pelvis."
    },
    {
      q: "Traumatismo óseo complejo 3D con interés óseo:",
      options: ["Radiología simple", "TC", "RM", "Ecografía"],
      correct: 1,
      explain:
        "La tomografía computarizada (TC) es la técnica de elección para valorar traumatismos óseos complejos en tres dimensiones, ya que permite reconstrucciones multiplanares y 3D muy precisas del hueso. La radiología simple (opción A) puede ser insuficiente en fracturas complejas o articulares. La RM (opción C) es excelente para tejidos blandos, pero menos para detalle cortical óseo fino. La ecografía (opción D) solo valora de forma muy limitada algunas estructuras óseas superficiales."
    },
    {
      q: "Músculo involuntario visceral:",
      options: ["Esquelético", "Cardíaco", "Liso", "Rugoso"],
      correct: 2,
      explain:
        "El músculo liso es el que forma parte de la pared de vísceras huecas (intestino, vasos sanguíneos, vejiga, etc.) y es involuntario, controlado por el sistema nervioso autónomo. El músculo esquelético (opción A) es voluntario y se inserta en huesos para el movimiento. El músculo cardíaco (opción B) es involuntario pero específico del corazón, no 'visceral' general. La opción D (rugoso) no es una clasificación válida de tipo de músculo."
    },
    {
      q: "Artritis vs artrosis:",
      options: [
        "Artritis inflamatoria y artrosis degenerativa",
        "Artritis degenerativa y artrosis inflamatoria",
        "Ambas degenerativas",
        "Ambas inflamatorias",
      ],
      correct: 0,
      explain:
        "La artritis es un proceso inflamatorio de la articulación, mientras que la artrosis es una enfermedad degenerativa del cartílago articular y estructuras adyacentes. Por eso, la opción correcta es que la artritis es inflamatoria y la artrosis degenerativa. La opción B invierte los conceptos, y las opciones C y D asumen que ambas son del mismo tipo (ambas degenerativas o ambas inflamatorias), lo cual es falso."
    },
  ],
},

{
  id: "an-u4",
  title: "AN · U4 · Sistema nervioso",
  questions: [
    {
      q: "No forma parte del SNC:",
      options: ["Médula espinal", "Tronco encefálico", "Cerebelo", "Nervios craneales"],
      correct: 3,
      explain:
        "El sistema nervioso central (SNC) está formado por encéfalo (cerebro, cerebelo y tronco encefálico) y médula espinal, por lo que opciones A, B y C sí pertenecen al SNC. Los nervios craneales (opción D) se consideran parte del sistema nervioso periférico, ya que son prolongaciones que salen del encéfalo hacia órganos y estructuras periféricas."
    },
    {
      q: "Interviene en huida/lucha:",
      options: ["Somático", "Simpático", "Parasimpático", "Entérico"],
      correct: 1,
      explain:
        "La respuesta de lucha o huida (fight or flight) está mediada por el sistema nervioso simpático, que aumenta frecuencia cardíaca, dilata bronquios y moviliza energía. El sistema somático (opción A) controla sobre todo movimientos voluntarios de músculo esquelético. El parasimpático (opción C) se asocia a reposo y digestión (rest and digest). El sistema entérico (opción D) se encarga principalmente de la motilidad y funciones del tracto gastrointestinal."
    },
    {
      q: "Espacio epidural:",
      options: [
        "Entre hueso y duramadre",
        "Entre duramadre y aracnoides",
        "Entre aracnoides y piamadre",
        "Entre piamadre y corteza",
      ],
      correct: 0,
      explain:
        "El espacio epidural se localiza entre el hueso (por ejemplo, el canal vertebral) y la duramadre, y es donde se realiza la anestesia epidural. Entre duramadre y aracnoides (opción B) se hablaría del espacio subdural, que en condiciones normales es virtual. Entre aracnoides y piamadre (opción C) está el espacio subaracnoideo, donde circula el líquido cefalorraquídeo (LCR). La opción D no describe un espacio anatómico estándar."
    },
    {
      q: "Compartimento lleno de LCR:",
      options: ["Epidural", "Subdural", "Subaracnoideo", "Subpiamadral"],
      correct: 2,
      explain:
        "El líquido cefalorraquídeo (LCR) se encuentra en el espacio subaracnoideo, entre la aracnoides y la piamadre, protegiendo y amortiguando el SNC. El espacio epidural (opción A) contiene principalmente grasa y plexos venosos. El espacio subdural (opción B) es virtual y solo se hace evidente en patologías como hematomas. El término 'subpiamadral' (opción D) no se utiliza como compartimento anatómico real."
    },
    {
      q: "Zona azul en axial RM corresponde a:",
      options: [
        "Lóbulo frontal izquierdo",
        "Lóbulo temporal",
        "Lóbulo occipital",
        "Lóbulo parietal derecho",
      ],
      correct: 0,
      explain:
        "En un corte axial de RM, la región anterior del cráneo corresponde a los lóbulos frontales. Si la marca se sitúa en la parte delantera izquierda del paciente (que en la imagen suele verse a la derecha del observador), se trata del lóbulo frontal izquierdo. El lóbulo temporal (opción B) se ve más lateral e inferior. El occipital (opción C) se ubica en la parte posterior. El parietal (opción D) es más superior y posterior que el frontal."
    },
    {
      q: "Prueba para vasos cerebrales en isquemia:",
      options: ["RM sin contraste", "Rx cráneo", "Angio-TC con contraste", "Eco transabdominal"],
      correct: 2,
      explain:
        "La angio-TC con contraste permite visualizar con gran detalle las arterias cerebrales, detectar estenosis, oclusiones y aneurismas, y es muy útil en el contexto de isquemia. La RM sin contraste (opción A) puede mostrar el infarto como tal, pero no es la mejor para valorar la luz vascular en todos los casos. La Rx de cráneo (opción B) casi no aporta información sobre vasos. La ecografía transabdominal (opción D) se usa para abdomen, no para vasos cerebrales."
    },
    {
      q: "Imagen (calcificaciones) corresponde a:",
      options: [
        "TC cerebral con calcificaciones",
        "TC cerebral con quistes grasos",
        "RM cerebral con calcificaciones",
        "RM cerebral con quistes grasos",
      ],
      correct: 0,
      explain:
        "Las calcificaciones se ven muy bien en TC como zonas hiperdensas (blancas intensas), por lo que la imagen descrita suele corresponder a una TC cerebral con calcificaciones. La TC con quistes grasos (opción B) tendría densidades grasas típicas, no de calcio. En RM (opciones C y D), las calcificaciones pueden ser difíciles de distinguir o aparecer hipointensas; además, la descripción clásica de calcificación densa es más típica de TC."
    },
    {
      q: "Lesión hiperintensa en RM T2:",
      options: ["Hiperintenso en T1", "Hiperintenso en T2", "Hiperdenso en TC", "Todas"],
      correct: 1,
      explain:
        "La pregunta hace referencia a una lesión hiperintensa en secuencias T2, por lo que la respuesta correcta es precisamente que es hiperintensa en T2 (opción B). Hiperintenso en T1 (opción A) es otro patrón de señal distinto y no se puede asumir automáticamente a partir de T2. Hiperdenso en TC (opción C) describe un hallazgo en otra técnica (TC), no en RM. Por tanto, no se puede decir que 'todas' sean ciertas (opción D)."
    },
    {
      q: "Diagnóstico por imagen del canal lagrimal con contraste y Rx:",
      options: ["Dacriocistografía", "Sialografía", "Colangiografía", "Cistografía"],
      correct: 0,
      explain:
        "La dacriocistografía es el estudio radiológico del sistema lagrimal mediante la inyección de contraste y la realización de radiografías, por eso es la opción correcta. La sialografía (opción B) estudia glándulas salivales. La colangiografía (opción C) se centra en las vías biliares. La cistografía (opción D) es el estudio de la vejiga urinaria, no del canal lagrimal."
    },
    {
      q: "En estudio del oído:",
      options: [
        "TC para oído externo y medio; RM para oído interno",
        "RM para oído externo y medio; TC para oído interno",
        "TC para todo el oído",
        "RM para todo el oído",
      ],
      correct: 0,
      explain:
        "En general, la TC es muy útil para valorar estructuras óseas finas como las del oído externo y medio (conducto, cadena osicular, mastoides), mientras que la RM es mejor para estructuras neurosensoriales del oído interno (laberinto membranoso, nervio auditivo). Por eso la combinación correcta es TC para externo/medio y RM para interno. La opción B invierte el uso. Las opciones C y D se quedan cojas porque cada técnica tiene ventajas diferentes según la parte del oído."
    },
  ],
},

{
  id: "an-u5",
  title: "AN · U5 · Sistema cardiopulmonar",
  questions: [
    {
      q: "Conecta aurícula derecha con ventrículo derecho:",
      options: ["Mitral", "Pulmonar", "Aórtica", "Tricúspide"],
      correct: 3,
      explain:
        "La válvula tricúspide separa la aurícula derecha del ventrículo derecho y evita el reflujo de sangre cuando el ventrículo se contrae. La válvula mitral (opción A) conecta aurícula izquierda y ventrículo izquierdo. Las válvulas pulmonar (opción B) y aórtica (opción C) son semilunares y se sitúan a la salida de los ventrículos hacia la arteria pulmonar y la aorta respectivamente, no entre aurícula y ventrículo derechos."
    },
    {
      q: "Cavidad que recibe sangre rica en CO2 de la vena cava:",
      options: ["Aurícula izquierda", "Ventrículo izquierdo", "Aurícula derecha", "Ventrículo derecho"],
      correct: 2,
      explain:
        "La aurícula derecha recibe la sangre venosa sistémica con alto contenido en CO2 procedente de la vena cava superior e inferior. La aurícula izquierda (opción A) recibe sangre oxigenada procedente de las venas pulmonares. El ventrículo derecho (opción D) recibe sangre de la aurícula derecha pero ya es la cámara que la impulsa hacia la arteria pulmonar. El ventrículo izquierdo (opción B) bombea sangre oxigenada a la aorta."
    },
    {
      q: "Falta de riego por obstrucción parcial coronaria:",
      options: ["IAM", "Angina de pecho", "Pericarditis", "Miocardiopatía dilatada"],
      correct: 1,
      explain:
        "La angina de pecho se debe a una isquemia miocárdica transitoria por obstrucción parcial o disminución del flujo en las arterias coronarias, sin llegar necesariamente a necrosis. El infarto agudo de miocardio (IAM, opción A) implica una obstrucción más completa y duradera, con muerte del tejido. La pericarditis (opción C) es inflamación del pericardio. La miocardiopatía dilatada (opción D) afecta al músculo cardíaco y su capacidad de contracción, pero no se define principalmente por una obstrucción parcial coronaria."
    },
    {
      q: "Alteración del ritmo cardíaco:",
      options: ["Arritmia", "Isquemia", "Hipertrofia ventricular", "Insuficiencia cardíaca"],
      correct: 0,
      explain:
        "Una arritmia es cualquier alteración del ritmo normal del corazón (frecuencia o regularidad), por eso es la respuesta correcta. La isquemia (opción B) es falta de aporte sanguíneo adecuado a un tejido. La hipertrofia ventricular (opción C) es aumento del grosor de la pared ventricular. La insuficiencia cardíaca (opción D) es la incapacidad del corazón para bombear sangre suficiente, y aunque puede asociarse a arritmias, no es lo mismo que una alteración del ritmo."
    },
    {
      q: "Pruebas de medicina nuclear cardíaca más usadas:",
      options: [
        "Ventriculografía y perfusión cardíaca",
        "Eco y RM",
        "Angiografía y ECG",
        "Cateterismo y Rx tórax",
      ],
      correct: 0,
      explain:
        "En medicina nuclear cardiaca son típicas la ventriculografía isotópica (para valorar función ventricular) y los estudios de perfusión miocárdica (para ver irrigación del corazón). La ecocardiografía y la RM (opción B) son imagen cardíaca pero no de medicina nuclear. Angiografía y ECG (opción C) se basan en contraste radiológico y registro eléctrico respectivamente. Cateterismo y Rx de tórax (opción D) tampoco son técnicas de medicina nuclear."
    },
    {
      q: "Procedimientos para visualizar vasos sanguíneos:",
      options: ["Angiografías", "Ecocardiografías", "Electrocardiogramas", "Colangiografías"],
      correct: 0,
      explain:
        "Las angiografías son procedimientos específicamente destinados a visualizar vasos sanguíneos mediante la inyección de contraste y técnicas de imagen (Rx, TC, RM). La ecocardiografía (opción B) se centra en la imagen del corazón, aunque pueda ver algo de grandes vasos. El ECG (opción C) registra la actividad eléctrica, no la anatomía vascular. La colangiografía (opción D) estudia las vías biliares, no los vasos sanguíneos."
    },
    {
      q: "Estructura pulmones:",
      options: [
        "Ambos 2 lóbulos",
        "Ambos 3 lóbulos",
        "Derecho 3 e izquierdo 2",
        "Derecho 2 e izquierdo 3",
      ],
      correct: 2,
      explain:
        "El pulmón derecho tiene 3 lóbulos (superior, medio e inferior) y el izquierdo tiene 2 (superior e inferior), debido al espacio que ocupa el corazón en el lado izquierdo. Por tanto, la opción correcta es 'derecho 3 e izquierdo 2'. Las opciones A y B igualan el número de lóbulos en ambos pulmones y la D invierte la distribución real."
    },
    {
      q: "Función de la pleura:",
      options: [
        "Producir oxígeno",
        "Amortiguar movimientos y proteger del roce",
        "Bombear aire",
        "Almacenar aire",
      ],
      correct: 1,
      explain:
        "La pleura es una membrana serosa que recubre los pulmones y la cavidad torácica; su líquido permite que las superficies se deslicen suavemente, amortiguando y evitando fricción durante la respiración. No produce oxígeno (opción A), ya que la oxigenación ocurre en los alvéolos. No bombea aire (opción C), esa es función de los músculos respiratorios y la mecánica pulmonar. Tampoco almacena aire (opción D); el aire se almacena en los pulmones, no en la pleura."
    },
    {
      q: "Volumen de aire normal en una inspiración/espiración:",
      options: ["Volumen corriente", "VRI", "Capacidad vital", "Volumen residual"],
      correct: 0,
      explain:
        "El volumen corriente es el volumen de aire que entra y sale en una respiración normal en reposo, por eso es la respuesta correcta. El volumen de reserva inspiratoria (VRI, opción B) es el aire adicional que se puede inspirar tras una inspiración normal. La capacidad vital (opción C) es la suma de varios volúmenes y representa el máximo aire que se puede movilizar entre una inspiración y una espiración forzadas. El volumen residual (opción D) es el aire que queda en los pulmones tras una espiración forzada."
    },
    {
      q: "Disminución del tamaño de bronquios por alergias:",
      options: ["Asma", "EPOC", "Neumonía", "Rinitis"],
      correct: 0,
      explain:
        "El asma se caracteriza por una obstrucción reversible de las vías aéreas, con broncoconstricción (disminución del calibre bronquial), frecuentemente desencadenada por alergias o irritantes. La EPOC (opción B) suele ser una obstrucción crónica y menos reversible, relacionada con tabaco y otros factores. La neumonía (opción C) es una infección del parénquima pulmonar, no un estrechamiento bronquial alérgico. La rinitis (opción D) afecta a la mucosa nasal, no directamente a los bronquios."
    },
  ],
},

{
  id: "an-u6",
  title: "AN · U6 · Sistema digestivo y urinario",
  questions: [
    {
      q: "Órgano en cavidad pélvica:",
      options: ["Riñones", "Vejiga", "Bazo", "Hígado"],
      correct: 1,
      explain:
        "La vejiga urinaria se localiza principalmente en la cavidad pélvica, por detrás del pubis. Los riñones (opción A) se sitúan en el retroperitoneo, en la región lumbar, no en la pelvis. El bazo (opción C) se encuentra en el hipocondrio izquierdo, en la parte alta del abdomen. El hígado (opción D) está en el hipocondrio derecho y epigastrio, también en la parte superior del abdomen."
    },
    {
      q: "Ligamento falciforme:",
      options: [
        "Une hígado a pared abdominal",
        "Une estómago a pared abdominal",
        "Une bazo a pared abdominal",
        "Une páncreas a pared abdominal",
      ],
      correct: 0,
      explain:
        "El ligamento falciforme es una estructura peritoneal que une la cara anterior del hígado a la pared anterior del abdomen y al diafragma, y contiene el ligamento redondo. No une el estómago (opción B), ni el bazo (opción C), ni el páncreas (opción D) a la pared abdominal; esas estructuras se relacionan con otros ligamentos peritoneales diferentes."
    },
    {
      q: "Microvellosidades del intestino delgado sirven para:",
      options: [
        "Secretar jugos digestivos",
        "Aumentar superficie de absorción",
        "Impulsar bolo alimenticio",
        "Almacenar nutrientes",
      ],
      correct: 1,
      explain:
        "Las microvellosidades son pequeñas prolongaciones de la membrana de los enterocitos que aumentan enormemente la superficie de absorción del intestino delgado, facilitando el paso de nutrientes a la sangre. La secreción de jugos digestivos (opción A) la realizan glándulas y células específicas, no las microvellosidades en sí. El impulso del bolo alimenticio (opción C) se debe a la musculatura lisa y al peristaltismo. El almacenamiento de nutrientes (opción D) se realiza sobre todo en hígado, tejido adiposo y otros tejidos, no en las microvellosidades."
    },
    {
      q: "Jugos biliares producidos en:",
      options: ["Hígado", "Vesícula biliar", "Páncreas", "Duodeno"],
      correct: 0,
      explain:
        "La bilis se produce en el hígado y después se almacena y concentra en la vesícula biliar, que la libera al duodeno cuando es necesario. La vesícula (opción B) no produce bilis, solo la almacena. El páncreas (opción C) produce jugos pancreáticos y hormonas, pero no bilis. El duodeno (opción D) es la primera porción del intestino delgado donde se vierte la bilis, pero tampoco la fabrica."
    },
    {
      q: "En TC, zona azul corresponde a (imagen):",
      options: ["Hígado", "Estómago", "Vejiga", "Páncreas"],
      correct: 0,
      explain:
        "En una TC abdominal típica, el hígado ocupa la mayor parte del hipocondrio derecho y parte del epigastrio, y suele verse como una gran masa homogénea. El estómago (opción B) se sitúa más hacia la izquierda y puede contener aire o contraste. La vejiga (opción C) está en la pelvis, mucho más inferior. El páncreas (opción D) es una estructura más pequeña y retroperitoneal, situada en el epigastrio y región central posterior."
    },
    {
      q: "Patógeno frecuente en gastritis y úlceras:",
      options: ["Klebsiella", "Helicobacter pylori", "E. coli", "Staphylococcus"],
      correct: 1,
      explain:
        "Helicobacter pylori es una bacteria que coloniza la mucosa gástrica y se asocia fuertemente a gastritis crónica, úlceras gástricas y duodenales, e incluso a mayor riesgo de cáncer gástrico. Klebsiella (opción A) y E. coli (opción C) se relacionan más con infecciones urinarias y otras infecciones hospitalarias. Staphylococcus (opción D) se asocia a infecciones cutáneas, óseas, etc., pero no es el patógeno típico de gastritis/úlceras."
    },
    {
      q: "En diagnóstico digestivo es frecuente usar:",
      options: ["Estudios baritados", "Sulfatados", "Nitrogenados", "Hidrogenados"],
      correct: 0,
      explain:
        "Los estudios baritados son exploraciones del tubo digestivo en las que se administra sulfato de bario para opacificar la luz intestinal y visualizarla con rayos X. 'Sulfatados' (opción B) no es un término concreto para estudios radiológicos. 'Nitrogenados' e 'hidrogenados' (opciones C y D) hacen referencia a tipos de compuestos químicos, pero no son nombres de estudios diagnósticos habituales en digestivo."
    },
    {
      q: "Unidad funcional del riñón:",
      options: ["Cápsula de Bowman", "Nefrona", "Glomérulo", "Asa de Henle"],
      correct: 1,
      explain:
        "La nefrona es la unidad funcional del riñón e incluye el glomérulo, la cápsula de Bowman, el túbulo contorneado proximal, el asa de Henle, el túbulo contorneado distal y el túbulo colector. La cápsula de Bowman (opción A) y el glomérulo (opción C) son partes de la nefrona, pero no la unidad completa. El asa de Henle (opción D) es solo un segmento del túbulo renal dentro de esa unidad."
    },
    {
      q: "Sangre en la orina:",
      options: ["Oliguria", "Glucosuria", "Hematuria", "Nicturia"],
      correct: 2,
      explain:
        "La hematuria es la presencia de sangre en la orina, visible macroscópicamente o solo al microscopio. Oliguria (opción A) significa disminución de la cantidad de orina emitida. Glucosuria (opción B) es presencia de glucosa en la orina. Nicturia (opción D) es el aumento de la necesidad de orinar durante la noche."
    },
    {
      q: "NO es función del sistema urinario:",
      options: [
        "Expulsión desechos",
        "Filtrado sangre",
        "Formación orina",
        "Digestión nutrientes",
      ],
      correct: 3,
      explain:
        "El sistema urinario se encarga de filtrar la sangre (riñones), formar orina y expulsar productos de desecho y exceso de agua/electrolitos, así que las opciones A, B y C sí son funciones suyas. La digestión de nutrientes (opción D) es función del sistema digestivo, no del urinario."
    },
  ],
},

{
  id: "an-u7",
  title: "AN · U7 · Sistema endocrino y reproductor",
  questions: [
    {
      q: "Estructura que regula funciones con síntesis y liberación de hormonas:",
      options: ["Enzimaterio", "Glándula endocrina", "Receptosoma", "Agitador biológico"],
      correct: 1,
      explain:
        "Las glándulas endocrinas son las estructuras especializadas en sintetizar y liberar hormonas directamente al torrente sanguíneo para regular funciones del organismo. 'Enzimaterio' (opción A) no es un término anatómico real. 'Receptosoma' (opción C) tampoco es un concepto anatómico estándar. 'Agitador biológico' (opción D) no describe ninguna estructura específica del sistema endocrino."
    },
    {
      q: "Prueba de elección en tiroides y paratiroides:",
      options: ["Rx simple", "Ecografía", "RM", "TC"],
      correct: 1,
      explain:
        "La ecografía es la prueba de imagen de elección para estudiar tiroides y paratiroides porque permite ver su tamaño, estructura y nódulos sin radiación ionizante y con gran resolución. La radiografía simple (opción A) casi no aporta información de estas glándulas. La RM (opción C) y la TC (opción D) se reservan para casos complejos o cuando la ecografía no es concluyente."
    },
    {
      q: "Hiperfunción ocasiona acromegalia o gigantismo:",
      options: ["Hormona de crecimiento", "Aldosterona", "Prolactina", "Vasopresina"],
      correct: 0,
      explain:
        "La hiperproducción de hormona de crecimiento (GH) en la hipófisis causa gigantismo si ocurre antes del cierre de las epífisis y acromegalia si sucede en adultos. La aldosterona (opción B) regula sodio y agua. La prolactina (opción C) se relaciona con la secreción de leche. La vasopresina o ADH (opción D) regula la reabsorción de agua en el riñón."
    },
    {
      q: "Técnica más usada para estudio mamario:",
      options: ["Ecografía", "RM", "Mamografía", "TC"],
      correct: 2,
      explain:
        "La mamografía es la técnica de cribado y estudio principal de la mama en la mayoría de protocolos, especialmente en mujeres mayores de cierta edad. La ecografía (opción A) es un complemento muy útil, sobre todo en mamas densas o en mujeres jóvenes. La RM (opción B) se usa en casos especiales (alto riesgo, valoración prequirúrgica). La TC (opción D) no es la técnica estándar para estudiar la mama."
    },
    {
      q: "Por ubicación profunda, el páncreas NO se visualiza bien con:",
      options: ["TC", "RM", "Ecografía abdominal", "Endoscopia"],
      correct: 2,
      explain:
        "El páncreas se sitúa profundo en el retroperitoneo y con frecuencia queda oculto por gas intestinal, lo que dificulta su visualización por ecografía abdominal. En cambio, la TC (opción A) y la RM (opción B) lo muestran con mucho más detalle. La endoscopia (opción D) sirve sobre todo para ver la luz del tubo digestivo, no para visualizar directamente el páncreas como órgano sólido."
    },
    {
      q: "En RM sagital, zona resaltada contiene (imagen):",
      options: [
        "Hipotálamo e hipófisis",
        "Tiroides y paratiroides",
        "Riñones y suprarrenales",
        "Útero y trompas",
      ],
      correct: 0,
      explain:
        "En un corte sagital de la región central craneal, la zona resaltada cerca de la base del cráneo suele corresponder a la región hipotálamo-hipofisaria, que se sitúa por encima de la silla turca. Tiroides y paratiroides (opción B) se localizan en el cuello. Riñones y suprarrenales (opción C) están en el retroperitoneo abdominal. Útero y trompas (opción D) se sitúan en la pelvis, muy inferiores a la fosa craneal."
    },
    {
      q: "Aldosterona, cortisol y adrenalina se producen en:",
      options: ["Testículos/ovarios", "Tiroides", "Suprarrenales", "Paratiroides"],
      correct: 2,
      explain:
        "Las glándulas suprarrenales producen mineralocorticoides como la aldosterona, glucocorticoides como el cortisol y catecolaminas como la adrenalina. Los testículos y ovarios (opción A) producen hormonas sexuales. La tiroides (opción B) produce T3 y T4. Las paratiroides (opción D) secretan hormona paratiroidea para la regulación del calcio."
    },
    {
      q: "BIRADS: hallazgo altamente sospechoso de malignidad:",
      options: ["BIRADS-1", "BIRADS-3", "BIRADS-5", "BIRADS-7"],
      correct: 2,
      explain:
        "En la clasificación BIRADS para estudios de mama, BIRADS-5 indica un hallazgo altamente sospechoso de malignidad, con alta probabilidad de cáncer. BIRADS-1 (opción A) es un estudio normal. BIRADS-3 (opción B) indica probablemente benigno, pero requiere control. BIRADS-7 (opción D) no forma parte de la escala oficial (va de 0 a 6)."
    },
    {
      q: "Técnica apenas empleada en aparato genital masculino:",
      options: ["Ecografía", "Tomografía computarizada", "RM", "No se estudia con imagen"],
      correct: 1,
      explain:
        "La TC se usa poco de forma específica para estudio del aparato genital masculino; se recurre más a ecografía (por ejemplo, testicular, prostática transrectal) y en algunos casos a RM. Por eso, la técnica 'apenas empleada' es la TC. La opción A (ecografía) sí se usa mucho. La opción C (RM) también se usa en casos concretos. La opción D es falsa porque el aparato genital masculino sí se estudia con imagen."
    },
    {
      q: "Radiología especial con contraste para útero y trompas:",
      options: ["Histerosalpingografía", "Eco transvaginal", "TC", "RM"],
      correct: 0,
      explain:
        "La histerosalpingografía es un estudio radiológico del útero y las trompas de Falopio mediante la introducción de contraste y posterior radiografía, muy utilizado para valorar permeabilidad tubárica. La ecografía transvaginal (opción B) es una técnica ecográfica, no una radiología con contraste intrauterino. La TC y la RM (opciones C y D) pueden valorar la pelvis, pero no son la radiología contrastada específica para trompas y útero que describe la pregunta."
    },
  ],
},
  ],
};
// Agrupación de asignaturas por prefijo de id
const SUBJECT_GROUPS = [
  {
    id: "fol",
    name: "FOL",
    subtitle: "Formación y orientación laboral",
  },
  {
    id: "ap",
    name: "Atención al paciente",
    subtitle: "Atención al paciente y cuidados básicos",
  },
  {
    id: "an",
    name: "Anatomía",
    subtitle: "Anatomía, técnicas de imagen y sistemas",
  },
  {
    id: "ff",
    name: "Fundamentos físicos",
    subtitle: "Fundamentos físicos y equipos",
  },
];

// Unidades de una asignatura según prefijo de id
function getSubjectUnits(subjectId) {
  return SUBJECT.units.filter((u) => u.id.startsWith(subjectId + "-"));
}


/* =========================
   STORAGE (progreso)
   ========================= */

const STORAGE_KEY = "fol_app_progress_v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { best: {}, completed: {}, lastUnitId: null, fails: {} };
    }
    const p = JSON.parse(raw);
    return {
      best: p.best || {},
      completed: p.completed || {},
      lastUnitId: p.lastUnitId || null,
      fails: p.fails || {},        // 👈 nuevo campo
    };
  } catch {
    return { best: {}, completed: {}, lastUnitId: null, fails: {} };
  }
}


function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function percent(ok, total) {
  if (!total) return 0;
  return Math.round((ok / total) * 100);
}

/* =========================
   APP
   ========================= */

   export default function App() {
    const [progress, setProgress] = useState(() => loadProgress());
  
    // home | subject | unit | quiz | result
    const [screen, setScreen] = useState("home");
    const [subjectId, setSubjectId] = useState(null);
    const [unitId, setUnitId] = useState(progress.lastUnitId || null);
  
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState([]);
  const [currentChoice, setCurrentChoice] = useState(null); // índice elegido en la pregunta actual
  const [feedback, setFeedback] = useState(null);  // indices elegidos
  const [showExplain, setShowExplain] = useState(false);
  

  const unit = useMemo(
    () => SUBJECT.units.find((u) => u.id === unitId) || null,
    [unitId]
  );
  const currentSubject = useMemo(
    () => SUBJECT_GROUPS.find((s) => s.id === subjectId) || null,
    [subjectId]
  );

  const question = unit?.questions?.[qIndex] || null;

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  function goHome() {
    setScreen("home");
    setSubjectId(null);
    setUnitId(null);
    setQIndex(0);
    setPicked([]);
    setShowExplain(false);
  }
  function openSubject(id) {
    setSubjectId(id);
    setScreen("subject");
  }


  function openUnit(id) {
    setUnitId(id);
    setProgress((p) => ({ ...p, lastUnitId: id }));
    setScreen("unit");
  }

  function startQuiz() {
  setQIndex(0);
  setPicked([]);
  setShowExplain(false);
  setCurrentChoice(null);
  setFeedback(null);
  setScreen("quiz");
}

function answer(i) {
  if (!unit || !question || currentChoice !== null) return;

  setCurrentChoice(i);

  const isCorrect = i === question.correct;
  setFeedback(isCorrect ? "correct" : "wrong");

  // si quieres que al fallar se abra auto la explicación:
  if (!isCorrect) {
    setShowExplain(true);
  }
}
function nextQuestion() {
  if (!unit || !question || currentChoice === null) return;

  // Guardamos la respuesta elegida para esta pregunta
  const newPicked = [...picked];
  newPicked[qIndex] = currentChoice;

  const isCorrect = currentChoice === question.correct;

  // Calculamos si era la última
  const isLast = qIndex + 1 >= unit.questions.length;

  if (!isLast) {
    setPicked(newPicked);
    setQIndex(qIndex + 1);
    setCurrentChoice(null);
    setFeedback(null);
    setShowExplain(false);
  } else {
    // Última pregunta: calculamos el resultado y guardamos progreso
    const ok = unit.questions.reduce(
      (acc, q, idx) => acc + (newPicked[idx] === q.correct ? 1 : 0),
      0
    );
    const score = percent(ok, unit.questions.length);

    setPicked(newPicked); // guardamos todas las respuestas

    setProgress((p) => {
      const prevBest = p.best[unit.id] ?? 0;
      const best = Math.max(prevBest, score);
      const completed = { ...p.completed, [unit.id]: score >= 60 };

      // 👇 aquí ya podríamos también ir acumulando fallos por asignatura para el "test de fallos global"
      return { ...p, best: { ...p.best, [unit.id]: best }, completed };
    });

    setScreen("result");
  }
}


  function computeResult() {
  if (!unit || !unit.questions) {
    return { ok: 0, total: 0, score: 0, wrong: [] };
  }

  const total = unit.questions.length;
  let ok = 0;
  const wrong = [];

  unit.questions.forEach((q, idx) => {
    const chosen = picked[idx];

    if (chosen === q.correct) {
      ok++;
    } else if (chosen !== undefined && chosen !== null) {
      wrong.push({
        index: idx,
        q: q.q,
        userIndex: chosen,
        userLetter: String.fromCharCode(65 + chosen),
        userText: q.options[chosen],
        correctIndex: q.correct,
        correctLetter: String.fromCharCode(65 + q.correct),
        correctText: q.options[q.correct],
        // Explicación opcional que podrás añadir en los datos:
        explain: q.explain || "",
      });
    }
  });

  const score = percent(ok, total);
  return { ok, total, score, wrong };
}


  const result = computeResult();

  return (
    <div className="wrap">
      <style>{CSS}</style>

      <header className="topbar">
        <button
          className="iconBtn"
          onClick={screen === "home" ? () => {} : goHome}
          disabled={screen === "home"}
        >
          ←
        </button>

        <div className="titleBlock">
          <div className="title">StudyApp</div>
          <div className="subtitle">
            {screen === "home" && "Tests CFGS · FOL · Atención · Anatomía · FF"}
            {screen === "subject" && (currentSubject?.subtitle || currentSubject?.name)}
            {(screen === "unit" || screen === "quiz" || screen === "result") &&
              (unit?.title || "Unidad")}
          </div>
        </div>


        <button className="iconBtn" onClick={goHome} aria-label="Inicio">
          ⌂
        </button>
      </header>

      {/* HOME */}
         {/* HOME → 4 asignaturas en 2x2 */}
         {screen === "home" && (
        <main className="main">
          <div className="hero">
            <div className="heroBadge">📱 Solo móvil · responsive</div>
            <div className="heroTitle">Tests CFGS</div>
            <div className="heroText">
              Elige una asignatura para ver sus unidades y tests.
            </div>
          </div>

          <div className="grid">
            {SUBJECT_GROUPS.map((s) => {
              const units = getSubjectUnits(s.id);
              const totalUnits = units.length;
              const completedCount = units.filter(
                (u) => progress.completed[u.id]
              ).length;
              const completion = totalUnits
                ? Math.round((completedCount / totalUnits) * 100)
                : 0;

              const avgBest = totalUnits
                ? Math.round(
                    units.reduce(
                      (acc, u) => acc + (progress.best[u.id] ?? 0),
                      0
                    ) / totalUnits
                  )
                : 0;

              return (
                <button
                  key={s.id}
                  className="card"
                  onClick={() => openSubject(s.id)}
                >
                  <div className="cardTop">
                    <div className="cardTitle">{s.name}</div>
                    <div className="pill gray">
                      {completedCount}/{totalUnits || 0} unidades
                    </div>
                  </div>

                  <div className="metaRow">
                    <span className="meta">Media mejor: {avgBest}%</span>
                    <span className="meta">Progreso: {completion}%</span>
                  </div>

                  <div className="bar">
                    <div
                      className="barFill"
                      style={{ width: `${completion}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </main>
      )}
      {/* SUBJECT → lista de unidades de una asignatura */}
      {screen === "subject" && currentSubject && (
        <main className="main">
          <div className="panel">
            <div className="panelHead">
              <div className="panelTitle">{currentSubject.name}</div>
              <div className="panelSub">
                {currentSubject.subtitle}
              </div>
            </div>
          </div>

          <div className="grid" style={{ marginTop: 10 }}>
            {getSubjectUnits(currentSubject.id).map((u) => {
              const best = progress.best[u.id] ?? 0;
              const done = !!progress.completed[u.id];
              const total = u.questions?.length ?? 0;

              return (
                <button
                  key={u.id}
                  className={`card ${u.isFinal ? "finalCard" : ""}`}
                  onClick={() => openUnit(u.id)}
                >
                  <div className="cardTop">
                    <div className="cardTitle">{u.title}</div>
                    {u.isFinal ? (
                      <div className="pill gold">FINAL</div>
                    ) : done ? (
                      <div className="pill green">OK</div>
                    ) : (
                      <div className="pill gray">PEND</div>
                    )}
                  </div>

                  <div className="metaRow">
                    <span className="meta">Preguntas: {total}</span>
                    <span className="meta">Mejor: {best}%</span>
                  </div>

                  <div className="bar">
                    <div className="barFill" style={{ width: `${best}%` }} />
                  </div>
                </button>
              );
            })}
          </div>
        </main>
      )}


      {/* UNIT */}
      {screen === "unit" && unit && (
        <main className="main">
          <div className="panel">
            <div className="panelHead">
              <div className="panelTitle">{unit.title}</div>
              <div className="panelSub">
                Preguntas: <b>{unit.questions?.length ?? 0}</b> · Mejor:{" "}
                <b>{progress.best[unit.id] ?? 0}%</b>
              </div>
            </div>

            {!unit.questions || unit.questions.length === 0 ? (
              <div className="empty">
                Esta unidad está vacía todavía (perfecto si es la FINAL y la
                rellenarás luego).
              </div>
            ) : (
              <button className="primary" onClick={startQuiz}>
                Empezar test
              </button>
            )}

            <button className="ghost" onClick={goHome}>
              Volver a unidades
            </button>
          </div>
        </main>
      )}

      {/* QUIZ */}
      {screen === "quiz" && unit && question && (
        <main className="main">
          <div className="quizTop">
            <div className="progressText">
              {qIndex + 1} / {unit.questions.length}
            </div>
            <div className="bar">
              <div
                className="barFill"
                style={{
                  width: `${Math.round(
                    ((qIndex + 1) / unit.questions.length) * 100
                  )}%`,
                }}
              />
            </div>
          </div>

          <div className="qCard">
            <div className="qText">{question.q}</div>

            <div className="options">
            {question.options.map((opt, i) => {
  let extraClass = "";
  if (currentChoice !== null) {
    if (i === question.correct) {
      extraClass = " correct";
    } else if (i === currentChoice) {
      extraClass = " incorrect";
    } else {
      extraClass = " disabled";
    }
  }

  return (
    <button
      key={i}
      className={"optBtn" + extraClass}
      onClick={() => answer(i)}
      disabled={currentChoice !== null} // una vez elegida, bloqueamos
    >
      <span className="optKey">{String.fromCharCode(65 + i)}</span>
      <span className="optText">{opt}</span>
    </button>
  );
})}

            </div>
            {currentChoice !== null && (
  <button
    className="primary primarySmall"
    onClick={nextQuestion}
  >
    {qIndex + 1 < unit.questions.length
      ? "Siguiente pregunta"
      : "Ver resultados"}
  </button>
)}


            <button
              className="tiny"
              onClick={() => setShowExplain((s) => !s)}
            >
              {showExplain ? "Ocultar ayuda" : "Ver respuesta (modo repaso)"}
            </button>

            {showExplain && (
              <div className="explain">
                ✅ Correcta:{" "}
                <b>{String.fromCharCode(65 + question.correct)}</b> —{" "}
                {question.options[question.correct]}
              </div>
            )}
          </div>
        </main>
      )}

     {/* RESULT */}
{screen === "result" && unit && (
  <main className="main">
    <div className="resultCard">
      <div className="resultScore">{result.score}%</div>
      <div className="resultMeta">
        Aciertos: <b>{result.ok}</b> / <b>{result.total}</b>
      </div>

      <div className="bar big">
        <div
          className="barFill"
          style={{ width: `${result.score}%` }}
        />
      </div>

      <div className="resultHint">
        {result.score >= 60
          ? "✅ Unidad superada (≥ 60%)"
          : "⚠️ No superada (repite para subir nota)"}
      </div>

      <button className="primary" onClick={startQuiz}>
        Repetir test
      </button>
      <button className="ghost" onClick={goHome}>
        Volver a unidades
      </button>
{/* 🔽 Lista de preguntas falladas */}
{result.wrong && result.wrong.length > 0 && (
  <div className="wrongList">
    <div className="wrongTitle">Preguntas que has fallado</div>

    {result.wrong.map((item, idx) => (
      <div key={idx} className="wrongItem">
        <div className="wrongQ">
          {idx + 1}. {item.q}
        </div>

        <div className="wrongRow">
          <span className="tag wrong">
            Tu respuesta: {item.userLetter} · {item.userText}
          </span>
        </div>

        <div className="wrongRow">
          <span className="tag correct">
            Correcta: {item.correctLetter} · {item.correctText}
          </span>
        </div>

        {item.explain && (
          <div className="wrongExplain">
            {typeof item.explain === "string" ? (
              // 💬 Para AP, AN, FF… donde explain es un texto
              <p>{item.explain}</p>
            ) : (
              // 💬 Para FOL, donde explain es un objeto { detail, whyCorrect, whyWrong }
              <>
                {item.explain.detail && (
                  <p>{item.explain.detail}</p>
                )}

                {item.explain.whyCorrect && (
                  <p>
                    <strong>Por qué es correcta la {item.correctLetter}:</strong>{" "}
                    {item.explain.whyCorrect}
                  </p>
                )}

                {item.explain.whyWrong && (
                  <ul className="whyWrongList">
                    {Object.entries(item.explain.whyWrong).map(
                      ([letter, text]) => (
                        <li key={letter}>
                          <strong>{letter}:</strong> {text}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
)}

    </div>
  </main>
)}
    </div>
  );
}

/* =========================
   CSS (mobile-first)
   ========================= */

   const CSS = `
   :root{
     --bg:#050816;
     --bg-soft:#070b1a;
     --card:#0b1220;
     --card-soft:#0f172a;
     --text:#e5e7eb;
     --muted:#9ca3af;
     --stroke:rgba(148,163,184,.35);
     --shadow: 0 14px 30px rgba(15,23,42,.65);
     --a:${SUBJECT.colorA};
     --b:${SUBJECT.colorB};
   }
   
   /* RESET BÁSICO */
   
   *{box-sizing:border-box;margin:0;padding:0}
   html,body{height:100%}
   body{
     margin:0;
     background:
       radial-gradient(1200px 700px at 15% -10%, rgba(99,102,241,.18), transparent 60%),
       radial-gradient(900px 600px at 95% 0%, rgba(72,187,255,.15), transparent 55%),
       var(--bg);
     font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", Segoe UI, Roboto, Arial, sans-serif;
     color:var(--text);
   }
   
   /* LAYOUT GENERAL */
   
   .wrap{
     min-height:100vh;
     display:flex;
     flex-direction:column;
   }
   
   .main{
     padding:14px;
     width:100%;
     max-width:520px;
     margin:0 auto 18px;
   }
   
   /* TOPBAR */
   
   .topbar{
     position:sticky;
     top:0;
     z-index:10;
     display:flex;
     align-items:center;
     gap:10px;
     padding:10px 12px;
     background: linear-gradient(
         90deg,
         rgba(15,23,42,.95),
         rgba(15,23,42,.85)
       );
     backdrop-filter: blur(14px);
     border-bottom:1px solid rgba(148,163,184,.25);
   }
   
   .iconBtn{
     width:38px;height:38px;
     border-radius:12px;
     border:1px solid rgba(148,163,184,.35);
     background: radial-gradient(circle at 0 0, rgba(148,163,184,.18), rgba(15,23,42,1));
     color:var(--text);
     font-size:18px;
     display:grid;
     place-items:center;
     cursor:pointer;
     transition:transform .12s ease, box-shadow .12s ease, background .12s ease, opacity .12s ease;
   }
   .iconBtn:disabled{
     opacity:.35;
     cursor:default;
   }
   .iconBtn:not(:disabled):active{
     transform:scale(.94);
     box-shadow:0 0 0 rgba(0,0,0,0);
   }
   
   .titleBlock{
     flex:1;
     min-width:0;
   }
   .title{
     font-weight:800;
     letter-spacing:.02em;
     font-size:16px;
   }
   .subtitle{
     color:var(--muted);
     font-size:12px;
     white-space:nowrap;
     overflow:hidden;
     text-overflow:ellipsis;
   }
   
   /* HOME / HERO */
   
   .hero{
     padding:16px 14px;
     border-radius:20px;
     border:1px solid rgba(148,163,184,.35);
     background:
       linear-gradient(135deg, rgba(15,118,255,.18), rgba(129,140,248,.10)),
       radial-gradient(circle at 0 0, rgba(248,250,252,.04), transparent 55%),
       var(--card-soft);
     box-shadow:var(--shadow);
     margin:14px 0;
   }
   
   .heroBadge{
     display:inline-flex;
     align-items:center;
     gap:6px;
     padding:4px 10px;
     border-radius:999px;
     border:1px solid rgba(148,163,184,.40);
     background:rgba(15,23,42,.8);
     font-size:11px;
     color:#cbd5f5;
   }
   .heroBadge::before{
     content:"•";
     font-size:14px;
   }
   
   .heroTitle{
     font-size:22px;
     font-weight:900;
     margin:8px 0 4px;
   }
   .heroText{
     color:var(--muted);
     font-size:13px;
   }
   
   /* GRID DE TARJETAS (UNIDADES / ASIGNATURAS) */
   
   .grid{
     display:grid;
     gap:12px;
     margin-bottom:8px;
   }
   
   /* 1 columna en móviles muy pequeños, 2 columnas cuando haya algo más de ancho */
   @media (min-width:400px){
     .grid{
       grid-template-columns:repeat(2,minmax(0,1fr));
     }
   }
   
   /* CARD GENÉRICA */
   
   .card{
     width:100%;
     text-align:left;
     padding:14px 12px;
     border-radius:18px;
     border:1px solid rgba(148,163,184,.35);
     background:
       radial-gradient(circle at 0 0, rgba(148,163,184,.18), rgba(15,23,42,1));
     color:var(--text);
     box-shadow:0 12px 26px rgba(15,23,42,.7);
     cursor:pointer;
     transition:transform .15s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;
   }
   .card:hover{
     transform:translateY(-2px);
     box-shadow:0 18px 32px rgba(15,23,42,.85);
     border-color:rgba(129,140,248,.8);
   }
   
   .finalCard{
     border-color:rgba(245,158,11,.5);
     background:
       radial-gradient(circle at 0 0, rgba(245,158,11,.35), rgba(15,23,42,1));
   }
   
   .cardTop{
     display:flex;
     align-items:flex-start;
     justify-content:space-between;
     gap:10px;
   }
   .cardTitle{
     font-weight:800;
     font-size:13px;
     line-height:1.25;
   }
   
   /* PILLS / ETIQUETAS */
   
   .pill{
     font-size:11px;
     padding:5px 10px;
     border-radius:999px;
     border:1px solid rgba(148,163,184,.5);
     background:rgba(15,23,42,.9);
     color:var(--muted);
     flex-shrink:0;
   }
   .pill.green{
     border-color:rgba(22,163,74,.7);
     background:rgba(22,163,74,.18);
     color:#bbf7d0;
   }
     /* feedback de opciones */
.optBtn.correct{
  border-color: rgba(16,185,129,.8);
  background: rgba(16,185,129,.14);
}
.optBtn.incorrect{
  border-color: rgba(239,68,68,.85);
  background: rgba(239,68,68,.16);
}
.optBtn.disabled{
  opacity:.6;
}

/* botón pequeño siguiente/ver resultados */
.primarySmall{
  margin-top:12px;
  padding:10px 14px;
  font-size:13px;
  box-shadow: 0 8px 22px rgba(99,102,241,.25);
}

/* bloque de fallos en pantalla de resultado */
.wrongList{
  margin-top:18px;
  padding-top:10px;
  border-top:1px solid rgba(255,255,255,.10);
}
.wrongTitle{
  font-size:14px;
  font-weight:800;
  margin-bottom:8px;
}
.wrongItem{
  margin-bottom:10px;
  padding:10px;
  border-radius:12px;
  background: rgba(0,0,0,.18);
  border:1px solid rgba(255,255,255,.06);
}
.wrongQ{
  font-size:13px;
  font-weight:600;
  margin-bottom:6px;
}
.wrongRow{
  margin-bottom:4px;
}
.tag{
  display:inline-block;
  padding:4px 8px;
  border-radius:999px;
  font-size:11px;
  font-weight:700;
}
.tag.correct{
  background: rgba(16,185,129,.12);
  color:#bbf7d0;
}
.tag.wrong{
  background: rgba(239,68,68,.16);
  color:#fecaca;
}
.wrongExplain{
  margin-top:6px;
  font-size:12px;
  color:var(--muted);
}

   .pill.gray{
     border-color:rgba(148,163,184,.6);
     background:rgba(15,23,42,.85);
   }
   .pill.gold{
     border-color:rgba(245,158,11,.8);
     background:rgba(245,158,11,.18);
     color:#fef3c7;
   }
   
   .metaRow{
     display:flex;
     justify-content:space-between;
     gap:8px;
     margin-top:10px;
   }
   .meta{
     font-size:11px;
     color:var(--muted);
   }
   
   /* BARRA DE PROGRESO */
   
   .bar{
     height:8px;
     border-radius:999px;
     background:rgba(15,23,42,1);
     border:1px solid rgba(30,64,175,.6);
     overflow:hidden;
     margin-top:8px;
   }
   .bar.big{
     height:12px;
   }
   .barFill{
     height:100%;
     width:0;
     border-radius:999px;
     background:linear-gradient(90deg,var(--a),var(--b));
     transition:width .25s ease-out;
   }
   
   /* PANEL DE UNIDAD / QUIZ / RESULT */
   
   .panel,
   .qCard,
   .resultCard{
     border-radius:20px;
     border:1px solid rgba(148,163,184,.35);
     background:
       linear-gradient(145deg, rgba(15,23,42,.98), rgba(15,23,42,.9));
     box-shadow:var(--shadow);
     padding:16px 14px;
   }
   
   .panelHead{
     margin-bottom:14px;
   }
   .panelTitle{
     font-size:17px;
     font-weight:900;
   }
   .panelSub{
     font-size:12px;
     color:var(--muted);
     margin-top:4px;
   }
   
   /* BOTONES PRINCIPALES */
   
   .primary{
     width:100%;
     border:none;
     padding:13px 14px;
     border-radius:16px;
     background:linear-gradient(90deg,var(--a),var(--b));
     color:white;
     font-weight:800;
     font-size:14px;
     box-shadow:0 16px 32px rgba(79,70,229,.45);
     cursor:pointer;
     margin-top:4px;
     transition:transform .12s ease, box-shadow .12s ease, filter .12s ease;
   }
   .primary:active{
     transform:translateY(1px) scale(.98);
     box-shadow:0 8px 18px rgba(79,70,229,.4);
     filter:brightness(.97);
   }
   
   .ghost{
     width:100%;
     margin-top:8px;
     padding:11px 14px;
     border-radius:16px;
     border:1px solid rgba(148,163,184,.45);
     background:rgba(15,23,42,.9);
     color:var(--text);
     font-weight:700;
     font-size:13px;
     cursor:pointer;
     transition:background .12s ease, border-color .12s ease, transform .12s ease;
   }
   .ghost:hover{
     background:rgba(15,23,42,1);
     border-color:rgba(129,140,248,.8);
   }
   .ghost:active{
     transform:translateY(1px);
   }
   
   /* MENSAJE UNIDAD VACÍA */
   
   .empty{
     color:var(--muted);
     font-size:13px;
     padding:10px 11px;
     border-radius:14px;
     border:1px dashed rgba(148,163,184,.5);
     background:rgba(15,23,42,.85);
     margin-bottom:12px;
   }
   
   /* QUIZ */
   
   .quizTop{
     margin-bottom:12px;
   }
   .progressText{
     font-size:12px;
     color:var(--muted);
     margin-bottom:6px;
   }
   
   .qText{
     font-weight:800;
     font-size:15px;
     line-height:1.35;
     margin-bottom:12px;
   }
   
   .options{
     display:grid;
     gap:9px;
   }
   
   .optBtn{
     width:100%;
     text-align:left;
     border-radius:14px;
     border:1px solid rgba(148,163,184,.45);
     background:rgba(15,23,42,.9);
     padding:10px 11px;
     display:flex;
     gap:8px;
     align-items:flex-start;
     color:var(--text);
     font-size:13px;
     cursor:pointer;
     transition:background .12s ease, border-color .12s ease, transform .08s ease;
   }
   .optBtn:active{
     transform:scale(.985);
     border-color:rgba(129,140,248,.8);
     background:rgba(15,23,42,1);
   }
   
   .optKey{
     width:26px;
     height:26px;
     border-radius:10px;
     display:grid;
     place-items:center;
     font-weight:800;
     font-size:12px;
     background:radial-gradient(circle at 0 0, rgba(129,140,248,.85), rgba(79,70,229,1));
     border:1px solid rgba(191,219,254,.6);
     color:white;
     flex-shrink:0;
   }
   .optText{
     font-size:13px;
     color:var(--text);
     line-height:1.3;
   }
   
   /* BOTÓN PEQUEÑO AYUDA */
   
   .tiny{
     margin-top:10px;
     width:100%;
     padding:8px 10px;
     border-radius:12px;
     border:1px solid rgba(148,163,184,.35);
     background:rgba(15,23,42,.9);
     color:var(--muted);
     font-weight:700;
     font-size:11px;
     cursor:pointer;
   }
   
   /* BLOQUE EXPLICACIÓN RÁPIDA (MODO REPASO) */
   
   .explain{
     margin-top:8px;
     padding:9px 10px;
     border-radius:12px;
     border:1px solid rgba(34,197,94,.45);
     background:rgba(22,163,74,.18);
     color:#bbf7d0;
     font-size:12px;
   }
   
   /* RESULTADOS */
   
   .resultScore{
     font-size:40px;
     font-weight:1000;
     letter-spacing:-0.04em;
     text-align:center;
   }
   .resultMeta{
     margin-top:4px;
     font-size:13px;
     color:var(--muted);
     text-align:center;
   }
   .resultHint{
     margin-top:8px;
     font-size:13px;
     text-align:center;
     color:var(--muted);
   }
   
   /* SCROLL SUAVE EN LISTAS LARGAS (POR SI LUEGO AÑADES REVISIÓN DETALLADA) */
   
   .reviewList{
     max-height:55vh;
     overflow-y:auto;
     padding-right:4px;
   }
   .reviewList::-webkit-scrollbar{
     width:4px;
   }
   .reviewList::-webkit-scrollbar-thumb{
     background:rgba(148,163,184,.7);
     border-radius:999px;
   }
   `;
   
