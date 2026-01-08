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
        },
        {
          q: "El sistema selectivo de acceso a la función pública consistente en la celebración de pruebas o exámenes se denomina:",
          options: ["Concurso", "Evaluación funcionarial", "Oposición", "Conculcación"],
          correct: 2,
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
        },
        {
          q: "Engloba los cinco documentos que comunican en toda la UE habilidades, titulaciones y certificaciones adquiridas:",
          options: ["Tu Europa", "Europass", "DocUE", "EURES CV"],
          correct: 1,
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
        },
        {
          q: "La disposición mental y emocional hacia una situación, persona, objeto o tarea se denomina:",
          options: ["Aptitud", "Competencia", "Actitud", "Proactividad"],
          correct: 2,
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
        },
        {
          q: "Agentes que al entrar en contacto con tejidos vivos los pueden destruir se denominan:",
          options: ["Irritantes", "Corrosivos", "Inflamables", "Tóxicos"],
          correct: 1,
        },
        {
          q: "Agentes que por inhalación, ingestión o penetración cutánea pueden provocar efectos agudos o crónicos e incluso la muerte:",
          options: ["Irritantes", "Corrosivos", "Inflamables", "Tóxicos"],
          correct: 3,
        },
        {
          q: "Determina si el tono es agudo o grave y se mide en hercios (Hz):",
          options: ["Frecuencia", "Duración", "Intensidad", "Volumen"],
          correct: 0,
        },
        {
          q: "El factor que permite que el ruido pueda ser continuo, discontinuo o de impacto se denomina:",
          options: ["Frecuencia", "Duración", "Intensidad", "Volumen"],
          correct: 1,
        },
        {
          q: "El instrumento de medida utilizado para medir la cantidad de luz es el:",
          options: ["Lumen", "Lux", "Luxómetro", "Lumenógeno"],
          correct: 2,
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
        },
        {
          q: "Se constituirá un Comité de Seguridad y Salud en empresas o centros con:",
          options: ["10 o más", "25 o más", "50 o más", "100 o más"],
          correct: 2,
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
        },
        {
          q: "Dentro del derecho comunitario diferenciamos entre:",
          options: ["OIT y ET", "Derecho interno y externo", "Derecho originario y derivado", "Directivas, recomendaciones, sanciones y euroórdenes"],
          correct: 2,
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
        },
        {
          q: "En relación laboral empleador-empleado, las normas abogan por:",
          options: ["Proteger por igual", "Proteger más al empleado", "Proteger más al empleador", "Solo recomendaciones"],
          correct: 1,
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
        },
        {
          q: "Cese de prestación de trabajo para reivindicar conflictos o mejoras se conoce como:",
          options: ["Huelga", "Cierre patronal", "Conflicto colectivo", "Festivos"],
          correct: 0,
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
        },
        {
          q: "¿Cuál NO es una cláusula que se puede incluir en el contrato?",
          options: ["Confidencialidad", "No competencia", "Excedencia", "Permanencia"],
          correct: 2,
        },
        {
          q: "Cambio de residencia definitivo o desplazamientos >12 meses en 3 años se denomina:",
          options: ["Movilidad sustancial", "Movilización", "Desplazamiento", "Traslado"],
          correct: 3,
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
        },
        {
          q: "Tiempo mínimo entre el final de una jornada y el comienzo de otra (salvo excepciones):",
          options: ["8 horas", "12 horas", "6 horas", "No existe mínimo"],
          correct: 1,
        },
        {
          q: "¿Qué días deben respetarse por fiesta nacional?",
          options: ["1 de enero", "1 de mayo", "12 de octubre", "Todos los anteriores"],
          correct: 3,
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
        },
        {
          q: "¿Cuál NO es un complemento salarial?",
          options: ["Nocturnidad", "Toxicidad/peligrosidad", "Quebranto de moneda", "Participación en resultados"],
          correct: 2,
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
        },
        {
          q: "Señala cuál NO es una habilidad blanda:",
          options: ["Asertividad", "Empatía", "Liderazgo", "Análisis de datos"],
          correct: 3,
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
        },
        {
          q: "¿Cuál NO es característica de empleados resilientes?",
          options: ["Pasividad", "Optimismo realista", "Control emocional", "Autoconciencia"],
          correct: 0,
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
        },
      ],
    },

    {
      id: "fol-final",
      title: "⭐ FOL · Prueba final · 40 preguntas",
      isFinal: true,
      questions: [
        // Aquí puedes añadir tus 40 preguntas cuando quieras
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
            options: [
              "Sanidad",
              "Sistema sanitario",
              "Sistema asistencial",
              "Todas son correctas",
            ],
            correct: 1,
          },
          {
            q: "¿Cuál de los siguientes factores no afecta a la oferta de los sistemas sanitarios?",
            options: [
              "Políticas estatales",
              "Costes de producción",
              "Técnicas de producción",
              "Todas las mencionadas afectan",
            ],
            correct: 3,
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
          },
          {
            q: "¿Qué nivel de gestión sanitaria llevan a cabo los profesionales sanitarios directamente al tratar con los pacientes?",
            options: [
              "Macrogestión",
              "Mesogestión",
              "Microgestión",
              "Gestión integrada",
            ],
            correct: 2,
          },
          {
            q: "¿Qué nombre recibe la ciencia social encargada de estudiar las relaciones entre individuos y las reglas que rigen la producción, la distribución y el consumo de bienes y servicios, todo ello aplicado al ámbito de la sanidad?",
            options: [
              "Economía sanitaria",
              "Financiación sanitaria",
              "Monetización sanitaria",
              "Sanieconomía",
            ],
            correct: 0,
          },
          {
            q: "¿Qué personal de las unidades de oncología radioterápica, medicina nuclear y radiodiagnóstico se encargan del mantenimiento, calibración y comprobación del buen funcionamiento de los equipos que se utilizan?",
            options: [
              "Personal accesorio",
              "Radiofísicos",
              "Técnicos especializados",
              "Médicos responsables",
            ],
            correct: 1,
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
          },
          {
            q: "¿Qué tipo de almacenes proveen a varios almacenes y poseen grandes cantidades de existencias?",
            options: [
              "Almacenes pequeños",
              "Almacenes generales",
              "Almacenes centrales",
              "Almacenes de reserva",
            ],
            correct: 2,
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
          },
          {
            q: "La procedencia de los recursos de un sistema sanitario puede ser...",
            options: [
              "Pública",
              "Privada",
              "Mixta",
              "Todas son correctas",
            ],
            correct: 3,
          },
        ],
      },
  
      {
        id: "ap-u2",
        title: "AP · U2 · Documentación, citación y LOPD",
        questions: [
          {
            q: "¿Cómo conocemos a los primeros pasos que se toman cuando un paciente acude a nuestro centro para recibir un servicio sanitario?",
            options: [
              "Recibimiento",
              "Protocolo de acogida",
              "Protocolo de recepción",
              "Todas son correctas.",
            ],
            correct: 1,
          },
          {
            q: "¿Cuál de las siguientes no es una característica que deba cumplir el consentimiento informado?",
            options: [
              "Voluntariedad",
              "Comprensibilidad",
              "Decisión",
              "Coste del tratamiento",
            ],
            correct: 3,
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
          },
          {
            q: "¿Cuál de los siguientes datos no se considera especialmente protegido por la LOPD?",
            options: [
              "Religión",
              "Origen racial",
              "Enfermedades padecidas",
              "Antecedentes penales",
            ],
            correct: 2,
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
          },
          {
            q: "¿En qué documento se resumen las vías de entrada de los haces aplicados en la radioterapia (para radioterapia externa) o la posición de las fuentes (cuando se trata de braquiterapia)?",
            options: [
              "Dosimetría",
              "Radioinforme",
              "Hoja de tratamiento",
              "Hoja de citación",
            ],
            correct: 0,
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
          },
          {
            q: "¿Qué tipo de datos no están relacionados con la salud de las personas?",
            options: [
              "Datos administrativos",
              "Datos de gestión",
              "Datos clínicos",
              "Todas son incorrectas.",
            ],
            correct: 1,
          },
          {
            q: "En qué documento se recoge la secuencia estructurada de información que han generado los médicos y el resto de profesionales a lo largo del proceso de atención al paciente",
            options: [
              "Historia médica",
              "Historia patológica",
              "Historia clínica",
              "Historia sanitaria",
            ],
            correct: 2,
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
          },
        ],
      },
  
      {
        id: "ap-u3",
        title: "AP · U3 · Comunicación y relación con el paciente",
        questions: [
          {
            q: "¿Cómo se denomina la capacidad de expresar de manera clara, directa y honesta aquello que se necesita compartir, sin que ello produzca una mala reacción en el interlocutor?",
            options: [
              "Empatía",
              "Asertividad",
              "Quinesia",
              "Ninguna de las anteriores es correcta.",
            ],
            correct: 1,
          },
          {
            q: "¿Cuál de las siguientes es una medida recomendable cuando se trata con personas agresivas?",
            options: [
              "Responder con agresividad",
              "Tener una actitud asertiva",
              "Ignorar a la persona",
              "Ninguna es correcta.",
            ],
            correct: 1,
          },
          {
            q: "¿Cuál de los siguientes es un mecanismo psicológico de defensa ante la enfermedad?",
            options: [
              "Disociación",
              "Proyección",
              "Aislamiento",
              "Todas son correctas",
            ],
            correct: 3,
          },
          {
            q: "¿Cuál de los siguientes no es un tipo de comunicación verbal?",
            options: [
              "Oral",
              "Escrita",
              "Signada",
              "Todas las indicadas son comunicaciones verbales",
            ],
            correct: 3,
          },
          {
            q: "¿Cuál de los siguientes no forma parte de la comunicación no verbal?",
            options: [
              "Paralenguaje",
              "Prosémica",
              "Quinesia",
              "Todas las anteriores son no verbales",
            ],
            correct: 3,
          },
          {
            q: "¿En qué alteración de la personalidad se caracteriza por una profunda tristeza o apatía?",
            options: [
              "Narcisista",
              "Antisocial",
              "Depresiva",
              "Esquizoide",
            ],
            correct: 2,
          },
          {
            q: "¿Qué elemento de la comunicación constituye el sistema de signos o sonidos que utilizamos para convertir la idea del mensaje en algo que el receptor pueda interpretar?",
            options: [
              "Canal",
              "Emisor",
              "Código",
              "Receptor",
            ],
            correct: 2,
          },
          {
            q: "¿Qué nombre recibe la capacidad de entender la posición de las otras personas que intervienen en la comunicación?",
            options: [
              "Asertividad",
              "Empatía",
              "Retroalimentación",
              "Paralenguaje",
            ],
            correct: 1,
          },
          {
            q: "La situación (o circunstancias) en las que se produce la comunicación y que puede afectar a cómo se interpreta el mensaje se conoce como...",
            options: [
              "Contexto",
              "Casuística",
              "Ambiente",
              "Todas son incorrectas.",
            ],
            correct: 0,
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
          },
        ],
      },
  
      {
        id: "ap-u4",
        title: "AP · U4 · Protocolos, emergencias y pacientes especiales",
        questions: [
          {
            q: "¿Cómo conocemos al procedimiento o conjunto de procedimientos cuya finalidad consiste en estandarizar un comportamiento o actividad ante una situación específica con el fin de obtener resultados similares independientemente de la persona que lo lleve a cabo?",
            options: [
              "Procedimiento",
              "Protocolo",
              "Plan",
              "Todas son correctas.",
            ],
            correct: 1,
          },
          {
            q: "¿Cómo denominamos a la recreación fingida de una emergencia como si fuera real que sirven para entrenar, ensayar y aplicar los protocolos de emergencia y formar al personal del centro?",
            options: [
              "Simulación",
              "Escenificación",
              "Simulacro",
              "Recreación",
            ],
            correct: 2,
          },
          {
            q: "¿Cómo se conocen aquellas acciones que se realizarán ante distintas situaciones de emergencia y que se encuentran descritas en los planes de emergencia?",
            options: [
              "Acciones de contingencia",
              "Actividades correctoras",
              "Actuaciones específicas",
              "Protocolos de emergencia",
            ],
            correct: 2,
          },
          {
            q: "¿Cómo suelen ser los sistemas de paro de emergencia?",
            options: [
              "Palancas de gran tamaño",
              "Botones grandes y rojos",
              "Manivelas amarillas",
              "Ninguna es correcta.",
            ],
            correct: 1,
          },
          {
            q: "¿Cuál de las siguientes es una emergencia de tipo general?",
            options: [
              "Paradas cardiorrespiratorias",
              "Irradiación",
              "Contaminaciones",
              "Todas son correctas.",
            ],
            correct: 0,
          },
          {
            q: "¿Cuál de las siguientes es una escala para evaluar el grado de consciencia de los pacientes?",
            options: [
              "Glasgow",
              "Barthel",
              "Ranklin",
              "Todas son correctas",
            ],
            correct: 3,
          },
          {
            q: "¿Qué nombre reciben los pacientes con lesiones de origen traumático que afectan a dos o más órganos o sistemas, de las que al menos uno presenta riesgo vital?",
            options: [
              "Pediátricos",
              "Especiales",
              "No colaboradores",
              "Politraumatizados",
            ],
            correct: 3,
          },
          {
            q: "¿Qué tipo de emergencias pueden ocurrir en cualquier parte del hospital sin necesidad de estar relacionadas con un tratamiento o actividad diagnóstica?",
            options: [
              "De tipo general",
  
  
              "Inespecíficas",
              "Transversales",
              "Todas son correctas",
            ],
            correct: 0,
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
          },
        ],
      },
  
      // A partir de aquí son las U5–U8, que coinciden con lo que ya tenías
  
      {
        id: "ap-u5",
        title: "AP · U5 · Atención al paciente y necesidades humanas",
        questions: [
          {
            q: "¿Cómo denominamos a las necesidades más básicas del ser humano, imprescindibles para el mantenimiento de la vida?",
            options: ["Vitales", "Sociales", "Fisiológicas", "Psicológicas"],
            correct: 2,
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
          },
          {
            q: "¿Cuál es el tipo de necesidad que está situada en la cima de la pirámide de Maslow?",
            options: [
              "Seguridad",
              "Necesidades fisiológicas",
              "Autorrealización",
              "Necesidades sociales",
            ],
            correct: 2,
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
          },
          {
            q: "¿Qué nombre recibe el estudio del cuerpo humano en relación con el movimiento y el equilibrio?",
            options: ["Ergonomía", "Mecánica corporal", "Dinámica corporal", "Biofísica"],
            correct: 1,
          },
          {
            q: "¿Qué término incluye todas aquellas medidas que tienen como finalidad prevenir y evitar las infecciones nosocomiales propias de los centros sanitarios?",
            options: ["Prevención", "Higiene", "Mantenimiento", "Planificación"],
            correct: 1,
          },
          {
            q: "¿Qué tipo de necesidad es la pertenencia a un grupo (familiar, amistoso o laboral)?",
            options: ["Fisiológica", "De seguridad", "Social", "De autoestima"],
            correct: 2,
          },
          {
            q: "El grado de aceptación y desarrollo de las capacidades físicas, mentales, emocionales y sociales que nos permiten ser independientes se conoce como…",
            options: ["Autoestima", "Autoconservación", "Autorrealización", "Automatización"],
            correct: 2,
          },
          {
            q: "La alteración del pulso por encima de 80 ppm se conoce como…",
            options: ["Taquicardia", "Bradicardia", "Notocardia", "Asincrocardia"],
            correct: 0,
          },
          {
            q: "Una persona con temperatura corporal entre 37,1 ºC y 37,5 ºC, está en estado de…",
            options: ["Fiebre", "Febrícula", "Pirexia", "Hipotermia"],
            correct: 1,
          },
        ],
      },
  
      {
        id: "ap-u6",
        title: "AP · U6 · Material sanitario y equipos",
        questions: [
          {
            q: "¿Cómo conocemos a la intervención quirúrgica en la que se realiza una abertura u orificio artificial (estoma) en el tejido para poner una víscera en contacto con el exterior?",
            options: ["Estomía", "Orificimía", "Ostomía", "Celotomía"],
            correct: 2,
          },
          {
            q: "¿Cómo se denomina la extracción de líquidos o elementos del interior de una cavidad (rectal, genitourinaria o torácica), de forma temporal o permanente?",
            options: ["Hidroterapia", "Vaciado cavitativo", "Drenaje", "Todas son incorrectas."],
            correct: 2,
          },
          {
            q: "¿Cuál de los siguientes no es un tipo de catéter intravenoso?",
            options: ["Palomita", "Abbocath", "Venocath", "Todas son correctas."],
            correct: 3,
          },
          {
            q: "¿Cuál de los siguientes no se incluye dentro de los equipos básicos de cualquier unidad?",
            options: ["De oxigenoterapia", "Aspiradores", "Sondas", "Tubos de rayos X"],
            correct: 3,
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
          },
          {
            q: "¿Qué técnica sustituye de forma temporal la función respiratoria?",
            options: ["Oxigenoterapia", "Ventiloterapia", "Higroterapia", "Neumoterapia"],
            correct: 1,
          },
          {
            q: "¿Qué tipo de materiales se retiran o se eliminan tras su uso?",
            options: ["Fungibles", "No fungibles", "Reutilizables", "Ninguna es correcta"],
            correct: 0,
          },
          {
            q: "¿Qué tipo de sonda se utiliza para realizar lavados gástricos?",
            options: [
              "Sonda de Salem",
              "Sonda nasoentérica",
              "Sonda de Levin",
              "Sonda de gastrostomía",
            ],
            correct: 2,
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
          },
        ],
      },
  
      {
        id: "ap-u7",
        title: "AP · U7 · Farmacología básica y radiofármacos",
        questions: [
          {
            q: "¿Cómo llamamos a las sustancias naturales o de síntesis, orgánicas o inorgánicas, que se usan en medicina para el diagnóstico, prevención o curación de ciertas patologías o sintomatologías?",
            options: ["Fármacos", "Drogas", "Potenciadores", "Pociones"],
            correct: 0,
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
          },
          {
            q: "¿Cuál es la primera etapa de la administración de fármacos?",
            options: ["Absorción", "Liberación", "Distribución", "Metabolismo"],
            correct: 1,
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
          },
          {
            q: "¿Qué tipo de contrastes son el sulfato de bario, derivados del yodo y compuestos de gadolinio?",
            options: ["Positivos", "Neutros", "Negativos", "Todas son incorrectas."],
            correct: 0,
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
          },
          {
            q: "Las sustancias radiactivas que se utilizan en medicina para uso diagnóstico y terapéutico se conocen como...",
            options: ["Fármacos atómicos", "Radiofármacos", "Telefármacos", "Todas son correctas"],
            correct: 1,
          },
        ],
      },
  
      {
        id: "ap-u8",
        title: "AP · U8 · Infecciones, aislamiento e higiene",
        questions: [
          {
            q: "¿Cómo denominamos al crecimiento y desarrollo de microorganismos externos, en el cuerpo de un ser vivo?",
            options: ["Enfermedad", "Simbiosis", "Infección", "Afección"],
            correct: 2,
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
          },
          {
            q: "¿En qué grupo de residuos se incluyen los desechos de usuarios con enfermedades infecciosas o en aislamiento?",
            options: ["I", "II", "III", "IV"],
            correct: 2,
          },
          {
            q: "¿En qué tipo de vectores se requiere un tiempo en el cual el agente infeccioso es incubado y pasa a ser un vector infeccioso?",
            options: ["Activos", "Pasivos", "Directos", "Indirectos"],
            correct: 0,
          },
          {
            q: "¿Qué nombre genérico reciben los seres vivos en los que se producen las infecciones?",
            options: ["Vectores", "Agentes infectados", "Hospedadores", "Enfermos"],
            correct: 2,
          },
          {
            q: "¿Qué término general utilizamos para referirnos a los agentes químicos capaces de eliminar algunos agentes infecciosos sin dañar tejidos?",
            options: [
              "Antiinflamatorios",
              "Antisépticos",
              "Anestésicos",
              "Antihistamínicos",
            ],
            correct: 1,
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
          },
          {
            q: "¿Qué tipo de fuentes de infección consisten en agentes infecciosos que ya se encuentran en el organismo, pero que al cambiar las condiciones ambientales pasan a ser infecciosos?",
            options: ["Exógenas", "Exoendógenas", "Endógenas", "Xenógenas"],
            correct: 2,
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
          },
        ],
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
        },
        {
          q: "¿Qué plano anatómico divide el cuerpo en mitades derecha e izquierda?",
          options: ["Plano coronal", "Plano sagital", "Plano transversal", "Plano axial"],
          correct: 1,
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
        },
        {
          q: "¿En qué posición se encuentra el paciente (imagen)?",
          options: ["Sims", "Trendelemburg invertida", "Trendelemburg", "Sims invertida"],
          correct: 1,
        },
        {
          q: "Parte superior del tronco entre base del cuello y diafragma:",
          options: ["Tórax", "Abdomen", "Pelvis", "Dorso"],
          correct: 0,
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
        },
        {
          q: "En 9 regiones abdominales, la vejiga se localiza principalmente en:",
          options: ["Hipocondrio derecho", "Epigastrio", "Hipogastrio", "Fosa ilíaca izquierda"],
          correct: 2,
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
        },
        {
          q: "Técnica dependiente del operador y en tiempo real:",
          options: ["Resonancia magnética", "Ecografía", "Tomografía computarizada", "Radiología convencional"],
          correct: 1,
        },
        {
          q: "Técnica con exploración larga y posible claustrofobia:",
          options: ["Resonancia magnética", "Ecografía", "Tomografía computarizada", "Radiología convencional"],
          correct: 0,
        },
        {
          q: "La mayoría de estudios de TC se obtienen en plano:",
          options: ["Sagital", "Coronal", "Axial", "Frontal"],
          correct: 2,
        },
        {
          q: "Posición más habitual en RM:",
          options: ["Bipedestación", "Sedestación", "Decúbito supino", "Decúbito prono"],
          correct: 2,
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
        },
        {
          q: "Contrastes usados en tubo digestivo con rayos X:",
          options: ["Gadolinio", "Bario", "Yodo", "Berilio"],
          correct: 1,
        },
        {
          q: "Contrastes usados en radiología convencional del aparato excretor:",
          options: ["Bario", "Yodo", "Gadolinio", "Berilio"],
          correct: 1,
        },
        {
          q: "Radiología simple es útil para estudiar:",
          options: ["Músculos", "Tendones", "Huesos", "Ligamentos"],
          correct: 2,
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
        },
        {
          q: "¿Qué estructura ósea es una elevación articular?",
          options: ["Trocánter", "Epicóndilo", "Cresta ilíaca", "Espina"],
          correct: 1,
        },
        {
          q: "Estructura ósea con forma de polea:",
          options: ["Trocánter", "Apófisis", "Tróclea", "Tuberosidad"],
          correct: 2,
        },
        {
          q: "Hueso en zona posterior del cráneo:",
          options: ["Temporal", "Occipital", "Parietal", "Frontal"],
          correct: 1,
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
        },
        {
          q: "No es articulación de cintura pélvica:",
          options: ["Coxofemoral", "Sacroilíaca", "Sínfisis púbica", "Femororrotuliana"],
          correct: 3,
        },
        {
          q: "Traumatismo óseo complejo 3D con interés óseo:",
          options: ["Radiología simple", "TC", "RM", "Ecografía"],
          correct: 1,
        },
        {
          q: "Músculo involuntario visceral:",
          options: ["Esquelético", "Cardíaco", "Liso", "Rugoso"],
          correct: 2,
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
        },
        {
          q: "Interviene en huida/lucha:",
          options: ["Somático", "Simpático", "Parasimpático", "Entérico"],
          correct: 1,
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
        },
        {
          q: "Compartimento lleno de LCR:",
          options: ["Epidural", "Subdural", "Subaracnoideo", "Subpiamadral"],
          correct: 2,
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
        },
        {
          q: "Prueba para vasos cerebrales en isquemia:",
          options: ["RM sin contraste", "Rx cráneo", "Angio-TC con contraste", "Eco transabdominal"],
          correct: 2,
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
        },
        {
          q: "Lesión hiperintensa en RM T2:",
          options: ["Hiperintenso en T1", "Hiperintenso en T2", "Hiperdenso en TC", "Todas"],
          correct: 1,
        },
        {
          q: "Diagnóstico por imagen del canal lagrimal con contraste y Rx:",
          options: ["Dacriocistografía", "Sialografía", "Colangiografía", "Cistografía"],
          correct: 0,
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
        },
        {
          q: "Cavidad que recibe sangre rica en CO2 de la vena cava:",
          options: ["Aurícula izquierda", "Ventrículo izquierdo", "Aurícula derecha", "Ventrículo derecho"],
          correct: 2,
        },
        {
          q: "Falta de riego por obstrucción parcial coronaria:",
          options: ["IAM", "Angina de pecho", "Pericarditis", "Miocardiopatía dilatada"],
          correct: 1,
        },
        {
          q: "Alteración del ritmo cardíaco:",
          options: ["Arritmia", "Isquemia", "Hipertrofia ventricular", "Insuficiencia cardíaca"],
          correct: 0,
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
        },
        {
          q: "Procedimientos para visualizar vasos sanguíneos:",
          options: ["Angiografías", "Ecocardiografías", "Electrocardiogramas", "Colangiografías"],
          correct: 0,
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
        },
        {
          q: "Volumen de aire normal en una inspiración/espiración:",
          options: ["Volumen corriente", "VRI", "Capacidad vital", "Volumen residual"],
          correct: 0,
        },
        {
          q: "Disminución del tamaño de bronquios por alergias:",
          options: ["Asma", "EPOC", "Neumonía", "Rinitis"],
          correct: 0,
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
        },
        {
          q: "Jugos biliares producidos en:",
          options: ["Hígado", "Vesícula biliar", "Páncreas", "Duodeno"],
          correct: 0,
        },
        {
          q: "En TC, zona azul corresponde a (imagen):",
          options: ["Hígado", "Estómago", "Vejiga", "Páncreas"],
          correct: 0,
        },
        {
          q: "Patógeno frecuente en gastritis y úlceras:",
          options: ["Klebsiella", "Helicobacter pylori", "E. coli", "Staphylococcus"],
          correct: 1,
        },
        {
          q: "En diagnóstico digestivo es frecuente usar:",
          options: ["Estudios baritados", "Sulfatados", "Nitrogenados", "Hidrogenados"],
          correct: 0,
        },
        {
          q: "Unidad funcional del riñón:",
          options: ["Cápsula de Bowman", "Nefrona", "Glomérulo", "Asa de Henle"],
          correct: 1,
        },
        {
          q: "Sangre en la orina:",
          options: ["Oliguria", "Glucosuria", "Hematuria", "Nicturia"],
          correct: 2,
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
        },
        {
          q: "Prueba de elección en tiroides y paratiroides:",
          options: ["Rx simple", "Ecografía", "RM", "TC"],
          correct: 1,
        },
        {
          q: "Hiperfunción ocasiona acromegalia o gigantismo:",
          options: ["Hormona de crecimiento", "Aldosterona", "Prolactina", "Vasopresina"],
          correct: 0,
        },
        {
          q: "Técnica más usada para estudio mamario:",
          options: ["Ecografía", "RM", "Mamografía", "TC"],
          correct: 2,
        },
        {
          q: "Por ubicación profunda, el páncreas NO se visualiza bien con:",
          options: ["TC", "RM", "Ecografía abdominal", "Endoscopia"],
          correct: 2,
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
        },
        {
          q: "Aldosterona, cortisol y adrenalina se producen en:",
          options: ["Testículos/ovarios", "Tiroides", "Suprarrenales", "Paratiroides"],
          correct: 2,
        },
        {
          q: "BIRADS: hallazgo altamente sospechoso de malignidad:",
          options: ["BIRADS-1", "BIRADS-3", "BIRADS-5", "BIRADS-7"],
          correct: 2,
        },
        {
          q: "Técnica apenas empleada en aparato genital masculino:",
          options: ["Ecografía", "Tomografía computarizada", "RM", "No se estudia con imagen"],
          correct: 1,
        },
        {
          q: "Radiología especial con contraste para útero y trompas:",
          options: ["Histerosalpingografía", "Eco transvaginal", "TC", "RM"],
          correct: 0,
        },
      ],
    },

    /* ============ FUNDAMENTOS FÍSICOS Y EQUIPOS ============ */

    {
      id: "ff-u1",
      title: "FF · U1 · Radiaciones y física básica",
      questions: [
        {
          q: "¿Cuál de las siguientes no es un tipo de radiación ionizante?",
          options: ["Rayos gamma", "Rayos X", "Ultravioleta", "Infrarroja"],
          correct: 3,
        },
        {
          q: "¿Qué comportamiento de las ondas consiste en la superposición de dos ondas?",
          options: ["Reflexión", "Refracción", "Interferencia", "Efecto Doppler"],
          correct: 2,
        },
        {
          q: "¿Qué dispositivo se utiliza para generar campos magnéticos?",
          options: [
            "Tubo de rayos catódicos",
            "Solenoides",
            "Filamentos de neodimio",
            "Ninguna",
          ],
          correct: 1,
        },
        {
          q: "Número de veces que se repite una onda en una unidad de tiempo:",
          options: ["Longitud de onda", "Periodo", "Intensidad", "Frecuencia"],
          correct: 3,
        },
        {
          q: "Partícula subatómica con carga negativa:",
          options: ["Protones", "Neutrones", "Electrones", "Bosones"],
          correct: 2,
        },
        {
          q: "Rama de la física que estudia las radiaciones y su efecto en la materia:",
          options: ["Física cuántica", "Física clínica", "Física radiológica", "Fisicoquímica"],
          correct: 2,
        },
        {
          q: "Tipo de energía asociada al movimiento:",
          options: ["Potencial", "Cinética", "Calorífica", "Todas"],
          correct: 1,
        },
        {
          q: "Radiaciones que producen cambios químicos en la materia:",
          options: ["No ionizantes", "Ionizantes", "Alterantes", "Modulantes"],
          correct: 1,
        },
        {
          q: "Terapia que implanta material radioactivo en el paciente:",
          options: ["Teleterapia", "Irradiación terapéutica", "Braquiterapia", "Radiología convencional"],
          correct: 2,
        },
        {
          q: "Material que no puede magnetizarse artificialmente:",
          options: ["Paramagnético", "Diamagnético", "Ferromagnético", "Ninguno"],
          correct: 1,
        },
      ],
    },

    {
      id: "ff-u2",
      title: "FF · U2 · Interacción radiación-materia",
      questions: [
        {
          q: "¿Qué factor NO afecta a la absorción de la radiación?",
          options: ["Número atómico", "Espesor", "Energía de los rayos X", "Todos afectan"],
          correct: 3,
        },
        {
          q: "Los materiales más densos se observan en radiografía como:",
          options: ["Más claros (blancos)", "Muy oscuros", "Azules", "Todas"],
          correct: 0,
        },
        {
          q: "Fragmentación del núcleo atómico:",
          options: [
            "Efecto fotoeléctrico",
            "Efecto Compton",
            "Dispersión clásica",
            "Desintegración fotónica",
          ],
          correct: 3,
        },
        {
          q: "Rango de longitud de onda de los rayos X:",
          options: ["0,01–10 nm", "0,1–100 nm", "1 nm–1 mm", "Ninguna"],
          correct: 0,
        },
        {
          q: "Radiación que supone el 70–85% de la producción:",
          options: [
            "Característica",
            "De frenado",
            "Cuántica",
            "No ionizante",
          ],
          correct: 1,
        },
        {
          q: "Tiempo de preparación calentando el filamento:",
          options: ["Primer tiempo", "Segundo tiempo", "Tercer tiempo", "Fase previa"],
          correct: 0,
        },
        {
          q: "Alteración de trayectoria de la radiación:",
          options: ["Transmisión", "Refracción", "Absorción", "Dispersión"],
          correct: 3,
        },
        {
          q: "Radiación que atraviesa la materia sin cambiar trayectoria:",
          options: ["Absorción", "Dispersión", "Transmisión", "Ninguna"],
          correct: 2,
        },
        {
          q: "La radiación infrarroja se produce al interactuar con:",
          options: [
            "Capas externas de electrones",
            "Capas internas",
            "Núcleo",
            "Ninguna",
          ],
          correct: 0,
        },
        {
          q: "Los rayos X duros tienen longitud de onda:",
          options: ["Más larga", "Más corta", "Más potente", "Menos potente"],
          correct: 1,
        },
      ],
    },

    {
      id: "ff-u3",
      title: "FF · U3 · Imagen radiológica",
      questions: [
        {
          q: "¿Cuál NO es una ventaja de los medios digitales?",
          options: [
            "Menor coste",
            "Simplificación técnica",
            "Manipulación de imágenes",
            "Todas son ventajas",
          ],
          correct: 3,
        },
        {
          q: "Tecnología que NO pertenece a radiografía digital directa:",
          options: [
            "Detectores conversión directa",
            "CCD",
            "Detectores recuento de fotones",
            "Películas radiográficas",
          ],
          correct: 3,
        },
        {
          q: "¿Qué NO es un factor geométrico?",
          options: ["Magnificación", "Distorsión", "Desenfoque", "Artefactos"],
          correct: 3,
        },
        {
          q: "Última fase del revelado analógico:",
          options: ["Exposición", "Fijación", "Revelado", "Adhesión"],
          correct: 1,
        },
        {
          q: "Principio de la película radiográfica:",
          options: [
            "Dispersión diferencial",
            "Absorción diferencial",
            "Refracción diferencial",
            "Reflexión diferencial",
          ],
          correct: 1,
        },
        {
          q: "Imagen con valores continuos de gris:",
          options: ["Analógica", "Digital", "Mixta", "Todas"],
          correct: 0,
        },
        {
          q: "Soporte rígido de película radiográfica:",
          options: ["Estuche", "Funda", "Caja", "Chasis"],
          correct: 3,
        },
        {
          q: "Receptores de radiología computarizada:",
          options: [
            "Película",
            "Láminas fotoestimulables",
            "Detectores fotónicos",
            "Ninguna",
          ],
          correct: 1,
        },
        {
          q: "Granulado fino en imagen:",
          options: ["Ruido", "Artefactos", "Distorsión", "Ninguna"],
          correct: 0,
        },
        {
          q: "Capacidad de distinguir detalles próximos:",
          options: ["Latitud", "Contraste", "Resolución", "Sensibilidad"],
          correct: 2,
        },
      ],
    },

    {
      id: "ff-u4",
      title: "FF · U4 · Tomografía computarizada",
      questions: [
        {
          q: "Método de obtención en TC convencional:",
          options: ["Helicoidal", "Espiral", "Discreto", "Secuencial"],
          correct: 3,
        },
        {
          q: "El factor de desplazamiento indica:",
          options: [
            "Nitidez",
            "Solapamiento de cortes",
            "Velocidad",
            "Profundidad",
          ],
          correct: 1,
        },
        {
          q: "Construcción apilando cortes axiales:",
          options: [
            "Reconstrucción multiplanar",
            "Animación",
            "Integración",
            "Ninguna",
          ],
          correct: 0,
        },
        {
          q: "Algoritmos que corrigen borrosidad:",
          options: [
            "Filtros de reconstrucción",
            "Fórmulas correctoras",
            "Cálculos",
            "Ninguna",
          ],
          correct: 0,
        },
        {
          q: "Sustancia con UH = 0:",
          options: ["Hueso", "Sangre", "Agua", "Aire"],
          correct: 2,
        },
        {
          q: "En imagen 3D la matriz se divide en:",
          options: ["Cuadrados", "Píxeles", "Cubos", "Vóxeles"],
          correct: 3,
        },
        {
          q: "Uso principal de TC en radioterapia:",
          options: [
            "Localizar lesiones",
            "Aplicar tratamiento",
            "Simular tratamiento",
            "Todas",
          ],
          correct: 2,
        },
        {
          q: "Unidad de medida de atenuación:",
          options: ["Faraday", "Hermann", "Hounsfield", "Todas"],
          correct: 2,
        },
        {
          q: "CTDI significa:",
          options: [
            "Dosis en TC",
            "Producto dosis-longitud",
            "Nivel de ventana",
            "Ninguna",
          ],
          correct: 0,
        },
        {
          q: "Cantidad de radiación que puede producir daño:",
          options: [
            "Dosis efectiva",
            "Dosis letal",
            "Dosis de radiación",
            "Dosis regenerable",
          ],
          correct: 2,
        },
      ],
    },

    {
      id: "ff-u5",
      title: "FF · U5 · Resonancia magnética",
      questions: [
        {
          q: "Cantidad de protones de hidrógeno en un volumen:",
          options: [
            "Número atómico",
            "Número másico",
            "Densidad protónica",
            "Protoabundancia",
          ],
          correct: 2,
        },
        {
          q: "Dispositivo incompatible con RM:",
          options: ["Audífonos", "DIU", "Marcapasos", "Prótesis"],
          correct: 2,
        },
        {
          q: "Gradiente que NO se aplica:",
          options: ["Gz", "Gy", "Gx", "Gw"],
          correct: 3,
        },
        {
          q: "Componentes ortogonales del espín:",
          options: ["Longitudinal", "Transversal", "Ambos", "Ninguno"],
          correct: 2,
        },
        {
          q: "Contraste utilizado en RM:",
          options: ["Bario", "Yodo", "Neodimio", "Gadolinio"],
          correct: 3,
        },
        {
          q: "Fenómeno que emite la señal:",
          options: ["Excitación", "Relajación", "Compresión", "Emisión"],
          correct: 1,
        },
        {
          q: "RM usada en estudios de actividad cerebral:",
          options: ["Intervencionista", "Funcional", "Espectroscopía", "Ninguna"],
          correct: 1,
        },
        {
          q: "Magnetización por diferencia de espines:",
          options: ["Longitudinal", "Transversal", "Oblicua", "Transcendental"],
          correct: 0,
        },
        {
          q: "Efecto proyectil ocurre en objetos:",
          options: ["Paramagnéticos", "Diamagnéticos", "Ferromagnéticos", "Ninguno"],
          correct: 2,
        },
        {
          q: "SAR nivel III se considera:",
          options: ["Normal", "Controlado", "Investigación experimental", "Ninguno"],
          correct: 2,
        },
      ],
    },

    {
      id: "ff-u6",
      title: "FF · U6 · Ecografía",
      questions: [
        {
          q: "Aplicación que NO es del Doppler:",
          options: [
            "Distinguir sistema arterial y venoso",
            "Detectar patologías",
            "Cuantificar velocidad",
            "Todas son correctas",
          ],
          correct: 3,
        },
        {
          q: "Efecto NO terapéutico de ultrasonidos:",
          options: [
            "Aumento temperatura",
            "Efecto mecánico",
            "Reducción del estrés",
            "Todas",
          ],
          correct: 2,
        },
        {
          q: "Modo para estudiar movimiento cardíaco:",
          options: ["A", "B", "M", "Doppler"],
          correct: 2,
        },
        {
          q: "Parámetro definido por el brillo:",
          options: ["Ecogenicidad", "Resolución", "Contraste", "Luminosidad"],
          correct: 0,
        },
        {
          q: "Tiempo entre pulsos del transductor:",
          options: [
            "Frecuencia repetición",
            "Periodo repetición",
            "Tiempo repetición",
            "Ninguna",
          ],
          correct: 1,
        },
        {
          q: "Qué se mide en elastografía:",
          options: [
            "Recuperación",
            "Deformación",
            "Daño crónico",
            "Absorción",
          ],
          correct: 1,
        },
        {
          q: "Técnica basada en ultrasonidos reflejados:",
          options: ["Sonografía", "Dopplergrafía", "Ecografía", "Reflexografía"],
          correct: 2,
        },
        {
          q: "Tipo de transductor:",
          options: ["Termoeléctrico", "Piezoeléctrico", "Mecanoeléctrico", "Isoeléctrico"],
          correct: 1,
        },
        {
          q: "Estructuras poco brillantes:",
          options: ["Anecoicas", "Hipoecoicas", "Hiperecoicas", "Metaecoicas"],
          correct: 1,
        },
        {
          q: "Artefacto de señal brusca de color:",
          options: ["Flash", "Espejo", "Movimiento tisular", "Borde"],
          correct: 0,
        },
      ],
    },

    {
      id: "ff-u7",
      title: "FF · U7 · Sistemas de información sanitaria",
      questions: [
        {
          q: "Registro de eventos de una aplicación:",
          options: ["Mooc", "Log", "Backup", "Timeline"],
          correct: 1,
        },
        {
          q: "NO es ventaja de sistemas informáticos:",
          options: [
            "Facilidad",
            "Modularidad",
            "Interoperabilidad",
            "Todas son ventajas",
          ],
          correct: 3,
        },
        {
          q: "Requisito de un SIS:",
          options: [
            "Acceso público",
            "Diagnóstico automático",
            "Convertir datos en información",
            "Ninguna",
          ],
          correct: 2,
        },
        {
          q: "Formato estándar de imagen médica:",
          options: ["HL7", "IHE", "DICOM", "HTML"],
          correct: 2,
        },
        {
          q: "Reglamento europeo de protección de datos:",
          options: ["LOPD", "SGAE", "RGPD", "RIP"],
          correct: 2,
        },
        {
          q: "Sistema habitual de almacenamiento de imágenes:",
          options: ["HIS", "RIS", "PACS", "Ninguno"],
          correct: 2,
        },
        {
          q: "Conjunto de personas, procesos y equipos de información:",
          options: [
            "Sistema de información sanitaria",
            "Archivo sanitario",
            "Sistema de informes",
            "Sistema de pacientes",
          ],
          correct: 0,
        },
        {
          q: "Red de intercambio mundial:",
          options: ["MAN", "SWAN", "LAN", "WAN"],
          correct: 3,
        },
        {
          q: "Datos con mismos criterios:",
          options: ["Estandarizados", "Validados", "Jerarquizados", "Centralizados"],
          correct: 0,
        },
        {
          q: "Acceso a largo plazo en bases sanitarias:",
          options: ["5–20 segundos", "Varios minutos", "7–15 días", "Ninguna"],
          correct: 1,
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
  const [picked, setPicked] = useState([]); // indices elegidos
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
    setScreen("quiz");
  }

  function answer(i) {
    if (!unit || !question) return;
    const nextPicked = [...picked, i];
    setPicked(nextPicked);

    if (qIndex + 1 < unit.questions.length) {
      setQIndex(qIndex + 1);
      setShowExplain(false);
    } else {
      const ok = unit.questions.reduce(
        (acc, q, idx) => acc + (nextPicked[idx] === q.correct ? 1 : 0),
        0
      );
      const score = percent(ok, unit.questions.length);

      setProgress((p) => {
        const prevBest = p.best[unit.id] ?? 0;
        const best = Math.max(prevBest, score);
        const completed = { ...p.completed, [unit.id]: score >= 60 };
        return { ...p, best: { ...p.best, [unit.id]: best }, completed };
      });

      setScreen("result");
    }
  }

  function computeResult() {
    if (!unit || !unit.questions) return { ok: 0, total: 0, score: 0 };
    const ok = unit.questions.reduce(
      (acc, q, idx) => acc + (picked[idx] === q.correct ? 1 : 0),
      0
    );
    const total = unit.questions.length;
    const score = percent(ok, total);
    return { ok, total, score };
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
              {question.options.map((opt, i) => (
                <button key={i} className="optBtn" onClick={() => answer(i)}>
                  <span className="optKey">{String.fromCharCode(65 + i)}</span>
                  <span className="optText">{opt}</span>
                </button>
              ))}
            </div>

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
   
