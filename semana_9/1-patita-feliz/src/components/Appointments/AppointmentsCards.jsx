const AppointmentsCards = ({ appointments }) => {
    return (
        <div className="d-flex flex-column gap-3">
        <h3 className  ="text-center m-1">🚑Cita🚑</h3>
        {appointments.map((element,index)=>{
            const { mascota ,propietario,fecha,hora,sintomas} = element;
            return(
        <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Mascota:{mascota}</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
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