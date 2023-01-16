import { useState } from "react";

const  AppointmentsForm = ({appointments, setAppointments}) => {
   
        const [appointmentsForm, setAppointmentsForm] = useState({
            
           
            mascota:'',
            propietario:'',
            fecha: '',
            hora:'',
            sintomas:'',
  
        });
        const handleInput = (e) => {
            setAppointmentsForm({
            ...appointmentsForm,
            [e.target.id]:e.target.value
        } )
        };


        const handleSubmit = (e) => {
            e.preventDefault();
            setAppointments([
              ...appointments,
              appointmentsForm
              
            ]);
          };
          
    return (
        <div className="col-md-6 d-flex flex-column gap-3">
            <h3 className  ="text-center m-1">🚑Crear cita🚑</h3>
            <form onSubmit={handleSubmit}>
            <div className ="form-floating mb-3">

                <input 
                type="text" 
                className ="form-control  bg-transparent text-light" 
                id="mascota" 
                placeholder="Nombre de la mascota"
                onInput={handleInput}
                />
                <label htmlFor ="mascota">Nombre de la mascota </label>
            </div>

            <div className ="form-floating mb-3">
                <input 
                type="text" 
                className ="form-control bg-transparent text-light" 
                id="propietario" 
                placeholder="Nombre de la propietario"
                onInput={handleInput}
                />
                <label htmlFor ="propietario">Nombre del propietario </label>
            </div>

            <div className ="form-floating mb-3">
                <input 
                type="date" 
                className ="form-control bg-transparent text-light" 
                id="fecha" 
                placeholder=" fecha"
                onInput={handleInput}
                />
                <label htmlFor ="fecha">fecha </label>
            </div>

            <div className ="form-floating mb-3">
                <input 
                type="time" 
                className ="form-control bg-transparent text-light" 
                id="hora" 
                placeholder=" hora"
                onInput={handleInput}
                />
                <label htmlFor ="hora">Hora </label>
            </div>

            <div className ="form-floating mb-3">
                <input 
                type="text" 
                className ="form-control bg-transparent text-light" 
                id="sintomas" 
                placeholder="sintomas"
                onInput={handleInput}
                />
                <label htmlFor ="sintomas">sintomas </label>
            </div>

            <button className="btn btn-info w-100 fw-bold" type="sudmit"> Crear</button>

            </form>

        </div>
   
     );
}
 
export default AppointmentsForm;