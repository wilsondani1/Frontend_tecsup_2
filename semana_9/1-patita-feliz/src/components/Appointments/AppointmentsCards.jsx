const AppointmentsCards = ({ appointments }) => {
    return (
        <div className="d-flex flex-column gap-3">
        <h3 className  ="text-center m-0">🚑Cita🚑</h3>
        {appointments.map((element,index)=>{
            const { mascota ,propietario,fecha,hora,sintomas} = element;
            return(
        <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action " aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Mascota:{mascota}</h5>
                    <small>{fecha}{hora}</small>
                </div>

                <p className="mb-1">{sintomas}</p>
                <p className="mb-1">{propietario}</p>
                <small>{propietario}</small>
                </a>
        </div>
            );               
        })}
  
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