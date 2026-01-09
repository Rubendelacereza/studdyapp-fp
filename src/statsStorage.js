// src/statsStorage.js

const STATS_KEY = "studyapp_stats_v1";

// Cargamos la estructura básica del storage
function loadStatsRaw() {
  if (typeof window === "undefined") return { sessions: [] };

  try {
    const raw = window.localStorage.getItem(STATS_KEY);
    if (!raw) return { sessions: [] };

    const parsed = JSON.parse(raw);
    // Nos aseguramos de que tenga la forma que esperamos
    if (!parsed.sessions || !Array.isArray(parsed.sessions)) {
      return { sessions: [] };
    }
    return parsed;
  } catch (err) {
    console.error("Error leyendo stats:", err);
    return { sessions: [] };
  }
}

// Guardar de nuevo
function saveStatsRaw(stats) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error("Error guardando stats:", err);
  }
}

/**
 * Se llama al terminar un test.
 * Guarda una "sesión" con la info básica.
 */
export function registerSession(subjectId, unitId, score, ok, total) {
  const stats = loadStatsRaw();

  stats.sessions.push({
    subjectId,
    unitId,
    score,
    ok,
    total,
    // ISO para luego poder ordenar
    date: new Date().toISOString(),
  });

  saveStatsRaw(stats);
}

/**
 * Devuelve estadísticas resumidas de una asignatura.
 *
 * - attempts: nº total de intentos
 * - lastScore: última nota (por fecha)
 * - bestScore: mejor nota
 * - avgScore: media de todas las notas
 * - lastDate: fecha de la última sesión (string ISO)
 */
export function getSubjectStats(subjectId) {
  const stats = loadStatsRaw();
  const sessions = stats.sessions.filter(
    (s) => s.subjectId === subjectId
  );

  if (sessions.length === 0) {
    return {
      attempts: 0,
      lastScore: null,
      bestScore: null,
      avgScore: null,
      lastDate: null,
    };
  }

  // Ordenamos por fecha para coger la última
  const sorted = [...sessions].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
  const last = sorted[sorted.length - 1];

  let sum = 0;
  let best = 0;

  sessions.forEach((s) => {
    sum += s.score;
    if (s.score > best) best = s.score;
  });

  const avg = Math.round(sum / sessions.length);

  return {
    attempts: sessions.length,
    lastScore: last.score,
    bestScore: best,
    avgScore: avg,
    lastDate: last.date,
  };
}
