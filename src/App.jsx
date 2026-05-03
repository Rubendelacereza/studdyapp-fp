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
  subtitle: "Tests PROTECCIÓN RADIOLOGICA · EIE · INGLES",
  colorA: "#6366f1",
  colorB: "#8b5cf6",
  units: [
    /* ================== FOL ================== */
{
  id: "fol-u1",
title: "Protección Radiológica · U1 · Detección de la radiación",
summary: [
  "1️⃣ Visión general\nEsta unidad explica los principios fundamentales de la detección y medida de las radiaciones ionizantes. Como la radiación no puede percibirse directamente por los sentidos, es necesario utilizar sistemas de detección y dosímetros capaces de transformar la interacción de la radiación con la materia en señales medibles.",

  "2️⃣ Magnitudes radiológicas\nLas magnitudes radiológicas se dividen en tres grupos principales:\n• Magnitudes físicas fundamentales: incluyen radiactividad, radiometría y dosimetría.\n• Magnitudes de radioprotección: permiten valorar el riesgo biológico, como la dosis equivalente y la dosis efectiva.\n• Magnitudes operacionales: se usan en la vigilancia práctica, como la dosis equivalente ambiental y la dosis personal.",

  "3️⃣ Magnitudes dosimétricas principales\nLa exposición (X) relaciona la carga de iones producidos con la masa de aire y se mide en C/kg. El Kerma (K) es la energía cinética liberada por unidad de masa y se mide en julio por kilogramo o Gray (Gy). La dosis absorbida (D) indica la energía absorbida por un tejido o material. También aparece la LET, que expresa la energía depositada por unidad de longitud.",

  "4️⃣ Radioprotección y efectos biológicos\nLa dosis equivalente y la dosis efectiva permiten valorar el efecto biológico de la radiación. No todos los tipos de radiación producen el mismo daño: los fotones y electrones tienen factor 1, los protones 2, los neutrones entre 5 y 20, y las partículas alfa 20. Los efectos pueden ser deterministas, con dosis umbral, o estocásticos, relacionados con la probabilidad de daño.",

  "5️⃣ Sistemas de detección\nLos detectores aprovechan cambios físicos producidos por la radiación en la materia. Pueden basarse en ionización gaseosa, luminiscencia o alteraciones químicas. Entre los principales sistemas están las cámaras de ionización, contadores proporcionales, contadores Geiger-Müller, detectores de centelleo, detectores de termoluminiscencia y detectores de neutrones.",

  "6️⃣ Dosimetría y control de dosis\nLa dosimetría permite controlar la exposición en el entorno radiológico. Puede ser ambiental, de área o personal. Los dosímetros pasivos no requieren electricidad y no ofrecen lectura inmediata; los activos sí requieren alimentación eléctrica y permiten medición en tiempo real. Los dosímetros más utilizados son los de termoluminiscencia. La normativa exige controlar las dosis recibidas y conservar el historial dosimétrico."
],
questions: [
  {
    q: "Entre las magnitudes radiológicas encontramos:",
    options: [
      "Magnitudes físicas fundamentales",
      "Magnitudes de radioprotección",
      "Magnitudes operacionales",
      "Todas son correctas.",
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque las magnitudes radiológicas se clasifican en físicas fundamentales, de radioprotección y operacionales.",
  },
  {
    q: "La dosis efectiva (E) es una:",
    options: [
      "Magnitud física fundamental",
      "Magnitud de radioprotección",
      "Magnitud operacionales",
      "Magnitud de medida",
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque la dosis efectiva valora el riesgo biológico teniendo en cuenta la sensibilidad de los tejidos.",
  },
  {
    q: "La dosis personal es una:",
    options: [
      "Magnitud física fundamental",
      "Magnitud de radioprotección",
      "Magnitud operacionales",
      "Magnitud de medida",
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque la dosis personal se usa en la vigilancia práctica del trabajador expuesto.",
  },
  {
    q: "La radiactividad es una:",
    options: [
      "Magnitud física fundamental",
      "Magnitud de radioprotección",
      "Magnitud operacionales",
      "Magnitud de medida",
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque la radiactividad forma parte de las magnitudes físicas fundamentales.",
  },
  {
    q: "Las medidas dosimétricas que se realizan en zonas de acceso restringido y controlado para personal cualificado se denominan:",
    options: [
      "Dosimetría radiológica ambiental",
      "Dosimetría radiológica de área",
      "Dosimetría personal",
      "Ninguna de las anteriores",
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque la dosimetría radiológica de área controla zonas restringidas o controladas donde trabaja personal cualificado.",
  },
  {
    q: "Las unidades de la energía cinética liberada por la radiación o Kerma son:",
    options: [
      "Julio por kilogramo o Gray (Gy)",
      "Julio por gramo",
      "Greys (Ge)",
      "Culombio por kilogramo (C/Kg)",
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque el Kerma se expresa en julio por kilogramo, unidad equivalente al Gray (Gy).",
  },
  {
    q: "Los detectores de radiación que sólo detectan los fotones o partículas son:",
    options: [
      "Detectores",
      "Contadores",
      "Espectómetros",
      "Ninguna de las anteriores",
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque los contadores registran eventos de radiación, como fotones o partículas detectadas.",
  },
  {
    q: "Los dosímetros más utilizados son:",
    options: [
      "Detectores de centelleo",
      "Detectores de neutrones",
      "Detectores de termoluminiscencia",
      "Detectores de ionización gaseosa",
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque los dosímetros de termoluminiscencia son muy usados en dosimetría personal por su precisión y tamaño reducido.",
  },
  {
    q: "Un dosímetro activo:",
    options: [
      "Permite medir en tiempo real",
      "Requiere de una fuente de electricidad para funcionar",
      "Todas son correctas",
      "Son las cámaras de ionización de gases y los detectores de centelleo",
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque un dosímetro activo necesita alimentación eléctrica, permite medición inmediata y puede incluir cámaras de ionización o detectores de centelleo.",
  },
  {
    q: "Un equipo o dispositivo utilizado para medir la dosis de radiación se denomina:",
    options: [
      "Dosímetro",
      "Medidómetro",
      "Magnitudómetro",
      "Radiómetro",
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque el dosímetro es el dispositivo utilizado para medir la dosis de radiación recibida.",
  },
],
},

{
  id: "fol-u2",
title: "Protección Radiológica · U2 · Interacción de la radiación con el cuerpo",
summary: [
  "1️⃣ Visión general\nEsta unidad explica cómo interactúan las radiaciones ionizantes con el cuerpo humano. Su peligrosidad radica en su capacidad para ionizar la materia y alterar estructuras celulares, siendo el ADN el principal blanco del daño.",

  "2️⃣ Mecanismos de acción\nExisten dos formas principales de interacción:\n• Acción directa: la radiación impacta directamente sobre el ADN u otros componentes celulares, alterando su estructura.\n• Acción indirecta: la radiación actúa sobre el agua celular (radiólisis), generando radicales libres que dañan las biomoléculas.",

  "3️⃣ Daño en biomoléculas y ADN\nLas biomoléculas no tienen la misma sensibilidad:\n• Glúcidos: poco importantes por su rápida renovación.\n• Lípidos: se alteran por oxidación.\n• Proteínas: pierden su función al modificarse su estructura.\n• ADN: es el más sensible, ya que contiene la información genética.\nEl daño puede ser molecular (roturas, mutaciones) o cromosómico (alteraciones estructurales).",

  "4️⃣ Radiosensibilidad\nLa radiosensibilidad es la capacidad de una célula de sufrir daño por radiación. Depende de factores como:\n• Fase del ciclo celular (la fase S replica ADN)\n• Edad biológica\n• Nivel de diferenciación\n• LET y tasa de dosis\nTambién influyen sustancias externas como radioprotectores y radiosensibilizadores.",

  "5️⃣ Efectos biológicos\n• Efectos deterministas: tienen umbral y la gravedad depende de la dosis.\n• Efectos estocásticos: no tienen umbral y dependen de la probabilidad (ejemplo: cáncer).\nLas alteraciones en genes o proteínas pueden provocar enfermedades como el cáncer.",

  "6️⃣ Respuesta del organismo\nLa radiación puede provocar daños celulares, muerte celular o alteraciones del ciclo celular. En exposiciones altas aparece el síndrome de radiación aguda. A largo plazo pueden aparecer cataratas, cáncer o reducción de la esperanza de vida. El embrión es especialmente sensible, por lo que se evita la exposición en personas gestantes."
],
questions: [
  {
    q: "Entre los efectos que se producen en el ADN por parte de las radiaciones ionizantes encontramos:",
    options: [
      "Efectos a nivel molecular",
      "Efectos a nivel cromosómico",
      "A y B son correctas",
      "Ninguna es correcta"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque la radiación puede producir daños tanto a nivel molecular como a nivel cromosómico en el ADN.",
  },
  {
    q: "Entre los factores que afectan a la sensibilidad celular encontramos:",
    options: [
      "Fase del ciclo celular",
      "Edad biológica",
      "Nivel de diferenciación celular",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque la radiosensibilidad depende de múltiples factores como la fase celular, edad y diferenciación.",
  },
  {
    q: "La alteración de genes o proteínas que regulan el crecimiento y la división celular pueden ser causa de:",
    options: [
      "Cáncer",
      "Anomalías hereditarias",
      "Síndrome gastrointestinal",
      "Cataratas"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque las alteraciones genéticas pueden provocar proliferación celular descontrolada, es decir, cáncer.",
  },
  {
    q: "La fase del ciclo celular en la que se replica/duplica el ADN es la:",
    options: [
      "Fase G1",
      "Fase G2",
      "Fase M",
      "Fase S"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque en la fase S se produce la duplicación del ADN.",
  },
  {
    q: "La sensibilidad y susceptibilidad a las radiaciones ionizantes por parte de una célula se denomina:",
    options: [
      "Radiosensibilidad",
      "Susceptibilidad",
      "Efectos deterministas",
      "Efectos sensibilistas"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque la radiosensibilidad describe la capacidad de una célula para verse afectada por la radiación.",
  },
  {
    q: "La/s molécula/s más sensibles a la radiación son:",
    options: [
      "Glúcidos",
      "Lípidos",
      "Proteínas",
      "ADN"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque el ADN es la biomolécula más sensible a la radiación.",
  },
  {
    q: "La acción o mecanismo directo de una radiación hace referencia a:",
    options: [
      "Cuando la radiación impacta directamente con componentes de la célula (ADN, proteínas, orgánulos, etc.), que ven alterada su estructura química",
      "La radiación incide sobre estructuras del medio que alteran la célula",
      "Ninguna es correcta",
      "Todas son correctas"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque el mecanismo directo implica impacto directo sobre estructuras celulares.",
  },
  {
    q: "Los efectos deterministas son:",
    options: [
      "Aquellos en los que la dosis de radiación recibida se relaciona directamente y de manera lineal con el daño o el efecto causado",
      "Aquellos en los que la dosis no se relaciona con el daño",
      "Aquellos que dependen de la probabilidad",
      "Ninguna de las anteriores"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque los efectos deterministas dependen directamente de la dosis recibida y tienen umbral.",
  },
  {
    q: "Una lesión celular se define como:",
    options: [
      "La rotura de una célula",
      "Exclusivamente la muerte inmediata de la célula",
      "Cualquier daño que se produzca en la célula que le cause su muerte o alteraciones en el ciclo celular",
      "Ninguna de las anteriores"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque una lesión celular incluye cualquier daño que altere su funcionamiento o provoque su muerte.",
  },
  {
    q: "Una sustancia cuyo efecto consiste en reparar un daño o absorber la radiación se denomina:",
    options: [
      "Radiotrazador",
      "Radioisótopo",
      "Tasa de dosis",
      "Radioprotector"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque los radioprotectores ayudan a reducir el daño producido por la radiación.",
  }
],
},

{
  id: "fol-u3",
 id: "fol-u3",
title: "Protección Radiológica · U3 · Protección radiológica operacional",
summary: [
  "1️⃣ Visión general\nEsta unidad explica la protección radiológica como disciplina que busca proteger a las personas y al medio ambiente frente a los efectos de las radiaciones ionizantes. Se basa en normativa internacional y nacional, y en principios fundamentales que garantizan la seguridad.",

  "2️⃣ Objetivos de la protección radiológica\nLos objetivos principales son:\n• Evitar los efectos deterministas (daños con umbral como quemaduras o cataratas).\n• Reducir los efectos estocásticos (probabilidad de cáncer o mutaciones genéticas).\nPara ello se aplican medidas de control y vigilancia en todos los entornos con radiación.",

  "3️⃣ Principios básicos\nToda práctica con radiaciones ionizantes se rige por tres principios:\n• Justificación: la práctica debe aportar más beneficio que riesgo.\n• Optimización (ALARA): la dosis debe mantenerse lo más baja posible.\n• Limitación de dosis: no se deben superar los límites establecidos por la normativa.",

  "4️⃣ Tipos de exposición\nLa exposición a radiación puede clasificarse en:\n• Externa: la radiación proviene del exterior.\n• Interna: hay contaminación por inhalación, ingestión o inyección.\nTambién puede ser total o parcial, planificada o accidental, y continua o puntual.",

  "5️⃣ Clasificación del personal y zonas\nEl personal se clasifica en:\n• Categoría A: puede recibir más de 6 mSv/año.\n• Categoría B: recibe dosis menores, como el personal técnico (TSID).\n• Público general: límite ≤ 1 mSv/año.\nLas zonas se clasifican en vigiladas y controladas, siendo estas últimas de mayor riesgo.",

  "6️⃣ Medidas de protección\nLas medidas fundamentales para reducir la exposición son:\n• Tiempo: reducir el tiempo de exposición disminuye la dosis.\n• Distancia: a mayor distancia, menor radiación.\n• Blindaje: uso de materiales como plomo para absorber la radiación.\nAdemás, se realiza vigilancia ambiental y dosimetría personal para controlar la exposición."
],
questions: [
  {
    q: "El criterio ALARA (As Low As Reasonably Achievable) se relaciona con:",
    options: [
      "Justificación",
      "Blindaje",
      "Limitación de dosis",
      "Optimización"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque el principio ALARA hace referencia a mantener la dosis lo más baja posible, es decir, optimización.",
  },
  {
    q: "El personal técnico de imagen (TSID) se clasifica como:",
    options: [
      "Categoría A",
      "Categoría B",
      "Categoría C",
      "Categoría D"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque el personal técnico suele clasificarse como categoría B, con exposición moderada.",
  },
  {
    q: "El registro y notificación de las dosis de radiación recibidas por parte del personal se realizan en:",
    options: [
      "Historial dosimétrico individual",
      "Historial médico",
      "Documento de registro",
      "Ninguna es correcta"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque el historial dosimétrico recoge todas las dosis recibidas por el trabajador.",
  },
  {
    q: "El tiempo de exposición es:",
    options: [
      "La cantidad de tiempo a la que se expone a una radiación ionizante",
      "Directamente proporcional a la dosis recibida",
      "Se puede calcular matemáticamente con la fórmula Dosis = tasa de dosis · tiempo",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque todas las afirmaciones describen correctamente el tiempo de exposición.",
  },
  {
    q: "La sala de exploración es una:",
    options: [
      "Zona vigilada",
      "Zona controlada de acceso prohibido",
      "Zona controlada",
      "Zona normal"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque la sala de exploración es una zona controlada por el riesgo radiológico.",
  },
  {
    q: "Las fuentes radiactivas pueden clasificarse en:",
    options: [
      "Riesgos de exposición externa",
      "Riesgos de contaminación radiactiva",
      "Ambas son correctas",
      "Ninguna es correcta"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque las fuentes pueden producir tanto exposición externa como contaminación.",
  },
  {
    q: "Las medidas para la prevención, vigilancia y control de la exposición a radiaciones ionizantes se reflejan en la normativa española en:",
    options: [
      "Real Decreto 601/2019",
      "Real Decreto 783/2001",
      "Real Decreto 2013/2020",
      "Ninguna de las anteriores"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque el RD 601/2019 regula la justificación y optimización en el ámbito médico.",
  },
  {
    q: "Los principios básicos de la protección radiológica son:",
    options: [
      "Justificación, exposición y limitación de dosis",
      "Justificación, optimización y limitación de la exposición",
      "Optimización, blindaje y exposición",
      "Optimización, limitación de la exposición e historial dosimétrico"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque los tres principios básicos son justificación, optimización y limitación de dosis.",
  },
  {
    q: "Se define como la actividad multidisciplinar cuya finalidad es la protección de personas y el medio ambiente contra los efectos nocivos de la exposición a radiaciones ionizantes a:",
    options: [
      "Protección radiológica",
      "Optimización",
      "Limitación de exposición",
      "Blindaje"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque define directamente el concepto de protección radiológica.",
  },
  {
    q: "Una zona controlada se señaliza con:",
    options: [
      "Símbolo de aviso de radiación en forma de trébol de color verde",
      "Símbolo de aviso de radiación en forma de trébol de color gris",
      "Símbolo de aviso de radiación en forma de pétalo de color rojo",
      "Símbolo de aviso de radiación en forma cuadrada de color verde"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque las zonas controladas se señalizan con el símbolo de radiación en color verde.",
  }
],
},

{
  id: "fol-u4",
  id: "fol-u4",
title: "Protección Radiológica · U4 · Instalaciones radiactivas",
summary: [
  "1️⃣ Visión general\nEsta unidad explica qué es una instalación radiactiva, cómo se clasifica y qué requisitos legales y técnicos debe cumplir para poder funcionar. Toda instalación que utilice radiación ionizante está regulada y requiere autorización previa.",

  "2️⃣ Definición de instalación radiactiva\nSe considera instalación radiactiva cualquier lugar donde exista una fuente de radiación ionizante o equipos que funcionen con una diferencia de potencial superior a 5 kV. Estas instalaciones pueden tener fines médicos, industriales o de investigación.",

  "3️⃣ Clasificación de instalaciones\nLas instalaciones radiactivas se clasifican en tres categorías según su riesgo:\n• Primera categoría: alta actividad o gran riesgo (industria nuclear).\n• Segunda categoría: instalaciones con alta actividad o equipos de alta energía.\n• Tercera categoría: instalaciones de menor riesgo, como muchos equipos de rayos X.",

  "4️⃣ Autorización de funcionamiento\nAntes de iniciar la actividad es obligatorio obtener una autorización. Para ello se requiere presentar documentación como:\n• Memoria descriptiva\n• Estudio de seguridad\n• Reglamento de funcionamiento\n• Plan de emergencia\n• Plan de mantenimiento y control\nSin esta autorización no se puede operar legalmente.",

  "5️⃣ Personal de la instalación\nEl personal debe tener cualificación específica:\n• Supervisor: titulación universitaria.\n• Operador: formación profesional.\nLas licencias tienen una duración de 5 años y deben renovarse. En radiodiagnóstico se utilizan acreditaciones que no requieren renovación.",

  "6️⃣ Diario de operaciones\nEs un documento obligatorio donde se registra toda la actividad de la instalación. Debe estar autorizado por el CSN e incluye datos sobre funcionamiento, personal, incidencias y mantenimiento.",

  "7️⃣ Tipos de fuentes y diseño\nLas fuentes pueden ser:\n• Encapsuladas: protegidas dentro de una estructura.\n• No encapsuladas: manipulables directamente.\nLas instalaciones varían según su uso:\n• Medicina nuclear\n• Radioterapia (teleterapia y braquiterapia)\n• Radiodiagnóstico\nCada una tiene zonas de riesgo y zonas libres.",

  "8️⃣ Normativa\nEl funcionamiento está regulado por diferentes normas, como directivas europeas y reales decretos españoles que garantizan la seguridad y control de las radiaciones ionizantes."
],
questions: [
  {
    q: "En relación con el diario de operaciones:",
    options: [
      "Documento de registro de toda actividad de la instalación radiactiva",
      "Ha de estar autorizado, sellado y registrado por el CSN",
      "Completado por el personal titular o supervisor",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque el diario de operaciones cumple todas esas funciones: registro, autorización y control de actividad.",
  },
  {
    q: "Forman parte de una instalación de braquiterapia de baja dosis o LDR:",
    options: [
      "Radioquirófano o área quirúrgica",
      "Gammateca",
      "Habitaciones",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque todas esas áreas forman parte de una instalación LDR.",
  },
  {
    q: "Los elementos básicos en una instalación de braquiterapia de alta dosis o HDR son:",
    options: [
      "Área de control, sala de irradiación y área quirúrgica",
      "Área de control y sala de espera",
      "Área quirúrgica y área de control",
      "Ninguna es correcta"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque incluye las tres áreas fundamentales de este tipo de instalación.",
  },
  {
    q: "Para el inicio de la actividad de una instalación radiactiva se requiere:",
    options: [
      "Diario de operaciones",
      "Informes de accidentes",
      "Protocolos generales de descontaminación",
      "Autorización de funcionamiento"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque sin autorización no se puede iniciar la actividad.",
  },
  {
    q: "Se define como instalación radiactiva:",
    options: [
      "Todo lugar en el que hay una fuente o equipos de radiación ionizante",
      "La radiación ionizante tiene una diferencia de potencial mayor a 5 kV",
      "A y B son correctas",
      "Todas son incorrectas"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque ambas afirmaciones forman parte de la definición.",
  },
  {
    q: "Un protocolo que trata de limitar y/o eliminar una contaminación radiactiva externa o interna es:",
    options: [
      "Sistema de descontaminación",
      "Protocolo de contaminación",
      "Diario de operaciones",
      "Ninguna de las anteriores es correcta"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque los sistemas de descontaminación se utilizan para eliminar contaminación.",
  },
  {
    q: "Una fuente de radiación en el interior de una estructura protectora es:",
    options: [
      "Fuente no encapsulada",
      "Fuente encapsulada",
      "Fuente protegida",
      "Fuente internada"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque una fuente encapsulada está protegida dentro de una estructura.",
  },
  {
    q: "Una instalación de medicina nuclear se divide en:",
    options: [
      "Zona no activa de libre acceso y zona activa de acceso restringido",
      "Gammacámara o cámara caliente y laboratorio de radiofarmacia",
      "Almacén de residuos radiactivos y zona de descontaminación",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque todas esas partes forman la instalación de medicina nuclear.",
  },
  {
    q: "Una instalación de teleterapia se puede dividir en:",
    options: [
      "Zona de libre acceso sin riesgo radiológico y zona vigilada/controlada",
      "Zona de libre acceso con riesgo radiológico",
      "Zona de libre acceso y zona exclusiva",
      "Zona de libre acceso y zona descontrolada"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque diferencia zonas seguras y zonas con riesgo radiológico.",
  },
  {
    q: "Uno de los elementos de un búnker de radioterapia es:",
    options: [
      "Cámara caliente",
      "Laboratorio de radioisótopos",
      "Laberinto",
      "Ninguna es correcta"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque el laberinto forma parte del diseño del búnker para reducir la radiación.",
  }
],
},

{
  id: "fol-u5",
  id: "fol-u5",
title: "Protección Radiológica · U5 · Gestión de residuos radiactivos",
summary: [
  "1️⃣ Visión general\nEsta unidad explica cómo se gestionan los residuos radiactivos en el ámbito sanitario. Su objetivo principal es proteger la salud humana y el medio ambiente mediante procedimientos seguros y regulados.",

  "2️⃣ Qué es un residuo radiactivo\nSe considera residuo radiactivo cualquier material de desecho que contiene radioisótopos en niveles superiores a los establecidos por la normativa. En España, su gestión corresponde a ENRESA bajo la supervisión del CSN.",

  "3️⃣ Conceptos clave\n• Exención: residuo no peligroso que no requiere control específico.\n• Desclasificación: el residuo deja de ser peligroso tras decaer su actividad.\n• Exclusión: residuos sin riesgo significativo.\n• Niveles de exención: límites que permiten eliminar residuos sin autorización.",

  "4️⃣ Etapas de gestión\nEl proceso incluye:\n• Segregación\n• Caracterización\n• Almacenamiento\n• Transporte\n• Evacuación\nCada etapa es fundamental para garantizar la seguridad radiológica.",

  "5️⃣ Clasificación de residuos\nLos residuos se clasifican según:\n• Vida media (corta, larga)\n• Peligrosidad\n• Actividad (baja, media, alta)\n• Tipo (sólidos, líquidos, mixtos, fuentes encapsuladas)",

  "6️⃣ Transporte y seguridad\nEl transporte está regulado por normativa específica (ADR). Se utilizan distintos tipos de bultos y un sistema de etiquetado según el nivel de radiación (categorías I, II y III).",

  "7️⃣ Gestión en medicina nuclear y radioterapia\nEn medicina nuclear se generan residuos sólidos, líquidos y mixtos, incluyendo generadores de 99Mo/99mTc. En radioterapia destacan las fuentes encapsuladas como iridio-192 o semillas de yodo y paladio.",

  "8️⃣ Tratamiento final\nLos residuos se tratan mediante:\n• Ultracompactación (S01)\n• Mortero de relleno (L02)\n• Incineración\n• Inmovilización directa\nFinalmente son almacenados o gestionados por ENRESA."
],
questions: [
  {
    q: "El proceso de gestión de los materiales radiactivos está formado por diferentes etapas:",
    options: [
      "Protección, separación, transporte y evacuación",
      "Segregación, transporte y almacenamiento",
      "Segregación, caracterización, transporte, almacenamiento y evacuación",
      "Caracterización, transporte y almacenamiento"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque incluye todas las fases del proceso de gestión de residuos radiactivos.",
  },
  {
    q: "ENRESA son las siglas de:",
    options: [
      "Empresa Nacional de Residuos Super Activos",
      "Empresa Normativa de Residuos SA",
      "Empresa Nacional de Residuos Radiactivos S.A.",
      "Empresa Nueva de Residuos Activos"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque ENRESA es la entidad encargada de gestionar residuos radiactivos en España.",
  },
  {
    q: "Es un residuo producido en radioterapia:",
    options: [
      "Fuentes encapsuladas",
      "Sólidos radiactivos de iridio-192",
      "Semillas de yodo y paladio",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque todos esos ejemplos son residuos generados en radioterapia.",
  },
  {
    q: "La categoría III del nivel de radiación hace referencia:",
    options: [
      "Nivel máximo de radiación en superficie mayor a 0.005 mSv/hora máximo 0.5 mSv/hora",
      "Nivel máximo de radiación en superficie mayor a 0.005 mSv/hora máximo 2 mSv/hora",
      "Nivel máximo de radiación en superficie mayor a 0.005 mSv/hora",
      "Ninguna de las anteriores"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque corresponde al nivel de radiación más alto permitido en transporte.",
  },
  {
    q: "La desclasificación de un residuo radiactivo hace referencia a:",
    options: [
      "Residuos no peligrosos que no tienen que cumplir con el reglamento",
      "Exención de la gestión del residuo cuando pasa un tiempo suficiente para que la actividad decaiga a niveles no peligrosos",
      "Los residuos están fuera de los sistemas de protección",
      "Ninguna de las anteriores"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque la desclasificación ocurre cuando la actividad disminuye a niveles seguros.",
  },
  {
    q: "La normativa europea relativa al transporte de sustancias radiactivas es:",
    options: [
      "Acuerdo europeo de transporte de mercancías no peligrosas por aire",
      "Acuerdo europeo relativo al transporte internacional de mercancías por tren",
      "Acuerdo europeo relativo al transporte internacional de residuos en barco",
      "Ninguna es correcta"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque ninguna opción describe correctamente la normativa real.",
  },
  {
    q: "La ultracompactación se realiza en residuos de tipo:",
    options: [
      "Residuos compactables (S01)",
      "Residuos orgánicos",
      "Residuos líquidos",
      "Residuos no compactables"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque la ultracompactación se aplica a residuos sólidos compactables.",
  },
  {
    q: "Los residuos líquidos acuosos (L02) se evacuan:",
    options: [
      "Inmovilización directa",
      "Mortero de relleno",
      "Ultracompactación",
      "Incineración"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque estos residuos se tratan mediante mortero de relleno.",
  },
  {
    q: "Los residuos sólidos mixtos en medicina nuclear se pueden clasificar en:",
    options: [
      "Tipo I y II",
      "Tipo I, II, III y generadores",
      "Tipo I, II, III, IV y generadores de 99Mo/99mTc",
      "Generadores únicamente"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque incluye toda la clasificación completa.",
  },
  {
    q: "Se define como cualquier elemento de desecho que está contaminado o contiene radioisótopos en niveles superiores a los establecidos por normativa a:",
    options: [
      "Residuo urbano",
      "Residuo radiactivo",
      "Residuo desechable",
      "Residuo residual"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque describe correctamente un residuo radiactivo.",
  }
],
},

{
  id: "fol-u6",
  id: "fol-u6",
title: "Protección Radiológica · U6 · Garantía de calidad",
summary: [
  "1️⃣ Visión general\nEsta unidad explica la garantía de calidad en el ámbito sanitario, cuyo objetivo es obtener el mejor resultado diagnóstico o terapéutico con el menor riesgo posible para el paciente y la máxima seguridad.",

  "2️⃣ Concepto de calidad sanitaria\nLa calidad se basa en aplicar conocimientos médicos y técnicos para:\n• Obtener resultados óptimos\n• Reducir riesgos iatrogénicos\n• Garantizar la satisfacción del paciente\nEste concepto está regulado por normativa europea como la directiva 2013/59/Euratom.",

  "3️⃣ Elementos clave del control de calidad\n• Pruebas de aceptación: se realizan antes del primer uso del equipo.\n• Estado de referencia inicial: valores obtenidos al inicio para comparaciones futuras.\n• Verificación: controles tras reparaciones.\n• Calibración: ajuste de equipos para asegurar mediciones correctas.",

  "4️⃣ Garantía de calidad en medicina nuclear\nSe centra en la optimización de dosis y el uso correcto de radiofármacos.\nEs obligatorio registrar datos en la historia clínica y realizar controles de equipos como gammacámaras o PET. El radiofísico hospitalario juega un papel clave.",

  "5️⃣ Garantía de calidad en radioterapia\nBusca administrar la dosis exacta al tejido diana protegiendo el tejido sano.\nIncluye la hoja de tratamiento, controles de equipos y supervisión por una comisión de garantía y control de calidad.",

  "6️⃣ Garantía de calidad en radiodiagnóstico\nEl objetivo es obtener imágenes de calidad con la menor dosis posible.\nIncluye controles de radiación, repetición de pruebas, formación del personal y control técnico de equipos.",

  "7️⃣ Registro y control\nLos datos de dosis deben almacenarse hasta 30 años.\nLos equipos deben tener mantenimiento continuo y controles periódicos.\nLas autoridades pueden realizar auditorías para verificar el cumplimiento.",

  "8️⃣ Obligaciones del titular\nEl titular de la unidad debe:\n• Aplicar el programa de garantía de calidad\n• Informar a las autoridades\n• Comunicar incidentes\n• Garantizar la seguridad del paciente\n• Obtener el consentimiento informado antes de las pruebas"
],
questions: [
  {
    q: "Antes de exponer a una persona a una radiación ionizante estas deben firmar:",
    options: [
      "Consentimiento informado",
      "Consentimiento formado",
      "Desconsentimiento informado",
      "Información básica"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque el consentimiento informado es obligatorio antes de cualquier procedimiento con radiación.",
  },
  {
    q: "El estado de referencia inicial se define como:",
    options: [
      "Aquellos valores que tiene el equipo al inicio de su uso",
      "Estado del equipo en desuso",
      "Valores de referencia obtenidos como punto de control para futuras pruebas de calidad",
      "Valores de referencia iniciales de daños del equipo"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque sirve como base para comparar futuros controles de calidad.",
  },
  {
    q: "El Real Decreto 1976/1999 legisla el ámbito de la calidad en:",
    options: [
      "Medicina nuclear",
      "Radiodiagnóstico",
      "Radioterapia",
      "Todas son incorrectas."
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque este decreto regula la calidad en radiodiagnóstico.",
  },
  {
    q: "Entre las obligaciones de la persona titular de una unidad de imagen para el diagnóstico encontramos:",
    options: [
      "Aplicación del programa de garantía de calidad",
      "Redacción de un informe anual sobre los resultados del programa de garantía",
      "Informar a las autoridades competentes cualquier incidente o accidente",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque el titular debe cumplir todas esas obligaciones.",
  },
  {
    q: "La directiva europea que garantiza la calidad en el ámbito sanitario es:",
    options: [
      "2013/59/Euratom",
      "1997/43/Euratom",
      "2003/122/Euratom",
      "1996/29/Euratom"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque esta directiva establece normas de protección radiológica.",
  },
  {
    q: "La función de aplicar el programa de garantía de calidad recae sobre:",
    options: [
      "Comisión de mantenimiento",
      "Comisión de garantía y control de calidad",
      "Comité de control",
      "Todas las anteriores son incorrectas."
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque esta comisión es responsable de aplicar el programa de calidad.",
  },
  {
    q: "La hoja de tratamiento es:",
    options: [
      "Documento con información sobre el procedimiento",
      "Documento incluido en la historia clínica",
      "Documento usado en radioterapia",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque la hoja de tratamiento cumple todas esas funciones.",
  },
  {
    q: "Las pruebas de aceptación en medicina nuclear se definen en el:",
    options: [
      "Protocolo Nacional de Control de Calidad de Instrumentación de Medicina Nuclear",
      "Protocolo Nacional de Control de Calidad de Equipos de Medicina Nuclear",
      "Protocolo Internacional de Control de Calidad",
      "Ninguna de las anteriores"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque este protocolo regula las pruebas de aceptación.",
  },
  {
    q: "Las pruebas o controles que se realizan al inicio para comprobar que cumple con los requisitos especificados y la normativa:",
    options: [
      "Pruebas de verificación",
      "Pruebas de aceptación",
      "Programa de mantenimiento",
      "Pruebas de comprobación"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque las pruebas de aceptación se realizan antes del uso clínico.",
  },
  {
    q: "Se define como toda prueba que se realiza sobre un equipo tras una modificación o reparación para comprobar si es apto para el uso clínico:",
    options: [
      "Pruebas de verificación",
      "Pruebas de aceptación",
      "Programa de mantenimiento",
      "Pruebas de comprobación"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque la verificación se realiza después de intervenciones en el equipo.",
  }
],
},

{
  id: "fol-u7",
title: "Protección Radiológica · U7 · Planes de emergencia",
summary: [
  "1️⃣ Visión general\nEsta unidad explica cómo actuar ante emergencias en instalaciones radiactivas. El elemento clave es el Plan de Emergencia Interior (PEI), que establece las actuaciones para minimizar riesgos sobre personas, instalaciones y medio ambiente.",

  "2️⃣ Plan de Emergencia Interior (PEI)\nEl PEI es un documento obligatorio que define:\n• Organización y responsables\n• Clasificación de sucesos\n• Protocolos de actuación\n• Medidas correctoras y recuperación\nSu objetivo es reducir las consecuencias de una emergencia y garantizar una respuesta rápida y eficaz.",

  "3️⃣ Incidentes vs accidentes\n• Incidente: suceso previsible que no causa daños significativos.\n• Accidente: suceso no previsto que puede causar daños importantes.\nLa prevención se basa en formación, análisis de errores y buenas prácticas.",

  "4️⃣ Emergencias en medicina nuclear\nSe trabaja con fuentes no encapsuladas, por lo que existe riesgo de contaminación:\n• Contaminación externa: contacto con superficies o piel.\n• Contaminación interna: inhalación, ingestión o heridas.\nEs clave actuar rápido (especialmente en las primeras horas) para limitar el daño.",

  "5️⃣ Actuación ante contaminación\nLas medidas básicas son:\n• Proteger al personal\n• Medir niveles de contaminación\n• Delimitar la zona\n• Limpiar correctamente\nLa descontaminación cutánea se realiza con agua y jabón, evitando dañar la piel.",

  "6️⃣ Emergencias en radioterapia\n• Teleterapia: análisis de riesgos mediante estudios previos.\n• Braquiterapia: control de fallos en fuentes radiactivas.\nSe utilizan enfoques retrospectivos (analizar accidentes pasados) y prospectivos (prever riesgos).",

  "7️⃣ Notificación de sucesos\nLos incidentes y accidentes deben notificarse:\n• De forma inmediata (1 hora) en casos graves como pérdida de fuentes.\n• En menos de 24 horas en otros casos.\nLa responsabilidad recae en el titular de la instalación.",

  "8️⃣ Objetivo final\nLa prioridad en cualquier emergencia es salvar vidas, atender heridos y posteriormente controlar el riesgo radiológico para evitar consecuencias mayores."
],
questions: [
  {
    q: "Ante contaminación radiactiva externa en medicina nuclear se recomienda:",
    options: [
      "Proteger al personal que realice la descontaminación",
      "Medir los niveles de contaminación",
      "Delimitar y marcar la zona del accidente",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque todas las medidas son necesarias para controlar la contaminación.",
  },
  {
    q: "En caso de fallecimiento de una persona con implantes radiactivos:",
    options: [
      "La autopsia se realiza a las 36 horas",
      "Se incinera el cuerpo pasados 12 meses del implante de yodo-125",
      "Se incinera el cuerpo pasados 3 meses del implante de paladio-103",
      "B y C son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque ambas opciones indican los tiempos correctos de seguridad.",
  },
  {
    q: "Es un suceso de aviso inmediato:",
    options: [
      "Pérdida o robo de fuentes radiactivas",
      "Exposición externa o contaminación",
      "Vertidos no controlados",
      "Ninguna es correcta"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque la pérdida o robo de fuentes requiere aviso inmediato.",
  },
  {
    q: "La aplicación de medidas tras el estudio de un incidente o accidente se conoce como:",
    options: [
      "Enfoque retrospectivo o reactivo",
      "Enfoque prospectivo o predictivo",
      "Enfoque analista",
      "Enfoque futurista"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque se basa en analizar lo ocurrido para aplicar mejoras.",
  },
  {
    q: "La contaminación interna en medicina nuclear se puede producir por:",
    options: [
      "Inhalación",
      "Ingestión",
      "Contacto con heridas",
      "Todas las anteriores son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque todas son vías de entrada de material radiactivo.",
  },
  {
    q: "Las fases de actuación ante una emergencia en una exploración con radiaciones ionizantes son:",
    options: [
      "Parada de control desde la consola",
      "Botón de parada de emergencia",
      "Corte de la corriente eléctrica",
      "Todas son correctas"
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque todas son acciones de seguridad ante emergencia.",
  },
  {
    q: "Los sucesos de emergencia se informan:",
    options: [
      "De manera inmediata o en 24 horas",
      "Por parte de la persona titular de la instalación",
      "A y B son correctas",
      "De forma mensual"
    ],
    correct: 2,
    explain:
      "La respuesta correcta es la C porque incluye tanto el plazo como el responsable.",
  },
  {
    q: "Se define como todo proceso anormal involuntario, no previsto que puede causar daños significativos:",
    options: [
      "Incidente",
      "Accidente",
      "Error",
      "Emergencia"
    ],
    correct: 1,
    explain:
      "La respuesta correcta es la B porque describe un accidente.",
  },
  {
    q: "Se define como todo proceso anormal que se puede prever y que no causa daños significativos:",
    options: [
      "Incidente",
      "Accidente",
      "Error",
      "Emergencia"
    ],
    correct: 0,
    explain:
      "La respuesta correcta es la A porque describe un incidente.",
  },
  {
    q: "Un plan de emergencia interior es:",
    options: [
      "Documento obligatorio",
      "Documento con las medidas ante situaciones de emergencia",
      "Plan para reducir las consecuencias sobre personas, bienes materiales y medio ambiente ante una emergencia",
      "Todas son correctas."
    ],
    correct: 3,
    explain:
      "La respuesta correcta es la D porque el PEI cumple todas esas funciones.",
  }
],
},
// Aquí puedes añadir tus 40 preguntas cuando quieras
    {
  id: "fol-final",
title: "⭐ Protección Radiológica · Prueba final · 40 preguntas",
isFinal: true,
questions: [
  {
    q: "¿A qué hace referencia el dispositivo de la imagen?",
    options: [
      "Dosímetro activo",
      "Dosímetro pasivo",
      "Dosímetro personal",
      "B y C son correctas"
    ],
    correct: 3,
    explain: {
      detail: "El dispositivo mostrado corresponde a un dosímetro utilizado para controlar la dosis recibida.",
      whyCorrect: "La opción D es correcta porque hace referencia a un dosímetro pasivo y personal.",
      whyWrong: {
        A: "No es activo porque no mide en tiempo real ni requiere alimentación eléctrica.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "¿A qué hace referencia este símbolo?",
    options: [
      "Zona vigilada",
      "Zona de permanencia reglamentada",
      "Zona controlada",
      "Zona de acceso prohibido"
    ],
    correct: 0,
    explain: {
      detail: "Los símbolos de señalización radiológica identifican el tipo de zona según el riesgo.",
      whyCorrect: "La opción A es correcta porque el símbolo corresponde a una zona vigilada.",
      whyWrong: {
        B: "No corresponde a permanencia reglamentada.",
        C: "La zona controlada tiene otra señalización.",
        D: "La zona de acceso prohibido indica mayor riesgo."
      }
    }
  },
  {
    q: "Ante contaminación radiactiva externa en medicina nuclear se recomienda:",
    options: [
      "Proteger al personal que realice la descontaminación",
      "Medir los niveles de contaminación",
      "Delimitar y marcar la zona del accidente",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "Ante contaminación externa se debe actuar de forma organizada y segura.",
      whyCorrect: "La opción D es correcta porque hay que proteger al personal, medir niveles y delimitar la zona.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Antes de exponer a una persona a una radiación ionizante estas deben firmar:",
    options: [
      "Consentimiento informado",
      "Consentimiento formado",
      "Desconsentimiento informado",
      "Información básica"
    ],
    correct: 0,
    explain: {
      detail: "Antes de una exposición médica debe informarse al paciente de riesgos y beneficios.",
      whyCorrect: "La opción A es correcta porque debe firmarse el consentimiento informado.",
      whyWrong: {
        B: "No es el término correcto.",
        C: "No existe como documento válido.",
        D: "La información básica no sustituye al consentimiento."
      }
    }
  },
  {
    q: "El criterio ALARA (As Low As Reasonably Achievable) se relaciona con:",
    options: [
      "Justificación",
      "Blindaje",
      "Limitación de dosis",
      "Optimización"
    ],
    correct: 3,
    explain: {
      detail: "ALARA significa mantener las dosis tan bajas como sea razonablemente posible.",
      whyCorrect: "La opción D es correcta porque ALARA se relaciona con la optimización.",
      whyWrong: {
        A: "La justificación valora si la práctica está indicada.",
        B: "El blindaje es una medida de protección.",
        C: "La limitación fija máximos de dosis."
      }
    }
  },
  {
    q: "El equipo de la imagen es:",
    options: [
      "Detector de fluorescencia",
      "Dosímetro",
      "Detector de termoradiactividad",
      "Radiactivímetro"
    ],
    correct: 1,
    explain: {
      detail: "El equipo mostrado sirve para medir dosis de radiación.",
      whyCorrect: "La opción B es correcta porque se trata de un dosímetro.",
      whyWrong: {
        A: "No corresponde a un detector de fluorescencia.",
        C: "No es un término técnico adecuado.",
        D: "No es un radiactivímetro."
      }
    }
  },
  {
    q: "El personal técnico de imagen (TSID) se clasifica como:",
    options: [
      "Categoría A",
      "Categoría B",
      "Categoría C",
      "Categoría D"
    ],
    correct: 1,
    explain: {
      detail: "El personal expuesto se clasifica según la dosis que puede recibir.",
      whyCorrect: "La opción B es correcta porque el TSID se clasifica como categoría B.",
      whyWrong: {
        A: "Categoría A implica mayor nivel de exposición.",
        C: "No existe esta categoría en este contexto.",
        D: "No existe esta categoría en este contexto."
      }
    }
  },
  {
    q: "El proceso de gestión de los materiales radiactivos está formado por diferentes etapas:",
    options: [
      "Protección, separación, transporte y evacuación",
      "Segregación, transporte y almacenamiento",
      "Segregación, caracterización, transporte, almacenamiento y evacuación",
      "Caracterización, transporte y almacenamiento"
    ],
    correct: 2,
    explain: {
      detail: "La gestión de residuos radiactivos sigue varias fases ordenadas.",
      whyCorrect: "La opción C es correcta porque incluye segregación, caracterización, transporte, almacenamiento y evacuación.",
      whyWrong: {
        A: "Faltan fases importantes.",
        B: "Falta caracterización y evacuación.",
        D: "Falta segregación y evacuación."
      }
    }
  },
  {
    q: "El siguiente plano hace referencia a la unidad de:",
    options: [
      "Radiodiagnóstico",
      "Medicina nuclear",
      "Teleterapia",
      "Braquiterapia"
    ],
    correct: 0,
    explain: {
      detail: "El plano corresponde a la distribución típica de una unidad de imagen diagnóstica.",
      whyCorrect: "La opción A es correcta porque hace referencia a radiodiagnóstico.",
      whyWrong: {
        B: "Medicina nuclear requiere zonas activas y radiofarmacia.",
        C: "Teleterapia incluye búnker y sala de tratamiento.",
        D: "Braquiterapia tiene áreas específicas para fuentes."
      }
    }
  },
  {
    q: "En el programa de garantía de calidad en imagen para el diagnóstico es cierto:",
    options: [
      "Se han de aplicar protocolos de control de calidad",
      "Cada procedimiento en cada equipo tiene un protocolo establecido",
      "Se ha de formar en protección radiológica al personal que use los equipos",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "La garantía de calidad asegura imágenes útiles con la menor dosis posible.",
      whyCorrect: "La opción D es correcta porque todas forman parte del programa de garantía de calidad.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "En España, los sucesos de emergencia que ocurran en las instalaciones radiactivas se han de notificar a:",
    options: [
      "Dirección General de Política Energética y Minas (DGPEM)",
      "Consejo de Seguridad Nacional (CSN)",
      "Consejo de cada Comunidad Autónoma",
      "A y B son correctas"
    ],
    correct: 3,
    explain: {
      detail: "Los sucesos relevantes deben notificarse a organismos competentes.",
      whyCorrect: "La opción D es correcta porque se notifican a la DGPEM y al CSN.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "No es la opción marcada como correcta en este test."
      }
    }
  },
  {
    q: "En esta imagen se muestran:",
    options: [
      "Equipos de teleterapia",
      "Equipos de braquiterapia",
      "Equipos de radiología convencional",
      "Equipos de radiología especial"
    ],
    correct: 1,
    explain: {
      detail: "La braquiterapia utiliza equipos y fuentes para tratamientos próximos o internos.",
      whyCorrect: "La opción B es correcta porque la imagen corresponde a equipos de braquiterapia.",
      whyWrong: {
        A: "Teleterapia usa haces externos.",
        C: "Radiología convencional es diagnóstica.",
        D: "Radiología especial no corresponde a la imagen."
      }
    }
  },
  {
    q: "En la siguiente imagen se muestra un tipo de bulto para el transporte de material radiactivo para lo que es cierto:",
    options: [
      "Se denominan bulto de tipo A",
      "Permite el transporte de elevadísimas cantidades de material radiactivo",
      "Son mejores que los bultos de tipo B y C",
      "No se etiquetan"
    ],
    correct: 0,
    explain: {
      detail: "Los bultos de transporte se clasifican según el riesgo y la actividad transportada.",
      whyCorrect: "La opción A es correcta porque se trata de un bulto tipo A.",
      whyWrong: {
        B: "Las elevadísimas cantidades requieren otros tipos de bulto.",
        C: "No se clasifican como mejores, sino según uso y resistencia.",
        D: "Sí deben etiquetarse."
      }
    }
  },
  {
    q: "En la siguiente imagen se muestra un:",
    options: [
      "Dosímetro de neutrones",
      "Dosímetro termoluminiscente",
      "Detector de centelleo",
      "Contador proporcional"
    ],
    correct: 1,
    explain: {
      detail: "Los dosímetros termoluminiscentes son frecuentes en dosimetría personal.",
      whyCorrect: "La opción B es correcta porque corresponde a un dosímetro termoluminiscente.",
      whyWrong: {
        A: "No corresponde específicamente a neutrones.",
        C: "Un detector de centelleo tiene otra finalidad.",
        D: "Un contador proporcional es un detector gaseoso."
      }
    }
  },
  {
    q: "En relación con el diario de operaciones:",
    options: [
      "Documento de registro de toda actividad de la instalación radiactiva",
      "Ha de estar autorizado, sellado y registrado por el CSN",
      "Completado por el personal titular o supervisor",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "El diario de operaciones registra la actividad de la instalación.",
      whyCorrect: "La opción D es correcta porque todas las afirmaciones son verdaderas.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Entre las magnitudes radiológicas encontramos:",
    options: [
      "Magnitudes físicas fundamentales",
      "Magnitudes de radioprotección",
      "Magnitudes operacionales",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "Las magnitudes radiológicas se agrupan en varias categorías.",
      whyCorrect: "La opción D es correcta porque existen magnitudes físicas, de radioprotección y operacionales.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Entre los factores que afectan a la sensibilidad celular encontramos:",
    options: [
      "Fase del ciclo celular",
      "Edad biológica",
      "Nivel de diferenciación celular",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "La radiosensibilidad depende de factores biológicos y técnicos.",
      whyCorrect: "La opción D es correcta porque todos afectan a la sensibilidad celular.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Es un control de calidad en el ámbito sanitario:",
    options: [
      "Control de calidad técnica",
      "Control del riesgo",
      "Control de optimización",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "La calidad sanitaria incluye controles técnicos, de riesgo y de optimización.",
      whyCorrect: "La opción D es correcta porque todas forman parte del control de calidad.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Es un plan de emergencia en teleterapia:",
    options: [
      "Presencia de personal en la sala de exploración",
      "Errores en la administración de radiofármacos",
      "Derrame de material radiactivo",
      "Fallecimiento de persona con implantes"
    ],
    correct: 0,
    explain: {
      detail: "En teleterapia se contemplan riesgos relacionados con la irradiación externa.",
      whyCorrect: "La opción A es correcta porque la presencia de personal en sala durante la irradiación es un suceso de emergencia.",
      whyWrong: {
        B: "Corresponde más a medicina nuclear.",
        C: "Corresponde a contaminación por material radiactivo.",
        D: "Se relaciona con implantes radiactivos."
      }
    }
  },
  {
    q: "Es un residuo producido en radioterapia:",
    options: [
      "Fuentes encapsuladas",
      "Sólidos radiactivos de iridio-192",
      "Semillas de yodo y paladio",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "Radioterapia puede generar residuos asociados a fuentes encapsuladas.",
      whyCorrect: "La opción D es correcta porque todos son residuos posibles en radioterapia.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Este símbolo significa:",
    options: [
      "Zona de permanencia limitada",
      "Zona de permanencia reglamentada",
      "Zona controlada",
      "Zona de acceso prohibido"
    ],
    correct: 2,
    explain: {
      detail: "La señalización permite identificar el nivel de riesgo radiológico.",
      whyCorrect: "La opción C es correcta porque el símbolo corresponde a zona controlada.",
      whyWrong: {
        A: "No corresponde a permanencia limitada.",
        B: "No corresponde a permanencia reglamentada.",
        D: "No indica acceso prohibido."
      }
    }
  },
  {
    q: "La alteración de genes o proteínas que regulan el crecimiento y la división celular pueden ser causa de:",
    options: [
      "Cáncer",
      "Anomalías hereditarias",
      "Síndrome gastrointestinal",
      "Cataratas"
    ],
    correct: 0,
    explain: {
      detail: "El cáncer puede aparecer por alteraciones en genes reguladores del ciclo celular.",
      whyCorrect: "La opción A es correcta porque estas alteraciones pueden producir crecimiento celular descontrolado.",
      whyWrong: {
        B: "Las anomalías hereditarias afectan a células germinales.",
        C: "Es un síndrome agudo por alta dosis.",
        D: "Las cataratas son un efecto tardío específico."
      }
    }
  },
  {
    q: "La clasificación de los tipos de residuos radiactivos se puede realizar en base a:",
    options: [
      "Peligrosidad de la fuente",
      "Periodo de semidesintegración",
      "Actividad específica",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "Los residuos se clasifican según criterios físicos, radiológicos y de gestión.",
      whyCorrect: "La opción D es correcta porque todos esos criterios son válidos.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "La directiva europea que garantiza la calidad en el ámbito sanitario es:",
    options: [
      "2013/59/Euratom",
      "1997/43/Euratom",
      "2003/122/Euratom",
      "1996/29/Euratom"
    ],
    correct: 0,
    explain: {
      detail: "La normativa europea establece estándares de protección frente a radiaciones ionizantes.",
      whyCorrect: "La opción A es correcta porque la Directiva 2013/59/Euratom establece normas básicas de seguridad.",
      whyWrong: {
        B: "No es la directiva correcta en este test.",
        C: "No es la opción correcta.",
        D: "No corresponde a la respuesta esperada."
      }
    }
  },
  {
    q: "La medida de protección radiológica que hace referencia a la presencia de un material que actúa de barrera frente a las radiaciones ionizantes es:",
    options: [
      "Blindaje",
      "Distancia",
      "Tiempo de exposición",
      "Ninguna es correcta"
    ],
    correct: 0,
    explain: {
      detail: "El blindaje reduce la radiación mediante barreras materiales.",
      whyCorrect: "La opción A es correcta porque el blindaje actúa como barrera frente a la radiación.",
      whyWrong: {
        B: "La distancia reduce dosis, pero no es una barrera material.",
        C: "El tiempo reduce exposición, pero no es una barrera.",
        D: "Sí hay una respuesta correcta."
      }
    }
  },
  {
    q: "La radiación puede afectar al embrión de una de las siguientes maneras:",
    options: [
      "Anomalías congénitas",
      "Muerte del organismo",
      "Cáncer embrionario",
      "Dos respuestas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "El embrión es especialmente sensible por su elevada división celular.",
      whyCorrect: "La opción D es correcta porque la radiación puede causar anomalías congénitas y muerte embrionaria o fetal.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "No es la respuesta esperada en este test."
      }
    }
  },
  {
    q: "La siguiente etiqueta hace referencia a:",
    options: [
      "Categoría II",
      "Material fisible",
      "Categoría V",
      "Categoría 7"
    ],
    correct: 0,
    explain: {
      detail: "Las etiquetas de transporte indican el nivel de radiación del bulto.",
      whyCorrect: "La opción A es correcta porque la etiqueta corresponde a Categoría II.",
      whyWrong: {
        B: "Material fisible tiene otra identificación.",
        C: "No existe categoría V en este contexto.",
        D: "No es la denominación correcta."
      }
    }
  },
  {
    q: "La vigencia de los informes sobre dosis y niveles de radiación de una instalación se han de almacenar al menos:",
    options: [
      "2 años",
      "No hay que guardarlos",
      "30 años",
      "80 años"
    ],
    correct: 2,
    explain: {
      detail: "Los registros de dosis y niveles de radiación deben conservarse durante largo tiempo.",
      whyCorrect: "La opción C es correcta porque deben almacenarse al menos 30 años.",
      whyWrong: {
        A: "2 años es insuficiente.",
        B: "Sí deben conservarse.",
        D: "80 años no es el plazo indicado."
      }
    }
  },
  {
    q: "Las fases de actuación ante una emergencia en una exploración con radiaciones ionizantes son:",
    options: [
      "Parada de control desde la consola",
      "Botón de parada de emergencia",
      "Corte de la corriente eléctrica",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "Ante una emergencia deben aplicarse medidas de parada y seguridad.",
      whyCorrect: "La opción D es correcta porque todas son fases o acciones posibles.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Los efectos deterministas son:",
    options: [
      "Aquellos en los que la dosis de radiación recibida se relaciona directamente y de manera lineal con el daño o el efecto causado",
      "Aquellos en los que la dosis de radiación recibida no se relaciona directamente y de manera lineal con el daño o el efecto causado",
      "Aquellos que dependen de la probabilidad",
      "Ninguna de las anteriores"
    ],
    correct: 0,
    explain: {
      detail: "Los efectos deterministas tienen umbral y gravedad relacionada con la dosis.",
      whyCorrect: "La opción A es correcta porque la dosis se relaciona directamente con el daño.",
      whyWrong: {
        B: "Eso no define los deterministas.",
        C: "Eso define mejor los estocásticos.",
        D: "Sí hay una respuesta correcta."
      }
    }
  },
  {
    q: "Los principios básicos de la protección radiológica son:",
    options: [
      "Justificación, exposición y limitación de dosis",
      "Justificación, optimización y limitación de la exposición",
      "Optimización, blindaje y exposición",
      "Optimización, limitación de la exposición e historial dosimétrico"
    ],
    correct: 1,
    explain: {
      detail: "La protección radiológica se basa en tres principios fundamentales.",
      whyCorrect: "La opción B es correcta porque son justificación, optimización y limitación.",
      whyWrong: {
        A: "Exposición no es uno de los tres principios.",
        C: "Blindaje es una medida, no un principio básico.",
        D: "Historial dosimétrico no es un principio básico."
      }
    }
  },
  {
    q: "No es un suceso inmediato:",
    options: [
      "Pérdida o robo de fuentes radiactivas",
      "Aparición de fuentes radiactivas de categoría 1, 2 o 3",
      "Amenaza de bomba",
      "Derrames de material radiactivo"
    ],
    correct: 3,
    explain: {
      detail: "Algunos sucesos requieren comunicación inmediata y otros en plazos más amplios.",
      whyCorrect: "La opción D es correcta porque los derrames se notifican normalmente en un plazo máximo de 24 horas, no como aviso inmediato.",
      whyWrong: {
        A: "La pérdida o robo sí es inmediata.",
        B: "La aparición de fuentes peligrosas sí requiere aviso inmediato.",
        C: "Una amenaza de bomba requiere aviso inmediato."
      }
    }
  },
  {
    q: "Para el inicio de la actividad de una instalación radiactiva se requiere:",
    options: [
      "Diario de operaciones",
      "Informes de accidentes",
      "Protocolos generales de descontaminación",
      "Autorización de funcionamiento"
    ],
    correct: 3,
    explain: {
      detail: "Una instalación radiactiva no puede iniciar su actividad sin autorización.",
      whyCorrect: "La opción D es correcta porque se requiere autorización de funcionamiento.",
      whyWrong: {
        A: "El diario es necesario, pero no autoriza el inicio.",
        B: "Los informes de accidentes no permiten iniciar actividad.",
        C: "Los protocolos no sustituyen la autorización."
      }
    }
  },
  {
    q: "Se define como cualquier elemento de desecho que está contaminado o contiene radioisótopos en niveles superiores a los establecidos por normativa a:",
    options: [
      "Residuo urbano",
      "Residuo radiactivo",
      "Residuo desechable",
      "Residuo residual"
    ],
    correct: 1,
    explain: {
      detail: "Los residuos radiactivos contienen radioisótopos por encima de niveles permitidos.",
      whyCorrect: "La opción B es correcta porque define un residuo radiactivo.",
      whyWrong: {
        A: "Un residuo urbano no tiene por qué contener radioisótopos.",
        C: "Desechable no implica radiactivo.",
        D: "No es una categoría técnica adecuada."
      }
    }
  },
  {
    q: "Se define como instalación radiactiva:",
    options: [
      "Todo lugar en el que hay una fuente o equipos de radiación ionizante",
      "La radiación ionizante tiene una diferencia de potencial mayor a 5 kV",
      "A y B son correctas",
      "Todas son incorrectas"
    ],
    correct: 2,
    explain: {
      detail: "La instalación radiactiva se define por la presencia de fuentes o equipos productores de radiación.",
      whyCorrect: "La opción C es correcta porque ambas afirmaciones forman parte de la definición.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        D: "Sí hay respuestas correctas."
      }
    }
  },
  {
    q: "Se define como toda prueba que se realiza sobre un equipo tras una modificación o reparación para comprobar si es apto para el uso clínico:",
    options: [
      "Pruebas de verificación",
      "Pruebas de aceptación",
      "Programa de mantenimiento",
      "Pruebas de comprobación"
    ],
    correct: 0,
    explain: {
      detail: "Tras una reparación o modificación se comprueba que el equipo sigue siendo apto.",
      whyCorrect: "La opción A es correcta porque eso corresponde a pruebas de verificación.",
      whyWrong: {
        B: "Las pruebas de aceptación se hacen antes del primer uso.",
        C: "El mantenimiento es un programa general.",
        D: "No es el término técnico correcto."
      }
    }
  },
  {
    q: "Un dosímetro activo:",
    options: [
      "Permite medir en tiempo real",
      "Requiere de una fuente de electricidad para funcionar",
      "Todas son correctas",
      "Son las cámaras de ionización de gases y los detectores de centelleo"
    ],
    correct: 2,
    explain: {
      detail: "Los dosímetros activos permiten lectura inmediata y requieren alimentación.",
      whyCorrect: "La opción C es correcta porque todas las afirmaciones son verdaderas.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        D: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Un equipo o dispositivo utilizado para medir la dosis de radiación se denomina:",
    options: [
      "Dosímetro",
      "Medidómetro",
      "Magnitudómetro",
      "Radiómetro"
    ],
    correct: 0,
    explain: {
      detail: "La dosis de radiación se mide con dosímetros.",
      whyCorrect: "La opción A es correcta porque el dispositivo se denomina dosímetro.",
      whyWrong: {
        B: "No es un término técnico.",
        C: "No existe como equipo real.",
        D: "No es la respuesta correcta para medir dosis."
      }
    }
  },
  {
    q: "Un plan de emergencia interior hace referencia a un:",
    options: [
      "Documento obligatorio",
      "Documento con las medidas ante situaciones de emergencia",
      "Plan para reducir las consecuencias sobre personas, bienes materiales y medio ambiente ante una emergencia",
      "Todas son correctas"
    ],
    correct: 3,
    explain: {
      detail: "El PEI organiza la respuesta ante emergencias en instalaciones radiactivas.",
      whyCorrect: "La opción D es correcta porque todas las afirmaciones describen el Plan de Emergencia Interior.",
      whyWrong: {
        A: "Es correcta, pero incompleta.",
        B: "Es correcta, pero incompleta.",
        C: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Un posible efecto a largo plazo de las radiaciones ionizantes puede ser:",
    options: [
      "Cataratas en el cristalino",
      "Diarrea",
      "Síndrome hematológico",
      "Vértigo"
    ],
    correct: 0,
    explain: {
      detail: "Algunos efectos de la radiación pueden aparecer tiempo después de la exposición.",
      whyCorrect: "La opción A es correcta porque las cataratas pueden ser un efecto tardío de la radiación.",
      whyWrong: {
        B: "La diarrea es más propia de efectos agudos gastrointestinales.",
        C: "El síndrome hematológico es efecto agudo por alta dosis.",
        D: "El vértigo no es el efecto tardío típico esperado."
      }
    }
  }
],
    },

    /* ================== ATENCIÓN AL PACIENTE ================== */

     /* ================== ATENCIÓN AL PACIENTE ================== */

{
  id: "ap-u1",
title: "AP · U1 · Economía y administración básica",
summary: [
  "1️⃣ Visión general de la unidad\nLa unidad explica nociones básicas de economía y administración aplicadas a la vida diaria y a la empleabilidad. Se centra en la toma de decisiones, la gestión financiera personal, el ahorro, el endeudamiento, los agentes económicos, la responsabilidad social corporativa y los tipos de empresas.",

  "2️⃣ Toma de decisiones económicas\nLas decisiones económicas se basan en comparar beneficios y costes. El beneficio es la satisfacción o ganancia obtenida, mientras que el coste es aquello a lo que se renuncia. También aparece el coste de oportunidad, que es el valor de la mejor alternativa sacrificada, y el coste irrecuperable, que son gastos pasados que no deben influir en decisiones futuras.",

  "3️⃣ Costes, incentivos e intercambio\nLos incentivos son factores que motivan a actuar de una forma determinada porque modifican los beneficios o costes esperados. En sociedad, las decisiones económicas se relacionan con el intercambio, la eficiencia y el bienestar social. El objetivo es usar bien los recursos y mejorar la prosperidad colectiva.",

  "4️⃣ Economía doméstica y ahorro\nLa economía doméstica se basa en controlar ingresos, gastos y ahorro. Ahorrar significa renunciar a consumir hoy para poder consumir más en el futuro. Es recomendable crear un fondo de emergencia que cubra 6 meses de gastos habituales. En situaciones de ingresos inestables, puede ser recomendable ampliarlo hasta 9 o 12 meses.",

  "5️⃣ Presupuesto familiar\nEl presupuesto familiar permite planificar la economía personal. Incluye gastos fijos, gastos corrientes y gastos ocasionales. Para elaborarlo hay que identificar ingresos y gastos, priorizar necesidades, considerar el ahorro como un gasto fijo, hacer seguimiento y ajustar el presupuesto si no se cumplen los objetivos.",

  "6️⃣ Agentes económicos\nLos principales agentes económicos son las familias, las empresas, el Estado y el sector bancario. Las familias consumen y aportan trabajo; las empresas producen bienes y servicios; el Estado regula, recauda y redistribuye; y el sector bancario canaliza el dinero y el crédito.",

  "7️⃣ Financiación personal\nLa financiación debe usarse con responsabilidad para evitar el sobreendeudamiento. La capacidad de endeudamiento recomendada es como máximo el 35 % de los ingresos netos, y el límite de endeudamiento no debería superar el 40 %. El coste total de un préstamo incluye nominal, intereses, comisiones y gastos.",

  "8️⃣ Productos bancarios\nLos préstamos hipotecarios se usan normalmente para comprar inmuebles. La cantidad concedida depende del valor de la vivienda y suele limitarse al 80 % del valor de tasación. Los préstamos personales se destinan a consumo y suelen tener plazos más cortos. Las tarjetas pueden ser de débito, crédito o revolving. Las revolving son peligrosas porque pueden generar una deuda muy difícil de terminar de pagar.",

  "9️⃣ Responsabilidad Social Corporativa\nLa RSC es la integración voluntaria de preocupaciones sociales, económicas y medioambientales en la actividad empresarial. Incluye aspectos como bienestar laboral, conciliación, gestión de residuos, eficiencia energética, reciclaje e impacto positivo en la comunidad.",

  "🔟 Tipos de empresas y sociedades\nLas empresas pueden clasificarse por tamaño, ámbito, titularidad y actividad. También existen distintas formas jurídicas: empresario individual, sociedad limitada, sociedad anónima, sociedad colectiva, cooperativa y sociedad laboral. Cada una tiene requisitos diferentes de socios, capital mínimo y responsabilidad."
],

questions: [
  {
    q: "¿Cuál de las siguientes no es una característica del préstamo hipotecario?",
    options: [
      "La cuantía concedida dependerá del valor de la vivienda.",
      "Habitualmente la cuantía concedida no superará el 80% del valor de tasación.",
      "Su plazo máximo de amortización no suele exceder de 8 años.",
      "Suele utilizarse para la compra de bienes inmuebles.",
    ],
    correct: 2,
    explain: {
      detail:
        "El préstamo hipotecario se utiliza normalmente para comprar una vivienda u otro bien inmueble. Tiene garantía real sobre el inmueble y suele tener plazos de devolución largos.",
      whyCorrect:
        "La opción C es correcta porque no es una característica del préstamo hipotecario. El plazo máximo de amortización de 8 años se asocia más a préstamos personales, no a hipotecas.",
      whyWrong: {
        0: "Es verdadera: la cuantía concedida depende del valor de la vivienda.",
        1: "Es verdadera: normalmente no se concede más del 80 % del valor de tasación.",
        3: "Es verdadera: se utiliza habitualmente para comprar bienes inmuebles."
      }
    }
  },
  {
    q: "¿Cuál de los siguientes es un agente que actúa en la economía?",
    options: [
      "Familias.",
      "Empresas.",
      "Estado.",
      "Todas son correctas.",
    ],
    correct: 3,
    explain: {
      detail:
        "Los agentes económicos son los sujetos que intervienen en la actividad económica mediante consumo, producción, regulación o financiación.",
      whyCorrect:
        "La opción D es correcta porque familias, empresas y Estado son agentes económicos.",
      whyWrong: {
        0: "Es correcta, pero incompleta.",
        1: "Es correcta, pero incompleta.",
        2: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "¿En qué se basa la decisión que se toma para cubrir necesidades?",
    options: [
      "En un impulso.",
      "En una comparativa.",
      "En una encuesta.",
      "En una imitación de lo que hace la sociedad.",
    ],
    correct: 1,
    explain: {
      detail:
        "Las decisiones económicas racionales se toman comparando beneficios y costes antes de elegir una alternativa.",
      whyCorrect:
        "La opción B es correcta porque una decisión económica se basa en una comparativa entre opciones.",
      whyWrong: {
        0: "Un impulso no implica análisis racional.",
        2: "Una encuesta puede aportar información, pero no es la base de la decisión.",
        3: "Imitar a la sociedad no garantiza una decisión adecuada."
      }
    }
  },
  {
    q: "Cuando se toma una decisión, los costes del pasado que no deben influir en la decisión futura se denominan:",
    options: [
      "El coste operacional.",
      "El coste duplicado.",
      "El coste irrecuperable.",
      "El coste de ahorro.",
    ],
    correct: 2,
    explain: {
      detail:
        "Los costes irrecuperables son gastos ya realizados que no se pueden recuperar y no deberían condicionar decisiones futuras.",
      whyCorrect:
        "La opción C es correcta porque define el coste irrecuperable.",
      whyWrong: {
        0: "Coste operacional se relaciona con el funcionamiento de una actividad.",
        1: "Coste duplicado no es el concepto económico correcto.",
        3: "Coste de ahorro no define gastos pasados irreversibles."
      }
    }
  },
  {
    q: "El coste total de un préstamo será la suma de:",
    options: [
      "Capital inicial e intereses.",
      "Interés fijo e interés variable.",
      "Nominal, amortización, comisiones y tasas.",
      "Nominal, intereses, comisiones y gastos.",
    ],
    correct: 3,
    explain: {
      detail:
        "El coste total de un préstamo incluye todo lo que se devuelve y todos los costes asociados a la operación.",
      whyCorrect:
        "La opción D es correcta porque incluye nominal, intereses, comisiones y gastos.",
      whyWrong: {
        0: "Es incompleta porque faltan comisiones y otros gastos.",
        1: "Solo menciona tipos de interés, no el coste total.",
        2: "No es la formulación correcta del coste total."
      }
    }
  },
  {
    q: "El presupuesto familiar se compone de:",
    options: [
      "Gastos fijos.",
      "Gastos corrientes.",
      "Gastos ocasionales.",
      "Todas son correctas.",
    ],
    correct: 3,
    explain: {
      detail:
        "El presupuesto familiar recoge distintos tipos de gastos para organizar mejor la economía doméstica.",
      whyCorrect:
        "La opción D es correcta porque incluye gastos fijos, corrientes y ocasionales.",
      whyWrong: {
        0: "Es correcta, pero incompleta.",
        1: "Es correcta, pero incompleta.",
        2: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "La capacidad de endeudamiento:",
    options: [
      "Será como máximo del 35% de los ingresos netos.",
      "Será como máximo del 45% de los ingresos netos.",
      "Es equivalente al límite de endeudamiento.",
      "Es el total de los ingresos netos.",
    ],
    correct: 0,
    explain: {
      detail:
        "La capacidad de endeudamiento indica qué parte de los ingresos puede destinarse al pago de deudas sin comprometer la estabilidad económica.",
      whyCorrect:
        "La opción A es correcta porque se recomienda que sea como máximo del 35 % de los ingresos netos.",
      whyWrong: {
        1: "45 % sería demasiado elevado.",
        2: "No es exactamente equivalente al límite de endeudamiento.",
        3: "No puede ser el total de los ingresos netos."
      }
    }
  },
  {
    q: "La cuantía recomendada para el fondo de emergencia es aquella que permite mantener todos los gastos durante:",
    options: [
      "6 meses.",
      "3 meses.",
      "12 meses.",
      "Toda la vida del individuo.",
    ],
    correct: 0,
    explain: {
      detail:
        "El fondo de emergencia sirve para afrontar imprevistos sin recurrir a deuda.",
      whyCorrect:
        "La opción A es correcta porque se recomienda cubrir unos 6 meses de gastos habituales.",
      whyWrong: {
        1: "3 meses puede ser insuficiente.",
        2: "12 meses puede ser recomendable en situaciones inestables, pero no es la cuantía general.",
        3: "No es realista ni necesario cubrir toda la vida."
      }
    }
  },
  {
    q: "Las tarjetas revolving:",
    options: [
      "Son las que emiten las empresas comerciales.",
      "Se consideran una deuda eterna.",
      "Realizan el cargo de manera inmediata en la cuenta bancaria.",
      "Todas son correctas.",
    ],
    correct: 1,
    explain: {
      detail:
        "Las tarjetas revolving permiten aplazar pagos mediante cuotas, pero suelen generar intereses muy elevados.",
      whyCorrect:
        "La opción B es correcta porque pueden convertirse en una deuda eterna si apenas se amortiza capital.",
      whyWrong: {
        0: "No se definen por ser emitidas por empresas comerciales.",
        2: "El cargo inmediato corresponde a tarjetas de débito.",
        3: "No todas son correctas."
      }
    }
  },
  {
    q: "Renunciar a consumir hoy para consumir más en el futuro, ¿a qué concepto hace referencia?",
    options: [
      "Consumo.",
      "Financiación.",
      "Planificación.",
      "Ahorro.",
    ],
    correct: 3,
    explain: {
      detail:
        "El ahorro consiste en reservar parte de los ingresos actuales para utilizarlos en el futuro.",
      whyCorrect:
        "La opción D es correcta porque ahorrar implica renunciar a consumo presente para disponer de recursos futuros.",
      whyWrong: {
        0: "Consumo es gastar recursos en bienes o servicios.",
        1: "Financiación implica obtener recursos ajenos.",
        2: "Planificación ayuda a organizar, pero no es el concepto exacto."
      }
    }
  }
]
},

{
  id: "ap-u2",
title: "AP · U2 · Sistema fiscal y gestión empresarial",
summary: [
  "1️⃣ Visión general de la unidad\nLa unidad explica las nociones básicas del sistema fiscal y la gestión administrativa de una empresa. Se centra en cómo las empresas crean valor, gestionan documentos de compraventa, planifican cobros y pagos, y cumplen sus obligaciones tributarias.",

  "2️⃣ La empresa y su función\nLa empresa crea valor transformando recursos en bienes o servicios útiles para satisfacer necesidades. Además, asume riesgos, genera empleo, coordina recursos productivos y contribuye al bienestar social y económico.",

  "3️⃣ Análisis del entorno empresarial\nPara estudiar el entorno de una empresa se utilizan herramientas como el análisis PESTEL y las 5 fuerzas de Porter. El análisis PESTEL estudia factores políticos, económicos, sociales, tecnológicos, ecológicos y legales. El factor ecológico incluye energía, conciencia ambiental y restricciones de emisiones.",

  "4️⃣ Documentos de compraventa\nEn una operación comercial aparecen varios documentos:\n• Presupuesto: oferta del vendedor con condiciones.\n• Pedido: solicitud formal del comprador.\n• Albarán: justificante de entrega.\n• Factura: documento obligatorio que acredita la operación y permite repercutir IVA.",

  "5️⃣ Pagos y tesorería\nEl pago puede ser al contado o aplazado. Algunos instrumentos de pago son la letra de cambio, el pagaré y el recibo normalizado. El plan de tesorería recoge los cobros y pagos previstos a corto plazo para detectar superávit o déficit.",

  "6️⃣ Sistema tributario español\nEl sistema tributario permite al Estado obtener ingresos públicos mediante impuestos, tasas, contribuciones especiales, deuda pública, donaciones y otros recursos. Se basa en principios como equidad, justicia, progresividad, legalidad y no confiscatoriedad.",

  "7️⃣ Tipos de tributos\n• Impuestos: no tienen contraprestación directa y financian el gasto público general.\n• Tasas: se pagan por un servicio o trámite administrativo concreto.\n• Contribuciones especiales: se pagan por un beneficio derivado de obras o servicios públicos.",

  "8️⃣ Obligaciones fiscales de la empresa\nAntes de iniciar actividad, la empresa debe presentar la declaración censal mediante modelos 036 o 037. También puede estar sujeta a impuestos como IAE, IVA, IRPF o Impuesto sobre Sociedades, según su forma jurídica y actividad.",

  "9️⃣ IVA, IRPF e Impuesto sobre Sociedades\nEl IVA grava el consumo y la empresa actúa como recaudadora. El IRPF grava las rentas de las personas físicas y es progresivo. El Impuesto sobre Sociedades grava los beneficios de las personas jurídicas, generalmente al 25 %.",

  "🔟 Resumen final\nLa gestión administrativa y fiscal es esencial para evitar sanciones, controlar la liquidez y tomar mejores decisiones. Una empresa debe controlar sus documentos, prever cobros y pagos, conocer sus tributos y adaptarse a los cambios legales."
],

questions: [
  {
    q: "¿Cómo se crea valor en un producto?",
    options: [
      "Incrementando la cuota de mercado.",
      "Mediante una buena cadena de proveedores en el aprovisionamiento.",
      "Utilizando nuevas tecnologías y personal de élite.",
      "Añadiéndole utilidad para que satisfaga necesidades.",
    ],
    correct: 3,
    explain: {
      detail:
        "Crear valor significa transformar recursos en bienes o servicios que resulten útiles para las personas.",
      whyCorrect:
        "La opción D es correcta porque un producto crea valor cuando incorpora utilidad y satisface necesidades.",
      whyWrong: {
        0: "Incrementar cuota de mercado puede ser una consecuencia, pero no define la creación de valor.",
        1: "Una buena cadena de proveedores ayuda, pero no es el concepto central.",
        2: "La tecnología y el personal pueden contribuir, pero el valor depende de la utilidad para satisfacer necesidades."
      }
    }
  },
  {
    q: "¿Qué tipo de tributo es aquel que no conlleva contraprestación directa y que se dedica a la financiación general del gasto público?",
    options: [
      "Impuestos.",
      "Contribuciones especiales.",
      "Tasas.",
      "Sablazos.",
    ],
    correct: 0,
    explain: {
      detail:
        "Los tributos pueden ser impuestos, tasas o contribuciones especiales según exista o no una contraprestación directa.",
      whyCorrect:
        "La opción A es correcta porque los impuestos financian el gasto público general sin contraprestación directa.",
      whyWrong: {
        1: "Las contribuciones especiales se pagan por un beneficio derivado de una obra o servicio público.",
        2: "Las tasas se pagan por recibir un servicio o trámite concreto.",
        3: "Sablazos no es una categoría tributaria."
      }
    }
  },
  {
    q: "Cuando el vendedor quiere dejar constancia de la oferta de un determinado bien o servicio y sus condiciones de entrega, utilizará:",
    options: [
      "La factura.",
      "El presupuesto.",
      "El albarán.",
      "El pedido.",
    ],
    correct: 1,
    explain: {
      detail:
        "El presupuesto recoge una oferta previa con precio, condiciones y características del bien o servicio.",
      whyCorrect:
        "La opción B es correcta porque el presupuesto sirve para dejar constancia de la oferta del vendedor.",
      whyWrong: {
        0: "La factura acredita legalmente una operación ya realizada.",
        2: "El albarán justifica la entrega de mercancía.",
        3: "El pedido es la solicitud formal del comprador."
      }
    }
  },
  {
    q: "El documento formal que incorpora una orden de pago, por la que una persona ordena pagar una determinada cantidad de dinero al poseedor de esta a su vencimiento:",
    options: [
      "Cheque.",
      "Letra de cambio.",
      "Recibo normalizado.",
      "Transferencia bancaria.",
    ],
    correct: 1,
    explain: {
      detail:
        "La letra de cambio es un documento mercantil usado como instrumento de pago aplazado.",
      whyCorrect:
        "La opción B es correcta porque la letra de cambio incorpora una orden de pago a favor de su poseedor al vencimiento.",
      whyWrong: {
        0: "El cheque es una orden de pago, pero no se ajusta a esta definición de vencimiento y transmisión de derecho.",
        2: "El recibo normalizado se usa para domiciliaciones o cobros periódicos.",
        3: "La transferencia bancaria es una operación bancaria, no este documento formal."
      }
    }
  },
  {
    q: "El documento que recoge los cobros y pagos que tiene previstos la empresa, en base a las operaciones que va a realizar a corto plazo, se denomina:",
    options: [
      "Plan de marketing.",
      "Plan de tesorería.",
      "Plan contable.",
      "Sistema tributario.",
    ],
    correct: 1,
    explain: {
      detail:
        "El plan de tesorería permite prever entradas y salidas de dinero a corto plazo.",
      whyCorrect:
        "La opción B es correcta porque el plan de tesorería recoge cobros y pagos previstos.",
      whyWrong: {
        0: "El plan de marketing se centra en producto, precio, comunicación y ventas.",
        2: "El plan contable organiza cuentas y registros contables.",
        3: "El sistema tributario regula impuestos y tributos."
      }
    }
  },
  {
    q: "El Estado puede conseguir los ingresos públicos de:",
    options: [
      "Las donaciones y la deuda pública.",
      "La extracción o expropiación.",
      "Los ingresos contractuales.",
      "Todas son correctas.",
    ],
    correct: 3,
    explain: {
      detail:
        "El Estado obtiene ingresos por diferentes vías, tanto tributarias como no tributarias.",
      whyCorrect:
        "La opción D es correcta porque todas las opciones representan posibles fuentes de ingresos públicos.",
      whyWrong: {
        0: "Es correcta, pero incompleta.",
        1: "Es correcta, pero incompleta.",
        2: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "El impuesto que se encarga de gravar el consumo es:",
    options: [
      "El IVA.",
      "El IRPF.",
      "El Impuesto sobre Sociedades.",
      "La declaración censal.",
    ],
    correct: 0,
    explain: {
      detail:
        "El IVA es un impuesto indirecto que grava el consumo de bienes y servicios.",
      whyCorrect:
        "La opción A es correcta porque el IVA grava el consumo.",
      whyWrong: {
        1: "El IRPF grava la renta de las personas físicas.",
        2: "El Impuesto sobre Sociedades grava beneficios empresariales.",
        3: "La declaración censal es una obligación administrativa, no un impuesto."
      }
    }
  },
  {
    q: "El impuesto que se encarga de gravar las rentas de cada persona física es:",
    options: [
      "El IVA.",
      "El IRPF.",
      "El Impuesto sobre Sociedades.",
      "La declaración censal.",
    ],
    correct: 1,
    explain: {
      detail:
        "El IRPF es un impuesto personal, directo y progresivo sobre la renta de las personas físicas.",
      whyCorrect:
        "La opción B es correcta porque el IRPF grava las rentas de cada persona física.",
      whyWrong: {
        0: "El IVA grava el consumo.",
        2: "El Impuesto sobre Sociedades grava beneficios de personas jurídicas.",
        3: "La declaración censal no es un impuesto."
      }
    }
  },
  {
    q: "La base liquidable del IRPF es:",
    options: [
      "Igual a la base imponible.",
      "La parte que queda exenta de la aplicación del tributo.",
      "La cantidad que finalmente es sometida al gravamen.",
      "El tipo impositivo progresivo.",
    ],
    correct: 2,
    explain: {
      detail:
        "La base liquidable se obtiene tras aplicar reducciones a la base imponible y sobre ella se calcula el impuesto.",
      whyCorrect:
        "La opción C es correcta porque es la cantidad que finalmente se somete al gravamen.",
      whyWrong: {
        0: "No siempre es igual a la base imponible, porque pueden aplicarse reducciones.",
        1: "No es la parte exenta, sino la cantidad gravada.",
        3: "El tipo impositivo es el porcentaje aplicado, no la base."
      }
    }
  },
  {
    q: "Según el análisis PESTEL, el factor ecológico del macroentorno hace referencia a:",
    options: [
      "Inflación, política monetaria, desempleo...",
      "Demografía, educación, estilo de vida...",
      "Contabilidad, legislación, salubridad...",
      "Energía, concienciación ambiental, restricción de emisiones...",
    ],
    correct: 3,
    explain: {
      detail:
        "El análisis PESTEL estudia factores políticos, económicos, sociales, tecnológicos, ecológicos y legales.",
      whyCorrect:
        "La opción D es correcta porque el factor ecológico incluye energía, conciencia ambiental y restricciones de emisiones.",
      whyWrong: {
        0: "Eso corresponde al factor económico.",
        1: "Eso corresponde al factor social.",
        2: "Eso mezcla elementos legales y administrativos, no ecológicos."
      }
    }
  }
]
},
{
  id: "ap-u3",
title: "AP · U3 · Marketing y análisis de mercado",
summary: [
  "1️⃣ Visión general de la unidad\nLa unidad explica el concepto de marketing y el análisis de mercado como herramientas clave para que una empresa detecte necesidades, cree valor y tome decisiones estratégicas. El marketing no es solo vender o hacer publicidad, sino planificar productos, precios, promoción y distribución para generar intercambios útiles.",

  "2️⃣ Concepto de marketing\nEl marketing es la planificación y ejecución de la concepción del producto, la fijación de precios, la promoción y la distribución de ideas, bienes y servicios. Su finalidad es crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales.",

  "3️⃣ Funciones del marketing\nLas funciones principales del marketing son:\n• Funciones de análisis: detectar necesidades, estudiar el mercado y reconocer oportunidades.\n• Funciones de planificación y decisión: decidir qué hacer con los recursos disponibles para aprovechar esas oportunidades.",

  "4️⃣ Marketing estratégico y operativo\nEl marketing estratégico se centra en el análisis continuo del mercado, las necesidades del público objetivo y las oportunidades a largo plazo. El marketing operativo se ocupa de poner en marcha medidas concretas y tácticas para aprovechar esas oportunidades.",

  "5️⃣ Tipos de marketing\nExisten diferentes tipos de marketing:\n• Interno: dirigido a los integrantes de la organización.\n• Externo: dirigido al público objetivo.\n• Relacional: busca relaciones significativas a largo plazo.\n• Emocional: crea conexión emocional entre producto y consumidor.\n• Social: busca cambiar comportamientos para el bienestar comunitario.\n• Político: busca apoyo de votantes.",

  "6️⃣ Orientaciones de la actividad comercial\nLas empresas pueden orientarse hacia el producto, las ventas, el cliente, la competencia o el mercado. La orientación hacia el mercado es la más completa porque anticipa necesidades futuras y alinea la organización con el entorno.",

  "7️⃣ Concepto de mercado\nEl mercado está formado por individuos o entidades con necesidades, recursos y capacidad de compra, que participan en un lugar o contexto de intercambio comercial. Los beneficios obtenidos por la empresa no forman parte del concepto de mercado, sino que son un resultado de la actividad empresarial.",

  "8️⃣ Análisis de la demanda\nLa demanda es la cantidad de producto que los compradores desean adquirir en determinadas condiciones. Depende de factores como la renta, el precio del producto, el comportamiento del consumidor y la existencia de productos sustitutivos o competidores.",

  "9️⃣ Lean Startup y PMV\nEl método Lean Startup reduce la incertidumbre mediante experimentación. Se basa en formular hipótesis, diseñar experimentos, crear un Producto Mínimo Viable (PMV), medir resultados y aprender. El PMV es una versión básica del producto que permite probar si realmente aporta valor al cliente.",

  "🔟 Resumen final\nEl marketing ayuda a comprender el mercado, detectar oportunidades, crear productos útiles y establecer relaciones duraderas con el cliente. Para ello combina análisis, estrategia, ejecución, medición y aprendizaje continuo."
],

questions: [
  {
    q: "¿Cuál de las siguientes no es una orientación para la actividad comercial según el enfoque del marketing?",
    options: [
      "Orientación hacia el producto.",
      "Orientación hacia las ventas.",
      "Orientación hacia el cliente o consumidor.",
      "Orientación hacia la innovación tecnológica.",
    ],
    correct: 3,
    explain: {
      detail:
        "Las orientaciones clásicas de la actividad comercial incluyen producto, ventas, cliente, competencia y mercado.",
      whyCorrect:
        "La opción D es correcta porque la orientación hacia la innovación tecnológica no aparece como orientación comercial básica en este enfoque.",
      whyWrong: {
        0: "La orientación hacia el producto sí es una orientación comercial.",
        1: "La orientación hacia las ventas sí es una orientación comercial.",
        2: "La orientación hacia el cliente o consumidor sí es una orientación comercial."
      }
    }
  },
  {
    q: "¿Cuál de los siguientes elementos no pertenece al concepto de mercado?",
    options: [
      "Beneficios obtenidos por la empresa.",
      "Conjunto de individuos con necesidades.",
      "Recursos y capacidad de compra.",
      "Lugar de intercambio comercial.",
    ],
    correct: 0,
    explain: {
      detail:
        "El mercado se compone de personas o entidades con necesidades, capacidad de compra y posibilidad de intercambio.",
      whyCorrect:
        "La opción A es correcta porque los beneficios de la empresa no forman parte del concepto de mercado, sino que son un resultado posible.",
      whyWrong: {
        1: "El conjunto de individuos con necesidades sí forma parte del mercado.",
        2: "Los recursos y la capacidad de compra sí forman parte del mercado.",
        3: "El lugar o contexto de intercambio comercial sí forma parte del mercado."
      }
    }
  },
  {
    q: "¿Cuál es el objetivo principal del marketing relacional?",
    options: [
      "Incrementar las ventas a corto plazo.",
      "Mantener una relación significativa a largo plazo con el público objetivo.",
      "Realizar promociones y descuentos.",
      "Atraer nuevos clientes a través de la publicidad masiva.",
    ],
    correct: 1,
    explain: {
      detail:
        "El marketing relacional busca crear vínculos estables y de confianza con los clientes.",
      whyCorrect:
        "La opción B es correcta porque su objetivo es mantener relaciones significativas a largo plazo.",
      whyWrong: {
        0: "Aumentar ventas a corto plazo no es el objetivo central del marketing relacional.",
        2: "Las promociones pueden usarse, pero no definen el marketing relacional.",
        3: "La publicidad masiva se relaciona más con captación, no con relación duradera."
      }
    }
  },
  {
    q: "¿Cuál es la definición más completa de marketing?",
    options: [
      "El proceso de ventas de productos y servicios.",
      "El estudio de competencia y comportamiento del consumidor.",
      "La actividad de publicidad y análisis de mercado.",
      "La planificación y ejecución de la concepción del producto, fijación de precios, promoción y distribución de ideas, bienes y servicios para crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales.",
    ],
    correct: 3,
    explain: {
      detail:
        "El marketing incluye producto, precio, promoción, distribución y creación de relaciones de intercambio.",
      whyCorrect:
        "La opción D es correcta porque recoge la definición completa de marketing.",
      whyWrong: {
        0: "Vender es solo una parte del marketing.",
        1: "El análisis de competencia y consumidor es importante, pero no define todo el marketing.",
        2: "Publicidad y análisis de mercado son solo partes del proceso."
      }
    }
  },
  {
    q: "¿Cuál es la principal diferencia entre marketing estratégico y marketing operativo?",
    options: [
      "El marketing estratégico se centra en el corto plazo, mientras que el operativo se centra en el largo plazo.",
      "El marketing estratégico se ocupa de la implementación de acciones, mientras que el operativo se ocupa del análisis de necesidades del público objetivo.",
      "El marketing estratégico se ocupa de la publicidad, mientras que el marketing operativo se centra en las ventas.",
      "El marketing estratégico se centra en el análisis continuo y la identificación de necesidades del público objetivo, mientras que el marketing operativo se focaliza en la puesta en marcha de medidas para aprovechar oportunidades.",
    ],
    correct: 3,
    explain: {
      detail:
        "El marketing estratégico analiza y decide a largo plazo; el operativo ejecuta acciones concretas.",
      whyCorrect:
        "La opción D es correcta porque distingue análisis estratégico y ejecución operativa.",
      whyWrong: {
        0: "Está invertido: el estratégico mira más al largo plazo.",
        1: "También está invertido: el operativo implementa acciones.",
        2: "La diferencia no es publicidad frente a ventas."
      }
    }
  },
  {
    q: "¿Cuáles son las funciones del marketing en la empresa?",
    options: [
      "Funciones de producción y funciones de comercialización.",
      "Funciones de dirección y gestión y funciones de acción.",
      "Funciones de evaluación del mercado.",
      "Funciones de análisis y funciones de planificación y decisión.",
    ],
    correct: 3,
    explain: {
      detail:
        "El marketing ayuda a analizar oportunidades y a planificar decisiones comerciales.",
      whyCorrect:
        "La opción D es correcta porque sus funciones principales son análisis y planificación-decisión.",
      whyWrong: {
        0: "Producción no es una función propia del marketing.",
        1: "No es la clasificación concreta del tema.",
        2: "La evaluación del mercado es solo una parte del análisis."
      }
    }
  },
  {
    q: "¿Qué caracteriza al marketing emocional?",
    options: [
      "La segmentación del mercado basada en datos demográficos.",
      "El uso intensivo de técnicas de venta agresivas.",
      "La implementación de estrategias de precios competitivos.",
      "La creación de una conexión emocional entre el producto y el consumidor.",
    ],
    correct: 3,
    explain: {
      detail:
        "El marketing emocional busca asociar la marca o producto a experiencias y sentimientos positivos.",
      whyCorrect:
        "La opción D es correcta porque se basa en crear una conexión emocional con el consumidor.",
      whyWrong: {
        0: "Eso corresponde a segmentación de mercado.",
        1: "Las ventas agresivas se asocian más a orientación a ventas.",
        2: "El precio competitivo no define el marketing emocional."
      }
    }
  },
  {
    q: "¿Qué enfoque de marketing se centra en la anticipación de problemas y necesidades futuras del mercado?",
    options: [
      "Orientación hacia el producto.",
      "Orientación hacia las ventas.",
      "Orientación hacia la competencia.",
      "Orientación hacia el mercado.",
    ],
    correct: 3,
    explain: {
      detail:
        "La orientación hacia el mercado busca comprender y anticipar necesidades futuras.",
      whyCorrect:
        "La opción D es correcta porque anticipa problemas, cambios y necesidades del mercado.",
      whyWrong: {
        0: "La orientación al producto se centra en la oferta propia.",
        1: "La orientación a ventas se centra en vender más.",
        2: "La orientación a la competencia compara la empresa con sus rivales."
      }
    }
  },
  {
    q: "¿Qué es el Producto Mínimo Viable (PMV) en el contexto del método Lean Startup?",
    options: [
      "Una versión de prueba del producto con características básicas necesarias para satisfacer las necesidades de los clientes.",
      "Un producto final completo.",
      "Un concepto teórico sin implementación real.",
      "Un plan de marketing detallado.",
    ],
    correct: 0,
    explain: {
      detail:
        "El PMV permite probar una idea con el mínimo esfuerzo y recoger aprendizaje real del mercado.",
      whyCorrect:
        "La opción A es correcta porque el PMV es una versión básica de prueba del producto.",
      whyWrong: {
        1: "No es el producto final completo.",
        2: "No es solo teórico, se implementa para probar.",
        3: "No es un plan de marketing, sino una versión inicial del producto."
      }
    }
  },
  {
    q: "El marketing interno se refiere a:",
    options: [
      "Las acciones del marketing dentro de la organización dirigidas a sus propios integrantes.",
      "Las estrategias de comunicación de la empresa hacia su público objetivo.",
      "La publicidad realizada dentro del país de origen de la empresa.",
      "Las ventas directas a los empleados de la empresa.",
    ],
    correct: 0,
    explain: {
      detail:
        "El marketing interno busca implicar y satisfacer a los miembros de la organización.",
      whyCorrect:
        "La opción A es correcta porque se dirige a los propios integrantes de la empresa.",
      whyWrong: {
        1: "Eso corresponde al marketing externo.",
        2: "No tiene que ver con el país donde se hace publicidad.",
        3: "No significa vender productos a empleados."
      }
    }
  }
]
},

{
  id: "ap-u4",
title: "AP · U4 · Plan de marketing integral",
summary: [
  "1️⃣ Visión general de la unidad\nLa unidad explica el plan de marketing como herramienta principal del marketing estratégico. Sirve para definir quién es la empresa, qué objetivos quiere alcanzar y cómo va a conseguirlos mediante análisis, estrategias y acciones concretas.",

  "2️⃣ Plan de marketing estratégico\nEl plan de marketing permite orientar las decisiones comerciales a medio y largo plazo. Responde a tres preguntas clave: quiénes somos, qué queremos y cómo conseguirlo. Su finalidad es alinear los objetivos de la empresa con las necesidades del mercado.",

  "3️⃣ Apartados principales del plan\nEl plan de marketing se estructura en varias fases:\n• Definición estratégica: misión y metas comerciales.\n• Análisis de la situación: demanda, competencia, entorno e interior de la empresa.\n• Desarrollo de la estrategia.\n• Implantación de la estrategia.\n• Evaluación y control de resultados.",

  "4️⃣ Análisis DAFO\nEl análisis DAFO estudia Debilidades, Amenazas, Fortalezas y Oportunidades. Las debilidades y fortalezas son internas; las amenazas y oportunidades son externas. Es una herramienta clave para conocer la situación real de la empresa.",

  "5️⃣ Estrategias genéricas\nSegún la ventaja competitiva, las estrategias pueden ser:\n• Costes: competir con precios bajos.\n• Diferenciación: destacar por calidad o características únicas.\n• Enfoque: especializarse en un segmento concreto.\nLa diversificación no pertenece a estas estrategias, sino a las estrategias según el producto.",

  "6️⃣ Estrategias según el producto\nLas estrategias según el producto incluyen:\n• Penetración: crecer en el mercado actual.\n• Desarrollo de mercado: llevar productos actuales a nuevos mercados.\n• Desarrollo de producto: crear o modificar productos para el mercado actual.\n• Diversificación: nuevos productos en nuevos mercados.",

  "7️⃣ Análisis de mercado\nEl análisis de mercado ayuda a tomar decisiones comerciales mediante datos. Los datos se clasifican por naturaleza, fuente y ubicación. No se clasifican por coste. La investigación de mercado transforma información en conocimiento útil para la empresa.",

  "8️⃣ Proceso de investigación de mercado\nEl proceso tiene cuatro fases:\n• Planteamiento de la investigación.\n• Búsqueda y obtención de información.\n• Análisis de la información.\n• Presentación de resultados.\nEl informe final debe ser ordenado, preciso, objetivo y confidencial.",

  "9️⃣ Segmentación y cobertura\nSegmentar consiste en dividir consumidores heterogéneos en grupos homogéneos. Las estrategias de cobertura pueden ser concentración, expansión de mercado, expansión de productos y diferenciación.",

  "🔟 Marketing mix\nEl marketing mix se basa en las 4 P: producto, precio, distribución y comunicación. La distribución define cómo y dónde se pone el producto a disposición del público. La comunicación busca informar, recordar y persuadir a los consumidores potenciales."
],

questions: [
  {
    q: "¿Cuál de las siguientes NO es una estrategia según la ventaja competitiva?",
    options: [
      "Estrategia de costes.",
      "Estrategia de diferenciación.",
      "Estrategia de enfoque.",
      "Estrategia de diversificación.",
    ],
    correct: 3,
    explain: {
      detail:
        "Las estrategias según la ventaja competitiva son costes, diferenciación y enfoque.",
      whyCorrect:
        "La opción D es correcta porque la diversificación no es una estrategia según la ventaja competitiva, sino una estrategia relacionada con producto y mercado.",
      whyWrong: {
        0: "La estrategia de costes sí pertenece a las estrategias de ventaja competitiva.",
        1: "La estrategia de diferenciación sí pertenece a las estrategias de ventaja competitiva.",
        2: "La estrategia de enfoque sí pertenece a las estrategias de ventaja competitiva."
      }
    }
  },
  {
    q: "¿Cuál de los siguientes no es un criterio para clasificar los datos en el análisis de mercado?",
    options: [
      "Por su naturaleza.",
      "Por su ubicación.",
      "Por su fuente.",
      "Por su costo.",
    ],
    correct: 3,
    explain: {
      detail:
        "En análisis de mercado, los datos se clasifican por naturaleza, fuente y ubicación.",
      whyCorrect:
        "La opción D es correcta porque el coste no es uno de los criterios principales de clasificación de datos.",
      whyWrong: {
        0: "Por naturaleza sí es un criterio: cuantitativos o cualitativos.",
        1: "Por ubicación sí es un criterio: internos o externos.",
        2: "Por fuente sí es un criterio: primarios o secundarios."
      }
    }
  },
  {
    q: "¿Cuál es la primera fase en el proceso de análisis de mercados?",
    options: [
      "Análisis de la información.",
      "Búsqueda y obtención de la información.",
      "Planteamiento de la investigación.",
      "Obtención y presentación de resultados.",
    ],
    correct: 2,
    explain: {
      detail:
        "Antes de recoger datos hay que definir qué se quiere investigar, cómo y para qué.",
      whyCorrect:
        "La opción C es correcta porque la primera fase es el planteamiento de la investigación.",
      whyWrong: {
        0: "El análisis se realiza después de obtener la información.",
        1: "La búsqueda de información va después del planteamiento.",
        3: "La presentación de resultados es la fase final."
      }
    }
  },
  {
    q: "¿Cuál es la principal herramienta del marketing estratégico?",
    options: [
      "Análisis DAFO.",
      "Plan de marketing.",
      "Investigación de mercado.",
      "Estrategia de precios.",
    ],
    correct: 1,
    explain: {
      detail:
        "El plan de marketing recoge el análisis, los objetivos, las estrategias y las acciones comerciales.",
      whyCorrect:
        "La opción B es correcta porque el plan de marketing es la herramienta principal del marketing estratégico.",
      whyWrong: {
        0: "El DAFO es una herramienta de análisis, pero no la principal herramienta global.",
        2: "La investigación de mercado aporta información, pero no sustituye al plan.",
        3: "La estrategia de precios es solo una parte del marketing mix."
      }
    }
  },
  {
    q: "¿Qué análisis no forma parte del análisis de la situación en el plan de marketing?",
    options: [
      "Análisis de la demanda.",
      "Análisis de la competencia.",
      "Análisis del producto.",
      "Análisis interno de la empresa.",
    ],
    correct: 2,
    explain: {
      detail:
        "El análisis de la situación estudia demanda, competencia, entorno e interior de la empresa.",
      whyCorrect:
        "La opción C es correcta porque el análisis del producto no aparece como apartado propio dentro del análisis de la situación en este esquema.",
      whyWrong: {
        0: "El análisis de la demanda sí forma parte del análisis de la situación.",
        1: "El análisis de la competencia sí forma parte del análisis de la situación.",
        3: "El análisis interno de la empresa sí forma parte del análisis de la situación."
      }
    }
  },
  {
    q: "¿Qué apartado del plan de marketing se enfoca en definir las metas comerciales a medio y largo plazo?",
    options: [
      "Análisis de la situación.",
      "Evaluación y control.",
      "Definición estratégica.",
      "Implantación de la estrategia.",
    ],
    correct: 2,
    explain: {
      detail:
        "La definición estratégica establece la misión y las metas comerciales de la empresa.",
      whyCorrect:
        "La opción C es correcta porque define objetivos a medio y largo plazo.",
      whyWrong: {
        0: "El análisis de la situación estudia el contexto.",
        1: "La evaluación y control mide resultados después de ejecutar.",
        3: "La implantación consiste en aplicar las acciones previstas."
      }
    }
  },
  {
    q: "¿Qué herramienta permite analizar las debilidades, amenazas, fortalezas y oportunidades de una empresa?",
    options: [
      "Análisis PEST.",
      "Análisis DAFO.",
      "Investigación de mercado.",
      "Matriz de crecimiento.",
    ],
    correct: 1,
    explain: {
      detail:
        "DAFO significa Debilidades, Amenazas, Fortalezas y Oportunidades.",
      whyCorrect:
        "La opción B es correcta porque el análisis DAFO estudia esos cuatro elementos.",
      whyWrong: {
        0: "El análisis PEST estudia factores políticos, económicos, sociales y tecnológicos.",
        2: "La investigación de mercado obtiene información del mercado, pero no es específicamente DAFO.",
        3: "La matriz de crecimiento no corresponde a esos cuatro elementos."
      }
    }
  },
  {
    q: "¿Qué política del marketing mix se relaciona con la forma y el lugar en el que los bienes y servicios se ponen a disposición del público?",
    options: [
      "Política de precio.",
      "Política de producto.",
      "Política de distribución.",
      "Política de comunicación.",
    ],
    correct: 2,
    explain: {
      detail:
        "La distribución define los canales y medios para hacer llegar el producto al consumidor.",
      whyCorrect:
        "La opción C es correcta porque la política de distribución decide cómo y dónde se pone el producto a disposición del público.",
      whyWrong: {
        0: "El precio se relaciona con el valor económico del producto.",
        1: "El producto se relaciona con características, diseño, marca o envase.",
        3: "La comunicación se centra en informar, recordar y persuadir."
      }
    }
  },
  {
    q: "El informe final de la investigación:",
    options: [
      "Tendrá un carácter formal, público y subjetivo.",
      "Es un vídeo de presentación.",
      "Se centra en clasificar las opiniones que se hayan obtenido y valorarlas en base a los criterios.",
      "Debe ser ordenado, preciso, objetivo y confidencial.",
    ],
    correct: 3,
    explain: {
      detail:
        "La presentación de resultados debe recoger la información de forma clara, objetiva y útil para la toma de decisiones.",
      whyCorrect:
        "La opción D es correcta porque el informe final debe ser ordenado, preciso, objetivo y confidencial.",
      whyWrong: {
        0: "No debe ser subjetivo ni necesariamente público.",
        1: "No es simplemente un vídeo de presentación.",
        2: "Eso corresponde más al análisis de información, no al informe final completo."
      }
    }
  },
  {
    q: "La política de comunicación:",
    options: [
      "Se relaciona con la forma y el lugar en el que los bienes y servicios se ponen a disposición del público.",
      "Tiene como fin informar, recordar y persuadir a los consumidores potenciales.",
      "Es sinónimo de hacer publicidad.",
      "Permite determinar las secciones del mercado más afines y adecuadas.",
    ],
    correct: 1,
    explain: {
      detail:
        "La comunicación incluye publicidad, relaciones públicas, promoción de ventas, venta personal, marketing directo y marketing online.",
      whyCorrect:
        "La opción B es correcta porque la comunicación busca informar, recordar y persuadir.",
      whyWrong: {
        0: "Eso corresponde a la política de distribución.",
        2: "La publicidad es solo una parte de la comunicación.",
        3: "Eso se relaciona con segmentación de mercado."
      }
    }
  }
]
},

{
  id: "ap-u5",
title: "AP · U5 · Gestión de recursos humanos",
summary: [
  "1️⃣ Visión general de la unidad\nLa unidad explica la gestión de los recursos humanos en la empresa. Los RRHH son el conjunto de personas que trabajan en una organización y son clave para la productividad, la motivación, el clima laboral y el éxito empresarial.",

  "2️⃣ Enfoques de los recursos humanos\nLos RRHH pueden estudiarse desde tres enfoques:\n• Administrativo-legal: contratos, altas, bajas, Seguridad Social e IRPF.\n• Contable-costes: salarios, cotizaciones y costes de personal.\n• Gestión: motivación, coordinación, formación, liderazgo y productividad.",

  "3️⃣ Organización formal e informal\nLa organización formal es la estructura definida por la dirección y reflejada en el organigrama. Establece puestos, jerarquías y funciones. La organización informal surge de forma natural por las relaciones personales entre trabajadores y puede mejorar el clima laboral, aunque también generar conflictos.",

  "4️⃣ Departamento de RRHH\nEn empresas pequeñas, la gestión de personal puede llevarla la propiedad o una asesoría externa. En empresas grandes, el departamento de RRHH se encarga de planificar, seleccionar, contratar, formar, retribuir y gestionar las relaciones laborales.",

  "5️⃣ Habilidades del responsable de RRHH\nEl responsable de recursos humanos debe tener motivación y saber transmitirla, comunicar eficazmente, negociar, tomar decisiones con determinación y conocer bien la misión y objetivos de la empresa.",

  "6️⃣ Funciones del departamento de RRHH\nLas funciones principales son:\n• Empleo: selección, reclutamiento y planificación de plantillas.\n• Administración de personal: contratos, bajas, ausencias y vacaciones.\n• Retribución: nóminas y pago de salarios.\n• Desarrollo y servicios sociales: motivación, satisfacción y desempeño.\n• Relaciones laborales: conflictos, negociación y prevención de riesgos.",

  "7️⃣ Modelos de gestión de personal\nLos modelos tradicionales ven al trabajador como un coste o instrumento productivo. Los modelos actuales se centran en la persona, sus competencias, motivaciones y talento. La gestión por competencias forma parte de los modelos actuales.",

  "8️⃣ Clasificación profesional\nLos grupos profesionales se definen por características, titulación y aptitudes del trabajador, además del contenido general de la prestación laboral. No hay que confundir grupo profesional con grupo de cotización de la Seguridad Social.",

  "9️⃣ Planificación de recursos humanos\nLa planificación de RRHH busca ajustar la plantilla a los objetivos de la empresa, tanto en cantidad como en calidad. Incluye establecer escenarios futuros, programar actuaciones, ejecutar el plan y controlar desviaciones. Se marcan objetivos logísticos y estratégicos.",

  "🔟 Análisis de puestos de trabajo\nEl análisis de puestos permite conocer funciones, requisitos, riesgos y condiciones de cada puesto. Se utilizan herramientas como la ficha de descripción del puesto, el perfil profesional y el profesiograma. Para obtener información se pueden usar observación directa, cuestionarios, entrevistas y diarios de trabajo."
],

questions: [
  {
    q: "Al responsable de recursos humanos se le presuponen varias habilidades, entre ellas:",
    options: [
      "Tener motivación y ser capaz de trasmitirla al equipo.",
      "Comunicar efectivamente.",
      "Ser resolutivo y determinado en la toma de decisiones.",
      "Todas son correctas.",
    ],
    correct: 3,
    explain: {
      detail:
        "El responsable de RRHH debe combinar habilidades personales, comunicativas y organizativas.",
      whyCorrect:
        "La opción D es correcta porque todas esas habilidades son necesarias en un responsable de recursos humanos.",
      whyWrong: {
        0: "Es correcta, pero incompleta.",
        1: "Es correcta, pero incompleta.",
        2: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Calcular las nóminas y realizar el pago a los trabajadores se ubica dentro de la siguiente función:",
    options: [
      "Función de empleo.",
      "Función de administración del personal.",
      "Función de retribución o contraprestación de servicios.",
      "Función de desarrollo y servicios sociales.",
    ],
    correct: 2,
    explain: {
      detail:
        "La función de retribución se ocupa de calcular y pagar las compensaciones económicas del trabajador.",
      whyCorrect:
        "La opción C es correcta porque las nóminas y pagos pertenecen a la función de retribución.",
      whyWrong: {
        0: "La función de empleo se relaciona con selección y planificación de plantilla.",
        1: "La administración del personal gestiona contratos, ausencias o bajas, pero no es la función principal de pago.",
        3: "Desarrollo y servicios sociales se centra en motivación, formación y desempeño."
      }
    }
  },
  {
    q: "El modelo de gestión por competencias forma parte de los:",
    options: [
      "Modelos tradicionales.",
      "Modelos actuales.",
      "Modelos históricos.",
      "Ninguna es correcta.",
    ],
    correct: 1,
    explain: {
      detail:
        "La gestión por competencias valora habilidades, actitudes, capacidades y talento del trabajador.",
      whyCorrect:
        "La opción B es correcta porque pertenece a los modelos actuales de gestión de personal.",
      whyWrong: {
        0: "Los modelos tradicionales se centran más en costes y ejecución.",
        2: "No se denomina modelo histórico.",
        3: "Sí hay una opción correcta."
      }
    }
  },
  {
    q: "El plan de actuación, para que el personal esté ajustado tanto cuantitativa como cualitativamente a los objetivos que se hayan planteado en la previsión previa, incluirá:",
    options: [
      "Prioridades y temporalización.",
      "Asignación de presupuestos.",
      "Responsabilidades.",
      "Todas son correctas.",
    ],
    correct: 3,
    explain: {
      detail:
        "La planificación de RRHH requiere organizar tiempos, recursos y responsables.",
      whyCorrect:
        "La opción D es correcta porque un plan de actuación debe incluir prioridades, presupuesto y responsabilidades.",
      whyWrong: {
        0: "Es correcta, pero incompleta.",
        1: "Es correcta, pero incompleta.",
        2: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "La función de desarrollo y servicios sociales del departamento de RRHH se encarga de:",
    options: [
      "Proveer a la empresa de personal.",
      "La gestión burocrática de contratos, justificantes, bajas, etc.",
      "Motivación, satisfacción y correcto desempeño en el puesto.",
      "Nóminas y realización del pago a los trabajadores.",
    ],
    correct: 2,
    explain: {
      detail:
        "Esta función busca mejorar el bienestar, la motivación y la productividad del trabajador.",
      whyCorrect:
        "La opción C es correcta porque desarrollo y servicios sociales se centra en motivación, satisfacción y desempeño.",
      whyWrong: {
        0: "Eso corresponde a la función de empleo.",
        1: "Eso corresponde a administración de personal.",
        3: "Eso corresponde a la función de retribución."
      }
    }
  },
  {
    q: "La metodología de análisis de puestos de trabajo en la que el empleado que desempeña el puesto responde a un test sobre sus funciones y tareas, se denomina:",
    options: [
      "Observación directa.",
      "Cuestionarios.",
      "Entrevista.",
      "Diarios de trabajo.",
    ],
    correct: 1,
    explain: {
      detail:
        "Los cuestionarios permiten recoger información de muchos puestos de forma rápida y estructurada.",
      whyCorrect:
        "La opción B es correcta porque el empleado responde a un test o formulario sobre sus funciones y tareas.",
      whyWrong: {
        0: "La observación directa consiste en ver cómo trabaja la persona.",
        2: "La entrevista es una conversación guiada, no un test escrito.",
        3: "El diario de trabajo consiste en registrar tareas día a día."
      }
    }
  },
  {
    q: "La metodología de análisis de puestos de trabajo en la que los empleados registran cada jornada sus tareas, el tiempo dedicado a ellas, las personas a las que dan feedback de su trabajo y todas las observaciones que consideren relevantes, se denomina:",
    options: [
      "Observación directa.",
      "Cuestionarios.",
      "Entrevista.",
      "Diarios de trabajo.",
    ],
    correct: 3,
    explain: {
      detail:
        "Los diarios de trabajo recogen la actividad diaria realizada por el empleado en su puesto.",
      whyCorrect:
        "La opción D es correcta porque consiste en registrar tareas, tiempos, feedback y observaciones cada jornada.",
      whyWrong: {
        0: "La observación directa la realiza el analista observando el puesto.",
        1: "El cuestionario es un test o formulario puntual.",
        2: "La entrevista es una conversación, no un registro diario."
      }
    }
  },
  {
    q: "Los grupos profesionales se definen por:",
    options: [
      "Las características del trabajador.",
      "La titulación del trabajador.",
      "Las aptitudes del trabajador.",
      "Todas son correctas.",
    ],
    correct: 3,
    explain: {
      detail:
        "Los grupos profesionales agrupan puestos según aptitudes, titulaciones y características de la prestación laboral.",
      whyCorrect:
        "La opción D es correcta porque todas esas variables ayudan a definir los grupos profesionales.",
      whyWrong: {
        0: "Es correcta, pero incompleta.",
        1: "Es correcta, pero incompleta.",
        2: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "Para la planificación de los recursos humanos:",
    options: [
      "Es necesario plantear constantes aumentos de personal.",
      "Se marcan objetivos logísticos y estratégicos.",
      "Las desviaciones tienen siempre motivos extraordinarios.",
      "Todas son correctas.",
    ],
    correct: 1,
    explain: {
      detail:
        "La planificación de RRHH busca adecuar la plantilla a las necesidades presentes y futuras de la empresa.",
      whyCorrect:
        "La opción B es correcta porque en la planificación se establecen objetivos logísticos y estratégicos.",
      whyWrong: {
        0: "No siempre implica aumentar personal; también puede implicar reorganizar o reducir.",
        2: "Las desviaciones pueden ser ordinarias o extraordinarias.",
        3: "No todas son correctas porque A y C son falsas."
      }
    }
  },
  {
    q: "Una organización informal:",
    options: [
      "Es aquella donde la estructura organizativa la define la dirección y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones.",
      "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores.",
      "Es aquella que procura que su estructura esté en todo momento provista de personal, en sentido tanto cuantitativo como cualitativo.",
      "Es aquella que impulsa la transformación digital implicando a todos los integrantes en el uso de la tecnología para fomentar un ecosistema abierto y digitalizado.",
    ],
    correct: 1,
    explain: {
      detail:
        "La organización informal surge espontáneamente por afinidades, relaciones personales y dinámicas sociales internas.",
      whyCorrect:
        "La opción B es correcta porque define la estructura informal basada en relaciones naturales entre trabajadores.",
      whyWrong: {
        0: "Eso define la organización formal.",
        2: "Eso se relaciona con planificación de RRHH.",
        3: "Eso se relaciona con transformación digital, no con organización informal."
      }
    }
  }
]
},

{
  id: "ap-u6",
title: "AP · U6 · Habilidades interpersonales y liderazgo",
summary: [
  "1️⃣ Visión general de la unidad\nLa unidad explica la importancia de la motivación, el liderazgo, la comunicación interna y las habilidades interpersonales dentro de la empresa. Estas capacidades son esenciales para mejorar el clima laboral, la productividad, la satisfacción del equipo y la reputación externa de la organización.",

  "2️⃣ Motivación laboral\nLa motivación es el estímulo que impulsa a una persona a iniciar, mantener o finalizar una actividad para cubrir necesidades. Un trabajador motivado suele ser más productivo, se implica más en la empresa y contribuye a mejorar el ambiente laboral.",

  "3️⃣ Teorías de la motivación\nEntre las principales teorías destacan:\n• Maslow: pirámide de necesidades, desde supervivencia hasta autorrealización.\n• Herzberg: distingue factores higiénicos y motivacionales.\n• McClelland: necesidades de logro, afiliación y poder.\n• Adams: teoría de la equidad basada en la comparación entre esfuerzo y recompensa.\n• ERG: existencia, relación y crecimiento.",

  "4️⃣ Factores higiénicos y motivacionales\nSegún Herzberg, los factores higiénicos no motivan por sí mismos, pero su ausencia produce insatisfacción. Ejemplos: salario, estabilidad o condiciones de trabajo. Los factores motivacionales sí generan compromiso, como el reconocimiento, la promoción, el logro y la responsabilidad.",

  "5️⃣ Liderazgo y jefatura\nUn jefe tiene autoridad formal por su cargo, pero un líder influye en los demás por su carisma, personalidad y capacidad para guiar al equipo. Las empresas buscan que los jefes actúen también como líderes para motivar, orientar y generar confianza.",

  "6️⃣ Estilos de liderazgo\nExisten distintos estilos:\n• Laissez faire: el líder interviene lo mínimo y da mucha libertad.\n• Democrático: fomenta la participación y la comunicación.\n• Paternalista: protege al equipo y toma decisiones por él.\n• Visionario: tiene clara la meta y consigue que el equipo la comparta.\n• Coaching: ayuda al desarrollo y aprendizaje individual.\n• Autocrático: dirección rígida y unilateral.",

  "7️⃣ Teorías del liderazgo\nEntre los enfoques principales destacan:\n• Enfoque situacional: la eficacia depende de la circunstancia.\n• Teoría X e Y de McGregor: visión negativa o positiva del trabajador.\n• Malla gerencial de Blake y Mouton: combina preocupación por personas y tareas.\n• Inteligencia emocional: liderazgo basado en gestionar emociones propias y ajenas.",

  "8️⃣ Comunicación interna\nLa comunicación interna permite transmitir información dentro de la organización. Puede ser formal o informal, y según la dirección puede ser vertical, horizontal, diagonal o transversal. Sus canales pueden ser escritos, orales, tecnológicos u otros eventos corporativos.",

  "9️⃣ Tendencias actuales en comunicación interna\nActualmente destacan la digitalización, el employer branding y el uso de apps internas. Estas herramientas mejoran la rapidez de comunicación, el sentido de pertenencia y la imagen de la empresa como lugar atractivo para trabajar.",

  "🔟 Habilidades interpersonales\nLas habilidades interpersonales, también llamadas habilidades blandas, permiten interactuar eficazmente con los demás. Incluyen empatía, comunicación efectiva, resolución de conflictos, trabajo en equipo y adaptabilidad. Son importantes para todos los niveles de la empresa, no solo para directivos."
],

questions: [
  {
    q: "A las personas que, sin haber sido dotadas de autoridad, tienen la capacidad de influenciar sobre los demás por su carisma y personalidad, se les denomina:",
    options: [
      "Líderes",
      "Directores",
      "Jefes",
      "Mandos",
    ],
    correct: 0,
    explain: {
      detail:
        "El liderazgo no depende únicamente de un cargo formal, sino de la capacidad de influir, inspirar y guiar a otras personas.",
      whyCorrect:
        "La opción A es correcta porque los líderes pueden influir en los demás por su carisma, personalidad y capacidad de orientación.",
      whyWrong: {
        1: "Un director tiene autoridad formal por su puesto, pero no necesariamente liderazgo personal.",
        2: "Un jefe posee autoridad jerárquica, pero no siempre influye por carisma.",
        3: "Un mando ocupa una posición de dirección o supervisión, pero no define necesariamente liderazgo."
      }
    }
  },
  {
    q: "¿Cuál de las siguientes es una tendencia actual relativa a la comunicación interna?",
    options: [
      "Motor de digitalización",
      "Employer Branding",
      "Apps internas",
      "Todas son correctas",
    ],
    correct: 3,
    explain: {
      detail:
        "La comunicación interna actual se apoya en herramientas digitales, cultura empresarial y estrategias de marca empleadora.",
      whyCorrect:
        "La opción D es correcta porque la digitalización, el employer branding y las apps internas son tendencias actuales.",
      whyWrong: {
        0: "Es correcta, pero incompleta.",
        1: "Es correcta, pero incompleta.",
        2: "Es correcta, pero incompleta."
      }
    }
  },
  {
    q: "El estilo de liderazgo en el que el líder interviene solo cuando lo cree conveniente, dejando máxima libertad a sus empleados y controlando lo mínimo imprescindible, se denomina:",
    options: [
      "Liderazgo laissez faire",
      "Liderazgo democrático",
      "Liderazgo paternalista",
      "Liderazgo visionario",
    ],
    correct: 0,
    explain: {
      detail:
        "El liderazgo laissez faire se caracteriza por una mínima intervención del líder y una gran autonomía del equipo.",
      whyCorrect:
        "La opción A es correcta porque el liderazgo laissez faire deja libertad a los empleados y controla lo mínimo.",
      whyWrong: {
        1: "El democrático fomenta participación, pero mantiene dirección activa.",
        2: "El paternalista protege y decide por el equipo.",
        3: "El visionario moviliza al equipo hacia una meta clara."
      }
    }
  },
  {
    q: "El estilo de liderazgo en el que el líder tiene claro dónde quiere ir e intenta que el equipo visualice su meta y la comparta, se denomina:",
    options: [
      "Liderazgo laissez faire",
      "Liderazgo democrático",
      "Liderazgo paternalista",
      "Liderazgo visionario",
    ],
    correct: 3,
    explain: {
      detail:
        "El liderazgo visionario se basa en transmitir una meta clara e inspirar al equipo para alcanzarla.",
      whyCorrect:
        "La opción D es correcta porque el líder visionario consigue que el equipo visualice y comparta la meta.",
      whyWrong: {
        0: "El laissez faire se caracteriza por mínima intervención.",
        1: "El democrático se basa en participación y diálogo.",
        2: "El paternalista protege al equipo y toma decisiones por él."
      }
    }
  },
  {
    q: "El enfoque de liderazgo que defiende que la efectividad del liderazgo depende de la naturaleza de la circunstancia en la que se ejerza, lo conocemos como:",
    options: [
      "Enfoque situacional",
      "Enfoque funcional",
      "Enfoque empírico",
      "Ninguna es correcta",
    ],
    correct: 0,
    explain: {
      detail:
        "El liderazgo situacional plantea que no existe un único estilo válido, sino que debe adaptarse a la situación y madurez del equipo.",
      whyCorrect:
        "La opción A es correcta porque el enfoque situacional depende del contexto en el que se ejerce el liderazgo.",
      whyWrong: {
        1: "El enfoque funcional no es el concepto preguntado.",
        2: "El enfoque empírico no corresponde a esta teoría.",
        3: "Sí hay una opción correcta."
      }
    }
  },
  {
    q: "Según la teoría de Herzberg, las variables que por sí mismas no producen motivación, pero cuya ausencia sí produce insatisfacción, se conocen como:",
    options: [
      "Factores motivacionales",
      "Factores higiénicos",
      "Factores laborales",
      "Factores de afiliación",
    ],
    correct: 1,
    explain: {
      detail:
        "Herzberg distingue entre factores higiénicos, que evitan insatisfacción, y motivacionales, que generan compromiso.",
      whyCorrect:
        "La opción B es correcta porque los factores higiénicos no motivan por sí mismos, pero su ausencia provoca insatisfacción.",
      whyWrong: {
        0: "Los factores motivacionales sí generan motivación y compromiso.",
        2: "Factores laborales es demasiado genérico.",
        3: "La afiliación pertenece a la teoría de McClelland."
      }
    }
  },
  {
    q: "La teoría que describe el estilo de liderazgo mediante la identificación de cinco niveles que mezclan diferentes rangos de preocupación por las personas y las tareas, se denomina:",
    options: [
      "Teoría del gran hombre o de rasgos",
      "Teoría X e Y de McGregor",
      "Teoría de Boyatzis y McKee",
      "Teoría de la malla gerencial de Blake y Mouton",
    ],
    correct: 3,
    explain: {
      detail:
        "La malla gerencial clasifica estilos de liderazgo según el interés por las personas y por las tareas.",
      whyCorrect:
        "La opción D es correcta porque Blake y Mouton desarrollaron la malla gerencial.",
      whyWrong: {
        0: "La teoría del gran hombre se centra en rasgos personales del líder.",
        1: "McGregor distingue entre teoría X y teoría Y sobre la visión del trabajador.",
        2: "Boyatzis y McKee se relacionan más con liderazgo emocional."
      }
    }
  },
  {
    q: "Este autor diseñó una pirámide de necesidades en la que las necesidades expuestas en la base eran de supervivencia y, a medida que se ascendía, se desarrollaban nociones relativas al crecimiento personal y social del individuo:",
    options: [
      "Abraham Maslow",
      "McClelland",
      "Herzberg",
      "McGregor",
    ],
    correct: 0,
    explain: {
      detail:
        "La pirámide de Maslow ordena las necesidades humanas desde las básicas hasta la autorrealización.",
      whyCorrect:
        "La opción A es correcta porque Abraham Maslow diseñó la pirámide de necesidades.",
      whyWrong: {
        1: "McClelland propuso necesidades de logro, afiliación y poder.",
        2: "Herzberg formuló la teoría de factores higiénicos y motivacionales.",
        3: "McGregor desarrolló la teoría X e Y."
      }
    }
  },
  {
    q: "Las habilidades interpersonales, también conocidas como habilidades ________, se refieren a la capacidad de una persona para interactuar de manera efectiva con los demás:",
    options: [
      "Duras",
      "Ásperas",
      "Blandas",
      "Opacas",
    ],
    correct: 2,
    explain: {
      detail:
        "Las habilidades interpersonales son capacidades sociales y comunicativas necesarias para relacionarse eficazmente.",
      whyCorrect:
        "La opción C es correcta porque también se conocen como habilidades blandas.",
      whyWrong: {
        0: "Las habilidades duras son técnicas o específicas.",
        1: "Ásperas no es un término técnico.",
        3: "Opacas no es un término relacionado."
      }
    }
  },
  {
    q: "La capacidad de comprender y compartir los sentimientos de otros se denomina:",
    options: [
      "Comunicación efectiva",
      "Empatía",
      "Resolución de conflictos",
      "Adaptabilidad",
    ],
    correct: 1,
    explain: {
      detail:
        "La empatía permite comprender cómo se sienten otras personas y actuar con sensibilidad.",
      whyCorrect:
        "La opción B es correcta porque la empatía es la capacidad de comprender y compartir sentimientos ajenos.",
      whyWrong: {
        0: "La comunicación efectiva consiste en transmitir y escuchar correctamente.",
        2: "La resolución de conflictos busca gestionar desacuerdos.",
        3: "La adaptabilidad es ajustarse a cambios."
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
      q: "¿Cuál de las siguientes es una tendencia actual relativa a la comunicación interna?",
      options: ["Motor de digitalización.", "Employer Branding.", "Apps internas.", "Todas son correctas."],
      correct: 3,
      explain: "Las tendencias actuales incluyen digitalización, employer branding y apps internas, por lo que todas son correctas."
    },
    {
      q: "¿Cuál de las siguientes no es una de las 5 fuerzas de Porter?",
      options: ["El flujo del proceso de compraventa.", "La amenaza de productos sustitutivos.", "El poder de negociación de los proveedores.", "Las barreras de entrada."],
      correct: 0,
      explain: "Las 5 fuerzas no incluyen el flujo de compraventa."
    },
    {
      q: "¿Cuál de las siguientes no sería una estrategia del plan de marketing en función del producto?",
      options: ["Estrategia de penetración.", "Estrategia de desarrollo de producto.", "Estrategia de enraizamiento.", "Estrategia de diversificación."],
      correct: 2,
      explain: "La estrategia de enraizamiento no existe como estrategia de marketing."
    },
    {
      q: "¿Cuál es el objetivo principal del marketing relacional?",
      options: ["Incrementar las ventas a corto plazo.", "Mantener una relación significativa a largo plazo con el público objetivo.", "Realizar promociones y descuentos.", "Atraer nuevos clientes a través de la publicidad masiva."],
      correct: 1,
      explain: "Busca relaciones duraderas con clientes."
    },
    {
      q: "¿Cuál es la definición más completa de marketing?",
      options: [
        "El proceso de ventas de bienes y servicios.",
        "El estudio de la competencia y el comportamiento del consumidor.",
        "La actividad de publicidad y análisis de mercado.",
        "La planificación y ejecución de la concepción del producto, fijación de precios, promoción y distribución de ideas, bienes y servicios para crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales."
      ],
      correct: 3,
      explain: "Es la definición completa del marketing."
    },
    {
      q: "¿Cuál es la principal diferencia entre marketing estratégico y marketing operativo?",
      options: [
        "El marketing estratégico se centra en el corto plazo.",
        "El marketing estratégico ejecuta acciones.",
        "El marketing estratégico se ocupa de la publicidad.",
        "El marketing estratégico analiza necesidades y el operativo ejecuta acciones."
      ],
      correct: 3,
      explain: "El estratégico analiza y el operativo ejecuta."
    },
    {
      q: "¿Cuál es la principal herramienta del marketing estratégico?",
      options: ["Análisis DAFO.", "Plan de marketing.", "Investigación de mercado.", "Estrategia de precios."],
      correct: 1,
      explain: "El plan de marketing es la base."
    },
    {
      q: "¿En qué se basa la decisión que se toma para cubrir necesidades?",
      options: ["En un impulso.", "En una comparativa.", "En una encuesta.", "En una imitación."],
      correct: 1,
      explain: "Se basa en comparar costes y beneficios."
    },
    {
      q: "¿Qué análisis no forma parte del análisis de la situación?",
      options: ["Demanda.", "Competencia.", "Producto.", "Interno."],
      correct: 2,
      explain: "El producto se analiza después."
    },
    {
      q: "¿Qué herramienta permite analizar debilidades, amenazas, fortalezas y oportunidades?",
      options: ["Análisis PEST.", "Análisis DAFO.", "Investigación de mercado.", "Matriz de crecimiento."],
      correct: 1,
      explain: "El DAFO evalúa factores internos y externos."
    },

    {
      q: "A las personas que influyen sin autoridad se les denomina:",
      options: ["Líderes.", "Directores.", "Jefes.", "Mandos."],
      correct: 0,
      explain: "Los líderes influyen sin jerarquía."
    },
    {
      q: "Habilidades del responsable de RRHH:",
      options: ["Motivar.", "Comunicar.", "Decidir.", "Todas son correctas."],
      correct: 3,
      explain: "Debe tener todas esas habilidades."
    },
    {
      q: "Estrategia de expansión de mercado:",
      options: ["Un producto varios segmentos.", "Un segmento un producto.", "Varios productos un segmento.", "Adaptación total."],
      correct: 0,
      explain: "Un producto para varios segmentos."
    },
    {
      q: "Teoría del gran hombre:",
      options: ["Rasgos innatos.", "Depende subordinados.", "Un líder único.", "Malla gerencial."],
      correct: 0,
      explain: "El liderazgo es innato."
    },
    {
      q: "Documento con orden de pago:",
      options: ["Cheque.", "Letra de cambio.", "Recibo.", "Transferencia."],
      correct: 1,
      explain: "La letra de cambio es una orden de pago."
    },
    {
      q: "El Estado obtiene ingresos de:",
      options: ["Donaciones.", "Expropiación.", "Contractuales.", "Todas son correctas."],
      correct: 3,
      explain: "Todas son fuentes válidas."
    },
    {
      q: "Liderazgo con mínima intervención:",
      options: ["Laissez faire.", "Democrático.", "Paternalista.", "Visionario."],
      correct: 0,
      explain: "Da libertad total al equipo."
    },
    {
      q: "Liderazgo con visión clara:",
      options: ["Laissez faire.", "Democrático.", "Paternalista.", "Visionario."],
      correct: 3,
      explain: "El visionario guía al equipo."
    },
    {
      q: "Factor que impulsa comportamiento:",
      options: ["Motivación.", "Pirámide.", "Autoestima.", "Higiénico."],
      correct: 0,
      explain: "Es la motivación."
    },
    {
      q: "Impuesto sobre consumo:",
      options: ["IVA.", "IRPF.", "IS.", "Declaración censal."],
      correct: 0,
      explain: "El IVA grava el consumo."
    },

    {
      q: "El Impuesto sobre Sociedades:",
      options: ["Indirecto.", "Rentas físicas.", "Personal.", "Ninguna."],
      correct: 2,
      explain: "Es de naturaleza personal."
    },
    {
      q: "El presupuesto familiar incluye:",
      options: ["Fijos.", "Corrientes.", "Ocasionales.", "Todas son correctas."],
      correct: 3,
      explain: "Incluye todos los gastos."
    },
    {
      q: "Proceso de actividad empresarial:",
      options: ["Ciclo de explotación.", "Sistema de mercado.", "Aprovisionamiento.", "Marketing relacional."],
      correct: 0,
      explain: "Define la actividad económica."
    },
    {
      q: "Objetivos análisis puestos:",
      options: ["Selección.", "Formación.", "Costes.", "Todas son correctas."],
      correct: 3,
      explain: "Sirve para todo eso."
    },
    {
      q: "Teoría ERG:",
      options: ["McGregor.", "Tres esquinas.", "ERG.", "Adams."],
      correct: 2,
      explain: "Clasifica necesidades en 3."
    },
    {
      q: "Agencia Tributaria:",
      options: ["Entidad pública.", "Aplica sistema.", "Creada 1992.", "Todas son correctas."],
      correct: 3,
      explain: "Todas son correctas."
    },
    {
      q: "La demanda depende de:",
      options: ["Consumidor.", "Precio.", "Renta.", "Todas son correctas."],
      correct: 3,
      explain: "Depende de múltiples factores."
    },
    {
      q: "Organización formal:",
      options: ["Estructura oficial.", "Relaciones personales.", "Plantilla completa.", "Digital."],
      correct: 0,
      explain: "La define la dirección."
    },
    {
      q: "Organización informal:",
      options: ["Oficial.", "Relaciones personales.", "Plantilla.", "Digital."],
      correct: 1,
      explain: "Surge de relaciones espontáneas."
    },
    {
      q: "Planificación RRHH:",
      options: ["Expansión.", "Aumento y reducción.", "Reciclaje.", "No existe."],
      correct: 1,
      explain: "Se basa en ajustar plantilla."
    },

    {
      q: "TAE incluye:",
      options: ["Comisiones.", "Interés + gastos.", "Amortización.", "Tipos."],
      correct: 1,
      explain: "Incluye interés, comisiones y gastos."
    },
    {
      q: "Normas comunicación empresa:",
      options: ["Plan RRHH.", "Política de comunicación.", "Vertical.", "Flujo."],
      correct: 1,
      explain: "Es política de comunicación."
    },
    {
      q: "Prestaciones obligatorias:",
      options: ["Tesorerías.", "Recibos.", "Tributos.", "Letras."],
      correct: 2,
      explain: "Son tributos."
    },
    {
      q: "Grupos profesionales:",
      options: ["Características.", "Titulación.", "Aptitudes.", "Todas son correctas."],
      correct: 3,
      explain: "Se definen por todos."
    },
    {
      q: "Indicadores balance social:",
      options: ["Variables.", "Eficiencia.", "Inputs.", "Locales."],
      correct: 1,
      explain: "Se mide eficiencia, eficacia e impacto."
    },
    {
      q: "Préstamos personales:",
      options: ["15 años.", "Interés menor.", "Consumo.", "Todas."],
      correct: 2,
      explain: "Son préstamos al consumo."
    },
    {
      q: "Enfoques RRHH:",
      options: ["Político.", "Personal.", "Administrativo.", "Actitudinal."],
      correct: 2,
      explain: "Administrativo, costes y gestión."
    },
    {
      q: "Planificación RRHH implica:",
      options: ["Aumentos.", "Objetivos.", "Desviaciones.", "Todas."],
      correct: 1,
      explain: "Se basa en objetivos."
    },
    {
      q: "Primer paso presupuesto:",
      options: ["Identificar ingresos/gastos.", "Asesor.", "Ahorro.", "Excel."],
      correct: 0,
      explain: "Siempre identificar ingresos y gastos."
    },
    {
      q: "Renunciar consumo actual:",
      options: ["Consumo.", "Financiación.", "Planificación.", "Ahorro."],
      correct: 3,
      explain: "Eso es el ahorro."
    }
  ]
},


  
    /* ================== ANATOMÍA ================== */

  {
  id: "an-u1",
  title: "EN · U1 · Living in the Present (English Basics)",
  summary: "Informe Informativo: Viviendo el Presente - Fundamentos del Inglés Profesional\n\nResumen Ejecutivo\n\nEsta unidad introduce las bases del inglés profesional enfocadas en el presente. Se centra en el uso correcto de estructuras gramaticales esenciales y vocabulario clave relacionado con el cuerpo humano y el ámbito sanitario.\n\nPuntos clave:\n\n• Uso del verbo 'to be' (am / is / are).\n• Diferencias entre 'have' y 'have got'.\n• Present Simple → hábitos, rutinas y hechos generales.\n• Present Continuous → acciones en progreso y planes futuros.\n• Uso correcto de adverbios de frecuencia.\n• Vocabulario de sistemas del cuerpo humano.\n• Expresiones comunes e idioms en inglés sanitario.\n\nReglas importantes:\n• Tercera persona → +s / +es / -ies.\n• Adverbios de frecuencia → antes del verbo principal.\n• Después de 'to be' → adverbio.\n\nEjemplo:\nShe always goes to the gym.\n\nObjetivo:\nDominar el uso del presente en inglés en contextos reales y profesionales.",
  
  questions: [
    {
      q: "Choose the correct sentence in the Present Simple.",
      options: [
        "She go always to the gym.",
        "She goes always to the gym.",
        "She always goes to the gym.",
        "She always go to the gym."
      ],
      correct: 2,
      explain:
        "En Present Simple, la tercera persona añade -s y el adverbio va antes del verbo principal."
    },
    {
      q: "Choose the correct form of 'to be'.",
      options: [
        "She be a doctor.",
        "She is a doctor.",
        "She are a doctor.",
        "She am a doctor."
      ],
      correct: 1,
      explain:
        "El verbo 'to be' en tercera persona singular es 'is'."
    },
    {
      q: "Choose the correct answer.",
      options: [
        "I have not got a pet.",
        "I haven't got a pet.",
        "I don't have a pet.",
        "All the above are correct."
      ],
      correct: 3,
      explain:
        "Todas las formas son correctas para expresar posesión."
    },
    {
      q: "Where is the adverb of frequency correctly placed?",
      options: [
        "They never are late.",
        "They are late never.",
        "They are never late.",
        "They late are never."
      ],
      correct: 2,
      explain:
        "Después del verbo 'to be', el adverbio va en medio."
    },
    {
      q: "Which gerund is correct?",
      options: [
        "Crying",
        "Runing",
        "Makeing",
        "Swiming"
      ],
      correct: 0,
      explain:
        "Crying es la única forma correcta."
    },
    {
      q: "Which is NOT a use of Present Continuous?",
      options: [
        "Actions happening now",
        "Temporary actions",
        "Future plans",
        "Habits and routines"
      ],
      correct: 3,
      explain:
        "Los hábitos se expresan con Present Simple."
    },
    {
      q: "Which sentence uses a stative verb correctly?",
      options: [
        "She is knowing the answer",
        "I remember your name",
        "They are believing in ghosts",
        "I'm wanting pizza"
      ],
      correct: 1,
      explain:
        "Los verbos de estado no se usan en continuo."
    },
    {
      q: "Which sentence is Present Continuous?",
      options: [
        "He studies a lot.",
        "He study a lot.",
        "He is studying a lot.",
        "He studying a lot."
      ],
      correct: 2,
      explain:
        "Se forma con 'to be + verbo + ing'."
    },
    {
      q: "Which statement about 'have got' is correct?",
      options: [
        "Used in British English",
        "Only present tense",
        "Other tenses use 'have'",
        "All are correct"
      ],
      correct: 3,
      explain:
        "Todas las afirmaciones son correctas."
    },
    {
      q: "Which sentence is correct in third person?",
      options: [
        "She watch TV",
        "She watches TV",
        "She watchs TV",
        "She watching TV"
      ],
      correct: 1,
      explain:
        "Los verbos terminados en -ch añaden -es."
    }
  ],
},

  {
  id: "an-u2",
  title: "EN · U2 · What do you like? (Preferences & Communication)",
  summary: "Guía de Referencia: Gramática y Expresiones del Inglés Profesional (Unidad 2)\n\nResumen Ejecutivo\n\nEsta unidad se centra en la expresión de gustos, la existencia de objetos, la formulación de preguntas y la construcción de frases más completas.\n\nPuntos clave:\n\n• Expresar gustos y preferencias (like, love, hate, can't stand).\n• Uso de gerundios (-ing).\n• There is / There are.\n• Uso correcto de some, any y no.\n• Preguntas con WH-.\n• Pronombres posesivos.\n• Preposiciones de tiempo.\n• Uso de conectores.\n\nEjemplo:\nI love eating pizza.\nThere are two cats in the house.\n\nObjetivo:\nAprender a comunicarse con mayor fluidez usando estructuras más complejas.",
  
  questions: [
    {
      q: "Choose the correct sentence to express your preference:",
      options: [
        "I like pizza",
        "I liking pizza",
        "I am like pizza",
        "I likes pizza"
      ],
      correct: 0,
      explain:
        "El verbo 'like' en presente simple con 'I' no lleva -s."
    },
    {
      q: "Choose the correct sentence with some/any/no:",
      options: [
        "There isn't no milk in the fridge.",
        "There is no milk in the fridge.",
        "There is any food left.",
        "I don't have some pencils."
      ],
      correct: 1,
      explain:
        "No se puede usar doble negación. 'No milk' es correcto."
    },
    {
      q: "Choose the correct wh-question:",
      options: [
        "Where are you going?",
        "Where you are going?",
        "Are you where going?",
        "Are where going you?"
      ],
      correct: 0,
      explain:
        "La estructura correcta es WH + auxiliar + sujeto + verbo."
    },
    {
      q: "Choose the correct order using connectors:",
      options: [
        "First, we went to the store. Then, we bought food. However, we forgot milk.",
        "Then, we forgot milk. First, we went to the store.",
        "However, we went first. Then, we bought food.",
        "Then, we went first. However, we forgot milk."
      ],
      correct: 0,
      explain:
        "First → Then → However es el orden lógico correcto."
    },
    {
      q: "Complete the sentence: I have a meeting ____ Monday morning.",
      options: ["In", "At", "On", "By"],
      correct: 2,
      explain:
        "Se usa 'on' para días concretos."
    },
    {
      q: "Find the CORRECT sentence:",
      options: [
        "There is some apples on the table.",
        "Are there any apples on the table?",
        "There isn´t some milk in the fridge",
        "Is there some oranges in the box?"
      ],
      correct: 1,
      explain:
        "'Any' se usa en preguntas y 'apples' es plural → 'are'."
    },
    {
      q: "Find the INCORRECT question:",
      options: [
        "Why do you study in the library?",
        "When she takes her last exam?",
        "Who is your brother?",
        "Where does he live?"
      ],
      correct: 1,
      explain:
        "Falta el auxiliar 'does': debería ser 'When does she take...?'"
    },
    {
      q: "What is the correct question for quantity?",
      options: [
        "How apples do you buy?",
        "How much apples do you buy?",
        "How many apples do you buy?",
        "How often apples do you buy?"
      ],
      correct: 2,
      explain:
        "'How many' se usa con sustantivos contables."
    },
    {
      q: "What connector adds information?",
      options: [
        "Although",
        "Besides",
        "Instead",
        "Therefore"
      ],
      correct: 1,
      explain:
        "'Besides' se usa para añadir información."
    },
    {
      q: "Which is a possessive pronoun?",
      options: [
        "Me",
        "She",
        "Their",
        "Theirs"
      ],
      correct: 3,
      explain:
        "'Theirs' es pronombre posesivo (sustituye al sustantivo)."
    }
  ],
},
{
  id: "an-u3",
  title: "EN · U3 · Exploring the Past",
  summary: "Unidad 3: Explorando el Pasado\n\nEsta unidad se centra en el uso de los tiempos verbales en pasado y su correcta aplicación en contextos reales.\n\nContenidos clave:\n\n• Past Simple → acciones terminadas en el pasado.\nEj: I worked yesterday.\n\n• Verbos irregulares → go → went, see → saw.\n\n• To be en pasado → was / were.\nEj: I was tired.\n\n• Used to → hábitos del pasado.\nEj: I used to play football.\n\n• Past Continuous → acciones en progreso en el pasado.\nEj: I was studying.\n\n• Present Perfect → acciones con conexión al presente.\nEj: She has visited London.\n\nDiferencia clave:\nPast Simple → tiempo definido.\nPresent Perfect → tiempo indefinido.\n\nTambién incluye:\n• Profesiones sanitarias\n• Colocaciones médicas\n• Preposiciones de lugar\n• Question tags\n\nObjetivo:\nDominar el pasado en inglés para situaciones reales y profesionales.",
  
  questions: [
    {
      q: "Choose the correct preposition: The cat is ___ the sofa.",
      options: ["On", "Between", "At", "Next"],
      correct: 0,
      explain:
        "'On' se usa para superficies."
    },
    {
      q: "Choose the correct question tag: Let's go, ___?",
      options: ["did we", "shall we", "don't we", "haven't we"],
      correct: 1,
      explain:
        "Después de 'Let's' siempre usamos 'shall we?'."
    },
    {
      q: "Choose the correct question tag: She didn't call you, ___?",
      options: ["did she", "will she", "does she", "has she"],
      correct: 0,
      explain:
        "Oración negativa → tag positivo."
    },
    {
      q: "Choose the correct Past Simple sentence:",
      options: [
        "We watch a movie yesterday.",
        "She study last night.",
        "They played football last week.",
        "He stops at the shop."
      ],
      correct: 2,
      explain:
        "'Played' es la forma correcta en pasado."
    },
    {
      q: "Choose the correct Past Simple sentence:",
      options: [
        "She buyed a dress.",
        "We ate lunch yesterday.",
        "He has seen that film.",
        "They gived me a gift."
      ],
      correct: 1,
      explain:
        "'Ate' es pasado correcto de 'eat'."
    },
    {
      q: "Choose the correct To Be past sentence:",
      options: [
        "They wasn't at home.",
        "We was at the cinema.",
        "I was late.",
        "She were tired."
      ],
      correct: 2,
      explain:
        "'I was' es correcto."
    },
    {
      q: "Find the incorrect Past Continuous sentence:",
      options: [
        "I was walking home.",
        "He was cooking.",
        "We were playing.",
        "She were reading."
      ],
      correct: 3,
      explain:
        "Debe ser 'She was reading'."
    },
    {
      q: "Complete: She ___ London several times.",
      options: [
        "have visit",
        "has visited",
        "have visited",
        "has visit"
      ],
      correct: 1,
      explain:
        "Present Perfect → has + participio."
    },
    {
      q: "Complete: She ___ Lilly yesterday, but she ___ her today.",
      options: [
        "seed / haven't seen",
        "has seen / saw",
        "saw / hasn't seen",
        "sees / hasn't seen"
      ],
      correct: 2,
      explain:
        "Past Simple + Present Perfect."
    },
    {
      q: "Complete: When we were kids, we ___ cartoons.",
      options: [
        "used to watch",
        "use to watched",
        "was used to watch",
        "using to watch"
      ],
      correct: 0,
      explain:
        "'Used to' expresa hábitos del pasado."
    }
  ],
},

{
  id: "an-u4",
  title: "EN · U4 · What’s Next?",
  summary: "Unidad 4: What’s Next? · Futuro, comparativos e instrucciones\n\nEsta unidad se centra en comparar, describir movimiento, expresar propósito, dar instrucciones y hablar del futuro.\n\nContenidos clave:\n\n• Comparatives → para comparar dos elementos.\nEj: This hotel is more expensive.\n\n• Superlatives → para destacar algo entre tres o más elementos.\nEj: That was the funniest movie.\n\n• Adjetivos irregulares:\nGood → better → the best.\nBad → worse → the worst.\nFar → farther/further → the farthest/furthest.\n\n• Preposiciones de movimiento:\nAcross, through, into, over, along, past, from...to, back.\n\n• Expresión de propósito:\nTo + infinitive → objetivo.\nFor + -ing → función.\nFor + noun → motivo.\n\n• Imperative:\nSe usa para órdenes, instrucciones, consejos o advertencias.\nEj: Stop talking and listen carefully.\n\n• Future Simple con will:\nPredicciones, promesas y decisiones espontáneas.\nEj: She will call you.\n\n• Be going to:\nPlanes o intenciones decididas.\n\n• Present Continuous para futuro:\nPlanes confirmados o citas ya organizadas.\n\n• Present Simple para horarios:\nTransportes, programas y eventos oficiales.\nEj: The train leaves at 8 AM.\n\n• Future Perfect:\nAcciones que estarán terminadas antes de un momento futuro.\nEj: I will have finished my homework before 6 PM.\n\nObjetivo:\nUsar correctamente estructuras de futuro, comparaciones, instrucciones y expresiones de propósito en inglés profesional.",
  questions: [
    {
      q: "Choose the correct form of the future simple: She _________ you as soon as she arrives.",
      options: [
        "will called",
        "is calling",
        "calls",
        "will call"
      ],
      correct: 3,
      explain:
        "Future Simple se forma con 'will + verbo base'. Por eso la forma correcta es 'will call'."
    },
    {
      q: "Choose the correct imperative sentence:",
      options: [
        "You must to turn left.",
        "Stop talking and listen carefully.",
        "You turning left now.",
        "Turns left quickly!"
      ],
      correct: 1,
      explain:
        "El imperativo usa el verbo base sin sujeto: 'Stop talking and listen carefully.'"
    },
    {
      q: "Choose the correct sentence using the future perfect tense:",
      options: [
        "I will have finished my homework before 6 PM.",
        "I finish my homework before 6 PM.",
        "I will finish my homework before 6 PM.",
        "I am finishing my homework before 6 PM."
      ],
      correct: 0,
      explain:
        "Future Perfect se forma con 'will have + participio pasado'."
    },
    {
      q: "Choose the correct superlative adjective: That was ___________ movie I have ever seen!",
      options: [
        "Funnier",
        "the most funny",
        "the funniest",
        "funnier than"
      ],
      correct: 2,
      explain:
        "Funny termina en consonante + y, por eso el superlativo es 'the funniest'."
    },
    {
      q: "Complete the sentence: This hotel is __________ than the one we stayed in last year.",
      options: [
        "more expensive",
        "most expensive",
        "expensiver",
        "expensive"
      ],
      correct: 0,
      explain:
        "Con adjetivos largos usamos 'more + adjective' para el comparativo."
    },
    {
      q: "Fill in the gap to express purpose: This tool is useful ________ cutting paper.",
      options: [
        "In",
        "to",
        "for",
        "by"
      ],
      correct: 2,
      explain:
        "Usamos 'for + gerund' para expresar la función de un objeto."
    },
    {
      q: "Pick the correct preposition of movement: She walked _________ the bridge to get to the other side.",
      options: [
        "Off",
        "into",
        "through",
        "across"
      ],
      correct: 3,
      explain:
        "'Across' significa cruzar de un lado a otro."
    },
    {
      q: "Select the correct sentence using the present simple for scheduled events:",
      options: [
        "The train leaves at 8 AM.",
        "The train is leaving at 8 AM.",
        "The train will leave at 8 AM.",
        "The train going to leave at 8 AM"
      ],
      correct: 0,
      explain:
        "Para horarios oficiales usamos Present Simple."
    },
    {
      q: "Use the correct verb form: I like _____________ my bills online.",
      options: [
        "paying",
        "payed",
        "pay",
        "pays"
      ],
      correct: 0,
      explain:
        "Después de 'like' puede usarse gerundio. La forma correcta es 'paying'."
    },
    {
      q: "Which of these is an irregular adjective?",
      options: [
        "Taller",
        "better",
        "happier",
        "slower"
      ],
      correct: 1,
      explain:
        "'Better' es el comparativo irregular de 'good'."
    }
  ],
},
{
  id: "an-u5",
  title: "EN · U5 · What would you do if...?",
  summary: "Unidad 5: What would you do if...? · Condicionales y vocabulario sanitario\n\nEsta unidad combina gramática avanzada con inglés profesional aplicado al entorno sanitario.\n\nContenidos clave:\n\n• Adjetivos en -ed / -ing:\n- -ed → cómo te sientes → I am bored\n- -ing → causa del sentimiento → The movie is boring\n\n• Cuantificadores:\n- Too → exceso → too heavy\n- Too much → incontable\n- Too many → contable plural\n- Enough → suficiente\n\n• Demostrativos:\n- This / These → cerca\n- That / Those → lejos\n\n• Relative clauses:\n- Who → personas\n- Which → cosas\n- That → personas/cosas\n- Whose → posesión\n- When → tiempo\n- Where → lugar\n\n• Condicionales:\n0 → verdades generales → If it rains, the ground gets wet\n1 → futuro real → If you study, you will pass\n2 → hipotético presente → If I had money, I would travel\n3 → pasado imposible → If I had studied, I would have passed\n\n• Vocabulario sanitario:\n- Admission / Discharge\n- Surgery / ICU\n- Consultation / Check-up\n- Vaccination / Blood draw\n\n• Colocaciones médicas:\n- Make a diagnosis\n- Prescribe medication\n- Take vital signs\n- Perform surgery\n\n• Idioms:\n- In good hands\n- Under observation\n- Rule out\n- Bite the bullet\n\nObjetivo:\nDominar condicionales y estructuras avanzadas aplicadas a contextos médicos y profesionales.",
  questions: [
    {
      q: "Choose the correct relative pronoun:",
      options: [
        "She has a friend which works in a hospital.",
        "She has a friend who works in a hospital.",
        "She has a friend where works in a hospital.",
        "She has a friend whose works in a hospital."
      ],
      correct: 1,
      explain:
        "'Who' se usa para personas. Por eso la opción correcta es 'who works'."
    },
    {
      q: "Choose the correct Second conditional sentence:",
      options: [
        "If I have a million dollars, I buy a big house.",
        "If I had a million dollars, I would buy a big house.",
        "If I has a million dollars, I bought a big house.",
        "If I had a million dollars, I buy a big house."
      ],
      correct: 1,
      explain:
        "Second conditional: If + past simple + would + verbo base."
    },
    {
      q: "Choose the right answer below:",
      options: [
        "I can't buy this jacket because I don't have much money.",
        "I can't buy this jacket because I don't have too many money.",
        "I can't buy this jacket because I don't have much very money.",
        "I can't buy this jacket because I don't have too money."
      ],
      correct: 0,
      explain:
        "'Money' es incontable → usamos 'much'."
    },
    {
      q: "Complete the sentence with the correct demonstrative:",
      options: [
        "This book on the table is mine.",
        "These book on the table is mine.",
        "Those book on the table is mine.",
        "Them book on the table is mine."
      ],
      correct: 0,
      explain:
        "'Book' es singular → usamos 'this'."
    },
    {
      q: "Find below the right relative pronoun:",
      options: [
        "I will never forget the day who I met my best friend.",
        "I will never forget the day which I met my best friend.",
        "I will never forget the day when I met my best friend.",
        "I will never forget the day where I met my best friend"
      ],
      correct: 2,
      explain:
        "'When' se usa para tiempo (día, momento, etc.)."
    },
    {
      q: "Find the correct sentence:",
      options: [
        "The dress is not big enough. It is enough small for me.",
        "The dress is not big enough. It is too small for me.",
        "The dress is not big enough. It is too many for me.",
        "The dress is not big enough. It is very for me."
      ],
      correct: 1,
      explain:
        "'Too + adjective' indica exceso → too small."
    },
    {
      q: "What sentence follows the Third conditional structure?",
      options: [
        "If we leave earlier, we wouldn't have missed the flight.",
        "If we had left earlier, we wouldn't have missed the flight.",
        "If we left earlier, we wouldn't have missed the flight.",
        "If we leaving earlier, we wouldn't have missed the flight."
      ],
      correct: 1,
      explain:
        "Third conditional: If + past perfect + would have + participio."
    },
    {
      q: "Which is the right quantifier?",
      options: [
        "There are too many people in the room. We need more space.",
        "There are too much people in the room. We need more space.",
        "There are enough people in the room. We need more space.",
        "There are very people in the room. We need more space."
      ],
      correct: 0,
      explain:
        "'People' es contable → usamos 'too many'."
    },
    {
      q: "Which sentence is correct?",
      options: [
        "I was very frightened after watching that horror film.",
        "I was very frightening after watching that horror film.",
        "I was very frighten after watching that horror film.",
        "I was very frightful after watching that horror film."
      ],
      correct: 0,
      explain:
        "'Frightened' describe cómo te sientes (-ed)."
    },
    {
      q: "Which sentence is correct?",
      options: [
        "My grandparents, who house is in the countryside, love gardening.",
        "My grandparents, which house is in the countryside, love gardening.",
        "My grandparents, whose house is in the countryside, love gardening.",
        "My grandparents, that house is in the countryside, love gardening."
      ],
      correct: 2,
      explain:
        "'Whose' indica posesión → whose house."
    }
  ],
},

{
  id: "an-u6",
  title: "EN · U6 · Work Smarter",
  summary: "Unidad 6: Work Smarter · Gramática avanzada y vocabulario sanitario\n\nEsta unidad se centra en mejorar la precisión y eficiencia comunicativa en contextos profesionales, especialmente en el ámbito de la salud.\n\nContenidos clave:\n\n• Cuantificadores:\n- Many / Few → contables\n- Much / Little → incontables\n- Some / Any → uso general\n\n• Verbos modales:\n- Can / Could → habilidad\n- May / Might → posibilidad\n- Must / Have to → obligación\n- Should → consejo\n\n• Pronombres indefinidos:\n- Someone, Nobody, Everything, Anywhere…\n\n• Genitivo sajón:\n- John's phone\n- Parents' house\n\n• Voz pasiva:\n- Estructura → be + past participle\n- Ej → The test was done by the doctor\n\n• Reported speech:\n- Cambios de tiempo (backshift)\n- Ej → \"I work\" → He said he worked\n\n• Vocabulario médico:\n- Blood test, MRI, CT scan, ECG\n- Diagnosis, prognosis, biopsy\n\n• Colocaciones:\n- Run a test\n- Confirm a diagnosis\n- Rule out a disease\n\n• Idioms:\n- Catch it early\n- Second opinion\n- Raise a red flag\n\nObjetivo:\nDominar estructuras avanzadas para comunicar información médica de forma clara y profesional.",
  questions: [
    {
      q: "Choose the correct passive form of the active sentence: \"The manager wrote the email\".",
      options: [
        "The email writes the manager.",
        "The email was written by the manager.",
        "The email is wrote by the manager.",
        "The email was writing by the manager."
      ],
      correct: 1,
      explain:
        "Pasiva en pasado → was/were + participio → was written."
    },
    {
      q: "Choose the correct reported speech for the sentence: Sarah said: \"I called Mark yesterday\".",
      options: [
        "Sarah said that she had called Mark the previous day.",
        "Sarah said that she calls Mark yesterday.",
        "Sarah said that Mark called her yesterday.",
        "Sarah said that she was calling Mark the previous day."
      ],
      correct: 0,
      explain:
        "Backshift → Past Simple → Past Perfect + cambio de tiempo → yesterday → the previous day."
    },
    {
      q: "Choose the correct sentence using \"much\":",
      options: [
        "There are much people at the event.",
        "There is much information online.",
        "I have much friends on social media.",
        "Much companies use digital tools."
      ],
      correct: 1,
      explain:
        "'Much' se usa con incontables → information."
    },
    {
      q: "The agent in the passive voice uses the preposition:",
      options: ["by", "for", "to", "All answers are incorrect"],
      correct: 0,
      explain:
        "El agente en pasiva se introduce con 'by'."
    },
    {
      q: "What is a quantifier?",
      options: [
        "A word that describes a noun",
        "A word that indicates quantity without an exact number",
        "A word that replaces a noun",
        "A word that shows possession"
      ],
      correct: 1,
      explain:
        "Un cuantificador indica cantidad sin número exacto."
    },
    {
      q: "Which of the following is an example of the Saxon genitive?",
      options: [
        "Maria's phone",
        "The phone of Maria",
        "The phone's Maria",
        "The Maria phone"
      ],
      correct: 0,
      explain:
        "Genitivo sajón → 's → Maria's."
    },
    {
      q: "Which of these indefinite pronouns refer to people?",
      options: [
        "Something",
        "Anywhere",
        "Nobody",
        "Everything"
      ],
      correct: 2,
      explain:
        "'Nobody' se refiere a personas."
    },
    {
      q: "Which quantifier is used with countable nouns?",
      options: [
        "Much",
        "Little",
        "Many",
        "A little"
      ],
      correct: 2,
      explain:
        "'Many' se usa con contables."
    },
    {
      q: "Which sentence correctly uses a modal verb?",
      options: [
        "She must to finish the report today.",
        "He can speaks three languages.",
        "You should take a break.",
        "They might goes to the party."
      ],
      correct: 2,
      explain:
        "Modal + verbo base → should take."
    },
    {
      q: "Which type of speech uses quotation marks (\"\")?",
      options: [
        "Reported speech",
        "Direct speech",
        "Indirect speech",
        "All answers are correct"
      ],
      correct: 1,
      explain:
        "El direct speech usa comillas."
    }
  ],
},

{
  id: "an-final",
  title: "⭐ EN · Prueba final · 40 preguntas",
  isFinal: true,
  questions: [
    {
      q: "Choose the correct answer:",
      options: [
        "I think it going to be sunny tomorrow.",
        "She is going to visit her cousins next weekend.",
        "Look at those clouds! It goes to rain this afternoon.",
        "We are going to watch a movie last night."
      ],
      correct: 1,
      explain:
        "La estructura correcta con going to es sujeto + am/is/are + going to + verbo base. Por eso la opción correcta es: She is going to visit her cousins next weekend."
    },
    {
      q: "Choose the correct passive form of the sentence: \"They will publish the results next week\".",
      options: [
        "The results are published next week.",
        "The results were published next week.",
        "The results are being published next week.",
        "The results will be published next week."
      ],
      correct: 3,
      explain:
        "La pasiva en futuro se forma con will be + participio pasado. Por eso: The results will be published next week."
    },
    {
      q: "Choose the correct prepositions of place for this sentence: \"The children are playing ________ the garden ________ the big tree.\"",
      options: ["in / under", "on / next to", "at / near to", "on / between"],
      correct: 0,
      explain:
        "Usamos in para lugares cerrados o delimitados como garden y under para indicar que algo está debajo de otra cosa."
    },
    {
      q: "Choose the correct reported version of the following command: \"Close the door\", she said to me.",
      options: [
        "She said to close the door.",
        "She told me to close the door.",
        "She told me to closing the door.",
        "She said to closed the door."
      ],
      correct: 1,
      explain:
        "En reported speech con órdenes usamos told + persona + to + verbo base. Por eso: She told me to close the door."
    },
    {
      q: "Choose the correct Second Conditional sentence.",
      options: [
        "If I have a million dollars, I buy a big house.",
        "If I had a million dollars, I would buy a big house.",
        "If I has a million dollars, I bought a big house.",
        "If I had a million dollars, I buy a big house."
      ],
      correct: 1,
      explain:
        "El segundo condicional se forma con If + past simple, would + verbo base. Expresa una situación hipotética."
    },
    {
      q: "Choose the correct sentence in the Past Simple tense.",
      options: [
        "We watch a great movie yesterday.",
        "She study for the exam last night.",
        "They played football in the park last week.",
        "He stops at the supermarket on his way home."
      ],
      correct: 2,
      explain:
        "Past Simple con verbo regular: play → played. Además, last week marca pasado."
    },
    {
      q: "Choose the correct sentence in the Present Simple:",
      options: [
        "She go always to the gym.",
        "She goes always to the gym.",
        "She always goes to the gym.",
        "She always go to the gym."
      ],
      correct: 2,
      explain:
        "En tercera persona singular se añade -s al verbo: goes. El adverbio de frecuencia normally/always suele ir antes del verbo principal."
    },
    {
      q: "Choose the correct sentence using the verb To Be in the past tense.",
      options: [
        "They wasn't at home last night.",
        "We was at the cinema.",
        "I was late for the meeting.",
        "She were very tired after work."
      ],
      correct: 2,
      explain:
        "Con I usamos was en pasado. Were se usa con you/we/they."
    },
    {
      q: "Choose the correct superlative adjective to complete the sentence: \"That was ___________ movie I have ever seen!\"",
      options: ["Funnier", "the most funny", "the funniest", "funnier than"],
      correct: 2,
      explain:
        "Funny termina en -y, por eso el superlativo cambia a the funniest."
    },
    {
      q: "Choose the right answer:",
      options: ["She be a doctor.", "She is a doctor.", "She are a doctor.", "She am a doctor."],
      correct: 1,
      explain:
        "Con she usamos is. La forma correcta es: She is a doctor."
    },
    {
      q: "Choose the right relative pronoun below:",
      options: [
        "That was the year when I started learning English.",
        "That year was the day which I started learning English.",
        "That year was the day who I started learning English.",
        "That year was the day where I started learning English."
      ],
      correct: 0,
      explain:
        "When se usa para referirse a tiempo. Year es una referencia temporal."
    },
    {
      q: "Choose the WRONG sentence.",
      options: [
        "He hasn't got a pet snake.",
        "We don't have a house at the beach.",
        "Does she have a brother?",
        "I don't have got a motorbike."
      ],
      correct: 3,
      explain:
        "No se mezclan don't have y have got. Se dice I don't have a motorbike o I haven't got a motorbike."
    },
    {
      q: "Choose the WRONG sentence.",
      options: [
        "I go to the cinema usually.",
        "Sometimes, she watches anime.",
        "He plays tennis very often.",
        "They rarely listen to rock music."
      ],
      correct: 0,
      explain:
        "Usually suele colocarse antes del verbo principal: I usually go to the cinema."
    },
    {
      q: "Complete the sentence using the Past Simple and the Past Continuous: \"While my brother __________ TV, the phone __________.\"",
      options: ["watched / rang", "was watching / rang", "watching / ring", "was watched / was ringing"],
      correct: 1,
      explain:
        "La acción en progreso va en Past Continuous: was watching. La acción puntual que interrumpe va en Past Simple: rang."
    },
    {
      q: "Complete the sentence using the Present Simple to talk about a future event: \"The plane ________ at 10:00 a.m. tomorrow.\"",
      options: ["arrive", "arrives", "arriving", "will arrive"],
      correct: 1,
      explain:
        "Para horarios programados se puede usar Present Simple. Con the plane usamos arrives."
    },
    {
      q: "Complete the sentence with a suitable indefinite pronoun: \"_____________ is knocking at the door\".",
      options: ["Anywhere", "Somewhere", "Someone", "Anything"],
      correct: 2,
      explain:
        "Someone significa alguien y se usa para personas."
    },
    {
      q: "Complete the sentence: \"She _________ you as soon as she arrives.\"",
      options: ["will called", "are calling", "called", "will call"],
      correct: 3,
      explain:
        "Future Simple: will + verbo base. Por eso: will call."
    },
    {
      q: "Complete the sentence: \"She ___________ sushi in her life\"",
      options: ["has never eaten", "have never eaten", "has ever eat", "have never ate"],
      correct: 0,
      explain:
        "Present Perfect con she: has + participio. Eat → eaten."
    },
    {
      q: "Complete the sentence: \"When we were kids, we _________ cartoons every morning\"",
      options: ["used to watch", "use to watched", "was used to watch", "using to watch"],
      correct: 0,
      explain:
        "Used to + verbo base expresa hábitos del pasado que ya no ocurren."
    },
    {
      q: "Complete this sentence with a question tag: \"You've been to Japan, ________?\"",
      options: ["don't you", "didn't you", "haven't you", "will you"],
      correct: 2,
      explain:
        "La frase usa Present Perfect: You have been. El question tag negativo es haven't you?"
    },
    {
      q: "Fill in the gap with an appropriate connector: \"I wanted to go to the party. __________, I had to finish my homework first\".",
      options: ["For instance", "Because", "However", "Moreover"],
      correct: 2,
      explain:
        "However expresa contraste: quería ir a la fiesta, pero tenía que acabar los deberes."
    },
    {
      q: "Fill in the gap with the correct comparative form of the adjective \"bad\": \"The weather today is _________ than it was yesterday\".",
      options: ["badder", "worse", "more bad", "baddest"],
      correct: 1,
      explain:
        "Bad es irregular: bad → worse → the worst."
    },
    {
      q: "Find the correct sentence:",
      options: [
        "There is some apples on the table.",
        "Are there any apples on the table?",
        "There isn't some milk in the fridge.",
        "Is there some oranges in the box?"
      ],
      correct: 1,
      explain:
        "En preguntas usamos any. Además, apples es plural, por eso se usa are there."
    },
    {
      q: "Find the incorrect question.",
      options: [
        "Why do you study in the library?",
        "When she takes her last exam?",
        "Who is your brother?",
        "Where does she live?"
      ],
      correct: 1,
      explain:
        "En Present Simple con she se necesita auxiliar does: When does she take her last exam?"
    },
    {
      q: "Find the INCORRECT sentence.",
      options: [
        "There are many papers on the table.",
        "Are there any papers on the table?",
        "There aren't no papers on the table.",
        "There aren't any papers on the table."
      ],
      correct: 2,
      explain:
        "There aren't no papers es doble negación. Lo correcto es: There aren't any papers."
    },
    {
      q: "Identify the sentence that correctly uses the imperative form.",
      options: [
        "You must to close the door.",
        "Please, close the door!",
        "She is closing the door.",
        "You should closing the door."
      ],
      correct: 1,
      explain:
        "El imperativo usa el verbo base sin sujeto: Close the door. Please lo hace más cortés."
    },
    {
      q: "Pick the correct preposition of movement to complete the sentence: \"She walked _________the bridge to get to the other side.\"",
      options: ["Off", "into", "through", "across"],
      correct: 3,
      explain:
        "Across significa cruzar de un lado a otro, como un puente."
    },
    {
      q: "Transform the words of this sentence into a question: She / like / travel / around the world / ?",
      options: [
        "Does she like travelling around the world?",
        "Do she like travelling around the world?",
        "Does she likes travelling around the world?",
        "Does she like travel around the world?"
      ],
      correct: 0,
      explain:
        "Con she en pregunta usamos does + sujeto + verbo base. Después de like es natural usar gerundio: travelling."
    },
    {
      q: "What is the most appropriate connector for adding information?",
      options: ["Although", "Besides", "Instead", "Therefore"],
      correct: 1,
      explain:
        "Besides significa además y sirve para añadir información."
    },
    {
      q: "Which gerund form is correct?",
      options: ["Crying", "Runing", "Makeing", "Swiming"],
      correct: 0,
      explain:
        "Crying está bien formado. Running y swimming doblan consonante, y making elimina la e."
    },
    {
      q: "Which is the right adjective?",
      options: [
        "I was very frightened after watching that horror film.",
        "I was very frightening after watching that horror film.",
        "I was very frighten after watching that horror film.",
        "I was very frightful after watching that horror film."
      ],
      correct: 0,
      explain:
        "Los adjetivos en -ed describen cómo se siente una persona. Frightened = asustado."
    },
    {
      q: "Which of the following is NOT a use of the Present Continuous?",
      options: [
        "To describe actions happening at the moment of speaking.",
        "To express temporary actions.",
        "To talk about future arrangements or plans.",
        "To talk about habits and routines."
      ],
      correct: 3,
      explain:
        "Los hábitos y rutinas se expresan normalmente con Present Simple, no con Present Continuous."
    },
    {
      q: "Which of these indefinite pronouns refer to people?",
      options: ["Something", "Anywhere", "Nobody", "Everything"],
      correct: 2,
      explain:
        "Nobody se refiere a personas. Something y everything son cosas; anywhere es lugar."
    },
    {
      q: "Which of these words is a possessive pronoun?",
      options: ["Me", "She", "Their", "Theirs"],
      correct: 3,
      explain:
        "Theirs es pronombre posesivo. Their es adjetivo posesivo."
    },
    {
      q: "Which quantifier is used with countable nouns?",
      options: ["Much", "Little", "Many", "A little"],
      correct: 2,
      explain:
        "Many se usa con sustantivos contables en plural."
    },
    {
      q: "Which quantifier would you use for a sufficient amount of something?",
      options: [
        "The bag is too heavy.",
        "The coffee has too much sugar.",
        "There are too many chairs in this classroom.",
        "We don t have enough time to be on time."
      ],
      correct: 3,
      explain:
        "Enough expresa cantidad suficiente. En este caso: enough time."
    },
    {
      q: "Which sentence correctly uses a stative verb?",
      options: [
        "He is wanting ice cream.",
        "I remember your face.",
        "That car is belonging to me.",
        "You are liking football."
      ],
      correct: 1,
      explain:
        "Remember es un stative verb y normalmente se usa en Present Simple, no en Present Continuous."
    },
    {
      q: "Which sentence is an example of the First Conditional?",
      options: [
        "If it rains, the ground gets well.",
        "If you study, you will pass the exam.",
        "If she had a car, she would drive to work.",
        "She will go to the party if you invites her."
      ],
      correct: 1,
      explain:
        "First Conditional: If + Present Simple, will + verbo base."
    },
    {
      q: "Which sentence is correct?",
      options: [
        "There are too many people in the room. We need more space.",
        "There are too much people in the room. We need more space.",
        "There are too enough people in the room. We need more space.",
        "There are very people in the room. We need more space."
      ],
      correct: 0,
      explain:
        "People es plural contable, por eso usamos too many."
    },
    {
      q: "Which type of speech uses quotation marks (\"\")?",
      options: ["Reported speech", "Direct speech", "Indirect speech", "All answers are correct"],
      correct: 1,
      explain:
        "Direct speech reproduce las palabras exactas y usa comillas."
    }
  ]
},
  ],
};
// Agrupación de asignaturas por prefijo de id
const SUBJECT_GROUPS = [
  {
    id: "fol",
    name: "PROTECCIÓN AL PACIENTE",
    subtitle: "PROTECCIÓN AL PACIENTE",
  },
  {
    id: "ap",
    name: "EIE",
    subtitle: "ECONOMIA Y EMPRESA",
  },
  {
    id: "an",
    name: "INGLES",
    subtitle: "INGLES",
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
   
