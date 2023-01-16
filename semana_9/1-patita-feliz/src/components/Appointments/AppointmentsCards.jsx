const AppointmentsCards = ({ appointments }) => {
    return (
        <div className="d-flex flex-column gap-3">
        <h3 className  ="text-center m-0">🚑Cita🚑</h3>
        <ul className="list-group">
        {appointments.map((element,index)=>{
            const { mascota ,propietario,fecha,hora,sintomas} = element;
            return(
                <li className="list-group-item list-group-item-action " aria-current="true" key={index}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1"> <span className="fw-bolder">Mascota:</span>  {mascota}</h5>
                    <small>📆 {fecha}  ⏳ {hora}</small>
                </div>
                <p className="mb-1"><span className="fw-bold">Sintomas</span> {sintomas}</p>
                <small> <span className="fw-bold">Propietario</span> {propietario} </small>
                <div className="d-flex-gap-1">
                   <a 
                    href={`https://api.whatsapp.com/send?phone=953746046&text=Confirmo cita: Mascota: ${mascota}, Propietario: ${propietario}, Fecha: ${fecha}, Hora: ${hora},Síntomas: ${sintomas}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btm-sm"
                    >
                    Confirmar
                    </a> 
                    <button className="btn btn-danger bt-sm">
                    Eliminar
                    </button>
                </div>

                </li>
            );               
        })}
          </ul>
      </div>
    );
};

export default AppointmentsCards;


        
        // <ul>
        //     {appointments.map((element,index) =>{
        //         const{mascota,propietario,fecha,hora,sintomas } =element;
        //          return(
               
        //         <li key={index}>
        //         <ul>
        //             <li>{mascota}</li>
        //             <li>{propietario}</li>
        //             <li>{fecha}</li>
        //             <li>{hora}</li>
        //             <li>{sintomas}</li>
        //         </ul>
        //     </li>
        //     )
        //     })}
   
        // </ul>