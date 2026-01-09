// src/statsStorage.js
const STATS_KEY = "studyapp_stats_v1";

export function loadStats() {
  const raw = localStorage.getItem(STATS_KEY);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error cargando stats:", e);
    return [];
  }
}

export function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function registerSession(subjectId, unitId, score, ok, total) {
  const stats = loadStats();

  stats.push({
    id: Date.now(),
    subjectId,
    unitId,
    score,
    ok,
    total,
    date: new Date().toISOString(),
  });

  saveStats(stats);
}

export function getSubjectStats(subjectId, SUBJECTS, progress) {
  const stats = loadStats().filter((s) => s.subjectId === subjectId);

  if (stats.length === 0) {
    return {
      totalSessions: 0,
      sessions: [],
      avgScore: 0,
      bestScore: 0,
      bestUnitTitle: null,
      lastScore: 0,
      lastDateFormatted: "",
      passedUnits: 0,
      totalUnits: 0,
    };
  }

  const totalSessions = stats.length;
  const avgScore =
    stats.reduce((acc, s) => acc + s.score, 0) / totalSessions;

  const bestSession = stats.reduce((a, b) =>
    a.score > b.score ? a : b
  );

  const lastSession = stats[stats.length - 1];

  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const units = subject?.units || [];

  const passedUnits = units.filter(
    (u) => (progress.best[u.id] ?? 0) >= 60
  ).length;
  const totalUnits = units.length;

  return {
    totalSessions,
    sessions: stats,
    avgScore,
    bestScore: bestSession.score,
    bestUnitTitle:
      units.find((u) => u.id === bestSession.unitId)?.title ?? "",
    lastScore: lastSession.score,
    lastDateFormatted: new Date(lastSession.date).toLocaleString(),
    passedUnits,
    totalUnits,
  };
}
