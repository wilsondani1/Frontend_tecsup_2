import { useState } from "react";

const  AppointmentsForm = () => {
   
        const [AppointmentsForm, setAppointmentsForm] = useState({
            
            nombre:'',
            mascota:'',
            propietario:'',
            fecha: '',
            hora:'',
            sintomas:'',
  
        });
        const handleInput = (e) => {setAppointmentsForm({
            ...AppointmentsForm,
            [e.target.id]:e.target.value
        } )
        };
    

    return (
        <div>
            <h3 className="text-center m-1">🚑Crear cita🚑</h3>
            <form className="text-dark">
            
        
            <div class="form-floating mb-3">

                <input 
                type="text" 
                class="form-control" 
                id="mascota" 
                placeholder="Nombre de la mascota"
                onInput={handleInput}
                />
                <label for="mascota">Nombre de la mascota </label>
            </div>

            <div class="form-floating mb-3">
                <input 
                type="text" 
                class="form-control" 
                id="propietario" 
                placeholder="Nombre de la propietario"
                onInput={handleInput}
                />
                <label for="propietario">Nombre del propietario </label>
            </div>

            <div class="form-floating mb-3">
                <input 
                type="date" 
                class="form-control" 
                id="fecha" 
                placeholder=" fecha"
                onInput={handleInput}
                />
                <label for="fecha">fecha </label>
            </div>

            <div class="form-floating mb-3">
                <input 
                type="time" 
                class="form-control" 
                id="hora" 
                placeholder=" hora"
                onInput={handleInput}
                />
                <label for="hora">Hora </label>
            </div>

            <div class="form-floating mb-3">
                <input 
                type="text" 
                class="form-control" 
                id="sintomas" 
                placeholder="sintomas"
                onInput={handleInput}
                />
                <label for="sintomas">sintomas </label>
            </div>

            <button className="btn btn-info w-100 fw-bold"> Crear</button>

            </form>
            <ul>
                
                <li>{AppointmentsForm.mascota}</li>
                <li>{AppointmentsForm.propietario}</li>
                <li>{AppointmentsForm.fecha}</li>
                <li>{AppointmentsForm.hora}</li>
                <li>{AppointmentsForm.sintomas}</li>
                

            </ul>
        </div>
   
     );
}
 
export default AppointmentsForm;