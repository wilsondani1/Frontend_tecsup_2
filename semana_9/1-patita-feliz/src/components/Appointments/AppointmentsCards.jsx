import AppointmentsCard from "./AppointmentsCard";

const AppointmentsCards = ({ appointments }) => {
    return (
        <div className="col-md-6 d-flex flex-column gap-3">
        <h3 className  ="text-center m-0">🚑Cita🚑</h3>
        <ul className="list-group">
        {appointments.map((element,index)=>{
   
            return(
                <AppointmentsCard
                key={index}
                 appointment={element}
                 />
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