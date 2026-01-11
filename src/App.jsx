import React, { useEffect, useMemo, useState } from "react";
// ...
import { registerSession, getSubjectStats } from "./statsStorage";


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
   summary: [
    "1️⃣ Visión general\nEsta unidad explica cómo es el mercado laboral actual, las distintas opciones profesionales (trabajo por cuenta ajena, trabajo por cuenta propia y empleo público) y qué competencias necesitas para mantener tu empleabilidad. También insiste en la importancia de la formación continua y del autoconocimiento para tomar buenas decisiones sobre tu futuro profesional.",

    "2️⃣ Mercado laboral y sectores\nLa inserción laboral es complicada, especialmente para los jóvenes: hay mucho desempleo, precariedad y sobrecualificación. La automatización y la IA sustituyen tareas repetitivas, así que es clave reciclarse y aprender cosas nuevas. Crece el sector cuaternario (conocimiento, I+D, TIC, ciberseguridad, marketing digital, sostenibilidad…), mientras que faltan perfiles en oficios técnicos (soldadores, electricistas, fontaneros, mantenimiento, construcción), que son esenciales y deben revalorizarse.",

    "3️⃣ Vías de inserción laboral\n• Trabajo por cuenta ajena: trabajas para una empresa, con contrato de trabajo y normativa laboral. La empresa organiza la actividad y asume el riesgo; tú aportas tu trabajo a cambio de salario.\n• Trabajo por cuenta propia (autónomos): tú organizas tu actividad y asumes el riesgo económico. Incluye autónomo tradicional, profesional autónomo, autónomo económicamente dependiente (TRADE, ≥75 % facturación de un cliente), autónomo colaborador (familiar que trabaja en el negocio) y autónomo societario (administra una sociedad).\n• Empleo público: trabajas para la Administración (Estado, CCAA, ayuntamientos…). El acceso se hace por procesos selectivos que respetan mérito y capacidad.",

    "4️⃣ Empleo público y grupos de titulación\nEn el empleo público hay varias figuras: funcionario de carrera (plaza fija), personal laboral (fijo o temporal) y funcionarios interinos (cubren necesidades temporales, suelen venir de bolsas). Los sistemas de selección pueden ser oposición, concurso o concurso-oposición. Los grupos se organizan por titulación: Grupo A (títulos universitarios), Grupo B (Técnico Superior de FP), Grupo C1 (Bachillerato o Grado Medio) y Grupo C2 (ESO).",

    "5️⃣ Aprendizaje y empleo en Europa\nLa UE ofrece herramientas para estudiar, trabajar y hacer voluntariado en otros países: el Portal Europeo de la Juventud y «Tu Europa» dan información actualizada. Europass unifica el formato del CV y otros documentos para que se entiendan mejor las cualificaciones en toda Europa. Erasmus+ (2021–2027) financia movilidad y cooperación educativa, y la red EURES facilita la libre circulación de trabajadores (ofertas, condiciones laborales, asesoramiento, etc.).",

    "6️⃣ Competencias clave y Zona de Desarrollo Próximo\nNo basta con un título: las empresas valoran actitudes, aptitudes y competencias personales y sociales.\n• Actitudes: proactividad, compromiso, responsabilidad, flexibilidad, positividad.\n• Aptitudes: conocimientos técnicos, resolución de problemas, aprendizaje continuo, buena comunicación.\n• Competencias personales y sociales: trabajo en equipo, empatía, buena gestión del tiempo y liderazgo.\nLa Zona de Desarrollo Próximo (ZDP) es la distancia entre lo que puedes hacer solo y lo que puedes hacer con ayuda. Trabajar tu ZDP implica: evaluar tus competencias, definir objetivos realistas, buscar recursos/ayuda y practicar en situaciones reales. Esto mejora tu adaptabilidad y tu empleabilidad a largo plazo."
  ],
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
  summary: [
    "1️⃣ Relación entre trabajo y salud\nLa salud es bienestar físico, mental y social (OMS). El trabajo puede mejorar o perjudicar estas áreas. Las condiciones de trabajo incluyen locales, iluminación, ventilación, equipos, sustancias, horarios y organización. La cultura preventiva consiste en identificar riesgos, evaluarlos y tomar medidas para evitarlos o reducirlos.",

    "2️⃣ Daños derivados del trabajo\nSon enfermedades, lesiones o patologías causadas por el trabajo.\n• Enfermedad profesional: deterioro de salud por exposición repetida a agentes del cuadro oficial.\n• Accidente de trabajo: lesión corporal por consecuencia del trabajo. Incluye in itinere, actos de salvamento, tareas ordenadas por el empresario y enfermedades agravadas por accidente.\nNo cuentan: fuerza mayor ajena al trabajo o imprudencia temeraria. Sí cuenta la imprudencia profesional (confianza por experiencia).",

    "3️⃣ Patologías psicosociales\n• Estrés laboral: demandas > capacidad percibida. Síntomas físicos, psicológicos y conductuales.\n• Fatiga laboral: agotamiento físico o mental por carga excesiva.\n• Mobbing: acoso psicológico continuado (humillaciones, aislamiento, burlas). Puede venir de jefes o compañeros.\n• Burnout: agotamiento emocional + despersonalización + baja realización personal.",

    "4️⃣ Riesgos laborales y medidas preventivas\nUn riesgo laboral es la probabilidad de que las condiciones de trabajo causen daño. Es grave e inminente si puede suceder pronto y con gran impacto.",

    "5️⃣ Condiciones de seguridad — Lugares de trabajo\nRiesgos: caídas, golpes, atrapamientos, resbalones.\nMedidas: suelos antideslizantes, buena iluminación, altura mínima, espacio adecuado, pasillos amplios, salidas de emergencia señalizadas.",

    "6️⃣ Factores de riesgo físicos\nIncluyen: ruido, vibraciones, radiaciones, temperatura, humedad e iluminación.\nEfectos: pérdida auditiva, lesiones musculares, quemaduras, cáncer, golpe de calor, fatiga visual.\nMedidas: máquinas menos ruidosas, aislamiento acústico, ventilación, control de clima, EPIs (tapones, gafas), revisiones médicas.",

    "7️⃣ Factores químicos y biológicos\n• Químicos: tóxicos, corrosivos, irritantes, inflamables, explosivos, carcinógenos.\n• Biológicos: bacterias, virus, hongos, parásitos.\nMedidas: sustituir sustancias peligrosas, aislar procesos, ventilación, extracción localizada, EPIs (guantes, mascarillas, gafas), higiene y vacunación cuando corresponda.",

    "8️⃣ Factores psicosociales\nRiesgos derivados de la organización: carga de trabajo, turnos, monotonía, falta de autonomía, mal liderazgo.\nMedidas: rediseño de tareas, buena planificación, mejorar comunicación, rotación de tareas, apoyo psicológico y mediación.",

    "9️⃣ Factores ergonómicos\nMala ergonomía → dolores musculares, lesiones, fatiga.\nMedidas: postura correcta, manipulación segura de cargas, herramientas adecuadas, pausas frecuentes, rotación de tareas, uso de ayudas mecánicas.",

    "🔌 10️⃣ Riesgo eléctrico\nLa corriente puede causar quemaduras, fibrilación, paro respiratorio o muerte.\nMedidas: instalaciones seguras, puesta a tierra, diferenciales, aislamiento de cables, señalización y formación específica.",

    "🧾 11️⃣ Conclusión\nEvaluar riesgos permite identificar peligros y planificar medidas preventivas. Comprender daños físicos, químicos, biológicos, psicosociales, ergonómicos y eléctricos es básico para crear trabajos seguros y una auténtica cultura preventiva."
  ],
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
  summary: [
    "1️⃣ Visión general\nLa unidad explica cómo se organiza la prevención en una empresa: marco legal, derechos y deberes, responsables, gestión, señalización, medidas colectivas/individuales y actuación en emergencias y primeros auxilios.",

    "2️⃣ Marco normativo básico\n• Constitución Española: garantiza seguridad y salud en el trabajo.\n• Ley 31/1995: base de la PRL en España.\n• Reglamento de los Servicios de Prevención: define cómo se organiza la actividad preventiva.\n• Derecho comunitario/UE: directivas y normativa europea que España adapta.",

    "3️⃣ Derechos y deberes\nEmpresa debe: informar, formar, evaluar riesgos, entregar EPIs, plan de prevención, vigilar la salud.\nTrabajador tiene derecho a: información, formación, protección, participación y a parar en caso de riesgo grave.\nResponsabilidad compartida entre trabajador y empresa.",

    "4️⃣ Responsabilidades y sanciones\nEmpresario: responsabilidad administrativa, civil y penal. Sanciones: multas, cierre, incluso prisión.\nTrabajador: responsabilidades disciplinarias, civiles y penales si incumple normas de seguridad.\nLas sanciones las aplican Inspección de Trabajo y tribunales.",

    "5️⃣ Representación en prevención\n• Delegados de prevención: representan a los trabajadores en PRL.\n• Comité de Seguridad y Salud: obligatorio en empresas de +50 trabajadores.\nFunciones: participar en evaluación, planificación, formación y seguimiento de medidas preventivas.",

    "6️⃣ Organización de la prevención\nModalidades:\n• El propio empresario (cuando hay muy pocos trabajadores y bajo riesgo).\n• Trabajador designado.\n• Servicio de prevención propio.\n• Servicio de prevención ajeno.\nLa elección depende del tamaño y riesgos de la empresa.",

    "7️⃣ Sistema de gestión preventiva\nIncluye: política, planificación, evaluación de riesgos, medidas de control, coordinación entre empresas, documentación y auditorías.\nObjetivo: mejora continua y revisión periódica del sistema de prevención.",

    "8️⃣ Principios y técnicas preventivas\nPrincipios básicos: evitar riesgos, evaluar los inevitables, actuar en origen, priorizar protección colectiva > individual, formar e informar.\nTécnicas: seguridad, higiene industrial, ergonomía, psicosociología y medicina del trabajo.",

    "9️⃣ Medidas de protección\n• Colectivas: protegen a todos (barandillas, extractores, ventilación, resguardos, señalización).\n• Individuales (EPIs): casco, guantes, gafas, mascarillas, arnés…\nLos EPIs deben estar homologados y ser usados correctamente.",

    "🔰 10️⃣ Señalización de seguridad\nFunción: advertir, prohibir, obligar, evacuar y ayudar en emergencias.\nTipos:\n• Prohibición: rojo.\n• Obligación: azul.\n• Advertencia: amarillo.\n• Emergencia/salvamento: verde.\n• Extinción de incendios: rojo.\nPueden ser ópticas, acústicas, gestuales o táctiles.",

    "🚨 11️⃣ Plan de autoprotección y emergencias\nRegulado por RD 393/2007.\nIncluye: identificación de riesgos, medidas preventivas, organización de equipos, protocolos de actuación y simulacros periódicos.\nDebe revisarse cada 3 años.",

    "🚑 12️⃣ Respuesta en emergencias\nPasos: activar alarma, coordinar evacuación, primeros auxilios, relación con bomberos y servicios sanitarios.\nEquipos: jefe de emergencia, equipos de intervención, primeros auxilios y evacuación.",

    "➡️ 13️⃣ Plan de evacuación\nFases: detección → alarma → evacuación → punto de reunión.\nObjetivo: evacuar rápido y sin pánico.\nSe mejora mediante simulacros.",

    "❤️ 14️⃣ Técnicas básicas de primeros auxilios\nProtocolo PAS: Proteger → Avisar → Socorrer.\nActuación: comprobar consciencia y respiración, controlar hemorragias, inmovilizar si hay fracturas, usar botiquín correctamente.\nRCP: 30 compresiones + 2 ventilaciones si no respira.",

    "🩺 15️⃣ Técnicas según lesiones\nHeridas leves: limpiar, desinfectar y cubrir.\nHeridas graves: controlar hemorragia, no retirar objetos clavados, avisar a emergencias.\nQuemaduras: enfriar con agua, cubrir, nunca usar hielo ni cremas caseras.\nHemorragias: presión directa, torniquete solo en casos extremos.\nFracturas: inmovilizar y no mover al herido salvo peligro."
  ],
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
  summary: [
    "1️⃣ Visión general\nLa unidad explica el marco legal del trabajo, la relación laboral individual, los derechos y deberes de trabajadores y empresarios, la representación colectiva, los convenios y la resolución de conflictos laborales.",

    "2️⃣ Derecho del trabajo: fuentes y principios\n• Regula las relaciones trabajador–empresa.\n• Nace tras la Revolución Industrial para proteger al trabajador.\n• Principios: protección, irrenunciabilidad, norma más favorable, condición más beneficiosa, norma mínima y primacía de la realidad.\n• Fuentes internas: Constitución, leyes, reglamentos y convenios.\n• Fuentes externas: Derecho europeo, tratados internacionales y OIT.",

    "3️⃣ Relación laboral individual\nCaracterísticas de una relación laboral real:\n• Voluntaria\n• Personal (solo la persona contratada)\n• Dependiente (obedece órdenes)\n• Por cuenta ajena (para una empresa)\n• Remunerada\nNo son relaciones laborales: autónomos, funcionarios, trabajos familiares, voluntarios o actividades sin salario.",

    "4️⃣ Derechos del trabajador\nDerechos básicos:\n• Igualdad y no discriminación\n• Seguridad y salud laboral\n• Información y formación\n• Percibir salario puntual\n• Descansos, vacaciones y registro horario\n• Protección ante despidos injustificados\nDerivan del contrato y de la ley laboral.",

    "5️⃣ Inspección de Trabajo y jurisdicción social\nInspección:\n• Vigila el cumplimiento de las leyes laborales.\n• Puede investigar, entrar en centros de trabajo y pedir documentación.\n• Impone sanciones.\n• Cualquier trabajador puede denunciar irregularidades.\nJurisdicción social:\n• Resuelve conflictos que no se solucionan en la empresa.\n• Interpreta y aplica la ley en juicios laborales.",

    "6️⃣ Representación de los trabajadores\nFormas de participación:\n• Información y consulta\n• Representantes unitarios y sindicales\nGarantías de los representantes:\n• Prioridad en permanencia\n• No despido por ejercer el cargo\n• Libertad de expresión en temas laborales",

    "7️⃣ Representación unitaria\n• Delegados de personal: empresas de 10–49 trabajadores.\n• Comité de empresa: a partir de 50 trabajadores.\nFunciones:\n• Recibir información económica y laboral.\n• Participar en la prevención de riesgos.\n• Negociar y plantear mejoras.",

    "8️⃣ Representación sindical\n• Los sindicatos defienden derechos laborales.\n• Pueden crear secciones sindicales en la empresa.\n• Delegados sindicales según tamaño y representatividad.\n• La representatividad (estatal/autonómica) da derecho a negociar convenios.",

    "9️⃣ Convenio colectivo\n• Acuerdo escrito entre empresa(s) y representantes de trabajadores.\n• Regula salarios, horarios, descansos, permisos, prevención y organización del trabajo.\n• Tiene fuerza de ley dentro de su ámbito y es superior al contrato individual.\n• Puede denunciarse, renovarse o prorrogarse según lo pactado.",

    "📌 Diferencia convenio vs acuerdo individual\n• Convenio: afecta a todos los trabajadores del ámbito → tiene valor normativo.\n• Acuerdo individual: solo afecta a un trabajador concreto → no tiene fuerza de ley y nunca puede empeorar lo que dice el convenio.",

    "🔧 10️⃣ Conflictos laborales\nTipos:\n• Individuales: afectan a un solo trabajador.\n• Colectivos: afectan a un grupo.\nHuelga:\n• Suspensión colectiva del trabajo.\n• Requiere declaración formal, comunicación y comité de huelga.\nCierre patronal:\n• El empresario suspende la actividad.\n• Solo en casos legales: violencia, ocupación del centro o riesgo grave.",

    "🤝 11️⃣ Resolución extrajudicial de conflictos\n• Diálogo social\n• Negociación\n• Mediación\n• Conciliación\n• Arbitraje\nObjetivo: evitar procedimientos judiciales y llegar a acuerdos voluntarios."
  ],
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
  summary: [

"1️⃣ Visión general de la unidad\nLa unidad analiza el contrato de trabajo: qué es, cómo se formaliza, qué requisitos debe cumplir para ser válido, qué modalidades existen y cómo se modifican, suspenden o extinguen. También explica el fraude de ley en la contratación y la importancia del finiquito y derechos del trabajador.",

"2️⃣ Concepto de contrato de trabajo\n• Acuerdo entre trabajador y empresario.\n• El trabajador presta servicios por cuenta ajena, de forma personal y remunerada.\n• El empresario organiza y dirige la actividad.\nPartes del contrato:\n• Empresa (persona física o jurídica)\n• Persona trabajadora (mayor de 16 años y con capacidad legal)",

"3️⃣ Elementos esenciales del contrato\nPara que sea válido debe tener:\n• Consentimiento: ambas partes aceptan libremente.\n• Objeto: la prestación de servicios.\n• Causa: el trabajo a cambio de salario.\nSi falta alguno → contrato nulo o anulable.",

"4️⃣ Forma del contrato\nPuede ser:\n• Verbal (solo indefinido y jornada completa en general)\n• Escrito (obligatorio en temporales, formativos, prácticas, parcial, relevo, ETT, etc.)\nEl contrato debe registrar:\n• Datos de empresa y trabajador\n• Jornada\n• Salario\n• Categoría profesional\n• Duración\n• Periodo de prueba\n• Convenio aplicable\n• Lugar de trabajo",

"5️⃣ Cláusulas adicionales del contrato\nPueden incluir:\n• Confidencialidad\n• No competencia\n• Permanencia en la empresa\n• Movilidad funcional/geográfica\n• Horas complementarias (en tiempo parcial)",

"6️⃣ Modalidades de contratación (post reforma laboral 2021)\nLa reforma prioriza el contrato indefinido y limita el uso de temporales.\nTipos principales:\n• Indefinido (ordinario y fijo discontinuo)\n• Temporales (circunstancias de la producción, sustitución)\n• Formativos (alternancia y práctica profesional)\n• Otros: relevo, tiempo parcial, ETT…",

"7️⃣ Contratos indefinidos\n7.1 Ordinario\n• Sin límite de duración.\n• Puede ser verbal o escrito.\n7.2 Fijo discontinuo\n• Actividad intermitente con periodos de inactividad.\n• Obligatorio por escrito.\n• Debe especificar forma de llamamiento y orden de antigüedad.",

"8️⃣ Contratos temporales\n8.1 Circunstancias de la producción\n• Justificado por aumento ocasional de trabajo.\n• Duración máxima: 6 a 12 meses.\n8.2 Sustitución\n• Para reemplazar a un trabajador con reserva de puesto.\n• Debe identificar a la persona sustituida y la causa.\n❌ Si no existe causa real → fraude de ley → se convierte en indefinido.",

"9️⃣ Contratos formativos\n9.1 Formación en alternancia\n• Combina trabajo + formación.\n• Edad máxima: 30 años.\n9.2 Práctica profesional\n• Tras estudios (FP superior, grado, máster…)\n• Debe formalizarse en los 3 años siguientes al título.",

"🔧 10️⃣ Otras modalidades\n• Tiempo parcial: menos horas que la jornada completa.\n• Horas complementarias: pactadas por escrito.\n• Relevo: vinculado a jubilación parcial.\n• ETT: relación triangular (empresa–ETT–trabajador).",

"11️⃣ Modificación del contrato\nLa empresa puede modificar condiciones si existe causa objetiva y justificada:\n• Jornada\n• Horario\n• Sistemas de remuneración\n• Funciones (movilidad funcional)\nProceso:\n• Notificación previa\n• Trabajador puede reclamar o extinguir con indemnización según caso.",

"12️⃣ Suspensión del contrato\nEl contrato se detiene temporalmente sin extinguirse.\nCausas:\n• Incapacidad temporal\n• Maternidad/paternidad\n• ERTE\n• Excedencias\n• Huelga\nDurante la suspensión se mantiene el vínculo laboral pero se pausa la prestación de servicios.",

"13️⃣ Extinción del contrato\nFormas principales:\n• Mutuo acuerdo\n• Fin de contrato temporal\n• Renuncia del trabajador\n• Dimisión o abandono\n• Jubilación o incapacidad\n• Muerte del trabajador\n• Despido disciplinario\n• Despido objetivo\n• Despido colectivo (ERE)\n• Fuerza mayor",

"14️⃣ Despido disciplinario\nCausas:\n• Indisciplina\n• Faltas repetidas de asistencia\n• Ofensas verbales o físicas\n• Disminución voluntaria del rendimiento\n• Embriaguez o toxicomanía que afecte al trabajo\nNo hay indemnización, solo finiquito.\nEl trabajador puede impugnar.",

"15️⃣ Despido objetivo\nCausas económicas, organizativas, técnicas o productivas.\nIndemnización: 20 días por año.\nRequiere comunicación escrita y preaviso.",

"16️⃣ Finiquito\nDocumento que resume:\n• Salarios pendientes\n• Vacaciones no disfrutadas\n• Pagas extra\n• Indemnizaciones si proceden\nDebe entregarse siempre al finalizar la relación laboral.",

"17️⃣ Impugnación de despidos\nVías:\n• Conciliación laboral\n• Mediación\n• Demanda en jurisdicción social\nSentencias posibles:\n• Procedente\n• Improcedente (indemnización mayor o readmisión)\n• Nulo (readmisión + salarios de tramitación)"
  ],

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
  summary: [

"1️⃣ Visión general de la unidad\nLa unidad trata los principales elementos de la jornada laboral: horas máximas, descansos, permisos, vacaciones, periodos de prueba y modelos actuales de organización del trabajo (teletrabajo, flexibilidad, conciliación). También introduce el derecho procesal social para la resolución de conflictos laborales.",

"2️⃣ Jornada de trabajo y horarios\n• Jornada: tiempo trabajado.\n• Horario: distribución de la jornada.\nLímites legales:\n• Máximo 40 h/semanales de promedio anual.\n• Máximo 9 h/día (salvo pacto en convenio).\n• Prohibiciones: menores tienen límites especiales.\n• Obligatorio el registro de jornada diario para todos los trabajadores.",

"3️⃣ Horas extraordinarias\n• Son horas que exceden la jornada establecida.\n• Carácter general: voluntarias.\n• Obligatorias solo en fuerza mayor.\n• Límite: 80 horas/año.\n• Compensación: dinero o descanso.\nProhibidas para:\n• Menores.\n• Trabajadores a tiempo parcial.\n• Turno nocturno.\n• Maternidad/paternidad (salvo fuerza mayor).",

"4️⃣ Organización especial del trabajo\n4.1 Trabajo nocturno\n• Considerado nocturno si al menos 3 h o 1/3 del turno es entre 22:00 y 06:00.\n• Limitaciones en jornada y horas extra.\n4.2 Trabajo a turnos\n• Rotación entre distintos horarios.\n• El turno de noche no puede exceder 15 días continuos salvo consentimiento del trabajador.",

"5️⃣ Descansos y días festivos\n• Descanso diario: mínimo 12 horas entre jornadas.\n• Pausas dentro de la jornada según duración.\n• Descanso semanal: 1 día y medio ininterrumpido.\n• Festivos: máximo 14 al año.\n• Vacaciones: derecho mínimo de 30 días naturales al año.\nReglas clave:\n• No sustituibles por dinero.\n• Deben fijarse por acuerdo entre empresa y trabajador.\n• Deben disfrutarse dentro del año natural.",

"6️⃣ Permisos retribuidos\nSe conceden con aviso y justificación.\nIncluyen:\n• Matrimonio (15 días).\n• Nacimiento de hijo.\n• Defunción de familiares.\n• Traslado de domicilio.\n• Deber público.\n• Exámenes.\n• Fenómenos meteorológicos.\nLa duración exacta depende del Estatuto y del convenio.",

"7️⃣ Reducción de jornada\nMotivos principales:\n• Cuidado de hijos.\n• Cuidado de familiares.\n• Enfermedades graves.\n• Violencia de género o terrorismo.\nAfecta al salario proporcionalmente pero mantiene derechos esenciales.",

"8️⃣ Periodo de prueba\n• Etapa inicial para valorar adaptación.\n• Puede extinguirse sin indemnización.\nDuración máxima orientativa:\n• 1 a 6 meses según categoría y convenio.\n• 2 meses habitual para técnicos.\n• Debe constar por escrito y ser recíproco.",

"9️⃣ Entornos laborales actuales\nTendencias modernas:\n• Teletrabajo.\n• Horarios flexibles.\n• Conciliación vida laboral/personal.\n• Trabajo por objetivos.\nRequisitos del teletrabajo:\n• Acuerdo escrito.\n• Medios proporcionados por la empresa.\n• Compensación de gastos.\n• Control horario compatible con privacidad.",

"🔟 Derechos digitales del trabajador\nDerechos clave:\n• Desconexión digital (fuera del horario).\n• Privacidad y protección de datos.\n• Limitación del uso de dispositivos personales.\n• Regulación del control empresarial (cámaras, GPS, software).",

"1️⃣1️⃣ Igualdad, diversidad e inclusión\nLas empresas deben promover:\n• Igualdad de trato.\n• No discriminación por género, edad, origen o discapacidad.\n• Políticas inclusivas para mejorar creatividad y productividad.",

"1️⃣2️⃣ Derecho procesal social\nProceso para resolver conflictos laborales:\n1. Mediación/conciliación previa.\n2. Demanda ante el Juzgado de lo Social.\n3. Juicio.\n4. Sentencia.\n5. Recursos.\nPermite resolver:\n• Despidos.\n• Reclamaciones salariales.\n• Sanciones.\n• Modificaciones de contrato.\n• Conflictos colectivos."
  ],
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
  summary: [

"1️⃣ Resumen general de la unidad\nLa unidad explica cómo funciona el salario, qué partes componen la nómina, qué deducciones se aplican y cómo se calculan. También detalla el sistema de Seguridad Social y sus prestaciones: incapacidad temporal, desempleo, nacimiento y cuidado del menor, incapacidad permanente, jubilación, muerte y supervivencia, además del ingreso mínimo vital. Incluye la protección por desempleo y requisitos para acceder a ella.",

"2️⃣ La nómina y el salario\n• El salario es la retribución por el trabajo prestado.\n• Existe un salario mínimo obligatorio: SMI (1.184 €/mes en 2025).\n• El salario puede tener:\n  - Salario base.\n  - Complementos (antigüedad, peligrosidad, nocturnidad...).\n  - Horas extra.\n  - Salario en especie.\n  - Percepciones no salariales (dietas, transporte, indemnizaciones).",
  
"2.1 Componentes de la nómina\n• Devengos: todo lo que el trabajador gana.\n• Deducciones: restan del salario (cotización y IRPF).\n• Salario bruto: total antes de deducciones.\n• Salario neto: cantidad final a recibir.\n• Base de cotización: se usa para calcular prestaciones.\n• Tipo de IRPF: depende de salario, situación familiar y contrato.",

"3️⃣ Seguridad Social y sus coberturas\nLa Seguridad Social protege al trabajador ante contingencias económicas y de salud.\nIncluye prestaciones por:\n• Incapacidad Temporal (IT).\n• Riesgo embarazo/lactancia.\n• Nacimiento y cuidado del menor.\n• Incapacidad Permanente.\n• Jubilación.\n• Muerte y supervivencia.\n• Lesiones permanentes no invalidantes.\n• Ingreso mínimo vital.\n• Desempleo.",

"3.1 Incapacidad Temporal (IT)\n• Duración máxima: 365 días, prorrogable.\n• Puede ser por contingencias comunes o profesionales.\n• La prestación depende del tipo:\n  - Enfermedad común: % de base reguladora tras los primeros días.\n  - Accidente laboral: desde el día siguiente al 75% de la base reguladora.",

"3.2 Nacimiento y cuidado de menor\n• Sustituye maternidad y paternidad desde 2019.\n• 16 semanas para cada progenitor.\n• Permiso obligatorio mínimo inicial.\n• Prestación económica según base reguladora.",

"3.3 Incapacidad permanente\nGrados:\n• Parcial.\n• Total.\n• Absoluta.\n• Gran invalidez.\nCada grado determina:\n• Derecho a indemnización o pensión vitalicia.\n• Cantidad proporcional a la base reguladora y grado de afectación.",

"3.4 Jubilación\nRequisitos:\n• Edad legal (variable según año y cotización).\n• Periodos mínimos cotizados.\n• Posible jubilación anticipada o demorada.\nLa prestación depende de:\n• Años cotizados.\n• Bases de cotización.\n• Edad de retiro.",

"3.5 Muerte y supervivencia\nIncluye:\n• Pensión de viudedad.\n• Orfandad.\n• Prestaciones a favor de familiares.\nEn caso de accidente laboral, se incluyen indemnizaciones adicionales.",

"4️⃣ Desempleo: requisitos y prestaciones\nClasificación:\n• Desempleo total.\n• Desempleo parcial.\nRequisitos generales para contributiva:\n• Haber cotizado mínimo 12 meses en los últimos 6 años.\n• Estar inscrito como demandante de empleo.\n• No haber rechazado ofertas adecuadas.\nLa cuantía depende de:\n• Base reguladora.\n• Hijos a cargo.\n• Situación familiar.",
  
"4.1 Duración de la prestación\n• Depende del tiempo cotizado.\n• De 4 meses hasta 2 años.",
  
"4.2 Subsidio por desempleo\n• Para quienes no cumplen los requisitos de la contributiva.\n• Cuantía reducida y tiempo limitado.\n• Existen subsidios especiales: mayores de 45, cargas familiares, mayores de 52, etc.",

"5️⃣ Conclusión de la unidad\nEsta unidad explica de forma completa cómo se calcula la nómina, cuál es el valor real del salario neto y qué protecciones existen dentro de la Seguridad Social. También aclara los requisitos de desempleo y el funcionamiento de las prestaciones en España, garantizando derechos ante enfermedad, maternidad, vejez o falta de empleo."
  ],
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
  summary: [

"1️⃣ Resumen general de la unidad\nEsta unidad trata sobre el autoconocimiento y la importancia de analizar tus intereses, habilidades, valores y motivaciones para construir tu trayectoria profesional. Explica cómo definir metas realistas, establecer un proyecto de carrera y elegir itinerarios formativos adecuados. También trabaja la autoestima, resiliencia, análisis DAFO personal e identificación de hitos vitales que influyen en tus decisiones laborales.",

"2️⃣ Autoconocimiento y evaluación personal\n• El autoconocimiento consiste en saber quién eres, qué te gusta, qué te motiva y qué quieres conseguir.\n• Se evalúan intereses, valores y motivaciones.\n• Herramientas como el Test de Holland ayudan a identificar perfiles profesionales.\n• Reflexionar sobre habilidades y destrezas permite crear un plan de mejora personal.",

"3️⃣ Cualidades y competencias personales\n• Cualidades: responsabilidad, iniciativa, resiliencia, adaptabilidad, autoconfianza.\n• Competencias: comunicación, trabajo en equipo, resolución de problemas, gestión del tiempo.\n• Hard skills: habilidades técnicas específicas.\n• Soft skills: habilidades sociales y personales.\n• Las soft skills marcan la diferencia en la empleabilidad actual.",

"4️⃣ Preferencias profesionales y metas\n• Las preferencias se basan en intereses, valores, habilidades y experiencias.\n• Las metas se dividen en:\n  - Corto plazo (0–1 años)\n  - Medio plazo (1–3 años)\n  - Largo plazo (3–5+ años)\n• El proyecto profesional debe incluir investigación del mercado laboral y acciones concretas.\n• Revisar las metas de forma periódica es imprescindible para avanzar.",

"5️⃣ Autoestima y búsqueda de empleo\n• La autoestima influye en la motivación, seguridad y desempeño en entrevistas.\n• Una autoestima fuerte ayuda a manejar rechazos y mantener el enfoque.\n• La autoconfianza permite defender tus capacidades y crear una marca personal positiva.",

"6️⃣ Análisis DAFO personal\n• Fortalezas: puntos fuertes personales.\n• Debilidades: aspectos a mejorar.\n• Oportunidades: tendencias del mercado, formaciones, nichos.\n• Amenazas: competencia, cambios económicos.\n• El DAFO ayuda a planificar estrategias para maximizar fortalezas y minimizar debilidades.",

"7️⃣ Hitos importantes en la trayectoria vital\n• Los hitos son experiencias clave que definen tu crecimiento personal y profesional.\n• Pueden ser logros, cambios vitales, experiencias educativas o retos superados.\n• Ayudan a entender tu evolución y a reforzar la motivación y la confianza.",

"8️⃣ Elección de itinerarios formativos\n• La formación profesional para el empleo ayuda a mejorar habilidades y adaptarse al mercado.\n• Los ciclos formativos permiten acceder a estudios superiores o al empleo.\n• El sistema universitario europeo (Bolonia) organiza estudios en Grado, Máster y Doctorado.\n• Elegir el itinerario correcto depende de tus metas y fortalezas personales."
  ],
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
  summary: [

"1️⃣ Resumen general de la unidad\nLa unidad trata la importancia del aprendizaje continuo, el desarrollo de competencias y el uso de herramientas digitales para mejorar la empleabilidad. Explica cómo elaborar un Plan de Desarrollo Individual (PDI), gestionar la identidad digital y adaptarse al entorno laboral moderno. Se destacan habilidades blandas, técnicas y estrategias de autoaprendizaje.",

"2️⃣ Importancia del aprendizaje permanente\n• El aprendizaje continuo permite adaptarse a cambios tecnológicos y nuevas demandas del empleo.\n• Favorece la empleabilidad, innovación, motivación y resiliencia.\n• Incluye habilidades duras (hard skills) y blandas (soft skills).\n• Actualizar conocimientos es clave para mantenerse competitivo en el mercado laboral actual.",

"3️⃣ Estrategias para el desarrollo de competencias\n• Formación formal (ciclos, cursos, certificados, universidad).\n• Desarrollo de soft skills: comunicación, liderazgo, inteligencia emocional.\n• Networking: crear relaciones profesionales que generen oportunidades.\n• Para el aprendizaje autónomo se recomienda disciplina, metas claras y autoevaluaciones frecuentes.\n• Las herramientas digitales facilitan el seguimiento y organización del aprendizaje.",

"4️⃣ Adaptación al entorno laboral actual\n• El mundo laboral cambia con la transformación digital, IA y automatización.\n• Nuevas formas de empleo: remoto, híbrido, flexible, freelance, gig economy.\n• Habilidades técnicas clave: programación, ciberseguridad, análisis de datos.\n• Habilidades blandas clave: liderazgo, comunicación, gestión del tiempo.\n• La sostenibilidad y RSC condicionan cada vez más las expectativas laborales.",

"5️⃣ Adaptación, flexibilidad y resiliencia\n• Adaptarse a nuevos roles, cambios de horario o herramientas tecnológicas.\n• La resiliencia permite superar dificultades, gestionar el estrés y mantener la motivación.\n• Características del trabajador resiliente: optimismo, autocontrol emocional, iniciativa, pensamiento crítico y redes de apoyo.",

"6️⃣ Mundo digital y empleabilidad\n• La digitalización genera oportunidades y exige nuevas competencias tecnológicas.\n• La identidad digital (2.0) es la presencia que proyectamos online.\n• La marca personal ayuda a destacar, conectar con empleadores y mostrar talento.\n• Importante cuidar seguridad, privacidad y reputación digital.\n• Mantener perfiles actualizados en LinkedIn, portfolio y redes profesionales.",

"7️⃣ Entorno Personal de Aprendizaje (EPA)\n• Es un conjunto de herramientas, recursos, personas y actividades que ayudan a aprender.\n• Incluye apps, cursos online, redes profesionales, blogs, podcasts, comunidades.\n• Permite definir metas, gestionar contenido y evaluar progreso.\n• Ejemplos de EPA: YouTube educativo, Duolingo, cursos MOOC, LinkedIn Learning.",

"8️⃣ Plan de Desarrollo Individual (PDI)\n• Es una hoja de ruta para organizar tu crecimiento profesional.\n• Fases del PDI:\n  1. Autoevaluación.\n  2. Metas claras.\n  3. Acciones concretas.\n  4. Seguimiento.\n• Permite alinear objetivos personales con oportunidades laborales reales.\n• Debe ser flexible y revisarse periódicamente.",

"9️⃣ Elaboración y seguimiento del PDI\n• Metas SMART: específicas, medibles, alcanzables, relevantes y con fecha.\n• Definir indicadores para medir progreso.\n• Revisar resultados y ajustar según nuevas metas o cambios del entorno.\n• Permitir modificaciones continuas para evitar estancamiento.",

"🔟 Conclusión final\n• La adaptabilidad es clave para el éxito profesional.\n• Actualización constante + herramientas digitales = empleabilidad sostenible.\n• La autoevaluación continua, disciplina y proactividad fortalecen la carrera profesional.\n• El PDI debe evolucionar según las necesidades del mercado y tus objetivos personales."
  ],

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

  ],
},

    /* ================== ATENCIÓN AL PACIENTE ================== */

     /* ================== ATENCIÓN AL PACIENTE ================== */

{
  id: "ap-u1",
  title: "AP · U1 · Sistema sanitario y recursos",
  summary: [

"1️⃣ Visión general de la unidad\nLa unidad explica cómo está organizado el sistema sanitario en España (público y privado), la estructura del SNS, la función de hospitales y centros de salud, las unidades de imagen médica y la importancia de la gestión de almacén, economía sanitaria y calidad asistencial. Se centra en comprender el funcionamiento global del sistema para mejorar el trabajo en equipo y la atención al paciente.",

"2️⃣ Estructura del sistema sanitario\n• Diferentes modelos sanitarios: nacional, seguros sociales y liberal.\n• Todos comparten objetivos: equidad, accesibilidad, eficiencia y legitimidad.\n• España utiliza un Sistema Nacional de Salud (SNS): universal, financiado con impuestos, descentralizado en comunidades autónomas.\n• Organización administrativa:\n  - Nivel central: Ministerio de Sanidad (coordinación general).\n  - Nivel autonómico: Consejerías (gestión sanitaria regional).\n  - Nivel local: Áreas y zonas básicas de salud.",

"3️⃣ Características del sistema sanitario español\n• Universalidad: cobertura para todos los ciudadanos.\n• Financiación pública: vía impuestos.\n• Atención integral: primaria + especializada.\n• Participación ciudadana en la gestión.\n• Eficiencia y calidad como objetivos principales.\n• Atención primaria: puerta de entrada al sistema, prevención y seguimiento.\n• Atención hospitalaria: diagnóstico especializado, cirugías, urgencias y tratamientos complejos.",

"4️⃣ Unidades de radiodiagnóstico, medicina nuclear y radioterapia\n• Radiodiagnóstico: RX, TAC, RM, ecografías.\n• Medicina nuclear: gammagrafías, PET, uso de radiofármacos.\n• Radioterapia: tratamientos con radiación ionizante para tumores.\n• Organización jerárquica:\n  - Médicos especialistas.\n  - Radiofísicos.\n  - Técnicos Superiores en Imagen para el Diagnóstico y Medicina Nuclear.\n  - Enfermería.\n  - Personal auxiliar.\n• Cada profesional tiene funciones específicas en prescripción, preparación, control, mantenimiento y asistencia al paciente.",

"5️⃣ Gestión del almacén en centro sanitario\n• Objetivo: garantizar disponibilidad, seguridad y orden.\n• Tipos de almacenes: central, general y pequeño almacén.\n• Clasificación del stock por:\n  - Uso.\n  - Caducidad.\n  - Peligrosidad.\n  - Conservación (temperatura, humedad, luz).\n• Control de inventarios, revisión de fechas y reposición periódica.\n• Evitar errores y faltantes que afecten al paciente.",

"6️⃣ Economía sanitaria\n• Estudia cómo se gestionan recursos y gastos en sanidad.\n• Factores clave:\n  - Oferta y demanda.\n  - Coste de la tecnología.\n  - Necesidades de la población.\n  - Políticas y presupuestos.\n• Una buena gestión garantiza sostenibilidad y calidad asistencial.\n• La demanda sanitaria no siempre es voluntaria: depende de enfermedades y envejecimiento poblacional.",

"7️⃣ Niveles de gestión sanitaria\n• Macrogestión: Estado → legislación, financiación, planificación.\n• Mesogestión: Comunidades autónomas → organización territorial.\n• Microgestión: hospitales, centros de salud y sus profesionales → atención directa.\n• Una buena coordinación entre niveles mejora resultados asistenciales.",

"8️⃣ Calidad en los servicios sanitarios\n• Calidad asistencial = servicios seguros, eficaces y centrados en el paciente.\n• Herramientas de calidad:\n  - ISO: estándares de gestión.\n  - EFQM: modelo de excelencia.\n• EFQM utiliza REDER:\n  - Resultados.\n  - Enfoque.\n  - Despliegue.\n  - Evaluación y Revisión.\n• Objetivo: mejora continua, eficiencia y satisfacción del paciente.",

"9️⃣ Resumen final\n• La unidad proporciona una visión completa del sistema sanitario español.\n• Explica estructura, niveles de gestión, unidades de imagen médica y calidad.\n• Recalca la importancia de una organización eficaz, gestión del stock y sostenibilidad del sistema.\n• Estos conceptos son esenciales para trabajar como técnico en cualquier hospital o centro sanitario."
  ],

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
  summary: [

"1️⃣ Visión general de la unidad\nLa unidad trata sobre cómo recibir al paciente, gestionar su documentación administrativa y clínica, garantizar su correcta identificación y aplicar principios éticos como la confidencialidad y la protección de datos. Explica paso a paso el protocolo de citación, registro, información y manejo de documentos en centros sanitarios.",

"2️⃣ Protocolo de citación, registro e identificación\n• La citación organiza la agenda y evita retrasos, mejorando la eficiencia.\n• El registro incluye datos personales, poblacionales y económicos.\n• Identificar al paciente correctamente evita errores clínicos graves.\n• El centro debe verificar identidad mediante DNI, tarjeta sanitaria o documento válido.\n• La información debe ser clara, ordenada y protegida de accesos no autorizados.",

"3️⃣ Gestión de datos del paciente\n• Los datos administrativos permiten acceso al servicio (nombre, dirección, CIP, aseguradora).\n• Los datos clínicos permiten diagnóstico y tratamiento.\n• Todo dato sanitario es considerado “dato especialmente protegido”.\n• Errores en identificación pueden generar diagnósticos incorrectos, duplicación de pruebas o fallos en tratamiento.",

"4️⃣ Documentos clínicos\n• La historia clínica es el documento central, contiene:\n  - Datos personales.\n  - Antecedentes.\n  - Exploraciones.\n  - Informes de pruebas.\n  - Diagnósticos.\n• Documentos específicos por área:\n  - Radiodiagnóstico: informes RX, TAC, RM.\n  - Medicina Nuclear: informes con radiofármacos.\n  - Radioterapia: planificación, dosimetría y controles.\n• Su gestión debe ser rigurosa, ordenada y accesible solo al personal autorizado.",

"5️⃣ Documentos no clínicos\n• Hoja de citación: indica día, hora y preparaciones (ayuno, hidratación, retirada de objetos metálicos, etc.).\n• Consentimiento previo para pruebas con contraste, sedación o radiación.\n• Encuestas de satisfacción: ayudan a evaluar calidad del servicio desde la perspectiva del paciente.\n• La correcta gestión mejora la organización y reduce errores administrativos.",

"6️⃣ Documentación informativa y protección de datos (LOPD / RGPD)\n• Los pacientes deben recibir información clara sobre:\n  - Procedimiento.\n  - Riesgos.\n  - Beneficios.\n  - Preparación previa.\n• El consentimiento informado es obligatorio:\n  - Para procedimientos invasivos.\n  - Para menores de 16 años requiere autorización del tutor.\n  - Puede ser revocado en cualquier momento.\n• La LOPD/RGPD obliga a proteger la información sanitaria:\n  - Almacenamiento seguro.\n  - Minimizar accesos.\n  - Confidencialidad absoluta.",

"7️⃣ Principios éticos y responsabilidad social del profesional\n• La salud es un derecho fundamental.\n• El trato debe ser humano, respetuoso, empático y confidencial.\n• La atención centrada en el paciente implica:\n  - Escuchar.\n  - Informar de forma clara.\n  - Responder dudas.\n  - Respetar decisiones.\n• Importancia del apoyo emocional en situaciones de ansiedad.\n• Las instrucciones previas (testamento vital) deben respetarse.\n• El profesional debe actuar con responsabilidad, ética y compromiso social.",

"8️⃣ Resumen final\n• La acogida correcta del paciente es esencial para su seguridad.\n• La identificación y documentación adecuada evita errores graves.\n• La historia clínica y documentos no clínicos deben gestionarse con máxima confidencialidad.\n• La relación profesional-paciente se basa en ética, respeto, apoyo emocional y derecho a la información.\n• La protección de datos y el consentimiento informado son obligaciones legales imprescindibles."
  ],

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
  summary: [

"1️⃣ Introducción general\nLa unidad explica cómo debe comunicarse un profesional sanitario con los pacientes, entendiendo tanto el lenguaje verbal como el no verbal, los aspectos psicológicos implicados en la enfermedad y la importancia del apoyo emocional. Se busca interpretar señales, mejorar la interacción y atender situaciones especiales con empatía y respeto.",

"2️⃣ Elementos básicos de la comunicación\n• Emisor, receptor, mensaje, canal, código y contexto forman el proceso comunicativo.\n• La comunicación eficaz implica transmitir y comprender correctamente.\n• Una buena comunicación previene conflictos, mejora la relación terapéutica y aumenta la seguridad del paciente.",

"3️⃣ Obstáculos en la comunicación\n• Obstáculos semánticos: palabras ambiguas o mal interpretadas.\n• Obstáculos psicológicos: ansiedad, miedo, prejuicios.\n• Obstáculos fisiológicos: problemas auditivos o visuales.\n• Obstáculos físicos: ruido, distancia, barreras.\n• Obstáculos socioculturales: idioma, valores, religión.\nSuperarlos requiere claridad, empatía y adaptación.",

"4️⃣ Características del proceso comunicativo eficaz\n• Retroalimentación clara (feedback).\n• Empatía equilibrada sin sobreimplicarse emocionalmente.\n• Asertividad para comunicar con respeto y firmeza.\n• Claridad en el mensaje.\n• Cortesía y respeto como base de la interacción clínica.",

"5️⃣ Técnicas de comunicación verbal\n• Puede ser oral, escrita o signada.\n• La comunicación verbal requiere:\n  - Preparar el mensaje.\n  - Adaptarlo al nivel del paciente.\n  - Valorar emociones.\n  - Hablar claro y pausado.\n• Ventajas: rápida, directa.\n• Problemas: puede malinterpretarse si el paciente está nervioso o no comprende bien.",

"6️⃣ Comunicación no verbal\n• Incluye gestos, postura, tonos, miradas y distancia.\n• Componentes clave:\n  - Paralenguaje (tono, ritmo, volumen).\n  - Expresión facial.\n  - Proxemia (distancia adecuada).\n• Es esencial para transmitir confianza y detectar emociones ocultas.",

"7️⃣ Fases de atención al paciente (comunicación terapéutica)\n1. Acogida: saludo cortés, presentación y explicación inicial.\n2. Exploración: preguntas abiertas, escucha activa.\n3. Información: explicar procedimiento, riesgos y preparación.\n4. Finalización: despedida, recordar instrucciones y resolver dudas.\n• Protocolos en imagen y radioterapia incluyen recepción, preparación y acompañamiento durante todo el proceso, manteniendo información clara y respeto constante.",

"8️⃣ Situaciones especiales en la atención\n• Pacientes agresivos: mantener calma, llamar apoyo, establecer límites.\n• Pacientes mayores: hablar lento, usar frases simples, revisar comprensión.\n• Pacientes pediátricos: lenguaje infantil, apoyo emocional, presencia del familiar.\n• Pacientes con limitaciones físicas o cognitivas: adaptar ritmo, simplificar instrucciones, apoyar con gestos o demostraciones.",

"9️⃣ Mediación cultural en el entorno sanitario\n• Respetar diversidad cultural, religiosa y de género.\n• Evitar prejuicios y estereotipos.\n• Usar intérpretes cuando sea necesario.\n• Garantizar comunicación efectiva en pacientes que no hablan el idioma.",

"🔟 Desarrollo de la personalidad y conductas\n• La personalidad influye en la forma en que un paciente afronta enfermedad.\n• Factores que la forman: crianza, genética, cultura, experiencias.\n• Tipos de personalidad desadaptativa (dependiente, obsesiva, narcisista, paranoica, etc.).\n• El profesional NO debe diagnosticar ni discutir patologías psicológicas.",

"1️⃣1️⃣ Cambios psicológicos relacionados con la enfermedad\n• Fases emocionales: diagnóstico, tratamiento, remisión, recaída, paliativos.\n• Emociones frecuentes: miedo, tristeza, ansiedad, negación.\n• Requiere apoyo psicológico, comprensión y comunicación clara.",

"1️⃣2️⃣ Psicología del paciente crónico\n• El paciente crónico vive estrés prolongado.\n• Puede sentir frustración, angustia y pérdida de autonomía.\n• La atención psicológica continua es clave para facilitar adaptación y aceptación.",

"1️⃣3️⃣ Mecanismos de defensa ante la enfermedad\n• Negación: rechazar realidad.\n• Proyección: atribuir a otros sentimientos propios.\n• Racionalización: justificar emociones.\n• Aislamiento emocional.\n• Disociación.\n• Regresión.\n• Estos mecanismos ayudan temporalmente, pero deben gestionarse con apoyo adecuado.",

"1️⃣4️⃣ Relación de ayuda (counselling)\n• Implica escuchar activamente, acompañar emocionalmente y facilitar estrategias.\n• Objetivos:\n  - Reducir ansiedad.\n  - Favorecer adaptación.\n  - Mejorar comunicación.\n  - Dar soporte emocional.\n• El profesional debe controlar su propio estrés y mantener límites saludables.",

"1️⃣5️⃣ Resumen final\n• La comunicación efectiva es esencial en la atención sanitaria.\n• El profesional debe dominar comunicación verbal y no verbal.\n• La empatía, el respeto y la claridad mejoran la experiencia del paciente.\n• Comprender aspectos psicológicos permite un trato más humano y profesional.\n• Es clave adaptarse a situaciones especiales y diversidad cultural."
  ],
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
  summary: [

"1️⃣ Introducción general\nLa unidad se enfoca en la importancia de seguir procedimientos estandarizados en servicios de diagnóstico por imagen, medicina nuclear y radioterapia. El objetivo es garantizar seguridad, calidad asistencial y respuesta correcta ante emergencias, incluyendo el manejo de pacientes con necesidades especiales.",

"2️⃣ Protocolos y planes de emergencia\n• Los protocolos estandarizan el comportamiento del personal.\n• Aseguran calidad, legalidad y protección radiológica.\n• Proporcionan instrucciones claras para equipos, accesos, organización y emergencias.\n• Incluyen dos tipos: generales y específicos.",

"3️⃣ Protocolos de funcionamiento general\n• Describen la organización del personal.\n• Establecen las normas internas de la unidad.\n• Regulan accesos, circulación y vestimenta.\n• Incluyen la estructura física: salas, zonas controladas, blindajes, señalización.\n• Definen los sistemas de protección radiológica.",

"4️⃣ Protocolos específicos\n• Identifican procedimientos para cada equipo o técnica.\n• Instrucciones de uso, calibración y verificación previa.\n• Actuaciones ante fallos, averías o incidentes.\n• Permiten resultados homogéneos y seguros en cada estudio o tratamiento.",

"5️⃣ Protocolos por unidad: oncología radioterápica\n• Regulan braquiterapia, teleterapia y aceleradores lineales.\n• Incluyen tiempos de irradiación, posicionamiento, inmovilización y planificación.\n• Procedimientos ante fugas, fallos mecánicos o pérdida de fuente radiactiva.",

"6️⃣ Protocolos por unidad: diagnóstico por imagen\n• Radiología simple: proyecciones, factores técnicos y posicionamientos.\n• Mamografía: compresión, proyecciones estándar y control de calidad.\n• TC: cortes, contraste, planificación y control del movimiento.\n• RM: selección de secuencias, seguridad ante implantes y claustrofobia.\n• Ecografía: gel, posiciones y exploración por áreas.\n• Intervencionista: esterilidad, guía radiológica y soporte urgente.",

"7️⃣ Protocolos por unidad: medicina nuclear\n• Uso de gammacámaras y PET.\n• Preparación y administración de isótopos.\n• Control, registro y almacenamiento de residuos radiactivos.\n• Medidas de protección para manipulación segura.\n• Protocolos ante contaminación o fuga.",

"8️⃣ Planes de emergencia generales\n• Parada cardiorrespiratoria: activar código, soporte vital básico, aviso al equipo.\n• Incendios: evacuación, cortar electricidad y gases, seguir rutas seguras.\n• Inundaciones: proteger equipos y desconectar instalaciones.\n• Catástrofes: priorizar pacientes críticos, comunicación con emergencias externas.",

"9️⃣ Emergencias específicas en radioterapia y diagnóstico\n• Fallo de acelerador o equipo.\n• Pérdida de fuente radiactiva.\n• Fuga o contaminación radiactiva.\n• Exposición accidental.\nActuación: detener tratamiento, desalojar sala, activar alarmas y revisar blindajes.",

"1️⃣0️⃣ Simulacros y acciones en emergencias\n• Los simulacros entrenan al personal para responder correctamente.\n• Se realizan periódicamente para evaluar tiempos, rutas y coordinación.\n• Acciones clave: desconectar equipos, aislar zonas, proteger personal, registrar incidencias.",

"1️⃣1️⃣ Valoración del nivel de consciencia\n• Es esencial antes de cualquier procedimiento para garantizar seguridad.\n• Escala de Glasgow: valora apertura ocular, respuesta verbal y motora.\n• Escala de Karnofsky: valora capacidad funcional general.\n• Permite adaptar posicionamiento, preparación y vigilancia.",

"1️⃣2️⃣ Atención a pacientes con necesidades especiales\n• Politraumatizados: inmovilización estricta y monitorización.\n• Pediátricos: acompañamiento familiar, lenguaje sencillo, contención emocional.\n• Embarazadas: evitar radiación siempre que sea posible; protocolos estrictos.\n• No colaboradores: sedación ligera o inmovilización según protocolo.\n• Claustrofobia: RM abierta, música, acompañamiento o sedación ligera.",

"1️⃣3️⃣ Consideraciones finales en la atención segura\n• La cooperación del paciente es crucial.\n• Informar siempre antes del procedimiento.\n• Protección radiológica para paciente y personal.\n• Verificar identidad, estudio y parámetros antes de comenzar.\n• Mantener comunicación constante y supervisión durante la prueba."  
  ],

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
      correct: 2, 

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
  summary: [

"1️⃣ Introducción general\nLa unidad explica las necesidades humanas aplicadas al ámbito sanitario y cómo el personal debe atenderlas mediante higiene, confort, comunicación y técnicas seguras de movilización. Incluye valoración fisiológica y apoyo emocional para garantizar bienestar y seguridad del paciente.",

"2️⃣ Necesidades y factores determinantes de la salud\n• Se basan en la pirámide de Maslow: fisiológicas, seguridad, afecto, autoestima y autorrealización.\n• Ayudan a priorizar cuidados según el grado de dependencia.\n• La enfermería y técnicos deben identificar necesidades no cubiertas rápidamente.",

"3️⃣ Necesidades fisiológicas\n• Incluyen respirar, hidratarse, alimentarse, eliminar, moverse, descanso y ausencia de dolor.\n• Requieren monitorización constante por parte del personal.\n• Alteraciones pueden ser signos precoces de enfermedad.",

"4️⃣ Monitorización de constantes vitales\n• Pulso: radial, carotídeo, femoral; normal 60-100 lpm.\n• Tensión arterial: variaciones por volemia, rigidez arterial, estrés y patologías.\n• Temperatura: normal 36º–37º; fiebre > 37,5º; hipotermia < 35º.\n• Respiración: 18–20 rpm; alteraciones: apnea, disnea, ortopnea.",

"5️⃣ Necesidad de seguridad\n• Se basa en reducir incertidumbre, miedo y estrés.\n• Implica explicar procedimientos, responder dudas y transmitir confianza.\n• Especialmente importante en pacientes graves o en pruebas invasivas.",

"6️⃣ Comunicación y empatía\n• La comunicación verbal y no verbal es clave.\n• Permite detectar preocupaciones, miedos y necesidades afectivas.\n• Mejora la cooperación del paciente en pruebas diagnósticas.",

"7️⃣ Necesidad de afecto y relación social\n• Los pacientes pueden sentirse solos, perdidos o dependientes.\n• El personal debe brindar apoyo emocional y cercanía.\n• Mantener respeto, escucha activa y trato humano.",

"8️⃣ Autoestima y enfermedad\n• La pérdida de autonomía o cambios corporales la afectan.\n• Es esencial fomentar la independencia del paciente.\n• Tratar siempre con dignidad y respeto.",

"9️⃣ Etapas psicológicas ante la enfermedad\n• Negación → Ira → Negociación → Depresión → Aceptación.\n• Identificar la fase ayuda a adaptar el trato y la comunicación.",

"1️⃣0️⃣ Necesidad de autorrealización\n• Representa la búsqueda de bienestar integral.\n• Puede ser limitada por la enfermedad, pero se trabaja para mejorar calidad de vida.\n• Motivación y apoyo emocional son clave.",

"1️⃣1️⃣ Higiene y confort en la unidad\n• Evita infecciones nosocomiales.\n• Incluye lavado de manos, limpieza de superficies y manejo adecuado de materiales.\n• En diagnóstico y radioterapia se aplican protocolos estrictos por riesgo biológico y radiológico.",

"1️⃣2️⃣ Técnicas de movilización y traslado\n• Requieren mecánica corporal correcta para evitar lesiones.\n• Usar piernas, mantener espalda recta y acercar la carga al cuerpo.\n• Evaluar capacidad del paciente antes de moverlo.",

"1️⃣3️⃣ Movilización del paciente\n• Valorar fuerza, equilibrio, dolor y nivel de consciencia.\n• Mantener comunicación constante durante el movimiento.\n• Utilizar técnicas seguras y movimientos coordinados.",

"1️⃣4️⃣ Procedimientos desde la mesa al borde\n• Reducir fricción.\n• Flexionar piernas del paciente.\n• Guiar tronco y caderas hacia el borde.\n• Asegurar estabilidad antes de incorporarlo.",

"1️⃣5️⃣ Incorporación desde un lado de la mesa\n• Solicitar colaboración del paciente.\n• Acompañar movimiento de tronco y piernas.\n• Aprovechar peso corporal y gravedad para facilitar giro.",

"1️⃣6️⃣ Transferencias silla–mesa–camilla\n• Usar sábanas deslizantes o transfer.\n• Hacerlo en equipo si el paciente no colabora.\n• Controlar la cabeza, cuello y extremidades.",

"1️⃣7️⃣ Movilización mesa ↔ camilla\n• Usar técnicas coordinadas.\n• Evitar tirones bruscos.\n• Utilizar dispositivos adaptados si el paciente tiene alta dependencia.",

"1️⃣8️⃣ Conclusión\nLa unidad resume cómo preparar al paciente física y emocionalmente, valorar constantes vitales, cubrir necesidades básicas, aplicar higiene y ejecutar movilizaciones seguras basadas en ergonomía y comunicación empática."

  ],
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
  summary: [

"1️⃣ Introducción general\nLa unidad trata los protocolos específicos, la actuación del personal técnico, el manejo de material desechable y reutilizable y el uso seguro de equipos como oxigenoterapia, ventilación, aspiración, monitorización, sondas, drenajes y ostomías.",

"2️⃣ Protocolos de la unidad\n• Son procedimientos estandarizados para garantizar resultados uniformes y seguros.\n• Especialmente importantes en servicios con radiaciones ionizantes y no ionizantes.\n• Incluyen normas de operación de equipos, protección radiológica y documentación.\n• Su objetivo es asegurar calidad, legalidad y facilitar el trabajo técnico.",

"3️⃣ Actuación del personal técnico\n• Verifica que el procedimiento se realice correctamente.\n• Prepara la sala, equipos, medicación y material necesario.\n• Explica el procedimiento al paciente y asegura su correcta colocación.\n• Debe conocer protocolos, riesgos y normativa de seguridad.",

"4️⃣ Material desechable y reutilizable\n• Desechable (fungible): agujas, jeringas, catéteres, guantes, gasas, medicación, mascarillas.\n• Reutilizable (no fungible): material quirúrgico, EPIs, protectores radiológicos.\n• Requieren limpieza, desinfección, mantenimiento y control de caducidad.\n• En radioterapia existen materiales reutilizables por persona como máscaras termoplásticas y bolus.",

"5️⃣ Equipos de oxigenoterapia\n• Usados en insuficiencia respiratoria.\n• Componentes: botellas de O2, central, manómetros, caudalímetro y humidificador.\n• Vías de administración: gafas nasales y mascarillas.\n• Obligatorio verificar presión, flujo y humidificación antes de usar.",

"6️⃣ Ventiloterapia\n• Sustituye temporalmente la función respiratoria.\n• Tipos: manual (Ambú) o automática (respiradores).\n• Usada en emergencias, apnea, paradas, insuficiencia respiratoria grave.\n• Deben comprobarse conexiones, válvulas y funcionamiento previo.",

"7️⃣ Aspiradores y equipos de monitorización\n• Aspiradores: mantienen vía aérea permeable.\n  - Quirúrgico: más potente.\n  - Central: en paredes de quirófano/hospital.\n• Monitorización: ECG, frecuencia respiratoria, saturación O2, TA.\n• Perfusión: administran sueros y medicación mediante vías periféricas.",

"8️⃣ Acceso venoso y perfusión\n• Catéteres comunes: palomita, Abbocath®, Venocath®.\n• Usos: perfusión continua, medicación, extracción.\n• Requiere técnica aséptica y control del flujo.",

"9️⃣ Sondas\n• Dispositivos para explorar, drenar o administrar sustancias.\n• Tipos frecuentes:\n  - Digestivas: Levin, Salem, nasogástricas.\n  - Nasoentéricas: Nutrición enteral.\n  - Gastrostomía: comunicación directa al estómago.\n• Su colocación requiere comprobación de posición.",

"🔟 Drenajes\n• Evacúan líquidos, sangre o aire.\n• Tipos:\n  - Torácicos (neumotórax/derrame).\n  - Vesicales (sondas urinarias).\n  - Rectales.\n• Requiere fijación, control de caudal y vigilancia de infección.",

"1️⃣1️⃣ Ostomías\n• Aberturas quirúrgicas para evacuar o conectar cavidades.\n• Tipos:\n  - Estoma digestivo: gastrostomía, ileostomía, colostomía.\n  - Respiratorio: traqueostomía.\n• El personal debe realizar higiene, control de piel y manejo del dispositivo.",

"1️⃣2️⃣ Resolución de contingencias\n• Fallos de equipo: detener procedimiento, informar, revisar conexiones.\n• Contaminaciones: aplicar protocolos de asepsia y aislamiento.\n• Incidencias respiratorias: administrar O2 o ventilar según necesidad.\n• Evacuación o traslado: seguir plan de emergencia del servicio.",

"1️⃣3️⃣ Técnicas de limpieza y asepsia\n• Limpieza → eliminación de suciedad.\n• Desinfección → eliminación de microorganismos.\n• Esterilización → eliminación total de vida microbiana.\n• Uso correcto de EPIs y separación de material limpio/sucio.",

"1️⃣4️⃣ Conclusión\nLa unidad resume cómo actuar ante contingencias, manejar equipos y aplicar protocolos de seguridad para garantizar una atención eficaz, aséptica y segura en servicios de diagnóstico, radioterapia y medicina nuclear."

  ],

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
  summary: [

"1️⃣ Introducción general\nLa unidad cubre farmacología básica, farmacocinética, tipos de contrastes y radiofármacos usados en radiología, resonancia, ecografía y medicina nuclear. Incluye también vías de administración y protocolos de emergencia médica.",

"2️⃣ Farmacología básica\n• Un fármaco contiene principio activo + excipientes.\n• Puede presentarse como nombre comercial o genérico.\n• Su finalidad: diagnóstico, prevención o tratamiento.\n• En radiología se usan para mejorar la visualización y calidad diagnóstica.",

"3️⃣ Farmacocinética\nEstudia qué hace el cuerpo con el fármaco e incluye 5 fases:\n1. **Liberación** – el fármaco se libera de su forma farmacéutica.\n2. **Absorción** – pasa a la sangre.\n3. **Distribución** – se reparte por los tejidos.\n4. **Metabolismo** – se transforma (principalmente en hígado).\n5. **Eliminación** – excreción (riñón, bilis, heces, aire).\nFactores claves: vía de administración, edad, peso, función renal/hepática.",

"4️⃣ Medios de contraste\n• Mejoran la visualización de tejidos.\n• Clasificación:\n  - **Positivos** → aumentan la densidad (yodo, bario).\n  - **Negativos** → reducen la densidad (aire, CO₂).\n• Se usan en RX, TAC, RM, ecografía y medicina nuclear.",

"5️⃣ Contrastes en rayos X / TAC\n• **Sulfato de bario** → estudio digestivo.\n• **Contrastes yodados** → administración IV o enteral.\n• Riesgos principales:\n  - alergias\n  - nefropatía por contraste\n  - reacciones tardías (náuseas, calor, urticaria)\n• Aire/CO₂ se usan como contraste negativo en estudios específicos.",

"6️⃣ Contrastes en resonancia magnética\n• Basados en **gadolino** (los más comunes).\n• Menor riesgo que los yodados pero pueden existir:\n  - reacciones leves (náuseas, cefalea)\n  - riesgo en insuficiencia renal grave (fibrosis sistémica).\n• Manganeso se usa en estudios específicos.",

"7️⃣ Contrastes en ultrasonidos\n• Son **microburbujas** que reflejan señal ecográfica.\n• Se emplean en estudio de flujo sanguíneo, hígado, corazón.\n• Son seguros, efecto rápido y eliminación veloz.",

"8️⃣ Radiofármacos en medicina nuclear\n• No tienen efecto farmacológico → actúan como **trazadores**.\n• Emisión gamma o positrones para detectar actividad metabólica.\n• Usos: gammagrafía, PET, estudios funcionales.\n• Deben manejarse bajo estrictos protocolos de protección radiológica.",

"9️⃣ Vías de administración\n• **Enteral**: oral, rectal.\n• **Parenteral**:\n  - intravenosa (la más usada)\n  - intrarterial\n  - intracavitaria\n  - subcutánea\n• **Inhalatoria**: contrastes gaseosos.\nLa vía depende de la técnica y objetivo del estudio.",

"🔟 Emergencias tras contraste\nLas situaciones más críticas incluyen:\n• Reacciones alérgicas leves: picor, urticaria.\n• Reacciones graves: broncoespasmo, hipotensión, shock anafiláctico.\n• Se siguen protocolos de soporte vital:",

"1️⃣1️⃣ Soporte vital básico (SVB)\n• Valorar consciencia.\n• Abrir vía aérea (maniobra frente-mentón).\n• Comprobar respiración.\n• Iniciar RCP si no respira.\n• Usar DEA si está disponible.",

"1️⃣2️⃣ Soporte vital avanzado (SVA)\n• Intubación.\n• Adrenalina IV.\n• Canalización venosa.\n• Monitorización cardiaca.\n• Tratamiento farmacológico específico.",

"1️⃣3️⃣ Parada cardiorrespiratoria (PCR)\n• Identificación rápida.\n• Activar emergencias.\n• Compresiones torácicas 30:2.\n• Ventilación adecuada.\n• Uso precoz de desfibrilador.",

"1️⃣4️⃣ Conclusión\nLa unidad enseña el manejo seguro de contrastes y radiofármacos, sus tipos, riesgos, vías de administración y protocolos de actuación ante emergencias, garantizando seguridad del paciente y del personal."

  ],
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
  summary: [

"1️⃣ Introducción general\nLa unidad explica cómo prevenir infecciones en el entorno sanitario, incluyendo cadena epidemiológica, infecciones nosocomiales, medidas de higiene, aislamientos y gestión de residuos. El objetivo es proteger al paciente y al profesional.",

"2️⃣ Infección y cadena epidemiológica\n• La infección ocurre cuando un microorganismo invade zonas donde no debería estar.\n• Muchos microorganismos son beneficiosos salvo que se desplacen.\n• La cadena epidemiológica incluye:\n  - agente infeccioso\n  - reservorio / hospedador\n  - vía de salida\n  - vía de transmisión\n  - vía de entrada\n  - huésped susceptible\n• Vías de transmisión:\n  - contacto directo e indirecto\n  - vía aérea\n  - gotas respiratorias\n  - vectores (insectos)\n  - fómites (objetos contaminados)",

"3️⃣ Infecciones nosocomiales\n• Son infecciones adquiridas dentro del hospital.\n• No cuentan las que estaban incubando en las primeras 72h.\n• Tipos:\n  - Exógenas → proceden del entorno.\n  - Endógenas → causadas por flora del propio paciente.\n• Factores de riesgo:\n  - edad avanzada\n  - inmunodepresión\n  - cirugías\n  - catéteres\n  - sondas\n  - ventilaciones mecánicas\n  - estancia prolongada",

"4️⃣ Medidas de higiene y seguridad\n• Lavado de manos → medida más eficaz de prevención.\n• Debe realizarse:\n  - antes del contacto con el paciente\n  - después del contacto\n  - antes de procedimientos asépticos\n  - tras exposición a fluidos\n• Procedimiento correcto incluye frotado, enjabonado, aclarado y secado adecuado.\n• Equipos de protección individual (EPI): guantes, mascarillas, batas, gafas.\n• Desinfección regular de superficies y material reutilizable.",

"5️⃣ Aislamiento\n• Se aplica dependiendo del tipo de enfermedad y riesgo.\n• Tipos de aislamiento y sus objetivos:\n  - **Estricto**: máximo control, múltiples EPI.\n  - **Respiratorio**: evitar aerosoles y gotas finas.\n  - **Gotas**: distancia + mascarilla.\n  - **Contacto**: guantes + bata.\n  - **Entérico**: control de heces y vómitos.\n  - **Protector o inverso**: protege al paciente inmunodeprimido.\n• Cada aislamiento define:\n  - habitación específica\n  - higiene del personal\n  - eliminación diferenciada de residuos\n  - uso de EPI especializado",

"6️⃣ Eliminación de residuos sanitarios\n• Se clasifican en 4 grupos:\n  1. **Grupo I – Residuos urbanos** (papeles, restos no biológicos).\n  2. **Grupo II – Biosanitarios no específicos** (gasas sin sangre abundante, guantes).\n  3. **Grupo III – Biosanitarios específicos / infecciosos** (sangre, fluidos, material contaminado).\n  4. **Grupo IV – Residuos peligrosos** (citotóxicos, químicos, punzantes).\n• Los punzantes deben ir SIEMPRE a contenedores rígidos.\n• La gestión correcta evita contagios, accidentes y contaminación ambiental.",

"7️⃣ Conclusión\nLa unidad destaca la importancia de romper la cadena epidemiológica mediante higiene, aislamiento, protección personal y correcta eliminación de residuos. Todo el personal debe seguir los protocolos para garantizar seguridad y reducir infecciones."

  ],

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
{
  id: "ap-final",
  title: "⭐ AP · Prueba final · 40 preguntas",
  isFinal: true,
  questions: [
    {
      q: "¿Cómo conocemos a la intervención quirúrgica en la que se realiza una abertura u orificio artificial (estoma) en el tejido para poner una víscera en contacto con el exterior?",
      options: ["Estomía", "Orificimía", "Ostomía", "Celotomía"],
      correct: 2,
      explain:
        "La ostomía es la intervención en la que se crea un estoma para comunicar una víscera (intestino, vejiga, etc.) con el exterior. 'Estomía' y 'orificimía' no son términos correctos en este contexto y la celotomía es una apertura de la cavidad abdominal, pero no implica necesariamente la creación de un orificio permanente hacia el exterior."
    },
    {
      q: "¿Cómo debe actuar el personal sanitario ante la presencia inadvertida de personas dentro del búnker durante la irradiación?",
      options: [
        "Sellar inmediatamente las salidas de la sala",
        "Entrar lo antes posible, antes de desactivar los equipos",
        "Activar el botón de parada de emergencia y comunicar la incidencia",
        "Dar medicación a los pacientes y mandarlos a casa a la espera de que su condición mejore"
      ],
      correct: 2,
      explain:
        "Ante una irradiación accidental, la prioridad es detener la emisión de radiación: se pulsa el botón de parada de emergencia y se comunica la incidencia. Sellar salidas o entrar sin detener el equipo es peligroso y dar medicación sin resolver la causa no tiene sentido en seguridad radiológica."
    },
    {
      q: "¿Cómo denominamos a la recreación fingida de una emergencia como si fuera real que sirven para entrenar, ensayar y aplicar los protocolos de emergencia y formar al personal del centro?",
      options: ["Simulación", "Escenificación", "Simulacro", "Recreación"],
      correct: 2,
      explain:
        "En el ámbito sanitario y de emergencias, un simulacro es el ejercicio práctico que reproduce una situación de emergencia para entrenar al personal. 'Simulación' es más genérico, 'escenificación' o 'recreación' no son los términos técnicos usados en los planes de emergencia."
    },
    {
      q: "¿Cuál de las siguientes alteraciones de la personalidad se caracteriza por una profunda tristeza o apatía, que afectan a cómo la persona se relaciona con las demás y con su entorno?",
      options: [
        "Personalidad narcisista",
        "Personalidad depresiva",
        "Personalidad esquizoide",
        "Personalidad antisocial"
      ],
      correct: 1,
      explain:
        "La personalidad depresiva se caracteriza por tristeza persistente, apatía y visión pesimista, que dificultan las relaciones. La narcisista se centra en la autoimportancia, la esquizoide en el aislamiento emocional y la antisocial en el desprecio por las normas."
    },
    {
      q: "¿Cuál de las siguientes características del consentimiento informado consiste en la utilización de un lenguaje que evite tecnicismos y lo más sencillo posible?",
      options: ["Voluntariedad", "Información", "Comprensibilidad", "Decisión"],
      correct: 2,
      explain:
        "La comprensibilidad exige que la información se dé en un lenguaje claro y adaptado al paciente. Voluntariedad se refiere a que no haya coacción, 'información' a que reciba datos suficientes y 'decisión' al acto final de aceptar o rechazar."
    },
    {
      q: "¿Cuál de las siguientes características no es necesario que cumpla un radiofármaco?",
      options: [
        "Afinidad por la zona de estudio",
        "Periodo de semidesintegración corto",
        "Eficiencia y estabilidad",
        "Todas son correctas"
      ],
      correct: 3,
      explain:
        "Un radiofármaco debe concentrarse en el órgano de interés, tener una semivida adecuada (suele ser corta para reducir dosis) y ser estable y eficaz. Por tanto, todas las características son deseables y necesarias, de ahí que la opción correcta sea 'todas son correctas'."
    },
    {
      q: "¿Cuál de las siguientes es una emergencia de tipo general?",
      options: [
        "Paradas cardiorrespiratorias",
        "Irradiación",
        "Contaminaciones",
        "Todas son correctas."
      ],
      correct: 0,
      explain:
        "Las paradas cardiorrespiratorias pueden ocurrir en cualquier punto del hospital y no dependen de un área concreta, por eso se consideran emergencias generales. Irradiaciones y contaminaciones se relacionan específicamente con áreas con radiaciones ionizantes."
    },
    {
      q: "¿Cuál de las siguientes escalas no se utiliza para evaluar la consciencia de los pacientes?",
      options: ["Glasgow", "Barthel", "Celsius", "Karnofsky"],
      correct: 2,
      explain:
        "Glasgow, Barthel y Karnofsky se usan para evaluar diferentes aspectos del estado del paciente (nivel de consciencia, autonomía, estado funcional). Celsius es una escala de temperatura, no una escala clínica de consciencia."
    },
    {
      q: "¿Cuál de los siguientes factores no afecta a la absorción de los fármacos?",
      options: [
        "La vía de administración",
        "El grado de vascularización",
        "La temperatura corporal",
        "Las características del organismo"
      ],
      correct: 2,
      explain:
        "La vía de administración, la vascularización y las características del organismo (pH, integridad de mucosas, etc.) influyen claramente en la absorción. La temperatura corporal, salvo situaciones extremas, tiene un impacto mucho menor y no es un factor determinante en condiciones normales."
    },
    {
      q: "¿Cuál de los siguientes no es un aspecto cultural que debamos tener en cuenta en la mediación con los pacientes?",
      options: ["Género", "Religión", "Origen", "Todos son aspectos culturales"],
      correct: 3,
      explain:
        "Género, religión y origen forman parte del contexto cultural del paciente y condicionan creencias y preferencias sanitarias. Por tanto, todos son aspectos culturales relevantes a tener en cuenta en la relación asistencial."
    },
    {
      q: "¿Cuál de los siguientes no es un tipo de catéter intravenoso?",
      options: ["Palomita", "Abbocath", "Venocath", "Todas son correctas."],
      correct: 3,
      explain:
        "Palomita, Abbocath y Venocath son nombres comerciales o tipos de catéter intravenoso periférico. Como las tres opciones son ejemplos válidos, la única respuesta correcta es 'todas son correctas'."
    },
    {
      q: "¿Cuál de los siguientes no es un tipo de comunicación verbal?",
      options: ["Oral", "Escrita", "Signada", "Todas las indicadas son comunicaciones verbales"],
      correct: 3,
      explain:
        "La comunicación verbal incluye cualquier forma que use un código lingüístico: hablado, escrito o signado. Por eso oral, escrita y lengua de signos son formas de comunicación verbal; ninguna de las tres es 'no verbal'."
    },
    {
      q: "¿Cuál de los siguientes no se incluye dentro de los equipos básicos de cualquier unidad?",
      options: ["De oxigenoterapia", "Aspiradores", "Sondas", "Tubos de rayos X"],
      correct: 3,
      explain:
        "Los equipos básicos de la mayoría de unidades incluyen oxigenoterapia, aspiradores y sondas. Los tubos de rayos X son específicos de equipos radiológicos y no se consideran equipamiento básico general."
    },
    {
      q: "¿Cuáles de los siguientes profesionales son los principales encargados de preparar a los pacientes para la realización de pruebas?",
      options: ["Médicos responsables", "Radiofísicos", "Enfermería", "Técnicos especializados"],
      correct: 2,
      explain:
        "El personal de enfermería suele encargarse de la preparación del paciente (información básica, canalización de vías, higiene, etc.). Los médicos prescriben y supervisan, los técnicos manejan equipos y los radiofísicos se centran en la parte física-dosimétrica."
    },
    {
      q: "¿En qué documento se resumen las vías de entrada de los haces aplicados en la radioterapia (para radioterapia externa) o la posición de las fuentes (cuando se trata de braquiterapia)?",
      options: ["Dosimetría", "Radioinforme", "Hoja de tratamiento", "Hoja de citación"],
      correct: 0,
      explain:
        "La dosimetría registra cómo se distribuye la dosis de radiación, las vías de entrada de los haces y la colocación de fuentes en braquiterapia. El radioinforme es el informe médico, la hoja de tratamiento recoge pautas generales y la hoja de citación solo datos de la cita."
    },
    {
      q: "¿En qué tipo de atención del sistema sanitario español se incluye la atención sanitaria de mayor complejidad?",
      options: ["Atención primaria", "Atención especializada", "Atención personalizada", "Atención patológica"],
      correct: 1,
      explain:
        "La atención especializada se presta en hospitales y centros de especialidades e incluye procedimientos de mayor complejidad que la atención primaria. 'Atención personalizada' y 'patológica' no son niveles reales del SNS."
    },
    {
      q: "¿En qué unidad se aplican técnicas para obtener imágenes que se utilizarán para obtener un diagnóstico?",
      options: [
        "Medicina nuclear y radiodiagnóstico",
        "Radioterapia",
        "Quimioterapia",
        "Ninguna de las anteriores es correcta."
      ],
      correct: 0,
      explain:
        "Las imágenes diagnósticas se realizan en los servicios de radiodiagnóstico y medicina nuclear. Radioterapia y quimioterapia son tratamientos, no unidades de diagnóstico por imagen."
    },
    {
      q: "¿Para qué tipo de pacientes se debe evitar el uso de radiaciones ionizantes salvo en casos de emergencia?",
      options: ["Pacientes embarazadas", "Pacientes no colaboradores", "Pacientes pediátricos", "Pacientes politraumatizados"],
      correct: 0,
      explain:
        "En embarazadas se evita al máximo la exposición a radiaciones ionizantes por el riesgo teratogénico y carcinogénico para el feto. En pediatría también se tiene precaución, pero el embarazo es el principal caso de contraindicación relativa."
    },
    {
      q: "¿Qué componente de la comunicación no verbal incluye los movimientos que se realizan más allá de la comunicación verbal?",
      options: ["Quinesia", "Prosémica", "Paralenguaje", "Ontogenia"],
      correct: 0,
      explain:
        "La quinesia estudia los movimientos del cuerpo (gestos, postura, expresión facial). La prosémica se refiere al uso del espacio, el paralenguaje a aspectos de la voz y 'ontogenia' no pertenece a la clasificación de la comunicación no verbal."
    },
    {
      q: "¿Qué contenedor debe utilizarse para el material cortante y punzante?",
      options: ["Bolsas de color rojo", "Bolsas de color verde", "Contenedores amarillos con tapa roja o verde", "Cajas de cartón esterilizadas"],
      correct: 2,
      explain:
        "El material cortante y punzante se elimina en contenedores rígidos amarillos con tapa (roja o verde), diseñados para evitar pinchazos. Las bolsas no son seguras y las cajas de cartón no cumplen la normativa de bioseguridad."
    },
    {
      q: "¿Qué material se utiliza para realizar ventiloterapia de manera manual?",
      options: ["Ambú", "Cánula respiratoria", "Ostomía", "Respirador manométrico"],
      correct: 0,
      explain:
        "El balón autohinchable (Ambú) permite realizar ventilación manual al paciente. La cánula solo mantiene la vía aérea, la ostomía no tiene relación y el respirador manométrico es un equipo mecánico, no manual."
    },
    {
      q: "¿Qué nombre reciben los pacientes con lesiones de origen traumático que afectan a dos o más órganos o sistemas, de las que al menos uno presenta riesgo vital?",
      options: ["Pediátricos", "Especiales", "No colaboradores", "Politraumatizados"],
      correct: 3,
      explain:
        "Los pacientes politraumatizados presentan múltiples lesiones traumáticas en diferentes órganos o sistemas, con al menos una de ellas potencialmente mortal. 'Pediátrico', 'especial' o 'no colaborador' describen otras características, no esta situación concreta."
    },
    {
      q: "¿Qué parte de los sistemas de administración de oxígeno permite regular el flujo de oxígeno que se administra?",
      options: ["Humidificador", "Caudalímetro", "Manómetro", "Bombona"],
      correct: 1,
      explain:
        "El caudalímetro regula y muestra el flujo de oxígeno en litros/minuto. El humidificador solo humidifica el gas, el manómetro mide presión de la bombona y la bombona es el depósito de oxígeno."
    },
    {
      q: "¿Qué personal de las unidades de oncología radioterápica, medicina nuclear y radiodiagnóstico se encargan del mantenimiento, calibración y comprobación del buen funcionamiento de los equipos que se utilizan?",
      options: ["Personal accesorio", "Radiofísicos", "Técnicos especializados", "Médicos responsables"],
      correct: 1,
      explain:
        "Los radiofísicos hospitalarios son los especialistas en física médica encargados de calibrar, verificar y controlar los equipos de radiación. Los técnicos los operan, pero no realizan la verificación física-dosimétrica."
    },
    {
      q: "¿Qué término incluye todas aquellas medidas que tienen como finalidad prevenir y evitar las infecciones nosocomiales propias de los centros sanitarios?",
      options: ["Prevención", "Higiene", "Mantenimiento", "Planificación"],
      correct: 1,
      explain:
        "La higiene hospitalaria reúne las normas y procedimientos para evitar infecciones nosocomiales: lavado de manos, desinfección, esterilización, etc. La prevención es más general y mantenimiento o planificación no se centran específicamente en la infección."
    },
    {
      q: "¿Qué término usamos para referirnos al conjunto de personas que pueden beneficiarse de los servicios ofrecidos por un sistema sanitario?",
      options: ["Población susceptible", "Pacientes potenciales", "Cobertura poblacional", "Individuos asistibles"],
      correct: 2,
      explain:
        "La cobertura poblacional indica qué parte de la población está incluida y puede utilizar un sistema sanitario. 'Población susceptible' se usa más en epidemiología y las otras expresiones no son términos técnicos habituales."
    },
    {
      q: "¿Qué tipo de aislamiento es común para la protección de personas inmunodeprimidas?",
      options: [
        "Aislamiento protector o inverso",
        "Aislamiento de contacto",
        "Aislamiento entérico",
        "Aislamiento estricto"
      ],
      correct: 0,
      explain:
        "En el aislamiento protector o inverso se intenta proteger al paciente inmunodeprimido de los microorganismos del entorno. El de contacto, entérico o estricto están más orientados a evitar la transmisión desde el paciente hacia otros."
    },
    {
      q: "¿Qué tipo de aislamiento está diseñado para prevención de enfermedades infecciosas por contacto directo o indirecto con heces o restos de estas?",
      options: ["Entérico", "Respiratorio", "Digestivo", "De contacto"],
      correct: 0,
      explain:
        "El aislamiento entérico se emplea cuando el principal mecanismo de transmisión es fecal-oral, por contaminación con heces. El respiratorio se usa para aerosoles o gotas y el de contacto es más genérico."
    },
    {
      q: "¿Qué tipo de contrastes son el aire y otros gases inertes?",
      options: ["Positivos", "Negativos", "Neutros", "No son contrastes"],
      correct: 1,
      explain:
        "Los contrastes negativos disminuyen la atenuación de los rayos X y se ven más oscuros; el ejemplo típico es el aire o gases inertes. Los positivos (bario, yodo) aumentan la densidad radiológica."
    },
    {
      q: "¿Qué tipo de contrastes son el sulfato de bario, derivados del yodo y compuestos de gadolinio?",
      options: ["Positivos", "Neutros", "Negativos", "Todas son incorrectas"],
      correct: 0,
      explain:
        "Estos compuestos aumentan la atenuación y se visualizan blancos en la imagen, por lo que se llaman contrastes positivos. Los negativos son aire o CO2."
    },
    {
      q: "¿Qué tipo de fuentes de infección consisten en agentes infecciosos que ya se encuentran en el organismo, pero que al cambiar las condiciones ambientales pasan a ser infecciosos?",
      options: ["Exógenas", "Exoendógenas", "Endógenas", "Xenógenas"],
      correct: 2,
      explain:
        "En las infecciones endógenas, el agente ya vive en el organismo como flora habitual, pero al cambiar determinadas condiciones (bajada de defensas, rotura de barreras) se vuelve patógeno. Exógenas vienen del exterior."
    },
    {
      q: "¿Qué tipo de necesidad es la pertenencia a un grupo (familiar, amistoso o laboral)?",
      options: ["Fisiológica", "De seguridad", "Social", "De autoestima"],
      correct: 2,
      explain:
        "Según Maslow, la pertenencia a un grupo corresponde a las necesidades sociales: afecto, amistad, integración. Las fisiológicas son las más básicas (comer, dormir) y la seguridad se refiere a estabilidad y protección."
    },
    {
      q: "¿Qué tipo de necesidades se sitúan en el primer nivel de la pirámide de Maslow?",
      options: ["Autorrealización", "Necesidades sociales", "Seguridad", "Necesidades fisiológicas"],
      correct: 3,
      explain:
        "En la base de la pirámide están las necesidades fisiológicas (respirar, comer, beber, dormir). Solo cuando estas se cubren de forma razonable se buscan la seguridad, las sociales, la autoestima y la autorrealización."
    },
    {
      q: "¿Qué tipo de sonda se utiliza principalmente para realizar lavados gástricos?",
      options: ["Sonda de Salem", "Sonda Levin", "Sonda nasoentérica", "Sonda de gastrostomía"],
      correct: 1,
      explain:
        "La sonda Levin es una sonda nasogástrica de gran calibre que se utiliza con frecuencia para lavados gástricos. La de Salem es de doble luz para aspiración, la nasoentérica llega al intestino y la de gastrostomía entra directamente al estómago por la pared abdominal."
    },
    {
      q: "A la hora de movilizar pacientes, debemos tener en cuenta...",
      options: [
        "Los principios de ergonomía y mecánica corporal",
        "Al personal cuidador",
        "Las necesidades de la persona a movilizar",
        "Todo lo anterior"
      ],
      correct: 3,
      explain:
        "Una movilización segura exige proteger la espalda del profesional (ergonomía), valorar la ayuda disponible (personal cuidador) y adaptar la técnica a la situación y capacidad del paciente. Por eso la respuesta correcta integra todos los elementos."
    },
    {
      q: "En la administración organizativa del Sistema Nacional de Salud español, ¿Qué organismo realiza la gestión a nivel central?",
      options: ["Comunidades autónomas", "Ministerio de Sanidad", "Hospitales centrales", "Ninguna es correcta"],
      correct: 1,
      explain:
        "El Ministerio de Sanidad es el responsable de la coordinación y planificación general del SNS a nivel estatal. Las comunidades autónomas gestionan sus servicios regionales, pero el nivel central corresponde al Ministerio."
    },
    {
      q: "En la cadena epidemiológica, ¿Qué tipo de vectores son los animales?",
      options: ["Pasivos", "Activos", "Mixtos", "Inertes"],
      correct: 1,
      explain:
        "Los vectores activos, como muchos animales y artrópodos, participan activamente en la transmisión del agente (picadura, mordedura, etc.). Los pasivos solo transportan el agente sin que este se multiplique en ellos."
    },
    {
      q: "Indica la opción correcta sobre la citación de pacientes:",
      options: [
        "El horario disponible debe estar cubierto completamente",
        "No es necesario programar las pruebas, pues los pacientes se organizan de manera autónoma",
        "Deben dejarse espacios sin citación por la posibilidad de que surjan imprevistos",
        "Ninguna es correcta."
      ],
      correct: 2,
      explain:
        "Dejar huecos libres permite absorber urgencias, retrasos o incidencias sin colapsar la agenda. Cubrir todo el horario sin margen hace que cualquier imprevisto genere largas esperas."
    },
    {
      q: "La alteración del pulso por encima de 80 ppm se conoce como...:",
      options: ["Taquicardia", "Bradicardia", "Notocardia", "Asincrocardia"],
      correct: 0,
      explain:
        "La taquicardia es el aumento de la frecuencia cardíaca por encima de los valores normales de reposo. La bradicardia es pulso lento; las otras opciones no son términos clínicos habituales."
    },
    {
      q: "La situación (o circunstancias) en las que se produce la comunicación y que puede afectar a cómo se interpreta el mensaje se conoce como...:",
      options: ["Contexto", "Casuística", "Ambiente", "Todas son incorrectas."],
      correct: 0,
      explain:
        "El contexto incluye lugar, momento, relación entre interlocutores y estado emocional, y condiciona cómo se entiende el mensaje. 'Ambiente' es más genérico y 'casuística' se refiere al conjunto de casos, no al marco comunicativo."
    }
  ]
},


  
    /* ================== ANATOMÍA ================== */

    {
  id: "an-u1",
  title: "AN · U1 · Posición anatómica, planos y cavidades",
  summary: "Unidad 1: Localización de Estructuras Anatómicas\n\n1.1 Posición Anatómica, Ejes y Planos\n\nPosición Anatómica Estándar:\nEs la posición neutral de referencia para la descripción. El cuerpo debe estar en:\n• Bipedestación (de pie).\n• Cabeza erecta, ojos mirando al frente.\n• Brazos extendidos a los lados.\n• Palmas de las manos orientadas hacia adelante.\n• Pies paralelos.\n\nEjes Anatómicos (Líneas Imaginarias):\n1. Eje Vertical (o Longitudinal): Cráneo-caudal (de cabeza a pies).\n2. Eje Transversal: Latero-lateral (de lado a lado).\n3. Eje Anteroposterior (o Frontal): Desde la parte anterior (ventral) hacia la parte posterior (dorsal).\n\nPlanos Anatómicos (Superficies de Corte):\nLos planos dividen el cuerpo en secciones utilizando los ejes como referencia.\n1. Plano Sagital (o Medio): Se extiende verticalmente, dividiendo el cuerpo en mitad derecha e izquierda.\n2. Plano Frontal (o Coronal): Divide el cuerpo en parte anterior (ventral) y posterior (dorsal).\n3. Plano Transversal (u Horizontal o Axial): Se extiende horizontalmente dividiendo el cuerpo en parte superior e inferior. Importante en tomografía.\n\n1.2 Términos de Posición, Dirección y Movimiento\n\nTérminos de orientación:\n• Cráneo/Cefálico: Más cerca de la cabeza.\n• Caudal: Más cerca del extremo inferior del tronco (pies).\n• Ventral (Anterior): Hacia la parte delantera.\n• Dorsal (Posterior): Hacia la parte trasera.\n• Proximal: Más cerca del tronco.\n• Distal: Más lejos del tronco.\n• Medial: Más cerca del plano sagital.\n• Lateral: Más lejos del plano sagital.\n• Superficial: Más cerca de la superficie del cuerpo.\n• Interno/Profundo: Más lejos de la superficie.\n\nMovimientos Anatómicos:\n• Flexión: Disminución del ángulo.\n• Extensión: Aumento del ángulo.\n• Abducción: Alejamiento de la línea media.\n• Aducción: Acercamiento a la línea media.\n• Rotación Interna: Giro hacia el eje central.\n• Rotación Externa: Giro alejándose del eje.\n• Protrusión: Movimiento hacia adelante.\n• Retrusión: Movimiento hacia atrás.\n\nPosiciones Clínicas:\n• Decúbito Supino: Boca arriba.\n• Decúbito Prono: Boca abajo.\n• Semisentada (Fowler): Supino 45º.\n• Trendelemburg: Piernas elevadas.\n• Trendelemburg Invertida: Cabeza elevada.\n• Lateral o Sims: Acostado de costado.\n\n1.3 Regiones Corporales y Cavidades del Cuerpo\n\nRegiones del cuerpo:\n1. Cabeza y cuello.\n2. Tronco (tórax, abdomen, pelvis, dorso).\n3. Extremidades.\n\nCavidades Corporales:\n1. Dorsal: Craneal (encéfalo) y Espinal (médula espinal).\n2. Ventral:\n• Torácica: Pulmones, corazón, mediastino.\n• Abdominopélvica: Órganos digestivos, excretores y reproductores.\n\n1.5 Referencias anatómicas superficiales y proyección de órganos\n\nReferencias en el tórax: Ángulo Esfernal, línea medioclavicular, línea media esternal.\n\nProyección de órganos torácicos:\n• Pulmones: Sobre el tercio medio de la clavícula.\n• Tráquea: Línea media desde C6 a T4.\n\nDivisión por cuadrantes:\n1. Superior Derecho: Hígado, vesícula, riñón derecho.\n2. Superior Izquierdo: Bazo, estómago.\n3. Inferior Derecho: Ciego, apéndice.\n4. Inferior Izquierdo: Colon sigmoideo.\n\nDivisión por regiones (9):\n• Hipocondrio derecho, Epigastrio, Hipocondrio izquierdo.\n• Flanco derecho, Umbilical, Flanco izquierdo.\n• Fosa ilíaca derecha, Hipogastrio, Fosa ilíaca izquierda.",
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
      q: "¿En qué posición se encuentra el paciente ?",
      image:"/images/IMAGE1.png",
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
      image:"/images/IMAGE2.png",
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
  summary: "Técnicas de Imagen Médica: Comparación entre RX, TC, Ecografía y RM. RX ventajas: Rápida, bajo coste, buena para esqueleto y aire. Limitaciones: Solo un plano, estructuras superpuestas, densidad dominante. TC ventajas: Rápida, gran detalle de regiones amplias, buena para vasos y cráneo. Limitaciones: Alta radiación (evitar en embarazo y niños), menos precisa que RM para tejidos blandos. Ecografía ventajas: No usa radiación ionizante, accesible, útil para muchos sistemas. Limitaciones: Artefactos por aire, hueso o grasa, dependiente de la habilidad del técnico. RM ventajas: No usa radiación, alta resolución, muy detallada. Limitaciones: Tiempos largos, claustrofobia, artefactos metálicos, mala para pulmones. Posiciones y Proyecciones (2.3): RX usa posición (paciente respecto al receptor) y proyección (haz frontal, lateral, oblicua). TC/RM: Posición más común decúbito supino; cortes en plano axial, sagital y coronal. Ecografía: Posición variable y dinámica según zona a estudiar. Normas de Lectura (2.4): Asegurar claridad y elementos solicitados. En RX/TC empezar por lo menos importante y terminar en lo más relevante. En TC empezar por lo oscuro y terminar en lo claro. En ecografía la interpretación es en tiempo real. En RM considerar secuencia T1 o T2 y evitar saltos. Reconocimiento de Órganos (2.5 y 2.6): SNC usa TC o RM (mejor RM para tejidos blandos). Respiratorio: RX para visión general y TC para detalle. Digestivo/Excretor: Frecuente uso de contraste. Sustancias de contraste: Compuestos como Bario o Yodo que absorben radiación y mejoran visualización interna. Aparato circulatorio: TC (Angio-TC) y RM son mejores, normalmente con contraste IV para vasos finos. El corazón se visualiza con todas pero TC/RM son superiores. Sistema músculoesquelético: Huesos bien en RX, TC y RM. Músculos, tendones y ligamentos mejor en ecografía o RM. Optimización de la imagen (2.8): Resolución (más píxeles = mayor claridad), saturación (pureza del color/gris) y brillo (luminosidad). Ajustar estos parámetros permite diferenciar estructuras y lesiones.",
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
  summary:"Huesos: Estructura y Función (3.1 & 3.2) Funciones: Soporte, Movimiento, Protección, Hematopoyesis y Metabolismo (Ca). Estructura: Tejido compacto (superficie) y esponjoso (interior). Tipo: Largos Soportan peso. Tienen Epífisis, Diáfisis, Metáfisis. Ejemplo: Fémur, Húmero. Planos Protección. Cráneo, Pelvis. Marcas Óseas Relieves articulares: Cóndilo, Cabeza, Tróclea. Relieves no articulares: Trocánter, Tubérculo, Espina. Depresiones: Fosa, Foramen, Cavidad glenoidea. 2. Esqueleto Axial (3.4 & 3.5) Cráneo: 22 huesos inmóviles (excepto mandíbula). Se divide en Bóveda Craneal (protege encéfalo) y Esqueleto Facial. Columna Vertebral: 33 vértebras. Regiones: Cervical (C1-C7), Torácica (T1-T12), Lumbar (L1-L5), Sacro, Cóccix. Curvaturas Normales: Cifosis (Torácica, Sacra) y Lordosis (Cervical, Lumbar). Patológicas: Escoliosis, Hipercifosis, Hiperlordosis. 3. Miembros (3.6 & 3.7) Superior: Escápula/Clavícula (Cintura Escapular) → Húmero → Radio/Cúbito → Carpo/Metacarpos/Falanges. Inferior: Huesos Coxales (Cintura Pélvica) → Fémur → Tibia/Peroné → Tarso/Metatarsianos/Falanges. 4. Articulaciones (3.8) Tipo Movimiento Ejemplo Sinartrosis Nulo Suturas craneales Anfiartrosis Limitado Sínfisis púbica Diartrosis Libre Rodilla, Cadera Elementos Clave: Cartílago (amortigua), Líquido Sinovial (lubrica), Ligamentos (estabilidad), Meniscos (amortiguación). Técnicas de Imagen para Articulaciones: RX Simple: Para huesos, fracturas, calcificaciones y espacio articular. Ecografía: Ve partes blandas (tendones, ligamentos, bursas) en tiempo real y movimiento. TC: Para traumatismos complejos y reconstrucciones 3D. RM: La mejor para ver detalle de partes blandas (ligamentos, cartílago, médula ósea). 5. Músculos (3.9) Esquelético (Estriado): Voluntario. Cardíaco: Estriado, Involuntario (Corazón). Liso: Involuntario (Vísceras, vasos). 6. Patologías (3.10 & 3.11) Traumáticas: Fractura (RX, TC, RM), Luxación, Esguince (Ecografía, RM). Articulares: Artritis (inflamación), Artrosis (degeneración cartílago). Metabólicas: Osteoporosis (pérdida de densidad ósea). Diagnóstico con RX o DEXA. Tumores Óseos: Osteolíticos (destructivos) u Osteoblásticos (productivos). Evaluación Gráfica: Siempre revisar Alineación, Morfología, Espacio Articular y Partes Blandas.",
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
  summary:"Meninges y LCR: Son las capas protectoras: Duramadre (externa), Aracnoides y Piamadre (interna). Líquido Cefalorraquídeo (LCR): Líquido transparente que amortigua el tejido cerebral. Se produce en los plexos coroideos de los ventrículos y se reabsorbe en las granulaciones de Pacchioni. El Sistema Ventricular (4 ventrículos conectados) contiene el LCR. Si hay sobreproducción o bloqueo, ocurre Hidrocefalia. Anatomía Cerebral: El cerebro tiene 5 lóbulos: Frontal, Parietal, Temporal, Occipital e Ínsula. Traumatológicas: Lesiones primarias (hemorrágicas) y secundarias (edema, isquemia). Tumores: Primarios o Secundarios. Vasculares: Isquémicas (ictus por oclusión) o Malformaciones (cavernomas). Imagen Patológica (TC y RM): Las lesiones se identifican por cambios en la densidad (TC) o intensidad de señal (RM). Contenido Cálcico: Muy hiperdenso en TC. Contenido Hemorrágico: Hiperdenso en TC. Contenido Graso: Hipodenso en TC e hiperintenso en RM. Contenido Líquido: Hipodenso en TC e hiperintenso en T2. Órganos de los Sentidos: Vista (globo ocular, córnea, cristalino, retina, nervio óptico). Oído: Externo (CAE), Medio (osículos, trompa de Eustaquio), Interno (cóclea, vestíbulo). Hipotálamo: Centro de homeostasis; controla la hipófisis. Vascularización: Polígono de Willis, drenaje por senos venosos. Patologías del SNC: Congénitas (defectos del tubo neural), Traumáticas, Tumores y Vasculares. Protocolos de Evaluación: TC para hueso y traumatismos; RM para tejido blando y SNC. Misconcepción: TC usa radiación y es mejor para hueso; RM no usa radiación, mejor tejidos blandos, pero sensible al movimiento.",
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
      image:"/images/IMAGE3.png",
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
      image:"/images/IMAGE4.png",
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
      image:"/images/IMAGE5.png",
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
  summary:"Aparato Circulatorio (5.2 - 5.5) Anatomía y Fisiología: El corazón está en el Mediastino (entre los pulmones). Corazón: 4 cavidades (2 Aurículas, 2 Ventrículos). Aurícula Derecha: Recibe sangre con CO2 (Venas Cavas). Pasa a Ventrículo Derecho por Válvula Tricúspide. Aurícula Izquierda: Recibe sangre con O2 (Venas Pulmonares). Pasa a Ventrículo Izquierdo por Válvula Mitral. Ventrículo Derecho: Impulsa sangre a Pulmones (Arteria Pulmonar) por Válvula Pulmonar. Ventrículo Izquierdo: Impulsa sangre al cuerpo (Arteria Aorta) por Válvula Aórtica. Ciclo Cardíaco: Sístole (Contracción/Expulsión) y Diástole (Relajación/Llenado). Vasos: Arterias (salen del corazón, pared elástica y muscular, alta presión). Venas (entran al corazón, pared menos resistente, con válvulas para evitar retroceso). Sistema Linfático: transporta linfa (exceso líquido extracelular y grasa) de tejidos a venas. Patologías Cardiovasculares: Cardíacas: Insuficiencia Cardíaca (fallo de bombeo). Isquemia Coronaria (falta de riego). Angina (obstrucción parcial). Infarto (necrosis por obstrucción total). Arritmias (alteraciones del ritmo). Vasculares: Aterosclerosis (obstrucción por placa). Trombosis (coágulo). Varices (fallo de válvulas). Diagnóstico por Imagen: RX Tórax (PA en bipedestación, muestra estructuras extrapulmonares y parénquima). TC Tórax: técnica de elección, gran resolución para vía aérea, cisuras, vasos, mediastino. Ventanas: Mediastínica y Pulmonar. RM Tórax: limitada para parénquima por aire/movimiento pero excelente para mediastino y pared torácica. Técnicas Cardíacas: RX Cardíaca (índice cardiotorácico >0.55 = cardiomegalia). TC Cardíaca (detección calcificaciones, anatomía coronaria, aorta). RM Cardíaca (función, volúmenes, flujo). Ecocardiografía (válvulas, flujo). Angiografía (vasos con contraste yodado). Aparato Respiratorio (5.7 - 5.9). Anatomía y Fisiología: Función: captación de O2, eliminación de CO2, filtrado/calentamiento del aire. Vías aéreas: Superiores (Nariz, Faringe, Laringe – Fonación). Inferiores (Tráquea, Bronquios, Bronquiolos, Alvéolos). Alvéolos: intercambio gaseoso. Pulmones: Derecho (3 lóbulos) Izquierdo (2 lóbulos). Pleura: membrana doble que recubre los pulmones y caja torácica. Neumotórax: aire en espacio pleural. Diafragma: músculo principal respiración (Contracción = Inspiración). Patologías Respiratorias: Infecciosas (Neumonía, Tuberculosis). Obstructivas: EPOC (bronquitis crónica + enfisema). Restrictivas (Asma, Fibrosis Pulmonar). Tumorales (Laringe, Pulmones carcinoma). Diagnóstico por Imagen: RX Tórax (PA bipedestación). TC Tórax (elección). RM Tórax (mediastino/pared).",
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
  summary:"Aparato Circulatorio (5.2 - 5.5) Anatomía y Fisiología: El corazón está en el Mediastino (entre los pulmones). Corazón: 4 cavidades (2 Aurículas, 2 Ventrículos). Aurícula Derecha: Recibe sangre con CO2 (Venas Cavas). Pasa a Ventrículo Derecho por Válvula Tricúspide. Aurícula Izquierda: Recibe sangre con O2 (Venas Pulmonares). Pasa a Ventrículo Izquierdo por Válvula Mitral. Ventrículo Derecho: Impulsa sangre a Pulmones (Arteria Pulmonar) por Válvula Pulmonar. Ventrículo Izquierdo: Impulsa sangre al cuerpo (Arteria Aorta) por Válvula Aórtica. Ciclo Cardíaco: Sístole (Contracción/Expulsión) y Diástole (Relajación/Llenado). Vasos: Arterias (salen del corazón, pared elástica y muscular, alta presión). Venas (entran al corazón, pared menos resistente, con válvulas para evitar retroceso). Sistema Linfático: transporta linfa (exceso líquido extracelular y grasa) de tejidos a venas. Patologías Cardiovasculares: Cardíacas: Insuficiencia Cardíaca (fallo de bombeo). Isquemia Coronaria (falta de riego). Angina (obstrucción parcial). Infarto (necrosis por obstrucción total). Arritmias (alteraciones del ritmo). Vasculares: Aterosclerosis (obstrucción por placa). Trombosis (coágulo). Varices (fallo de válvulas). Diagnóstico por Imagen: RX Tórax (PA en bipedestación, muestra estructuras extrapulmonares y parénquima). TC Tórax: técnica de elección, gran resolución para vía aérea, cisuras, vasos, mediastino. Ventanas: Mediastínica y Pulmonar. RM Tórax: limitada para parénquima por aire/movimiento pero excelente para mediastino y pared torácica. Técnicas Cardíacas: RX Cardíaca (índice cardiotorácico >0.55 = cardiomegalia). TC Cardíaca (detección calcificaciones, anatomía coronaria, aorta). RM Cardíaca (función, volúmenes, flujo). Ecocardiografía (válvulas, flujo). Angiografía (vasos con contraste yodado). Aparato Respiratorio (5.7 - 5.9). Anatomía y Fisiología: Función: captación de O2, eliminación de CO2, filtrado/calentamiento del aire. Vías aéreas: Superiores (Nariz, Faringe, Laringe – Fonación). Inferiores (Tráquea, Bronquios, Bronquiolos, Alvéolos). Alvéolos: intercambio gaseoso. Pulmones: Derecho (3 lóbulos) Izquierdo (2 lóbulos). Pleura: membrana doble que recubre los pulmones y caja torácica. Neumotórax: aire en espacio pleural. Diafragma: músculo principal respiración (Contracción = Inspiración). Patologías Respiratorias: Infecciosas (Neumonía, Tuberculosis). Obstructivas: EPOC (bronquitis crónica + enfisema). Restrictivas (Asma, Fibrosis Pulmonar). Tumorales (Laringe, Pulmones carcinoma). Diagnóstico por Imagen: RX Tórax (PA bipedestación). TC Tórax (elección). RM Tórax (mediastino/pared).",
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
      image:"/images/IMAGE6.png",
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
  summary:"Aparato Genital (7.3 - 7.5): Masculino: Testículos: Producen espermatozoides y testosterona. Epidídimo: Maduración y almacenamiento de espermatozoides. Conducto Deferente: Transporta espermatozoides. Conducto Eyaculador: Se une a vesículas seminales. Pene: Órgano copulador. Glándulas Anexas: Vesículas Seminales, Próstata, Bulbouretrales (Cowper). Femenino: Ovarios: Producen óvulos, Estrógenos y Progesterona. Trompas de Falopio: Transportan óvulos, lugar de fecundación. Útero: Gestación. Vagina: Receptáculo del pene, canal de parto. Vulva: Genitales externos. Ciclo Ovárico: FSH y LH → Maduración del folículo → Ovulación → Cuerpo Lúteo. Ciclo Menstrual: Cambios en el endometrio (Fase Proliferativa, Secretora y Menstrual). Sistema Endocrino (7.1 & 7.2): Funciones Generales: Regulación Hormonal: Crecimiento, Metabolismo, Reproducción. Ejes Hormonales: Hipotálamo → Hipófisis → Glándulas → Órganos Diana. Retroalimentación: Regula la producción hormonal (inhibiendo o estimulando). Glándulas Principales: Hipotálamo: Controla el sistema nervioso vegetativo y la hipófisis. Hipófisis: Segrega hormonas que regulan otras glándulas. ADH: Reabsorción de agua en riñones. Oxitocina: Parto, lactancia, conducta sexual. LHRH: Regula ciclo menstrual/espermatogénesis. TRH: Estimula prolactina y tiroxina. Glándulas Suprarrenales: Médula: Adrenalina/Noradrenalina (respuesta al estrés). Corteza: Glucocorticoides (cortisol), Mineralcorticoides (aldosterona), Esteroides (andrógenos). Tiroides: Regula el metabolismo (Tiroxina/T3). Paratiroides: Regula el calcio (Parathormona). Páncreas: Insulina y Glucagón (regulan glucosa). Ovarios: Estrógenos y Progesterona (ciclo menstrual, caracteres sexuales secundarios). Patologías: Masculino: Pene: Balanitis, Cáncer de Pene. Testículos: Criptorquidia, Orquitis/Epididimitis. Próstata: Prostatitis, Hiperplasia Prostática Benigna, Adenoma Prostático, Cáncer de Próstata. Femenino: Cuello Uterino: Cervicitis, Pólipo Endocervical, Cáncer de Cuello Uterino. Cuerpo Uterino: Endometriosis, Tumores Benignos/Malignos. Ovarios: Quistes, Tumores. Mamas: Mastitis, Mastopatía Fibroquística, Tumores Benignos/Malignos. ETS: Sífilis, Condiloma Acuminado, SIDA, Herpes Genital. Alteraciones Endocrinas: Hipotálamo/Hipófisis: Trastornos de la temperatura, sed, apetito, sueño, pubertad, arritmias, hipogonadismo. Tiroides: Hipotiroidismo (↓ metabolismo), Hipertiroidismo (↑ metabolismo). Paratiroides: Hiperparatiroidismo (↑ Calcio), Hipoparatiroidismo (↓ Calcio). Páncreas: Diabetes (↑ Glucosa), Hiperinsulinismo (↓ Glucosa). Suprarrenales: Síndrome de Cushing (↑ Cortisol), Síndrome de Conn (↑ Aldosterona). Gónadas: Hipogonadismo (↓ Hormonas Sexuales).",
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
      image:"/images/IMAGE7.png",
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
{
  id: "an-final",
  title: "⭐ AN · Prueba final · 40 preguntas",
  isFinal: true,
  questions: [
    {
      q: "¿Cuál de las siguientes afirmaciones describe correctamente la posición de los brazos en la posición anatómica básica?",
      options: [
        "Brazos extendidos hacia adelante, con los puños cerrados.",
        "Brazos extendidos a los lados del cuerpo, con las palmas hacia adelante.",
        "Brazos flexionados a la altura de los hombros, con las palmas hacia atrás.",
        "Brazos cruzados sobre el pecho, con las palmas hacia arriba."
      ],
      correct: 1,
      explain:
        "En la posición anatómica básica la persona está de pie, con los brazos estirados a los lados del cuerpo y las palmas mirando al frente; esto sirve como referencia estándar para describir posiciones y movimientos."
    },
    {
      q: "¿Cuál de las siguientes afirmaciones es correcta en cuanto al uso de términos \"craneal\" y \"caudal\"?",
      options: [
        "La rodilla es más craneal que la cadera.",
        "La cabeza es más craneal que el cuello.",
        "El pie es más craneal que la rodilla.",
        "El cuello es más caudal que la pierna."
      ],
      correct: 1,
      explain:
        "Craneal significa más cercano a la cabeza y caudal más cercano a la cola (o parte inferior del tronco). La cabeza está por encima del cuello, así que es más craneal que este."
    },
    {
      q: "¿Cuál de las siguientes afirmaciones es correcta respecto al plano frontal (coronal)?",
      options: [
        "Divide el cuerpo en partes superior e inferior.",
        "Se extiende en dirección lateral, dividiendo en derecha e izquierda.",
        "Divide el cuerpo en partes anterior (ventral) y posterior (dorsal).",
        "Es un eje, no un plano."
      ],
      correct: 2,
      explain:
        "El plano frontal o coronal divide el cuerpo en parte anterior (delantera) y parte posterior (trasera). El que divide en derecha e izquierda es el sagital y el que divide en superior e inferior es el transversal."
    },
    {
      q: "¿Cuál de las siguientes marcas óseas NO es articular?",
      options: ["Cóndilo", "Epicóndilo", "Espina", "Tróclea"],
      correct: 2,
      explain:
        "Cóndilo y tróclea forman parte de superficies articulares. El epicóndilo está muy relacionado con la articulación, pero la espina es una prolongación ósea puntiaguda de inserción muscular, no articular."
    },
    {
      q: "¿Cuál de las siguientes NO es una función del sistema urinario?",
      options: [
        "Expulsión de sustancias de desecho.",
        "Filtrado de la sangre.",
        "Formación de la orina.",
        "Digestión de los nutrientes."
      ],
      correct: 3,
      explain:
        "El sistema urinario filtra la sangre, forma la orina y elimina desechos. La digestión de nutrientes es función principal del sistema digestivo, no del urinario."
    },
    {
      q: "¿Cuál de las siguientes técnicas de imagen apenas es empleada en el estudio del aparato genital masculino?",
      options: [
        "Ecografía",
        "Tomografía computarizada",
        "Resonancia magnética",
        "El aparato genital masculino no se estudia mediante ninguna técnica de imagen"
      ],
      correct: 1,
      explain:
        "El aparato genital masculino se estudia sobre todo con ecografía (testículos, próstata) y, en casos específicos, con resonancia magnética. La tomografía computarizada se usa muy poco para este sistema."
    },
    {
      q: "¿Cuál de las siguientes técnicas de imagen se caracteriza por depender en gran medida de la habilidad del operador que maneja el equipo, ya que es el único método en el que la adquisición de las imágenes no está estandarizada y se realiza en tiempo real durante la exploración?",
      options: [
        "Resonancia magnética",
        "Ecografía",
        "Tomografía computarizada",
        "Radiología convencional"
      ],
      correct: 1,
      explain:
        "La ecografía es muy operador-dependiente: el técnico decide dónde y cómo coloca el transductor y las imágenes se obtienen en tiempo real, sin un protocolo tan rígido como en TC o RM."
    },
    {
      q: "¿Cuál de las siguientes técnicas imagenológicas no hace uso de rayos X?",
      options: [
        "Ecografía",
        "Radiología convencional",
        "Tomografía computarizada",
        "Radiología con contraste"
      ],
      correct: 0,
      explain:
        "La ecografía utiliza ondas de ultrasonido, no radiación ionizante. La radiología convencional, la TC y la radiología con contraste sí emplean rayos X."
    },
    {
      q: "¿Cuál de los siguientes compartimentos se encuentra lleno de líquido cefalorraquídeo?",
      options: [
        "Espacio epidural",
        "Espacio subdural",
        "Espacio subaracnoideo",
        "Espacio subpiamadral"
      ],
      correct: 2,
      explain:
        "El líquido cefalorraquídeo circula por el espacio subaracnoideo (entre aracnoides y piamadre) y por los ventrículos. El espacio epidural está fuera de la duramadre y el subdural es un espacio potencial."
    },
    {
      q: "¿Cuál de los siguientes ejemplos describe correctamente un movimiento de abducción?",
      options: [
        "Bajar el brazo desde una posición elevada hacia el cuerpo.",
        "Separar el brazo del cuerpo lateralmente.",
        "Flexionar el codo para acercar la mano al hombro.",
        "Girar la cabeza hacia la derecha."
      ],
      correct: 1,
      explain:
        "La abducción es el movimiento que separa un segmento del cuerpo de la línea media, como cuando abrimos el brazo hacia fuera. El movimiento contrario es la aducción."
    },
    {
      q: "¿Cuál es la técnica de imagen más utilizada para el estudio del tejido mamario?",
      options: ["Ecografía", "Resonancia magnética", "Mamografía", "Tomografía computarizada"],
      correct: 2,
      explain:
        "La mamografía es la técnica de cribado y estudio principal de la mama en radiología. La ecografía y la RM se usan como complementos según el caso."
    },
    {
      q: "¿Para qué sirven las microvellosidades características del intestino delgado?",
      options: [
        "Para secretar jugos digestivos y descomponer proteínas.",
        "Para aumentar la superficie de absorción de nutrientes hacia la sangre.",
        "Para impulsar el bolo alimenticio mediante contracciones.",
        "Para almacenar los nutrientes antes de su distribución al organismo."
      ],
      correct: 1,
      explain:
        "Las microvellosidades aumentan muchísimo la superficie de contacto del intestino delgado con el contenido intestinal, facilitando una absorción eficiente de nutrientes."
    },
    {
      q: "¿Qué muestra la siguiente imagen?",
      options: [
        "Una tomografía computarizada cerebral, en la que se observan calcificaciones.",
        "Una tomografía computarizada cerebral, en la que se observan quistes en ambos hemisferios.",
        "Una resonancia magnética cerebral, en la que se observan calcificaciones.",
        "Una resonancia magnética cerebral, en la que se observan quistes en ambos hemisferios."
      ],
      correct: 3,
      explain:
        "El enunciado indica que se trata de una RM cerebral con imágenes compatibles con quistes en ambos hemisferios (lesiones llenas de líquido, bien delimitadas). Las calcificaciones se ven mejor en TC."
    },
    {
      q: "¿Qué prueba de imagen se emplea habitualmente para valorar los vasos cerebrales en una isquemia cerebral?",
      options: [
        "Resonancia magnética sin contraste.",
        "Radiografía simple de cráneo.",
        "Angio-TC con contraste.",
        "Ecografía transabdominal."
      ],
      correct: 2,
      explain:
        "La angio-TC con contraste permite visualizar el árbol arterial cerebral y localizar estenosis u oclusiones en contexto de ictus isquémico."
    },
    {
      q: "Atendiendo a la clasificación morfológica de los huesos, se considera un hueso largo:",
      options: ["El fémur.", "La vértebra T3.", "El escafoides.", "El maxilar."],
      correct: 0,
      explain:
        "Los huesos largos tienen una diáfisis y dos epífisis; un ejemplo típico es el fémur. Las vértebras son irregulares, el escafoides es corto y el maxilar es plano/irregular."
    },
    {
      q: "Conecta la aurícula izquierda con el ventrículo izquierdo:",
      options: [
        "Válvula mitral",
        "Válvula pulmonar",
        "Válvula aórtica",
        "Válvula tricúspide"
      ],
      correct: 0,
      explain:
        "La válvula mitral (o bicúspide) se sitúa entre la aurícula izquierda y el ventrículo izquierdo. La tricúspide está entre aurícula y ventrículo derechos."
    },
    {
      q: "Considerando la organización de las estructuras del cuerpo en cavidades corporales, el mediastino se localiza:",
      options: [
        "En la cavidad dorsal. Concretamente, en la cavidad torácica.",
        "En la cavidad ventral. Concretamente, en la cavidad torácica.",
        "En la cavidad dorsal. Concretamente, en la cavidad abdominal.",
        "En la cavidad ventral. Concretamente, en la cavidad abdominal."
      ],
      correct: 1,
      explain:
        "El mediastino es la región central de la cavidad torácica (parte de la cavidad ventral) donde se sitúan el corazón, grandes vasos, tráquea, etc."
    },
    {
      q: "Constituye la unidad funcional básica del pulmón:",
      options: ["Alveolos.", "Epiglotis.", "Bronquios.", "Células ciliadas."],
      correct: 0,
      explain:
        "Los alveolos son los sacos microscópicos donde se realiza el intercambio gaseoso. Los bronquios son conductos de mayor calibre que solo conducen el aire."
    },
    {
      q: "Debido a su ubicación profunda, el páncreas no se visualiza correctamente con:",
      options: [
        "Tomografía computarizada.",
        "Resonancia magnética.",
        "Ecografía abdominal.",
        "Endoscopia."
      ],
      correct: 2,
      explain:
        "El páncreas está muy profundo y queda tapado por gas intestinal, lo que dificulta verlo bien con ecografía convencional. TC y RM son mucho más útiles."
    },
    {
      q: "El ligamento falciforme:",
      options: [
        "Une el hígado a la pared abdominal.",
        "Une el estómago a la pared abdominal.",
        "Une el bazo a la pared abdominal.",
        "Une el páncreas a la pared abdominal."
      ],
      correct: 0,
      explain:
        "El ligamento falciforme es un pliegue peritoneal que fija el hígado a la pared anterior del abdomen."
    },
    {
      q: "El tejido muscular del corazón se conoce como:",
      options: ["Endocardio", "Miocardio", "Epicardio", "Pericardio"],
      correct: 1,
      explain:
        "El miocardio es la capa muscular del corazón y la responsable de la contracción. Endocardio recubre por dentro, epicardio recubre por fuera y el pericardio es el saco fibroso externo."
    },
    {
      q: "En el diagnóstico por imagen de patologías digestivas, es frecuente recurrir a:",
      options: [
        "Estudios baritados.",
        "Estudios sulfatados.",
        "Estudios nitrogenados.",
        "Estudios hidrogenados."
      ],
      correct: 0,
      explain:
        "En radiología digestiva se usan contrastes baritados (sulfato de bario) para opacificar el tubo digestivo y visualizarlo con rayos X."
    },
    {
      q: "En el estudio imagenológico de los pulmones, es frecuente el uso de:",
      options: [
        "Radiología simple como primera aproximación, y tomografía computarizada para realizar estudios más detallados.",
        "Ecografía como primera aproximación, y tomografía computarizada para realizar estudios más detallados.",
        "Ecografía como primera aproximación, y resonancia magnética para realizar estudios más detallados.",
        "Radiología simple como primera aproximación, y resonancia magnética para realizar estudios más detallados."
      ],
      correct: 0,
      explain:
        "Lo habitual es comenzar con radiografía simple de tórax y, si hace falta, complementar con TC para estudiar mejor parénquima y mediastino."
    },
    {
      q: "En la siguiente ilustración, ¿qué región abdominal está marcada con una X?",
      image:"/images/IMAGE1.png",
      options: ["Hipocondrio derecho", "Hipogastrio", "Epigastrio", "Fosa ilíaca derecha"],
      correct: 2,
      explain:
        "El epigastrio es la región central superior del abdomen, por encima del ombligo y por debajo del esternón."
    },
    {
      q: "Enfermedad metabólica cuantitativa, en la que el hueso pierde densidad o masa ósea debido a la disminución del recambio óseo por falta de calcio:",
      options: [
        "Osteoporosis",
        "Tumor óseo",
        "Osteomielitis",
        "Osteogénesis imperfecta"
      ],
      correct: 0,
      explain:
        "La osteoporosis se caracteriza por una disminución de la densidad mineral ósea, que hace el hueso más frágil y propenso a fracturas."
    },
    {
      q: "Estructura encargada de regular funciones corporales a través de la síntesis y liberación de hormonas:",
      options: ["Enzimaterio.", "Glándula endocrina.", "Receptosoma.", "Agitador biológico."],
      correct: 1,
      explain:
        "Las glándulas endocrinas liberan hormonas a la sangre para regular funciones como el metabolismo, el crecimiento o la respuesta al estrés."
    },
    {
      q: "Falta de riego sanguíneo en el miocardio por obstrucción completa de las arterias coronarias y consecuente necrosis del miocardio:",
      options: [
        "Infarto agudo de miocardio",
        "Angina de pecho",
        "Pericarditis",
        "Miocardiopatía dilatada"
      ],
      correct: 0,
      explain:
        "En el infarto agudo de miocardio una arteria coronaria se ocluye por completo y el tejido cardíaco dependiente de ella se necrosa."
    },
    {
      q: "La aldosterona, el cortisol y la adrenalina son producidos en:",
      options: [
        "Los testículos u ovarios.",
        "La glándula tiroides.",
        "Las glándulas suprarrenales.",
        "El paratiroides."
      ],
      correct: 2,
      explain:
        "Las glándulas suprarrenales, situadas sobre los riñones, producen corticoides (cortisol, aldosterona) y catecolaminas (adrenalina)."
    },
    {
      q: "La hematopoyesis consiste en:",
      options: [
        "La producción de células sanguíneas en la médula ósea amarilla.",
        "La producción de células sanguíneas en la médula ósea roja.",
        "La destrucción de células sanguíneas en la médula ósea amarilla.",
        "La destrucción de células sanguíneas en la médula ósea roja."
      ],
      correct: 1,
      explain:
        "La hematopoyesis es la formación de células sanguíneas (glóbulos rojos, blancos y plaquetas) en la médula ósea roja."
    },
    {
      q: "La posición más habitual del paciente en estudios de resonancia magnética es:",
      options: ["Bipedestación", "Sedestación", "Decúbito supino", "Decúbito prono"],
      correct: 2,
      explain:
        "En la mayoría de estudios de RM el paciente se coloca en decúbito supino, tumbado boca arriba dentro del imán."
    },
    {
      q: "La radiología simple resulta muy útil en el estudio por imagen de:",
      options: ["Músculos", "Tendones", "Huesos", "Ligamentos"],
      correct: 2,
      explain:
        "La radiografía simple es excelente para estudiar estructuras óseas: fracturas, alineación, artrosis, etc. Para tendones y ligamentos se prefieren ecografía o RM."
    },
    {
      q: "La siguiente imagen corresponde con:",
      options: [
        "Una resonancia magnética en T1, pues el humor vítreo y el líquido subaracnoideo en torno al nervio óptico se observan hiperintensos.",
        "Una resonancia magnética en T2, pues el humor vítreo y el líquido subaracnoideo en torno al nervio óptico se observan hiperintensos.",
        "Una resonancia magnética en T1, pues el humor vítreo y el líquido subaracnoideo en torno al nervio óptico se observan hipointensos.",
        "Una resonancia magnética en T2, pues el humor vítreo y el líquido subaracnoideo en torno al nervio óptico se observan hipointensos."
      ],
      correct: 1,
      explain:
        "En las secuencias T2 los líquidos (LCR, humor vítreo) se ven hiperintensos (blancos). Por eso, si estas estructuras brillan, hablamos de una RM en T2."
    },
    {
      q: "La siguiente imagen de cabeza y cuello obtenida mediante resonancia magnética:",
      options: [
        "Es un plano sagital, donde en color azul se sombrea el lóbulo occipital.",
        "Es un plano sagital, donde en color azul se sombrea el lóbulo parietal.",
        "Es un plano coronal, donde en color azul se sombrea el lóbulo parietal.",
        "Es un plano coronal, donde en color azul se sombrea el lóbulo occipital."
      ],
      correct: 0,
      explain:
        "En un corte sagital vemos el cuerpo de lado; el lóbulo occipital se localiza en la parte posterior del cráneo, tal y como indica el sombreado."
    },
    {
      q: "Las suturas entre huesos del cráneo:",
      options: [
        "Son articulaciones de tipo sinartrosis.",
        "Son articulaciones de tipo anfiartrosis.",
        "Son articulaciones de tipo diatrosis.",
        "No son articulaciones."
      ],
      correct: 0,
      explain:
        "Las suturas craneales son articulaciones fibrosas inmóviles, clasificadas como sinartrosis, que unen firmemente los huesos del cráneo."
    },
    {
      q: "Los contrastes más empleados en el estudio de radiología convencional del aparato excretor son:",
      options: [
        "Contrastes de bario",
        "Contrastes de yodo",
        "Contrastes de gadolinio",
        "Contrastes de berilio"
      ],
      correct: 1,
      explain:
        "Para estudiar riñones, uréteres y vejiga con rayos X se utilizan contrastes yodados hidrosolubles, que se excretan por vía urinaria."
    },
    {
      q: "No forma parte del sistema nervioso central:",
      options: [
        "Médula espinal",
        "Tronco encefálico",
        "Cerebelo",
        "Nervios craneales"
      ],
      correct: 3,
      explain:
        "El sistema nervioso central está formado por encéfalo (cerebro, cerebelo, tronco) y médula espinal. Los nervios craneales y espinales forman parte del sistema nervioso periférico."
    },
    {
      q: "Por lo general, las radiografías de tórax se realizan preferentemente en:",
      options: ["Bipedestación.", "Sedestación.", "Decúbito supino.", "Decúbito prono."],
      correct: 0,
      explain:
        "La proyección estándar de tórax se hace con el paciente en bipedestación, porque permite mejor expansión pulmonar y valoración de niveles líquidos."
    },
    {
      q: "Tras la realización de una ecografía de tobillo, queremos explorar con mayor detalle un hallazgo patológico complejo localizado en los tejidos blandos de la articulación. Emplearemos:",
      options: [
        "Radiología simple.",
        "Tomografía computarizada.",
        "Resonancia magnética.",
        "Ecografía (por segunda vez)."
      ],
      correct: 2,
      explain:
        "La resonancia magnética es la técnica de elección para valorar tejidos blandos (ligamentos, tendones, cartílago) con alto detalle, mejor que TC o radiografía."
    },
    {
      q: "Un paciente se realiza una radiografía de tórax posteroanterior. Se le calcula el índice cardiotorácico correspondiente. ¿En cuál de los siguientes valores se consideraría que hay un aumento anómalo de la silueta cardíaca (cardiomegalia)?",
      options: ["0.354", "0.432", "0.457", "0.60"],
      correct: 3,
      explain:
        "El índice cardiotorácico se considera patológico cuando es mayor de 0,5 en radiografía PA; un valor de 0,60 indica cardiomegalia."
    },
    {
      q: "Uno de los principales patógenos responsables de la gastritis y la aparición de úlceras gástricas es:",
      options: [
        "Klebsiella pneumoniae.",
        "Helicobacter pylori.",
        "Escherichia coli.",
        "Staphylococcus aureus."
      ],
      correct: 1,
      explain:
        "Helicobacter pylori coloniza la mucosa gástrica y está fuertemente asociado a gastritis crónica y úlceras pépticas."
    }
  ]
},



    /* ============ FUNDAMENTOS FÍSICOS Y EQUIPOS ============ */

   {
  id: "ff-u1",
  title: "FF · U1 · Radiaciones y física básica",
  summary:"Unidad 1: Caracterización de las radiaciones y las ondas • La unidad presenta los fundamentos físicos y equipos relacionados con las radiaciones, ondas y magnetismo utilizados en radiología clínica. • Incluye conceptos sobre las partículas subatómicas, modelos atómicos, energía, espectro electromagnético, radiación ionizante y no ionizante, ondas materiales y ultrasonidos, y magnetismo. • Se enfatiza la importancia del conocimiento de estos fundamentos para la aplicación efectiva y segura en técnicas radiológicas y aplicaciones clínicas. Introducción • Se establecen los objetivos de aprender las bases teóricas de las radiaciones, sus tipos, características y aplicaciones clínicas principales. • Presenta un panorama de la relación entre materia y energía, fundamentos de la radiación electromagnética, ondas, magnetismo y su uso en diagnóstico y radioterapia. • Concluye con la relevancia del conocimiento para el correcto manejo de radiaciones en la práctica clínica y técnica radiológica. Fundamentos físicos y equipos • La física radiológica estudia las radiaciones y cómo afectan la materia para obtener imágenes internas sin alterarlas, nacimiento en 1895 con los rayos X de Roentgen. • Se explica la estructura atómica, partículas subatómicas, modelos atómicos históricos y el concepto de energía en los átomos y núcleos, Radiaciones mediante efectos energéticos desde la física nuclear. • La comprensión de estos conceptos es vital para técnicos en radiología, pues el manejo correcto exige entender el funcionamiento de las radiaciones y precauciones. Radiación electromagnética y de partículas • Se describen las formas de energía en los átomos, dualidad onda-corpúsculo, espectro electromagnético y su clasificación en rangos con diferentes niveles de energía y peligrosidad. • La clasificación incluye rayos gamma, X, ultravioleta, visible, infrarrojos, microondas y ondas de radio, con sus respectivas longitudes de onda y aplicaciones clínicas. • La interacción de las radiaciones con la materia y su importancia en la producción de energía, imagen y tratamiento médico son destacadas. Radiación ionizante y no ionizante • Se diferencian las radiaciones: no ionizantes, no provocan ionización, y percepciones diarias, versus ionizantes, capaces de alterar químicamente la materia y causar efectos biológicos peligrosos. • Se describen partículas alfa, beta, rayos gamma y neutrones, sus características y capacidades de penetración, señalando la necesidad de protección en su uso clínico. • La interacción con la materia genera efectos diversos, desde calor, luz, hasta efectos graves en tejidos vivos, siendo crucial la protección y uso correcto en medicina. Ondas materiales y ultrasonidos • Se explica cómo se generan, propagan y comportan las ondas mecánicas, diferenciando sonidos y ultrasonidos, y sus aplicaciones en imagen clínica para evitar radiación nociva. • Se repasan características de ondas periódicas: dirección, velocidad, intensidad, frecuencia, periodo, longitud de onda, amplitud y fenómenos asociados: reflexión, refracción, difracción, interferencia y efecto Doppler. • Estas propiedades y fenómenos permiten desarrollar técnicas de imagen no invasivas como ecografías, fundamentales en radiología médica. Magnetismo • El campo magnético es resultado del movimiento de cargas eléctricas, medido en Tesla, y sus interacciones entre polos opuestos o iguales, permitiendo aplicar técnicas sin radiación, por ejemplo en IRM. • Se detallan los materiales magnéticos (diamagnéticos, paramagnéticos, ferromagnéticos) y su utilidad en diagnóstico de tejidos, diferenciando incluso la sangre oxigenada y no oxigenada. • La inducción artificial de campos magnéticos mediante electroimanes, principalmente solenoides, es esencial para obtener imágenes mediante resonancia magnética, siendo menos agresiva para los pacientes. Aplicaciones clínicas • Se abordan las principales aplicaciones en salud: radiaciones ionizantes en diagnóstico y radioterapia, y radiaciones no ionizantes y ondas para obtener imágenes no invasivas y menos peligrosas. • La radioterapia con técnicas como LINAC, braquiterapia y radioterapia externa se usa para tratar cáncer y otras patologías, combinando diferentes técnicas según el caso. • Las técnicas de diagnóstico incluyen radiología convencional, tomografía computarizada (TAC), PET y SPECT, cada una con ventajas específicas para diferentes necesidades clínicas. Radiaciones no ionizantes y ondas en diagnóstico y radioterapia • Se presentan técnicas alternativas menos agresivas usando radiaciones no ionizantes en diagnóstico (resonancia magnética, ultrasonido) y radioterapia guiada por imagen (IGRT). • Destacan la resonancia magnética, que utiliza campos magnéticos para obtener imágenes de alta resolución sin radiación, y el ultrasonido, especialmente en ecografías en tiempo real y en imágenes tridimensionales. • Estas tecnologías ofrecen opciones seguras y eficientes para la evaluación clínica, minimizando riesgos por exposición a radiaciones ionizantes.",
  questions: [
    {
      q: "¿Cuál de las siguientes no es un tipo de radiación ionizante?",
      options: ["Rayos gamma", "Rayos X", "Ultravioleta", "Infrarroja"],
      correct: 3,
      explain:
        "En el contexto de la protección radiológica sanitaria, los rayos gamma y los rayos X son claramente radiaciones ionizantes, capaces de arrancar electrones de los átomos y producir cambios químicos importantes. La radiación ultravioleta de alta energía (especialmente UVC) puede comportarse de forma ionizante y se trata como radiación de riesgo para tejidos superficiales. La radiación infrarroja, en cambio, se asocia sobre todo al calor y no tiene energía suficiente para ionizar átomos, por eso se considera no ionizante y es la opción correcta."
    },
    {
      q: "¿Qué comportamiento de las ondas consiste en la superposición de dos ondas?",
      options: ["Reflexión", "Refracción", "Interferencia", "Efecto Doppler"],
      correct: 2,
      explain:
        "La interferencia ocurre cuando dos ondas se superponen en el espacio y tiempo, produciendo zonas de refuerzo (interferencia constructiva) o de cancelación (destructiva). La reflexión (opción A) es el rebote de una onda al llegar a una superficie. La refracción (opción B) es el cambio de dirección al pasar de un medio a otro. El efecto Doppler (opción D) es el cambio aparente de frecuencia por movimiento relativo emisor-receptor."
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
      explain:
        "Un solenoide es una bobina de hilo conductor arrollado; al circular corriente eléctrica por él, genera un campo magnético intenso y relativamente uniforme, por eso se usa para crear campos magnéticos controlados. El tubo de rayos catódicos (opción A) utiliza campos eléctricos y magnéticos, pero no es el dispositivo básico para generarlos. 'Filamentos de neodimio' (opción C) no es un término correcto: el neodimio se usa en imanes permanentes, pero no como filamento generador de campos. La opción D es falsa porque sí existe un dispositivo claro: el solenoide."
    },
    {
      q: "Número de veces que se repite una onda en una unidad de tiempo:",
      options: ["Longitud de onda", "Periodo", "Intensidad", "Frecuencia"],
      correct: 3,
      explain:
        "La frecuencia es el número de ciclos completos de una onda que se producen por unidad de tiempo (por ejemplo, hercios = ciclos por segundo). La longitud de onda (opción A) es la distancia entre dos crestas o dos valles consecutivos. El periodo (opción B) es el tiempo que tarda en completarse un ciclo. La intensidad (opción C) se relaciona con la energía transportada por la onda, no con el número de repeticiones por segundo."
    },
    {
      q: "Partícula subatómica con carga negativa:",
      options: ["Protones", "Neutrones", "Electrones", "Bosones"],
      correct: 2,
      explain:
        "El electrón es la partícula subatómica con carga eléctrica negativa y se encuentra orbitando alrededor del núcleo. Los protones (opción A) tienen carga positiva y se localizan en el núcleo. Los neutrones (opción B) no tienen carga (son neutros). Los bosones (opción D) son un tipo de partículas fundamentales relacionadas con fuerzas, pero no se identifican como la partícula cargada negativa típica del átomo."
    },
    {
      q: "Rama de la física que estudia las radiaciones y su efecto en la materia:",
      options: ["Física cuántica", "Física clínica", "Física radiológica", "Fisicoquímica"],
      correct: 2,
      explain:
        "La física radiológica se centra en el estudio de las radiaciones ionizantes y no ionizantes, su producción, interacción con la materia y efectos biológicos, especialmente en el ámbito médico. La física cuántica (opción A) estudia el comportamiento de la materia y la energía a escala muy pequeña, pero no se limita a radiaciones médicas. 'Física clínica' (opción B) no es una rama formal como tal, y la fisicoquímica (opción D) trata la relación entre química y física, no específicamente las radiaciones."
    },
    {
      q: "Tipo de energía asociada al movimiento:",
      options: ["Potencial", "Cinética", "Calorífica", "Todas"],
      correct: 1,
      explain:
        "La energía cinética es la energía que posee un cuerpo debido a su movimiento. La energía potencial (opción A) está asociada a la posición o configuración de un sistema (por ejemplo, gravedad, elástica). La energía calorífica (opción C) se relaciona con la agitación térmica de las partículas, pero el término concreto para la energía del movimiento macroscópico es cinética, por lo que la opción D ('todas') no es correcta."
    },
    {
      q: "Radiaciones que producen cambios químicos en la materia:",
      options: ["No ionizantes", "Ionizantes", "Alterantes", "Modulantes"],
      correct: 1,
      explain:
        "Las radiaciones ionizantes tienen energía suficiente para arrancar electrones de los átomos, formando iones y produciendo cambios químicos en la materia (por ejemplo, en el ADN). Las radiaciones no ionizantes (opción A) pueden excitar moléculas o producir calor, pero no suelen producir ionización directa. 'Alterantes' y 'modulantes' (opciones C y D) no son categorías físicas estándar de radiación."
    },
    {
      q: "Terapia que implanta material radioactivo en el paciente:",
      options: ["Teleterapia", "Irradiación terapéutica", "Braquiterapia", "Radiología convencional"],
      correct: 2,
      explain:
        "La braquiterapia consiste en colocar fuentes radioactivas en el interior o muy cerca del tumor, de forma que la radiación actúa localmente. La teleterapia (opción A) aplica la radiación desde una fuente externa a distancia. 'Irradiación terapéutica' (opción B) es un término genérico que puede referirse a cualquier terapia con radiación. La radiología convencional (opción D) se utiliza para diagnóstico, no para terapia."
    },
    {
      q: "Material que no puede magnetizarse artificialmente:",
      options: ["Paramagnético", "Diamagnético", "Ferromagnético", "Ninguno"],
      correct: 1,
      explain:
        "Los materiales diamagnéticos se oponen débilmente a los campos magnéticos y no se magnetizan de forma apreciable, ni siquiera al aplicarles un campo externo fuerte. Los materiales paramagnéticos (opción A) sí pueden ser magnetizados débilmente en presencia de un campo externo. Los ferromagnéticos (opción C) se magnetizan con facilidad y pueden conservar magnetización. La opción D ('ninguno') es errónea porque los diamagnéticos son precisamente los que prácticamente no se magnetizan."
    },
  ],
},

{
  id: "ff-u2",
  title: "FF · U2 · Interacción radiación-materia",
  summary:"Unidad 2: Caracterización de los equipos de radiología convencional, fundamentos físicos y equipos • La unidad ofrece una visión integral sobre cómo funcionan los equipos de radiología convencional, con énfasis en la producción y interacción de los rayos X, y en el manejo seguro y eficiente de los recursos. • Incluye aspectos teóricos sobre la generación de rayos X, sus efectos sobre la materia y las técnicas para la formación de imágenes radiográficas, además del manejo técnico de los equipos. • Finaliza resaltando la importancia de aplicar protocolos para reducir la exposición a la radiación y garantizar la seguridad del paciente y del personal de salud. Producción de rayos X • Los rayos X, descubiertos por Wilhelm Roentgen en 1895, son radiaciones ionizantes con espectro continuo, clasificados como duros o blandos según su energía y penetración. • Se producen mediante la interacción de electrones de alta velocidad con átomos en un tubo de vacío, generando radiación característica, radiación de frenado y otros fenómenos físicos asociados. • La interacción de estas radiaciones con la materia causa absorción, dispersión y transmisión, principios fundamentales para la obtención de imágenes diagnósticas. Formación de la imagen radiológica • La obtención de imagen radiológica se realiza colocando al paciente en posición, usando un tubo de rayos X, y un receptor sensible a la radiación, ya sea película o sistema digital. • La tecnología moderna emplea tubos de rayos X optimizados, con componentes como cátodo, ánodo y elementos de seguridad, para producir un haz controlado y ajustado a la exploración. • Los parámetros del haz, como cantidad (mAs) y calidad (kVp), junto con sistemas de restricción como colimadores y rejillas, aseguran una imagen nítida y segura. Sistema de restricción del haz de radiación • Se utilizan dispositivos como diafragmas, conos, colimadores y rejillas antidifusoras para delimitar y dirigir el haz, reduciendo la dispersión y mejorando la calidad de las imágenes. • La seguridad se garantiza controlando la radiación de fuga, la radiación dispersa en el paciente y la radiación transmitida hacia el receptor, mediante sistemas de protección adecuados. • Elementos adicionales como mesas de exploración y dispositivos murales facilitan el procedimiento, además de sistemas automáticos de medición de exposición para mayor seguridad. Manejo y uso eficiente de los equipos • La consola de mandos permite ajustar parámetros y controlar la exposición, asegurando una operación segura y efectiva del procedimiento radiológico. • Es primordial seguir protocolos que reduzcan la dosis de radiación, minimizando riesgos para pacientes y personal, mediante el uso responsable y la actualización de las técnicas. • La dosis efectiva varía según el tipo de exploración, siendo menor en radiografías simples y más alta en estudios complejos como la columna vertebral.",
  questions: [
    {
      q: "¿Qué factor NO afecta a la absorción de la radiación?",
      options: ["Número atómico", "Espesor", "Energía de los rayos X", "Todos afectan"],
      correct: 3,
      explain:
        "La absorción de los rayos X en un material depende del número atómico (a mayor Z, mayor absorción), del espesor (más material, más atenuación) y de la energía de la radiación (energías distintas interactúan de forma diferente). Por tanto, todos los factores listados influyen. La pregunta pide cuál NO afecta, y la respuesta correcta es 'Todos afectan', indicando que ninguno de ellos puede considerarse irrelevante."
    },
    {
      q: "Los materiales más densos se observan en radiografía como:",
      options: ["Más claros (blancos)", "Muy oscuros", "Azules", "Todas"],
      correct: 0,
      explain:
        "En una radiografía, los materiales más densos y con mayor número atómico absorben más rayos X, de modo que menos radiación llega al detector en esas zonas. Esto produce áreas más claras o blancas en la imagen (por ejemplo, hueso). Las zonas muy oscuras (opción B) corresponden a estructuras poco densas (como el aire en pulmones). Las opciones C y D no son correctas porque el color azul no forma parte de la escala de grises estándar de la radiografía."
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
      explain:
        "La pregunta alude a un proceso en el que el núcleo atómico se fragmenta o cambia a otro estado nuclear, lo que se asocia con fenómenos de desintegración nuclear. 'Desintegración fotónica' se usa aquí como término relacionado con cambios en el núcleo. El efecto fotoeléctrico (opción A) implica la absorción total del fotón por un electrón ligado, que es expulsado del átomo, sin fragmentar el núcleo. El efecto Compton (opción B) es una dispersión inelástica del fotón con un electrón. La dispersión clásica (opción C) describe desvío de fotones con poca energía, sin cambios nucleares."
    },
    {
      q: "Rango de longitud de onda de los rayos X:",
      options: ["0,01–10 nm", "0,1–100 nm", "1 nm–1 mm", "Ninguna"],
      correct: 0,
      explain:
        "Los rayos X tienen longitudes de onda muy cortas, aproximadamente en el rango de 0,01 a 10 nanómetros, lo que les confiere alta energía y capacidad ionizante. El rango 0,1–100 nm (opción B) mezcla parte de ultravioleta y parte de rayos X, por lo que es demasiado amplio. El rango 1 nm–1 mm (opción C) ya entra en microondas y otras regiones. Por eso, la mejor aproximación para rayos X en la pregunta es 0,01–10 nm."
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
      explain:
        "En un tubo de rayos X, la mayor parte de la radiación generada (aprox. 70–85%) es radiación de frenado o bremsstrahlung: se produce cuando los electrones son desacelerados por el campo eléctrico de los núcleos del ánodo. La radiación característica (opción A) surge cuando un electrón del ánodo es expulsado y otro ocupa su lugar, emitiendo fotones con energías específicas, pero su proporción es menor. 'Cuántica' (opción C) no es un tipo específico de radiación aquí. 'No ionizante' (opción D) no describe la producción típica del tubo de rayos X."
    },
    {
      q: "Tiempo de preparación calentando el filamento:",
      options: ["Primer tiempo", "Segundo tiempo", "Tercer tiempo", "Fase previa"],
      correct: 0,
      explain:
        "En el funcionamiento del tubo de rayos X se suele hablar de un primer tiempo en el que se calienta el filamento (mA) para generar nubes de electrones por emisión termoiónica. El segundo tiempo (opción B) suele ser la aplicación de la alta tensión (kV) y exposición. 'Tercer tiempo' (opción C) y 'fase previa' (opción D) no corresponden a la terminología estándar usada para describir esta secuencia."
    },
    {
      q: "Alteración de trayectoria de la radiación:",
      options: ["Transmisión", "Refracción", "Absorción", "Dispersión"],
      correct: 3,
      explain:
        "La dispersión implica que la radiación cambia de dirección tras interactuar con la materia, desviándose de su trayectoria original. La transmisión (opción A) significa que la radiación atraviesa el material sin cambiar su dirección ni ser absorbida. La refracción (opción B) es cambio de dirección al pasar de un medio a otro por cambio de velocidad, pero en radioprotección radiológica se usa más el concepto de dispersión. La absorción (opción C) implica que la energía del fotón se deposita en el material, sin continuar su viaje."
    },
    {
      q: "Radiación que atraviesa la materia sin cambiar trayectoria:",
      options: ["Absorción", "Dispersión", "Transmisión", "Ninguna"],
      correct: 2,
      explain:
        "Cuando la radiación atraviesa un material sin cambiar su trayectoria ni ser desviada, hablamos de transmisión. La absorción (opción A) supone que la radiación pierde energía depositándola en el medio. En la dispersión (opción B) la trayectoria se altera. Por tanto, 'ninguna' (opción D) no es correcta porque sí existe un término específico: transmisión."
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
      explain:
        "La radiación infrarroja se asocia con cambios de energía relativamente bajos, relacionados con vibraciones y rotaciones moleculares y transiciones en electrones más externos. No implica cambios en capas internas de electrones (opción B) ni en el núcleo (opción C), que corresponden a radiaciones de mayor energía (rayos X, gamma). Por eso, la interacción relevante está ligada a las capas externas."
    },
    {
      q: "Los rayos X duros tienen longitud de onda:",
      options: ["Más larga", "Más corta", "Más potente", "Menos potente"],
      correct: 1,
      explain:
        "Los rayos X duros son los de mayor energía, lo que se corresponde con una frecuencia más alta y, por tanto, una longitud de onda más corta. Decir 'más potente' (opción C) es impreciso: lo correcto es hablar de energía y longitud de onda. Los rayos X blandos, en cambio, tienen mayor longitud de onda y menor energía. Por eso, la característica clave es 'más corta', no 'más larga' ni 'menos potente'."
    },
  ],
},

{
  id: "ff-u3",
  title: "FF · U3 · Imagen radiológica",
  summary:"Unidad 3: Procesado y tratamiento de la imagen en radiología convencional: Fundamentos físicos y equipos • La unidad aborda la evolución de la imagen radiológica desde analógica a digital, destacando la disminución del uso de la película radiográfica en favor de medios digitales. • Se describen las ventajas del medio digital respecto al analógico, como mayor rapidez, menor costo y facilidad de manipulación y envío de imágenes. • La estructura de las películas radiográficas consta de una base de poliéster y una emulsión de haluros de plata que varía en calidad según tamaño y distribución de cristales. Índice • Se detallan aspectos de fundamentos físicos, equipos y el proceso de registro y tratamiento de imágenes en radiología convencional. • La unidad incluye temas específicos como tipos de películas, pantallas de refuerzo, intensificadores de imagen y factores que condicionan la calidad de la imagen radiográfica. Introducción • La progresión desde sistemas analógicos hasta digitales en la radiología ha facilitado el procesamiento y tratamiento de imágenes. • Se explican procesos y accesorios para la obtención, revelado y registro de imágenes radiográficas, tanto analógicas como digitales. Imagen en radiología convencional • La historia de la imagen radiológica muestra un cambio del uso de película hacia técnicas digitales, las cuales ofrecen mayor eficiencia y menor rechazo de imágenes. • La estructura y características de las películas radiográficas dependen del tamaño y distribución de cristales de haluros de plata, afectando contraste, resolución y sensibilidad. Estructura y tipos de películas radiográficas • Las películas incluyen una base de poliéster y una emulsión sensibilizada, cuyo desempeño depende de características como contraste, resolución, latitud y sensibilidad. • La obtención de la imagen analógica involucra exposición, revelado y fijación en un cuarto oscuro, proceso que se realiza manualmente o mediante máquinas. Pantallas de refuerzo y chasis • Las pantallas intensificadoras convierten rayos X en luz visible, aunque actualmente están en desuso; los chasis protegen la película y pantallas y pueden incluir rejillas antidifusoras. • Los chasis en radiología computarizada contienen láminas de memoria fotoestimulables en lugar de película convencional, y su uso sigue ciertas etapas de lectura mediante fosforescencia. Intensificadores de imagen para fluoroscopia • Los intensificadores reducen la dosis recibida y amplifican el brillo en tiempo real, transfiriendo radiación a luz visible mediante capas fosforescentes y fotoelectrodos. • Estos componentes permiten mejorar la calidad de la imagen mientras disminuyen la radiación en procedimientos de fluoroscopia y radioscopia. Registro de la imagen • La identificación y marcado correcto de las imágenes radiográficas es esencial para su gestión, incluyendo datos personales y técnicos específicos de la prueba. • La digitalización de imágenes se realiza mediante matrices de píxeles con resolución espacial y de intensidad, las cuales varían en calidad dependiendo de los equipos y técnicas utilizadas. Registro en radiología digital • La transformación de la señal física en valores digitales se realiza por diferentes receptores, como láminas fotoestimulables en CR y detectores de panel plano en DDR. • La calidad de la imagen digital depende de la resolución de píxeles y del rango de grises, que afecta la resolución de contraste y detalles en la imagen radiográfica. Factores que condicionan la calidad de la imagen • La calidad de la imagen radiográfica está influenciada por contraste, resolución, ruido y artefactos, además de factores geométricos como magnificación, distorsión y desenfoque. • La magnificación y distorsión dependen de parámetros como SID y la posición del objeto, afectando la precisión diagnóstica. • Movimientos del paciente o inestabilidad durante la exploración pueden deteriorar la calidad de la imagen, siendo recomendable usar tiempos de exposición cortos en esos casos.",
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
      explain:
        "La radiología digital ofrece varias ventajas: facilita la manipulación de la imagen (contraste, zoom, filtros), simplifica procesos técnicos (sin revelado químico) y, a largo plazo, puede reducir costes de almacenamiento y material. Las tres primeras opciones enumeran ventajas reales. La pregunta pide cuál NO es una ventaja, pero como todas lo son, la respuesta correcta es 'Todas son ventajas', indicando que ninguna de ellas es un inconveniente."
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
      explain:
        "La radiografía digital directa utiliza detectores electrónicos (de conversión directa o indirecta, CCD, detectores de recuento de fotones, etc.) para transformar la radiación en señales digitales. Las películas radiográficas (opción D) pertenecen al sistema analógico clásico, donde la imagen se forma en una película que luego debe revelarse químicamente, por lo que no forman parte de la radiografía digital directa."
    },
    {
      q: "¿Qué NO es un factor geométrico?",
      options: ["Magnificación", "Distorsión", "Desenfoque", "Artefactos"],
      correct: 3,
      explain:
        "Los factores geométricos se refieren a cómo influyen la distancia foco-objeto, foco-película y tamaño del foco en la magnificación, la distorsión y el desenfoque de la imagen, por lo que A, B y C sí son factores geométricos. Los artefactos (opción D) son errores o elementos no deseados en la imagen debidos a problemas técnicos, de procesamiento o del paciente (objetos metálicos, movimiento, etc.), pero no se consideran un factor geométrico en sí."
    },
    {
      q: "Última fase del revelado analógico:",
      options: ["Exposición", "Fijación", "Revelado", "Adhesión"],
      correct: 1,
      explain:
        "En el proceso químico de revelado analógico, las fases clave son revelado, baño de paro, fijación, lavado y secado. La fijación es la fase en la que se fijan las sales de plata no expuestas para que la imagen sea estable y se pueda ver con luz ambiente, por ello se considera la fase crucial final del proceso químico. La exposición (opción A) ocurre antes de entrar al cuarto oscuro. El revelado (opción C) es la primera fase química. 'Adhesión' (opción D) no corresponde a una fase típica de revelado."
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
      explain:
        "La formación de la imagen en una película radiográfica se basa en la absorción diferencial de los rayos X por los distintos tejidos: algunas zonas absorben más y aparecen más claras, otras absorben menos y se ven más oscuras. La dispersión (opción A) es un fenómeno que puede degradar la calidad de la imagen. La refracción y la reflexión (opciones C y D) no son el principio básico que explica la diferencia de tonos en radiografía."
    },
    {
      q: "Imagen con valores continuos de gris:",
      options: ["Analógica", "Digital", "Mixta", "Todas"],
      correct: 0,
      explain:
        "Una imagen analógica (como la generada en película) puede representar los tonos de gris de forma continua, sin límites discretos. En una imagen digital (opción B), los valores de gris están cuantizados en niveles (por ejemplo, 256 niveles), por lo que no son matemáticamente continuos. La opción C ('mixta') y D ('todas') no son correctas porque la definición de continuidad de tonos encaja específicamente con el formato analógico."
    },
    {
      q: "Soporte rígido de película radiográfica:",
      options: ["Estuche", "Funda", "Caja", "Chasis"],
      correct: 3,
      explain:
        "El chasis es el soporte rígido donde se coloca la película radiográfica (y, si procede, las pantallas intensificadoras), protegiéndola de la luz y asegurando un buen contacto. Un estuche, funda o caja (opciones A, B y C) pueden servir para transporte o almacenamiento, pero no son el soporte técnico que interviene directamente en la exposición radiográfica."
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
      explain:
        "La radiología computarizada (CR) utiliza láminas fotoestimulables (placas de fósforo) que almacenan la información de la exposición y luego se leen mediante un láser para generar la imagen digital. Las películas (opción A) son propias de radiología analógica. Los detectores fotónicos (opción C) se emplean en sistemas de radiografía digital directa (DR), no en CR. Por tanto, la respuesta correcta son las láminas fotoestimulables."
    },
    {
      q: "Granulado fino en imagen:",
      options: ["Ruido", "Artefactos", "Distorsión", "Ninguna"],
      correct: 0,
      explain:
        "El ruido en imagen radiológica se percibe como un granulado fino o textura irregular que dificulta ver detalles, especialmente en áreas homogéneas. Los artefactos (opción B) son defectos más localizados o específicos (sombras, líneas, halos) debidos a fallos técnicos o de paciente. La distorsión (opción C) es una alteración geométrica de la forma. 'Ninguna' (opción D) es incorrecta porque el granulado se asocia claramente con ruido."
    },
    {
      q: "Capacidad de distinguir detalles próximos:",
      options: ["Latitud", "Contraste", "Resolución", "Sensibilidad"],
      correct: 2,
      explain:
        "La resolución espacial es la capacidad de un sistema de imagen para distinguir como separados dos objetos que están muy próximos. La latitud (opción A) se relaciona con el rango de exposiciones en que el sistema produce imágenes útiles. El contraste (opción B) es la diferencia de densidad o brillo entre estructuras. La sensibilidad (opción D) indica la capacidad de registrar señales débiles, pero no la nitidez de los detalles."
    },
  ],
},

{
  id: "ff-u4",
  title: "FF · U4 · Tomografía computarizada",
  summary:"Unidad 4: Caracterización de equipos de tomografía computarizada: Fundamentos físicos y equipos • La unidad abarca los principios básicos, componentes y tipos de equipos de tomografía computarizada (TC), además de sus aplicaciones y medidas de seguridad. • Se explica la evolución técnica y los diferentes modos de adquisición de imágenes, como la convencional, helicoidal y multicorte. • Incluye detalles sobre los componentes principales del equipo TC, como el gantry, mesa de exploración, consola y software de procesamiento. Imagen tomográfica • La TC utiliza rayos X para generar cortes en diferentes planos del cuerpo, permitiendo una visión detallada y tridimensional de las estructuras anatómicas. • La reconstrucción de imágenes se basa en medir la atenuación de los rayos X atravesando tejidos, usando la ecuación de Beer-Lambert. • La calidad de la imagen depende de factores como la resolución espacial, contraste, ruido y artefactos, los cuales son controlados mediante parámetros técnicos y algoritmos específicos. Evolución de las técnicas tomográficas • La primera TC fue desarrollada en 1967 por G. N. Hounsfield, inicialmente para estudios cerebrales, y desde entonces ha evolucionado hacia equipos helicoidales, multicorte y volumétricos. • Se describen las clasificaciones según modo de adquisición: secuencial (convencional) y helicoidal, además de las generaciones tecnológicas desde la primera hasta la cuarta. • Las mejoras incluyen aumentos en velocidad, resolución y capacidad de cobertura, con diseños cada vez más eficientes y con menor dosis de radiación. Tomografía convencional, helicoidal y multicorte • La TC convencional realiza adquisiciones por rotación y desplazamiento de la mesa, con limitaciones en rapidez y resolución temporal. • La TC helicoidal permite tomar datos en movimiento continuo, reduciendo tiempos y mejorando estudios dinámicos, a costa de posibles pérdida de resolución en profundidad. • La TC multicorte combina múltiples detectores para obtener cortes más delgados y resolución mayor, con la ventaja de imágenes en 3D y mejor contraste. Componentes del equipo de TC • El gantry contiene tubo de rayos X, detectores, colimadores y sistemas de rotación, con un diámetro de abertura que varía entre 60 y 85 cm. • La mesa de exploración soporta al paciente y permite movimientos precisos en longitud y altura, fabricada con materiales radiotransparentes. • La consola y el software de control y procesamiento permiten definir parámetros de adquisición, modificar la reconstrucción y generar imágenes en tiempo real o en postprocesado. Usos diagnósticos y terapéuticos • La TC es fundamental en oncología, cardiología, traumatología y radiología vascular, además de su uso en planificación de radioterapia y en imágenes funcionales mediante PET y SPECT. • La imagen tridimensional facilita diagnósticos de lesiones, planificación quirúrgica y seguimiento de tratamientos, con resoluciones cercanas a 0.3 mm y adquisición rápida. • La combinación de TC con otros métodos, como PET, permite obtener imágenes híbridas que integran datos anatómicos y funcionales para diagnóstico avanzado. Seguridad en exploraciones de TC • La exposición a radiaciones ionizantes implica riesgos, por lo que se deben aplicar principios como justificación, optimización y limitación de dosis. • La dosis efectiva se mide en sieverts (Sv) y modelos como el fantoma permiten estimar el riesgo y establecer límites estándar de radiación para pacientes y personal. • La optimización incluye control de parámetros como corriente, voltaje, velocidad del gantry y superficie de exploración para reducir la dosis sin comprometer la calidad diagnóstica. Representación y calidad de la imagen • La imagen se digitaliza en píxeles o vóxeles, con valores de atenuación comparados con agua, y se representan en una escala de Hounsfield (UH) que abarca desde aire (-1000 UH) hasta hueso (+1000 UH). • La reconstrucción puede realizarse mediante métodos analíticos, como retroproyección filtrada, o iterativos, en función de la calidad requerida y el coste computacional. • La visualización clínica requiere ajustar parámetros como la ventana, nivel y ancho, además de aplicar filtros para mejorar la resolución y reducir artefactos. Artefactos en TC • Los artefactos más frecuentes incluyen endurecimiento del haz, volumen parcial, movimiento, objetos metálicos y aliasing, los cuales afectan la precisión diagnóstica. • La corrección de artefactos se realiza mediante filtros específicos, reducción del grosor de corte, inmovilización del paciente y ajustes en parámetros de adquisición. • La identificación y manejo de artefactos son fundamentales para garantizar imágenes de alta calidad y mejores resultados clínicos.",
  questions: [
    {
      q: "Método de obtención en TC convencional:",
      options: ["Helicoidal", "Espiral", "Discreto", "Secuencial"],
      correct: 3,
      explain:
        "En la TC convencional clásica, la obtención de imágenes se realiza de forma secuencial: el gantry adquiere un corte, la mesa se desplaza, y se adquiere el siguiente, y así sucesivamente. La TC helicoidal o espiral (opciones A y B) corresponde a equipos más modernos en los que el tubo gira continuamente mientras la mesa se mueve, generando una trayectoria helicoidal. 'Discreto' (opción C) no es el término estándar usado para describir este modo."
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
      explain:
        "El factor de desplazamiento (o pitch) en TC helicoidal relaciona el avance de la mesa por rotación con el grosor del corte; cuanto menor es, mayor es el solapamiento entre cortes y mejor la resolución en Z. No indica directamente la 'nitidez' de la imagen (opción A), aunque la afecta de forma indirecta. Tampoco es simplemente la velocidad (opción C) ni la profundidad (opción D); se interpreta sobre todo como grado de solapamiento o separación entre cortes."
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
      explain:
        "La reconstrucción multiplanar (MPR) consiste en usar un volumen de datos (generalmente cortes axiales) para generar imágenes en otros planos (coronal, sagital, oblicuo) apilando y reorientando la información. 'Animación' (opción B) se refiere a mostrar imágenes en secuencia, pero no es el término técnico. 'Integración' (opción C) tampoco es la palabra específica en TC. Por tanto, la opción correcta es la MPR."
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
      explain:
        "En TC se utilizan filtros de reconstrucción (kernels) que modifican la imagen reconstruida para mejorar el detalle, reducir el ruido o corregir borrosidad en función de la aplicación (ósea, de partes blandas, etc.). 'Fórmulas correctoras' y 'cálculos' (opciones B y C) son términos genéricos pero no el nombre concreto que se usa. 'Ninguna' (opción D) es falsa porque sí existen filtros específicos para este fin."
    },
    {
      q: "Sustancia con UH = 0:",
      options: ["Hueso", "Sangre", "Agua", "Aire"],
      correct: 2,
      explain:
        "En la escala de Hounsfield (UH), el agua se define arbitrariamente con un valor de 0 UH. El aire (opción D) se establece en torno a −1000 UH. Los tejidos blandos y la sangre (opción B) tienen valores ligeramente positivos, y el hueso (opción A) valores mucho más altos (centenares a miles de UH). Por eso, el material de referencia con 0 es el agua."
    },
    {
      q: "En imagen 3D la matriz se divide en:",
      options: ["Cuadrados", "Píxeles", "Cubos", "Vóxeles"],
      correct: 3,
      explain:
        "En una imagen 2D, la matriz está formada por píxeles (elementos de imagen en dos dimensiones). En 3D, cada 'bloque' de información tiene ancho, alto y profundidad, y se denomina vóxel (volumetric pixel). 'Cuadrados' (opción A) y 'cubos' (opción C) describen formas geométricas pero el término técnico es vóxel. La opción B (píxeles) se queda en 2D."
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
      explain:
        "En radioterapia, la TC de planificación se usa sobre todo para simular el tratamiento: permite delimitar el volumen tumoral y órganos de riesgo, calcular dosis y planificar los campos antes de aplicar la radiación real. Localizar lesiones (opción A) también es útil, pero su función clave en el contexto radioterápico es la simulación. La aplicación del tratamiento (opción B) se realiza con aceleradores y otros equipos, no con la TC. Por eso, la opción D ('todas') no es precisa en esta pregunta."
    },
    {
      q: "Unidad de medida de atenuación:",
      options: ["Faraday", "Hermann", "Hounsfield", "Todas"],
      correct: 2,
      explain:
        "En tomografía computarizada, la atenuación de los tejidos se mide en unidades Hounsfield (UH), basadas en la atenuación relativa del tejido frente al agua. 'Faraday' (opción A) se asocia a carga eléctrica. 'Hermann' (opción B) no es una unidad estándar en este contexto. La opción D ('todas') es incorrecta porque solo Hounsfield es la unidad usada."
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
      explain:
        "El CTDI (Computed Tomography Dose Index) es un índice que describe la dosis de radiación en TC para un conjunto estándar de condiciones. El producto dosis-longitud se conoce como DLP (Dose Length Product), por lo que la opción B mezcla conceptos. El nivel de ventana (opción C) se refiere al centrado del rango de grises en la imagen, no a dosis. Por tanto, CTDI está claramente relacionado con dosis en TC."
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
      explain:
        "En general, la dosis de radiación es la cantidad de energía depositada por unidad de masa en un tejido, y si es suficientemente alta puede producir daño biológico. La dosis efectiva (opción A) es un concepto más refinado que pondera la sensibilidad de los tejidos y el riesgo global, pero la pregunta está formulada de forma genérica. 'Dosis letal' (opción B) se refiere específicamente a la dosis que causa la muerte. 'Dosis regenerable' (opción D) no es un término estándar. La respuesta que encaja con la definición general es 'dosis de radiación'."
    },
  ],
},

{
  id: "ff-u5",
  title: "FF · U5 · Resonancia magnética",
  summary:"Unidad 5: Caracterización de equipos de resonancia magnética, fundamentos físicos y equipos • Se presentan los conceptos básicos físicos y diseño de los equipos de resonancia magnética, desde la estructura atómica hasta componentes y seguridad. • La unidad abarca tipos, materiales, accesorios, secuencias y aplicaciones diagnósticas y terapéuticas de la resonancia magnética. • También se analizan los principios de generación, captura y procesamiento de la señal, además de artefactos y técnicas emergentes. Fundamentos físicos de la resonancia magnética • La RM utiliza campos magnéticos y radiación de radiofrecuencia para obtener imágenes, sin radiaciones ionizantes. • La estructura del átomo (protones, neutrones y electrones) y el concepto de espín explican el comportamiento del núcleo en magnetismo. • Los protones de hidrógeno en el cuerpo humano son principales para la RM, alineándose en un campo magnético y precesando a la frecuencia de Larmor. Comportamiento del espín nuclear y generación de señal • Los protones alineados en un campo magnético generan un vector de magnetización que precesa a la frecuencia de Larmor. • La aplicación de pulsos de RF desestabiliza los protones, provocando excitación, relajación y emisión de señales detectadas por antenas. • La relajación en T1 y T2 produce diferentes contrastes en tejidos y es fundamental para la formación de imágenes. Unidad de resonancia magnética y salas de exploración • La unidad incluye salas de exploración, control, recepción y sistemas técnicos, con protección contra radiaciones y campos magnéticos. • Existen salas protegidas con jaulas de Faraday y requisitos señaléticos para limitar objetos ferromagnicos y dispositivos incompatibles. • El proceso de exploración comprende planificación, posicionamiento, adquisición y envío de imágenes a radiólogos. Tipos de equipos y límites • Los equipos pueden ser abiertos o cerrados, con imanes de diferentes intensidades y diseños según la necesidad clínica o de investigación. • Los imanes se clasifican en permanentes, resistivos y superconductores, con ventajas y limitaciones de cada tecnología. • Equipos superconductores (más utilizados) requieren helio líquido y sistemas criogénicos para mantener la temperatura. Emisores, receptores y bobinas • Las antenas de RF transmiten, reciben o combinan ambas funciones, diseñadas según la región anatómica y requisitos de señal. • Bobinas de gradiente crean variaciones espaciales en el campo magnético, permitiendo selección de planos y resolución. • La elección del sistema de antenas afecta la calidad, sensibilidad y resolución de las imágenes. Aplicaciones diagnósticas y terapéuticas • La RM es útil para diagnóstico en múltiples sistemas y tejidos, distinguishando patologías con alta sensibilidad y sin radiación. • El uso de contraste con gadolinio mejora la resolución, aunque requiere precauciones en pacientes con insuficiencia renal. • La RM tiene aplicaciones terapéuticas en estimulación, reparación celular, control de dolor y procesos óseo-musculares. Seguridad en resonancia magnética • Es imprescindible evaluar riesgos y antecedentes del paciente, y controlar materiales incompatibles antes de la exploración. • El campo magnético produce efectos peligrosos como atracción de objetos ferromagnicos y artefactos en tejidos y dispositivos médicos. • Controles, señalización y sistemas de ventilación de gases criogénicos son esenciales para la seguridad. Captura y procesamiento de señales • La señal RM surge al liberar energía de los núcleos excitados, codificada en frecuencia y fase mediante gradientes y transformada por Fourier. • La reconstrucción en 2D y 3D requiere cálculo mediante transformadas de Fourier y codificación espacial diferencial. • La cantidad y calidad de la señal dependen de tiempos de repetición, eco y parámetros de secuencias, afectando la resolución y contraste. Artefactos en imágenes • Los artefactos físicos (desplazamiento químico, susceptibilidad, movimiento, aliasing y otros) distorsionan o enmascaran estructuras. • Correcciones incluyen ajuste del campo, tiempos de eco, matrices, y técnicas específicas para eliminar efectos no deseados. • La correcta calibración y preparación minimiza los artefactos y mejora la precisión diagnóstica. Técnicas emergentes y aplicaciones avanzadas • La RM funcional (RMF) evalúa la actividad cerebral basada en cambios en oxigenación sanguínea, útil en neurología y neurociencia. • La RM intervencionista permite imágenes en tiempo real en procedimientos, biopsias y terapia vascular guiada. • La RM en radioterapia mejora planificación, diferenciación de tejidos y ayuda en terapias como braquiterapia y espectroscopia metabólica. Resumen general • La unidad abarca conceptos físicos, diseño, funcionamiento, seguridad, procesado y nuevas técnicas de resonancia magnética. • Se enfatiza en la generación y captura de señales, tipos de equipos, aplicaciones clínicas y técnicas avanzadas emergentes. • Considera aspectos de seguridad, artefactos y normativas para una correcta implementación y uso clínico y de investigación.",
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
      explain:
        "En RM, la señal depende en gran medida de la densidad de protones de hidrógeno presentes en un determinado volumen de tejido, por lo que se habla de densidad protónica. El número atómico (opción A) es el número de protones del núcleo de un elemento químico, pero no se refiere directamente a cuántos hay en un volumen de tejido. El número másico (opción B) es la suma de protones y neutrones. 'Protoabundancia' (opción D) no es un término estándar en RM clínica."
    },
    {
      q: "Dispositivo incompatible con RM:",
      options: ["Audífonos", "DIU", "Marcapasos", "Prótesis"],
      correct: 2,
      explain:
        "Los marcapasos (especialmente los no diseñados como 'compatibles con RM') pueden verse muy afectados por el campo magnético intenso, alterando su funcionamiento o incluso dañando el dispositivo y poniendo en riesgo al paciente, por lo que tradicionalmente se consideran incompatibles. Audífonos, determinados DIU y prótesis (opciones A, B y D) pueden ser compatibles según su composición (no ferromagnética) y homologaciones, aunque siempre hay que comprobarlo. Por eso, la respuesta claramente problemática es el marcapasos."
    },
    {
      q: "Gradiente que NO se aplica:",
      options: ["Gz", "Gy", "Gx", "Gw"],
      correct: 3,
      explain:
        "En RM se emplean tres gradientes magnéticos principales, orientados en los tres ejes del espacio: Gx, Gy y Gz, para seleccionar cortes, codificar fase y frecuencia en distintas direcciones. 'Gw' (opción D) no es un gradiente real utilizado en la práctica; no se define un cuarto gradiente con esa nomenclatura."
    },
    {
      q: "Componentes ortogonales del espín:",
      options: ["Longitudinal", "Transversal", "Ambos", "Ninguno"],
      correct: 2,
      explain:
        "La magnetización de espín se puede descomponer en dos componentes ortogonales: una longitudinal (paralela al campo principal B0) y otra transversal (perpendicular a B0). Por tanto, el espín en RM se describe habitualmente con ambos componentes. Elegir solo 'longitudinal' (opción A) o solo 'transversal' (opción B) sería incompleto. 'Ninguno' (opción D) es claramente erróneo."
    },
    {
      q: "Contraste utilizado en RM:",
      options: ["Bario", "Yodo", "Neodimio", "Gadolinio"],
      correct: 3,
      explain:
        "El gadolinio es el metal que se utiliza como base para la mayoría de los contrastes paramagnéticos en RM, aumentando la señal en determinadas secuencias (sobre todo T1). El bario (opción A) se usa en estudios del tubo digestivo con rayos X. El yodo (opción B) es típico de contrastes en radiología convencional y TC. El neodimio (opción C) se usa en imanes permanentes, pero no como contraste intravenoso."
    },
    {
      q: "Fenómeno que emite la señal:",
      options: ["Excitación", "Relajación", "Compresión", "Emisión"],
      correct: 1,
      explain:
        "En RM, tras aplicar el pulso de radiofrecuencia (excitación), los protones vuelven a su estado de equilibrio liberando energía, proceso que se llama relajación. Durante la relajación (T1, T2) se induce una señal de radiofrecuencia en las bobinas receptoras, que es lo que se mide. La excitación (opción A) es el proceso de aporte de energía, no de emisión. 'Compresión' y 'emisión' (opciones C y D) son términos demasiado genéricos o no específicos en este contexto; la clave física de la señal es la relajación."
    },
    {
      q: "RM usada en estudios de actividad cerebral:",
      options: ["Intervencionista", "Funcional", "Espectroscopía", "Ninguna"],
      correct: 1,
      explain:
        "La RM funcional (fRM o fMRI) mide cambios en la oxigenación sanguínea relacionados con la actividad neuronal, permitiendo localizar regiones activas del cerebro durante tareas o en reposo. La RM intervencionista (opción A) se usa para guiar procedimientos dentro del imán. La espectroscopía (opción C) analiza la composición química de los tejidos. 'Ninguna' (opción D) es falsa porque la RM funcional es precisamente la técnica usada para actividad cerebral."
    },
    {
      q: "Magnetización por diferencia de espines:",
      options: ["Longitudinal", "Transversal", "Oblicua", "Transcendental"],
      correct: 0,
      explain:
        "La magnetización longitudinal representa el componente neto de magnetización paralelo al campo principal B0 y está determinado por la ligera diferencia entre el número de espines alineados a favor y en contra del campo. La magnetización transversal (opción B) surge cuando los espines se sincronizan en fase, pero la pregunta se refiere a la 'diferencia de espines' alineados, que define el vector longitudinal. 'Oblicua' y 'transcendental' (opciones C y D) no son términos usados en esta descripción."
    },
    {
      q: "Efecto proyectil ocurre en objetos:",
      options: ["Paramagnéticos", "Diamagnéticos", "Ferromagnéticos", "Ninguno"],
      correct: 2,
      explain:
        "El efecto proyectil en RM se produce cuando un objeto ferromagnético es atraído con gran fuerza hacia el imán, pudiendo convertirse en un proyectil peligroso. Los materiales paramagnéticos (opción A) tienen una débil atracción y no suelen causar este fenómeno con la misma intensidad. Los diamagnéticos (opción B) incluso se oponen débilmente al campo. Por tanto, el riesgo serio está en objetos ferromagnéticos."
    },
    {
      q: "SAR nivel III se considera:",
      options: ["Normal", "Controlado", "Investigación experimental", "Ninguno"],
      correct: 2,
      explain:
        "El SAR (Specific Absorption Rate) indica la tasa de energía de RF absorbida por unidad de masa de tejido. Los niveles I y II se asocian a modos normal y controlado; un nivel III se reserva para condiciones de investigación experimental, donde se permiten valores más altos bajo controles estrictos. Por eso, la opción correcta es 'investigación experimental'. 'Normal' y 'controlado' (opciones A y B) corresponden a niveles más bajos, y 'ninguno' (D) es falso."
    },
  ],
},

{
  id: "ff-u6",
  title: "FF · U6 · Ecografía",
  summary:"Caracterización y Fundamentos de los Equipos de Ultrasonidos • La unidad explica los conceptos básicos físicos de las ondas sonoras y ultrasonidos, su producción, interacción con los tejidos y componentes de los equipos de ecografía. • Se estudian las propiedades de propagación, como velocidad, longitud de onda, frecuencia e intensidad, y cómo afectan en la formación de imágenes y en la penetración en diferentes tejidos. • Se describen los transductores piezoeléctricos, tipos de sondas, modos de funcionamiento y elementos del ecógrafo para obtener imágenes diagnósticas. Ondas Sonoras y Comportamiento • Las ondas mecánicas se caracterizan por velocidad, longitud de onda, frecuencia e intensidad, siendo variables según el medio y esencial para las aplicaciones médicas. • La interacción con los tejidos incluye fenómenos de reflexión, refracción, absorción, interferencia y efecto Doppler, fundamentales en la obtención de imágenes y análisis de flujo. • La velocidad de propagación varía en tejidos, más alta en hueso y más baja en fluidos, afectando la precisión diagnóstica. Producción y Recepción de Ultrasonidos • Los transductores piezoeléctricos convierten energía eléctrica en ondas acústicas y viceversa, permitiendo la emisión y recepción en un mismo dispositivo. • La fibra de cristales o cerámicas como cuarzo y titanatos generan vibraciones en respuesta a corrientes eléctricas, produciendo ultrasonidos. • Estos componentes son clave en la función de los ecógrafos para crear imágenes a partir de los ecos reflejados en los tejidos. Interacciones en el Medio y Impedancia • La interacción de ultrasonidos con tejidos se basa en impedancia acústica, la resistencia que ofrece cada medio a las ondas, variando en tejidos duros o blandos. • La reflexión y captación del eco, que dependen de interfases y diferencias de impedancia, crean las imágenes diagnósticas, minimizando efectos térmicos en condiciones normales. • La potencia de emisión en diagnóstico es baja y no causa efectos térmicos significativos, en contraste con aplicaciones terapéuticas. Componentes y Tipos de Transductores • El ecógrafo cuenta con diferentes tipos de transductores, cada uno diseñado para aplicaciones específicas (lineales, convexos, sectoriales, intracavitarios). • La selección del transductor depende del área de interés y profundidad del estudio, aportando flexibilidad en la adquisición de imágenes. • Los modos de imagen incluyen estáticos y dinámicos, como modo B, M, Doppler y RT-B, con diferentes aplicaciones clínicas. Operación y Elementos del Ecógrafo • La consola permite ajustar parámetros como ganancia, profundidad, zoom, y modo Doppler, facilitando la adquisición y análisis de las imágenes. • El monitor ofrece visualización en alta resolución, incluyendo pantallas táctiles modernas y sistema PACS para almacenamiento y reproducción. • La interpretación requiere conocimientos sobre ecogenicidad y resolución de imagen, que influyen en la calidad diagnóstica. Imagen Ecográfica: Ecogenicidad y Resolución • La ecogenicidad refleja la capacidad de los tejidos para reflejar ultrasonidos, variando de anecoico a hiperecoico, lo cual ayuda a identificar estructuras y patologías. • La resolución axial, lateral, temporal y de contraste determina la capacidad del equipo para distinguir detalles cercanos o en movimiento. • La calidad de la imagen depende de estos factores, esenciales para un diagnóstico preciso. Modo Doppler y Aplicaciones Clínicas • El modo Doppler permite visualizar el movimiento de fluidos, como la sangre, a través de fenómenos como el efecto Doppler, con variantes color, pulsado y potencia. • La técnica requiere un ángulo Doppler adecuado (30°-60°) para obtener mediciones precisas de velocidad y flujo. • Las aplicaciones incluyen estudios vasculares, cardiopatías, identificación de shunts, flujo turbulento y patologías relacionadas con vasos. Artefactos en Ecografía y Doppler • Los artefactos pueden surgir por fenómenos físicos, manejo del equipo, limitaciones técnicas o características anatómicas, afectando la interpretación. • Tipos principales de artefactos incluyen reverberación, sombra acústica, artefacto en espejo, aliasing, blooming, y efectos por movimientos o errores de velocidad. • La identificación de estos artefactos es fundamental para evitar diagnósticos erróneos y mejorar la calidad del estudio. Usos Diagnósticos y Terapeúticos • La ecografía es una técnica no invasiva y de bajo costo utilizada en cardiología, abdomen, tiroides, mama, aparato urinario, intervenciones, musculoesquelética, obstetricia y vascular. • Además, se emplea en terapia para incrementar la temperatura tisular y efectos mecánicos que favorecen procesos antiinflamatorios y de permeabilidad celular. • Es importante el uso racional y justificado del equipo, realizando procedimientos en ambientes adecuados y con buen manejo del personal y recursos. Uso Eficiente y Consideraciones Finales • La ecografía debe utilizarse con justificación clínica, en espacios adecuados, con personal capacitado y en condiciones óptimas de ambiente y limpieza. • La preparación del paciente, el manejo correcto del equipo y el respeto en la comunicación son esenciales para resultados confiables y seguros. • Se recomienda evaluar criterios como movilidad, ergonomía, software, y tecnologías antes de adquirir y usar equipos en centros diagnósticos.",
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
      explain:
        "El Doppler en ecografía sirve para diferenciar flujos arteriales y venosos por su patrón y dirección, para cuantificar la velocidad del flujo y para detectar patologías vasculares (estenosis, trombos, insuficiencias), de modo que las opciones A, B y C describen aplicaciones reales. La pregunta pide una que NO lo sea, pero en realidad todas lo son, por eso la respuesta correcta es 'Todas son correctas'."
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
      explain:
        "Los ultrasonidos terapéuticos producen efectos térmicos (aumento de temperatura) y efectos mecánicos (micro masaje, cavitación controlada), lo que se utiliza en rehabilitación y fisioterapia. La reducción del estrés (opción C) no es un efecto físico directo del ultrasonido, aunque el tratamiento pueda tener beneficios subjetivos. Por eso, el efecto que no se considera terapéutico directo desde el punto de vista físico es la 'reducción del estrés'."
    },
    {
      q: "Modo para estudiar movimiento cardíaco:",
      options: ["A", "B", "M", "Doppler"],
      correct: 2,
      explain:
        "El modo M (motion mode) representa el movimiento de estructuras a lo largo del tiempo en una sola línea de exploración, muy útil para estudiar válvulas y paredes cardíacas. El modo A (opción A) muestra amplitud en función de la profundidad, y casi no se usa en clínica moderna. El modo B (opción B) es el modo bidimensional habitual. El Doppler (opción D) evalúa velocidad y dirección del flujo sanguíneo, no exactamente el movimiento de las paredes."
    },
    {
      q: "Parámetro definido por el brillo:",
      options: ["Ecogenicidad", "Resolución", "Contraste", "Luminosidad"],
      correct: 0,
      explain:
        "La ecogenicidad describe la capacidad de un tejido para reflejar los ultrasonidos y, por tanto, el grado de brillo con el que aparece en la imagen (hiperecoico, hipoecoico, anecoico). La resolución (opción B) indica la capacidad de distinguir estructuras próximas. El contraste (opción C) es la diferencia de brillo entre estructuras. 'Luminosidad' (opción D) no es el término técnico específico en ecografía."
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
      explain:
        "El periodo de repetición es el intervalo de tiempo entre dos pulsos sucesivos emitidos por el transductor. La frecuencia de repetición de pulsos (PRF, opción A) es el número de pulsos por unidad de tiempo, que es la inversa del periodo. 'Tiempo de repetición' (opción C) es una denominación ambigua y no la más usada aquí. Por eso, la expresión más correcta para el 'tiempo entre pulsos' es periodo de repetición."
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
      explain:
        "La elastografía es una técnica que mide la deformación de los tejidos (su elasticidad o rigidez) cuando se aplica un estímulo mecánico; los tejidos más rígidos se deforman menos. 'Recuperación' (opción A) no es el parámetro principal. 'Daño crónico' (opción C) puede inferirse clínicamente de la rigidez, pero no es lo que se mide directamente. 'Absorción' (opción D) se refiere a la atenuación de la onda, que no es el objetivo principal de la elastografía."
    },
    {
      q: "Técnica basada en ultrasonidos reflejados:",
      options: ["Sonografía", "Dopplergrafía", "Ecografía", "Reflexografía"],
      correct: 2,
      explain:
        "La ecografía médica se basa en la emisión de ultrasonidos y la recepción de su eco (reflexión) al encontrarse con interfaces de distintos tejidos, formando la imagen. 'Sonografía' (opción A) se utiliza a veces como sinónimo, pero el término estándar en ámbito sanitario es ecografía. 'Dopplergrafía' (opción B) es un uso concreto del efecto Doppler. 'Reflexografía' (opción D) no es el nombre correcto de la técnica."
    },
    {
      q: "Tipo de transductor:",
      options: ["Termoeléctrico", "Piezoeléctrico", "Mecanoeléctrico", "Isoeléctrico"],
      correct: 1,
      explain:
        "Los transductores de ecografía se basan en el efecto piezoeléctrico: ciertos cristales se deforman al aplicarles un campo eléctrico y, a la inversa, generan señal eléctrica cuando reciben una onda mecánica. 'Termoeléctrico' (opción A) se refiere a fenómenos de conversión calor-electricidad, no a ultrasonidos. 'Mecanoeléctrico' (opción C) es una descripción vaga, pero no el término clásico. 'Isoeléctrico' (opción D) se usa más en química/proteínas, no en transductores."
    },
    {
      q: "Estructuras poco brillantes:",
      options: ["Anecoicas", "Hipoecoicas", "Hiperecoicas", "Metaecoicas"],
      correct: 1,
      explain:
        "Las estructuras hipoecoicas tienen menor ecogenicidad que los tejidos de referencia y, por tanto, se ven más oscuras (poco brillantes). Las anecoicas (opción A) prácticamente no reflejan sonido y se ven negras (por ejemplo, líquido claro). Las hiperecoicas (opción C) reflejan mucho y se ven muy brillantes. 'Metaecoicas' (opción D) no es un término estándar en ecografía."
    },
    {
      q: "Artefacto de señal brusca de color:",
      options: ["Flash", "Espejo", "Movimiento tisular", "Borde"],
      correct: 0,
      explain:
        "En Doppler color, el artefacto tipo 'flash' aparece como destellos o manchas bruscas de color debidas a movimientos rápidos del transductor o del paciente, sin representar flujo real. El artefacto de espejo (opción B) produce duplicación de estructuras. El de movimiento tisular (opción C) se relaciona con el movimiento del propio tejido. 'Borde' (opción D) describe otros artefactos asociados a límites de estructuras, no a un flash de color."
    },
  ],
},

{
  id: "ff-u7",
  title: "FF · U7 · Sistemas de información sanitaria",
  summary:"Unidad 7: Gestión de la imagen diagnóstica: Fundamentos físicos y equipos • La unidad aborda los sistemas de gestión de imágenes diagnósticas, como HIS, RIS y PACS, y los protocolos de comunicación estándar en salud. • Se enfatiza en la importancia de entender estos sistemas para gestionar eficazmente el flujo de información en el ámbito sanitario. • Se explorarán los requisitos tecnológicos y normativos para la protección de datos en sistemas sanitarios. Fundamentos físicos y equipos | UNIDAD 7: Sistemas de información sanitaria • Los Sistemas de Información Sanitaria (SIS) integran personas, procedimientos y equipos para gestionar datos clínicos y administrativos. • Los SIS deben convertir datos en información comprensible y facilitar su uso seguro y normalizado para apoyar decisiones clínicas y de gestión. • Características clave incluyen normalización, validación, utilidad, jerarquización y centralización de la información. Redes de comunicación y Bases de datos • Las redes de comunicación en salud varían según su forma (bus, anillo, malla) y tamaño (WAN, MAN, LAN), permitiendo el intercambio de información. • Las bases de datos almacenan imágenes diagnósticas y se estructuran en niveles de acceso según la antigüedad y uso, desde acceso inmediato hasta almacenamiento a largo plazo. • La interconexión entre HIS, RIS y PACS se realiza por protocolos estandarizados como DICOM y HL7, facilitando la gestión integrada de información. Sistemas HIS, RIS y PACS • El HIS centraliza datos administrativos y clínicos del hospital, interconectándose con otros sistemas como RIS y LIS. • El RIS gestiona procesos radiológicos desde la citación hasta la generación del informe, integrándose con PACS para acceder y almacenar imágenes. • El PACS permite almacenar y transmitir archivos digitales de diagnóstico, considerando parámetros como resolución y seguridad del almacenamiento. Protocolos de comunicación: HL7, IHE y DICOM • HL7 facilita el intercambio automatizado de información clínica y administrativa entre sistemas de salud. • IHE busca resolver conflictos en la integración y compatibilidad de protocolos como HL7 y DICOM en entornos sanitarios. • DICOM es un estándar para el almacenamiento y transmisión de imágenes diagnósticas, garantizando compatibilidad y organización de datos. Integración de sistemas y gestión de información • La integración entre RIS, HIS y PACS se realiza mediante protocolos estandarizados, permitiendo un flujo continuo y automático de datos. • La gestión eficiente en software especializado ofrece ventajas superiores en comparación con métodos analógicos, permitiendo funciones como visualización, modificación y transferencia rápida de imágenes. Requerimientos y protección de datos • La protección de datos en sistemas sanitarios está regulada por leyes nacionales y europeas, como RGPD y leyes españolas de protección de datos. • Se implementan controles de acceso, registros de eventos (logs) y encriptación para garantizar la confidencialidad y seguridad de la información. • Estas medidas aseguran que toda manipulación de datos en salud sea conforme a normativas legales y de confidencialidad vigentes.",
  questions: [
    {
      q: "Registro de eventos de una aplicación:",
      options: ["Mooc", "Log", "Backup", "Timeline"],
      correct: 1,
      explain:
        "Un log es un registro estructurado de eventos, acciones o errores que va generando una aplicación o sistema, fundamental para auditoría y resolución de problemas. 'Mooc' (opción A) son cursos online masivos. 'Backup' (opción C) es una copia de seguridad de datos. 'Timeline' (opción D) describe una línea temporal, pero no es el término técnico estándar para el fichero interno de eventos."
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
      explain:
        "Los sistemas informáticos sanitarios buscan ser fáciles de usar (facilidad), modulares (permiten ampliar o modificar partes) e interoperables (capaces de comunicarse con otros sistemas), así que A, B y C describen ventajas reales. La pregunta exige seleccionar cuál NO es una ventaja, pero como las tres lo son, la respuesta correcta es 'Todas son ventajas'."
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
      explain:
        "Un Sistema de Información Sanitaria (SIS) debe ser capaz de transformar datos crudos (mediciones, registros) en información útil para la gestión, la asistencia y la toma de decisiones, por eso la opción C es clave. No es requisito que el acceso sea público (opción A) ya que suele estar restringido y protegido. Tampoco es obligatorio que haga diagnóstico automático (opción B); eso puede pertenecer a sistemas de ayuda a la decisión, pero no define a todo SIS. 'Ninguna' (D) es incorrecta porque sí hay un requisito claro."
    },
    {
      q: "Formato estándar de imagen médica:",
      options: ["HL7", "IHE", "DICOM", "HTML"],
      correct: 2,
      explain:
        "DICOM (Digital Imaging and Communications in Medicine) es el estándar internacional para el almacenamiento, intercambio y visualización de imágenes médicas y su información asociada. HL7 (opción A) es un estándar de mensajería clínica para datos administrativos y clínicos. IHE (opción B) es una iniciativa que define perfiles de integración, no un formato de imagen. HTML (opción D) es un lenguaje de marcado para páginas web, no un estándar de imagen médica."
    },
    {
      q: "Reglamento europeo de protección de datos:",
      options: ["LOPD", "SGAE", "RGPD", "RIP"],
      correct: 2,
      explain:
        "El Reglamento General de Protección de Datos (RGPD) es la normativa europea que regula la protección de datos personales, incluida la información sanitaria. La LOPD (opción A) es la Ley Orgánica de Protección de Datos española, adaptada al RGPD. SGAE (opción B) es una entidad de gestión de derechos de autor, nada que ver con datos sanitarios. 'RIP' (opción D) no corresponde a una norma de protección de datos."
    },
    {
      q: "Sistema habitual de almacenamiento de imágenes:",
      options: ["HIS", "RIS", "PACS", "Ninguno"],
      correct: 2,
      explain:
        "El PACS (Picture Archiving and Communication System) es el sistema específico para almacenar, recuperar y distribuir imágenes médicas en formato DICOM. El HIS (Hospital Information System, opción A) gestiona información general del hospital (administrativa, clínica). El RIS (Radiology Information System, opción B) maneja la gestión de la actividad radiológica (citas, informes). 'Ninguno' (D) es falso porque el PACS es el sistema habitual de imágenes."
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
      explain:
        "Un sistema de información sanitaria incluye personas, procesos, tecnologías y recursos que se coordinan para recoger, procesar, almacenar y difundir información de salud. Un archivo sanitario (opción B) es solo un componente (el lugar donde se guardan documentos). Un sistema de informes (opción C) se centra en generar reportes. 'Sistema de pacientes' (opción D) no es un término estandarizado."
    },
    {
      q: "Red de intercambio mundial:",
      options: ["MAN", "SWAN", "LAN", "WAN"],
      correct: 3,
      explain:
        "Una WAN (Wide Area Network) es una red de gran extensión geográfica que puede abarcar países o continentes, como Internet. Una LAN (opción C) es una red de área local (por ejemplo, dentro de un hospital). Una MAN (opción A) es una red metropolitana. 'SWAN' (opción B) no es un tipo estándar reconocido en esta clasificación."
    },
    {
      q: "Datos con mismos criterios:",
      options: ["Estandarizados", "Validados", "Jerarquizados", "Centralizados"],
      correct: 0,
      explain:
        "Datos estandarizados son aquellos que se registran siguiendo los mismos formatos, códigos y normas, lo que permite compararlos y combinarlos entre distintos sistemas. Datos validados (opción B) han sido comprobados, pero no necesariamente estandarizados. Jerarquizados (opción C) indica que están ordenados según una estructura. Centralizados (opción D) significa que se guardan en un único punto, pero no implica homogeneidad de criterios."
    },
    {
      q: "Acceso a largo plazo en bases sanitarias:",
      options: ["5–20 segundos", "Varios minutos", "7–15 días", "Ninguna"],
      correct: 1,
      explain:
        "Cuando se habla de acceso a largo plazo en bases de datos sanitarias se suele asumir que la recuperación puede tardar más, varios minutos, porque implica consultar sistemas de archivo más profundos o copias históricas. Los accesos de 5–20 segundos (opción A) corresponden a acceso casi inmediato (online). '7–15 días' (opción C) sería un plazo de archivo físico o trámites, no de acceso informático. 'Ninguna' (opción D) no encaja porque 'varios minutos' sí refleja un acceso más lento propio de largo plazo."
    },
  ],
},
{
  id: "ff-final",
  title: "⭐ FF · Prueba final · 40 preguntas",
  isFinal: true,
  questions: [
    {
      q: "¿Cuál de las siguientes estructuras es más ecogénica?",
      options: ["Sangre", "Orina", "Cartílago", "Hueso"],
      correct: 3,
      explain:
        "En ecografía, las estructuras más densas y reflectantes, como el hueso, devuelven más ecos y aparecen muy brillantes (hiperecogénicas) en la imagen."
    },
    {
      q: "¿Cuál de las siguientes no es un tipo de radiación ionizante?",
      options: ["Rayos gamma", "Rayos X", "Ultravioleta", "Infrarroja"],
      correct: 3,
      explain:
        "Las radiaciones ionizantes tienen energía suficiente para arrancar electrones de los átomos: rayos X, gamma y parte del ultravioleta. La radiación infrarroja es no ionizante."
    },
    {
      q: "¿Cuál de las siguientes no es una aplicación de la ecografía Doppler?",
      options: [
        "Distinguir entre sistema arterial y venoso",
        "Detectar patologías vasculares",
        "Cuantificar la velocidad de flujo",
        "Todas son aplicaciones válidas"
      ],
      correct: 3,
      explain:
        "El Doppler permite ver dirección del flujo, diferenciar arterias/venas y medir velocidades, por lo que todas las opciones anteriores son aplicaciones válidas."
    },
    {
      q: "¿Cuál de los siguientes dispositivos es totalmente incompatible con la Resonancia Magnética?",
      options: ["Audífonos", "Dispositivo intrauterino", "Marcapasos", "Prótesis"],
      correct: 2,
      explain:
        "Los marcapasos (especialmente los no RM-compatibles) pueden verse gravemente afectados por el campo magnético, por lo que son una contraindicación clásica."
    },
    {
      q: "¿Cuál de los siguientes dispositivos se utiliza para generas campos magnéticos?",
      options: [
        "Tubo de rayos catódicos",
        "Solenoides",
        "Filamentos de neodimio",
        "Ninguna es correcta."
      ],
      correct: 1,
      explain:
        "Un solenoide es una bobina de hilo conductor; cuando pasa corriente eléctrica por ella genera un campo magnético controlado."
    },
    {
      q: "¿Cuál de los siguientes factores está relacionado con la distorsión de la imagen obtenida en radiología convencional?",
      options: ["Grosor", "Orientación", "Posición", "Todas están relacionadas"],
      correct: 3,
      explain:
        "El grosor del objeto, su orientación y su posición respecto al tubo y al receptor influyen en la magnificación y la distorsión de la imagen radiográfica."
    },
    {
      q: "¿Cuál de los siguientes factores no afecta a la absorción de la radiación de la materia?",
      options: [
        "Número atómico",
        "Espesor del tejido",
        "Energía de los rayos X",
        "Todos afectan a la absorción"
      ],
      correct: 3,
      explain:
        "La probabilidad de absorción depende del número atómico del material, del espesor atravesado y de la energía del haz, por lo que todos influyen."
    },
    {
      q: "¿Cuál de los siguientes no es un factor geométrico que pueda afectar a la imagen radiográfica obtenida?",
      options: ["Magnificación", "Distorsión", "Desenfoque", "Artefactos"],
      correct: 3,
      explain:
        "Magnificación, distorsión y desenfoque dependen de la geometría (distancias foco–objeto–placa). Los artefactos son defectos de otra naturaleza (técnica, paciente, equipo)."
    },
    {
      q: "¿Cuál de los siguientes no es un principio básico de protección radiológica?",
      options: ["Optimización", "Reducción", "Justificación", "Limitación"],
      correct: 1,
      explain:
        "Los tres principios clásicos de protección radiológica son: justificación, optimización (ALARA) y limitación de dosis. ‘Reducción’ no es el término formal."
    },
    {
      q: "¿Cuál es el método de obtención de imagen en tomografía computarizada convencional?",
      options: ["Helicoidal", "Espiral", "Discreto", "Secuencial"],
      correct: 3,
      explain:
        "La TC convencional obtenía cortes de forma secuencial: el gantry se detiene, se adquiere un corte, la camilla se desplaza y se toma el siguiente."
    },
    {
      q: "¿Cuál es el reglamento europeo que establece cómo deben salvaguardarse los datos para garantizar la intimidad de las personas?",
      options: ["LOPD", "SGAE", "RGPD", "RIP"],
      correct: 2,
      explain:
        "El Reglamento General de Protección de Datos (RGPD) es la norma europea que regula el tratamiento y protección de datos personales."
    },
    {
      q: "¿Cuál es el sistema más habitual para el almacenamiento de archivos médicos digitales en centros sanitarios?",
      options: ["HIS", "RIS", "PACS", "Todas son incorrectas."],
      correct: 2,
      explain:
        "PACS (Picture Archiving and Communication System) es el sistema usado para almacenar, gestionar y visualizar imágenes médicas digitales."
    },
    {
      q: "¿Cuál es el tipo de radiación más energética del espectro electromagnético?",
      options: ["Rayos X", "Ultravioleta", "Rayos Gamma", "Ondas de radio"],
      correct: 2,
      explain:
        "Los rayos gamma tienen la frecuencia más alta y, por tanto, la energía más elevada dentro del espectro electromagnético."
    },
    {
      q: "¿Cuál fue el primer sistema mediante el cual se produjeron rayos X?",
      options: [
        "Tubo de rayos X",
        "Tubo de Crookes",
        "Tubo de producción ionizadora",
        "Diencéfalo"
      ],
      correct: 1,
      explain:
        "Históricamente, los primeros rayos X se obtuvieron con tubos de Crookes, un antecedente de los tubos de rayos X modernos."
    },
    {
      q: "¿En qué generación de Tomografía computarizada se incorporó la rotación continua con detectores en hileras en forma de arco?",
      options: ["1ª", "2ª", "3ª", "4ª"],
      correct: 2,
      explain:
        "En la 3ª generación se utilizó un tubo de rayos X y un arco de múltiples detectores que rotan juntos de forma continua alrededor del paciente."
    },
    {
      q: "¿En qué técnica de imagen para el diagnóstico puede producirse el efecto proyectil?",
      options: [
        "Tomografía computarizada",
        "Radiología convencional",
        "Ecografía",
        "Resonancia magnética"
      ],
      correct: 3,
      explain:
        "En Resonancia Magnética, el potente campo magnético puede atraer violentamente objetos ferromagnéticos, produciendo el llamado efecto proyectil."
    },
    {
      q: "¿Mediante qué elemento ajustamos los parámetros de la manera que deseamos, permitiéndonos aplicar la radiación de manera controlada en la obtención de imágenes a partir de rayos X?",
      options: [
        "Consola de mandos",
        "Sistema de telecontrol",
        "Mecanismo de ajuste",
        "Dispositivo de radiocontrol"
      ],
      correct: 0,
      explain:
        "La consola de mandos es el panel desde el que el técnico ajusta kV, mA, tiempo de exposición y otros parámetros del equipo de rayos X."
    },
    {
      q: "¿Qué contraste es el que se utiliza en Resonancia Magnética?",
      options: ["Sulfato de bario", "Yoduro de potasio", "Neodimio", "Gadolinio"],
      correct: 3,
      explain:
        "Los contrastes de uso habitual en RM son quelatos de gadolinio, que modifican los tiempos de relajación de los tejidos y alteran su intensidad de señal."
    },
    {
      q: "¿Qué elemento se utiliza para reducir la radiación del haz disperso transmitido al obtener imágenes a partir de rayos X?",
      options: ["Colimadores", "Rejillas antidifusoras", "Conos", "Cilindros"],
      correct: 1,
      explain:
        "Las rejillas antidifusoras se colocan entre el paciente y el receptor para absorber gran parte de la radiación dispersa y mejorar el contraste de la imagen."
    },
    {
      q: "¿Qué fenómeno se representa en la siguiente imagen?",
      options: [
        "Radiación de frenado",
        "Radiación característica",
        "Dispersión clásica coherente",
        "Producción de radiación infrarroja"
      ],
      correct: 0,
      explain:
        "La radiación de frenado (Bremsstrahlung) se produce cuando un electrón es frenado o desviado por el campo del núcleo, emitiendo fotones de rayos X continuos."
    },
    {
      q: "¿Qué modo de obtención de imagen se utiliza principalmente para estudiar el movimiento cardiaco?",
      options: ["A", "B", "M", "Doppler"],
      correct: 2,
      explain:
        "El modo M (motion) de la ecografía representa el movimiento de las estructuras a lo largo del tiempo, por eso es muy útil en cardiología."
    },
    {
      q: "¿Qué parámetro de la imagen ecográfica viene definido por la Intensidad del brillo?",
      options: ["Ecogenicidad", "Resolución", "Contraste", "Luminosidad"],
      correct: 0,
      explain:
        "La ecogenicidad describe la capacidad de un tejido para reflejar el ultrasonido; a mayor ecogenicidad, mayor brillo en la imagen."
    },
    {
      q: "¿Qué sistema de información es especializado para los servicios de radiología?",
      options: ["RIS", "HIS", "PACS", "LIS"],
      correct: 0,
      explain:
        "RIS (Radiology Information System) es el sistema de información específico para gestionar citas, informes y flujo de trabajo en radiología."
    },
    {
      q: "¿Qué sustancia tiene un valor de Unidades Hounsfield (UH)=0?",
      options: ["Hueso compacto", "Sangre líquida", "Agua", "Aire"],
      correct: 2,
      explain:
        "En la escala de Hounsfield, el agua se usa como referencia y se le asigna un valor de 0 UH; el aire es -1000 UH y el hueso valores positivos elevados."
    },
    {
      q: "¿Qué tipo de radiación ionizante está compuesta por electrones y positrones libres?",
      options: ["Alfa", "Beta", "Gamma", "Ninguna es correcta"],
      correct: 1,
      explain:
        "La radiación beta está formada por electrones (β−) o positrones (β+) emitidos desde el núcleo en ciertos procesos radiactivos."
    },
    {
      q: "¿Qué tipo de radiación se utiliza en resonancia magnética para inducir la emisión de la señal que medimos?",
      options: ["Infrarroja", "Radiofrecuencias", "Ultravioleta", "Gamma"],
      correct: 1,
      explain:
        "En RM se aplica un campo de radiofrecuencia específico que excita los protones. Al relajarse, estos emiten la señal que se detecta."
    },
    {
      q: "¿Qué tipo de radiaciones producen cambios químicos en la materia?",
      options: ["No ionizantes", "Ionizantes", "Alterantes", "Modulantes"],
      correct: 1,
      explain:
        "Las radiaciones ionizantes tienen energía suficiente para ionizar átomos y moléculas, produciendo cambios químicos en los tejidos."
    },
    {
      q: "¿Qué tipo de red permite el intercambio de información a nivel mundial?",
      options: ["MAN", "SWAN", "LAN", "WAN"],
      correct: 3,
      explain:
        "WAN (Wide Area Network) es una red de área amplia, capaz de conectar redes locales en grandes distancias, como ocurre con Internet."
    },
    {
      q: "¿Qué tipo de transductor se utiliza en las técnicas de ultrasonido?",
      options: ["Termoeléctrico", "Piezoeléctrico", "Mecanoeléctrico", "Isoeléctrico"],
      correct: 1,
      explain:
        "Los cristales piezoeléctricos convierten la energía eléctrica en vibraciones mecánicas (ultrasonidos) y viceversa, base del transductor ecográfico."
    },
    {
      q: "Cuando encontramos un fino granulado en la imagen, nos encontramos ante…",
      options: ["Ruido", "Artefactos", "Distorsión", "Todas las anteriores son incorrectas"],
      correct: 0,
      explain:
        "El ruido se manifiesta como un granulado fino que empeora la calidad de la imagen y dificulta la apreciación de detalles."
    },
    {
      q: "Cuando la radiación atraviesa la materia sin cambiar su trayectoria, ¿Qué fenómeno se ha producido?",
      options: ["Absorción", "Dispersión", "Transmisión", "Todas son incorrectas."],
      correct: 2,
      explain:
        "Si el haz atraviesa el material sin desviarse ni perder energía significativa, hablamos de transmisión."
    },
    {
      q: "Cuando realizamos ecografías, ¿Cuál es el rango ideal del ángulo Doppler?",
      options: ["30-60º", "40-70º", "50-80º", "60-90º"],
      correct: 0,
      explain:
        "Para obtener medidas fiables de velocidad en Doppler, se recomienda un ángulo respecto al flujo entre 30º y 60º."
    },
    {
      q: "Cuando trabajamos con imágenes tridimensionales en TC, la matriz está dividida en…:",
      options: ["Cuadrados", "Píxeles", "Cubos", "Vóxeles"],
      correct: 3,
      explain:
        "En 3D, cada elemento de volumen es un vóxel (volumetric pixel), un pequeño cubo que representa un valor de atenuación en el espacio."
    },
    {
      q: "Cuando una carga eléctrica se desplaza, se genera un…",
      options: ["Campo eléctrico", "Campo magnético", "Campo radiactivo", "Todas son correctas"],
      correct: 1,
      explain:
        "Una carga en movimiento constituye una corriente eléctrica y genera un campo magnético asociado a su alrededor."
    },
    {
      q: "En los sistemas de información ¿cómo se denominan los registros de eventos que ocurren en un tiempo concreto en ellos?",
      options: ["Lag", "Log", "Leg", "Ninguna es correcta"],
      correct: 1,
      explain:
        "Un ‘log’ es un registro cronológico de eventos que ocurren en un sistema informático, útil para auditoría y diagnóstico."
    },
    {
      q: "En radiología convencional, ¿cómo se conoce el proceso químico por el que se detiene el revelado y se eliminan los cristales de haluros no revelados o expuestos?",
      options: ["Exposición", "Revelado", "Fijación", "Visibilización"],
      correct: 2,
      explain:
        "La fijación detiene el revelado, elimina los cristales no expuestos y hace estable la imagen en la película radiográfica."
    },
    {
      q: "En resonancia magnética, la frecuencia de Larmor se conoce también como…",
      options: [
        "Frecuencia de precesión",
        "Frecuencia de precisión",
        "Frecuencia de procesión",
        "Frecuencia de propensión"
      ],
      correct: 0,
      explain:
        "La frecuencia de Larmor es la frecuencia de precesión de los espines en el campo magnético de la RM."
    },
    {
      q: "En tomografía computarizada, ¿a qué corresponden las siglas FOV?",
      options: [
        "Campo de visión (scan field of view)",
        "Campo de reconstrucción (field of view)",
        "Campo de verificación (field of verification)",
        "Todas son incorrectas"
      ],
      correct: 1,
      explain:
        "En TC, el FOV (Field Of View) es el campo de reconstrucción, es decir, el área de la imagen que se reconstruye a partir de los datos adquiridos."
    },
    {
      q: "En tomografía computarizada, ¿Cómo afectan a la imagen los valores de pitch >1?",
      options: [
        "Se produce solapamiento entre cortes",
        "La calidad de la imagen disminuye",
        "Se obtienen imágenes de alta resolución",
        "Todas son correctas."
      ],
      correct: 1,
      explain:
        "Un pitch mayor que 1 implica que la mesa avanza más rápido y hay menos solapamiento de datos, lo que reduce la dosis pero también la calidad de la imagen."
    },
    {
      q: "Los rayos X duros son aquellos que tienen una longitud de onda…",
      options: ["Más larga", "Más corta", "Más potente", "Menos potente"],
      correct: 1,
      explain:
        "Los rayos X ‘duros’ son de mayor energía, lo que equivale a una longitud de onda más corta dentro del espectro de rayos X."
    }
  ]
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
const STATS_KEY = "studyapp_stats_v1";

function loadStats() {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(STATS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error loading stats", e);
    return [];
  }
}

function saveStats(list) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Error saving stats", e);
  }
}

/* =========================
   APP
   ========================= */

  export default function App() {
  const [progress, setProgress] = useState(() => loadProgress());
  // 👉 Estadísticas globales de tests
const [stats, setStats] = useState(() => loadStats());


  // home | subject | unit | quiz | result
  const [screen, setScreen] = useState("home");
  const [subjectId, setSubjectId] = useState(null);
  const [unitId, setUnitId] = useState(progress.lastUnitId || null);

  // 👇 MUY IMPORTANTE: este estado TIENE que existir
 const [quizResult, setQuizResult] = useState(null);



  const [showSummary, setShowSummary] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState([]);
  const [currentChoice, setCurrentChoice] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showExplain, setShowExplain] = useState(false);

  const unit = useMemo(
    () => SUBJECT.units.find((u) => u.id === unitId) || null,
    [unitId]
  );
  const summary = unit?.summary || "";
  // 👉 Todas las sesiones de la asignatura seleccionada
const subjectSessions = useMemo(
  () => stats.filter((s) => s.subjectId === subjectId),
  [stats, subjectId]
);

const bestSubjectScore = subjectSessions.length
  ? Math.max(...subjectSessions.map((s) => s.score))
  : 0;

const avgSubjectScore = subjectSessions.length
  ? Math.round(
      subjectSessions.reduce((sum, s) => sum + s.score, 0) /
        subjectSessions.length
    )
  : 0;


  // ⬇⬇ aquí irán startQuiz, goHome, answer, nextQuestion, etc…

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
  setShowSummary(false);     // 👈 importante
  setScreen("unit");
}

function startQuiz() {
  setQIndex(0);
  setPicked([]);
  setShowExplain(false);
  setCurrentChoice(null);
  setFeedback(null);
  setShowSummary(false);  // 👈 cerrar resumen al ir al test
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

  const newPicked = [...picked];
  newPicked[qIndex] = currentChoice;

  const isLast = qIndex + 1 >= unit.questions.length;

  if (!isLast) {
    setPicked(newPicked);
    setQIndex(qIndex + 1);
    setCurrentChoice(null);
    setFeedback(null);
    setShowExplain(false);
    return;
  }

  // ✅ Última pregunta
  const total = unit.questions.length;
  let ok = 0;
  const wrong = [];

  unit.questions.forEach((q, idx) => {
    const userIndex = newPicked[idx];

    if (userIndex === q.correct) {
      ok++;
    } else {
      wrong.push({
        q: q.q,
        userLetter:
          userIndex !== undefined ? String.fromCharCode(65 + userIndex) : "-",
        userText:
          userIndex !== undefined ? q.options[userIndex] : "Sin responder",
        correctLetter: String.fromCharCode(65 + q.correct),
        correctText: q.options[q.correct],
        explain: q.explain || null,
      });
    }
  });

  const score = percent(ok, total);

  setPicked(newPicked);

  // Progreso por unidad (lo que ya tenías)
  setProgress((p) => {
    const prevBest = p.best[unit.id] ?? 0;
    const best = Math.max(prevBest, score);
    const completed = { ...p.completed, [unit.id]: score >= 60 };

    return { ...p, best: { ...p.best, [unit.id]: best }, completed };
  });

  // 👉 NUEVO: guardamos la sesión en stats
  setStats((prev) => {
    // si aún no se ha elegido asignatura por lo que sea, no hacemos nada
    if (!subjectId) return prev;

    const next = [
      ...prev,
      {
        id: Date.now(),
        subjectId,
        unitId: unit.id,
        score,
        ok,
        total,
        date: new Date().toISOString(),
      },
    ];
    saveStats(next);
    return next;
  });

  setQuizResult({ score, ok, total, wrong });
  setScreen("result");
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
          <button
      className="ghost"
      style={{ marginTop: 10, marginBottom: 10 }}
      onClick={() => setScreen("stats")}
    >
      📊 Ver estadísticas
    </button>

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
      
            {/* 🔽 BOTÓN + TEXTO DE RESUMEN */}
            {summary && (
              <div className="unitSummary" style={{ marginBottom: "1rem" }}>
                <button
                  className="ghost"
                  type="button"
                  onClick={() => setShowSummary((v) => !v)}
                >
                  {showSummary ? "Ocultar resumen" : "Estudiar antes del test"}
                </button>
      
                {showSummary && (
                  <p style={{ marginTop: "0.75rem", whiteSpace: "pre-line" }}>
                    {summary}
                  </p>
                )}
              </div>
            )}
      
            {/* BOTÓN TEST / MENSAJE VACÍO */}
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
      {/* STATS → estadísticas de la asignatura actual */}
{screen === "stats" && currentSubject && (
  <main className="main">
    <div className="panel">
      <div className="panelHead">
        <div className="panelTitle">
          📊 Estadísticas · {currentSubject.name}
        </div>
      </div>
    </div>

    {subjectSessions.length === 0 ? (
      <div className="empty">
        Aún no has hecho ningún test de esta asignatura. Haz algún test y
        vuelve aquí 😉
      </div>
    ) : (
      <>
        <div className="panel" style={{ marginTop: 10 }}>
          <p>
            Intentos totales: <b>{subjectSessions.length}</b>
          </p>
          <p>
            Nota media: <b>{avgSubjectScore}%</b>
          </p>
          <p>
            Mejor nota: <b>{bestSubjectScore}%</b>
          </p>
        </div>

        <h2 style={{ marginTop: 20 }}>Por unidad</h2>
        <ul className="statsUnits">
          {getSubjectUnits(currentSubject.id).map((u) => {
            const sessions = subjectSessions.filter(
              (s) => s.unitId === u.id
            );

            if (!sessions.length) {
              return (
                <li key={u.id} className="statsUnitItem">
                  <strong>{u.title}</strong>
                  <span>Sin intentos todavía.</span>
                </li>
              );
            }

            const bestUnit = Math.max(...sessions.map((s) => s.score));
            const attempts = sessions.length;

            return (
              <li key={u.id} className="statsUnitItem">
                <strong>{u.title}</strong>
                <span>
                  {attempts} intento(s) · mejor <b>{bestUnit}%</b>
                </span>
              </li>
            );
          })}
        </ul>
      </>
    )}

    <button
      className="ghost"
      style={{ marginTop: 20 }}
      onClick={() => setScreen("subject")}
    >
      ⬅ Volver a unidades
    </button>
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
            {/* IMAGEN (opcional) */}
  {question.image && (
    <div className="questionImage">
      <img src={question.image} alt="imagen de la pregunta" />
    </div>
  )}
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
{screen === "result" && unit && quizResult && (
  <main className="main">
    <div className="resultCard">
      <div className="resultScore">{quizResult.score}%</div>

      <div className="resultMeta">
        Aciertos: <b>{quizResult.ok}</b> / <b>{quizResult.total}</b>
      </div>

      <div className="bar big">
        <div
          className="barFill"
          style={{ width: `${quizResult.score}%` }}
        />
      </div>

      <div className="resultHint">
        {quizResult.score >= 60
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
      {quizResult.wrong && quizResult.wrong.length > 0 && (
        <div className="wrongList">
          <div className="wrongTitle">Preguntas que has fallado</div>

          {quizResult.wrong.map((item, idx) => (
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
                    <p>{item.explain}</p>
                  ) : (
                    <>
                      {item.explain.detail && <p>{item.explain.detail}</p>}

                      {item.explain.whyCorrect && (
                        <p>
                          <strong>
                            Por qué es correcta la {item.correctLetter}:
                          </strong>{" "}
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
   .questionImage {
     width: 100%;
     margin: 1rem 0;
     display: flex;
     justify-content: center;
   }
   
   /* 📌 Imagen dentro del contenedor */
   .questionImage img {
     max-width: 100%;
     max-height: 260px;
     object-fit: contain;
     border-radius: 10px;
     border: 1px solid #ddd;
     padding: 6px;
     background: #fafafa;
   }
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
   
