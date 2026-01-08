export default function Unit({ subject, goHome, openUnit }) {
    return (
      <div className="screen">
        <button className="backBtn" onClick={goHome}>⟵ Volver</button>
  
        <h2>{subject.name}</h2>
  
        <div className="unitsGrid">
          {subject.units.map((u) => (
            <button
              key={u.id}
              className="unitCard"
              onClick={() => openUnit(u.id)}
            >
              <h4>{u.title}</h4>
              <p>{u.questions.length} preguntas</p>
            </button>
          ))}
        </div>
      </div>
    );
  }
  