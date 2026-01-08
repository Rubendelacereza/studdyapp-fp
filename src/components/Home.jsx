export default function Home({ subjects, openSubject }) {
    return (
      <div className="screen">
        <h1 className="title">StudyApp</h1>
        <p className="subtitle">Selecciona una asignatura</p>
  
        <div className="subjectsGrid">
          {subjects.map((s) => (
            <button
              key={s.id}
              className="subjectCard"
              onClick={() => openSubject(s.id)}
            >
              <h3>{s.name}</h3>
              <p>{s.units.length} unidades</p>
            </button>
          ))}
        </div>
      </div>
    );
  }
  