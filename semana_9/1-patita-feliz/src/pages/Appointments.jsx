import { useState } from "react";

const Appointments = () => {
const  [cuantity,setCuantity] = useState(1); /* se epuede usar abreviado usf*/ 


const createAppointments = () =>{
setCuantity (cuantity + 1);
};

console.log("component");

  return(
    <section className="py-4">
      <div className="container d-flex d-flex justify-content-between" >
       
        <div  class="badge text-bg-primary d-flex align-items-center">
        Appointments <span class="badge text-bg-secondary">{cuantity}</span>
        </div>

        <button className="btn btn-primary"onClick={createAppointments}> Registrar cita</button>
      </div>
    </section>
   
  );
};


export default Appointments

// import { useEffect, useState } from "react";
// import AppointmentsCards from "../components/appointments/AppointmentsCards";
// import AppointmentsForm from "../components/appointments/AppointmentsForm";

// const Appointments = () => {

//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     document.title = 'Patita Feliz I Citas';
//   }, []);
  
//   useEffect(() => {
//     if (appointments.length <= 0) {
//       document.title = 'Patita Feliz I No hay Citas';
//     } else {
//       document.title = 'Patita Feliz I Hay Citas';
//     }
//   }, [appointments]);

//   return (
//     <section className="py-4">
//       <div className="container row mx-auto g-4">
//         <AppointmentsForm
//           appointments={appointments}
//           setAppointments={setAppointments}
//         />
//         <AppointmentsCards
//           appointments={appointments}
//           setAppointments={setAppointments}
//         />
//       </div>
//     </section>
//   );
// };

// export default Appointments;