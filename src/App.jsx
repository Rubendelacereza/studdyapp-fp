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
      image:"/images/IMAGE8.png",
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
      image:"/images/IMAGE9.png",
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
      image:"/images/IMAGE10.png",
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
      image:"/images/IMAGE11.png",
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
      image:"/images/IMAGE12.png",
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
   
