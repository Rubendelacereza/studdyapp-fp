export default function Quiz({ unit, qIndex, picked, answer }) {
    const q = unit.questions[qIndex];
  
    return (
      <div className="screen">
        <h3>{unit.title}</h3>
        <div className="progress">{qIndex + 1} / {unit.questions.length}</div>
  
        <div className="question">{q.q}</div>
  
        <div className="options">
          {q.options.map((opt, i) => (
            <button key={i} className="optBtn" onClick={() => answer(i)}>
              <span className="optIndex">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
  