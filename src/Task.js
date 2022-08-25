import './Task.css'

export function TaskCard({ready}) {
  return (
    <div className="card">
      <h1>Mi primera tarea</h1>
      <p>Tengo que estudiar</p>

      <span className = { ready ? "ready" : "noReady" }>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
