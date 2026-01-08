export default function Result({ unit, picked, goHome, repeat }) {
    const correct = unit.questions.filter((q, i) => q.correct === picked[i]).length;
  
    return (
      <div className="screen">
        <h2>Resultado</h2>
        <div className="score">{correct} / {unit.questions.length}</div>
  
        <button className="primary" onClick={repeat}>Repetir</button>
        <button className="ghost" onClick={goHome}>Volver al inicio</button>
      </div>
    );
  }
  