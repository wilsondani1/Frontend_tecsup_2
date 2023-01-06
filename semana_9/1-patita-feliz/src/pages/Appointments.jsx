
const Appointments = () => {
    return (
      <section className="py-4">
        <div className="container d-flex justify-content-between">
          <div className="badge text-bg-primary d-flex align-items-center gap-1">
            Appointments <span className="badge text-bg-secondary">4</span>
          </div>
          <button className="btn btn-primary" onClick={() => {
            alert('Hola mundo');
          }}>Registrar cita</button>
        </div>
      </section>
    );
  };
  
  export default Appointments;