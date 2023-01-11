const  AppointmentsForm= () => {
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
                />
                <label for="mascota">Nombre de la mascota </label>
            </div>

            <div class="form-floating mb-3">
                <input 
                type="text" 
                class="form-control" 
                id="propietario" 
                placeholder="Nombre de la propietario"
                />
                <label for="propietario">Nombre del propietario </label>
            </div>

            <div class="form-floating mb-3">
                <input 
                type="date" 
                class="form-control" 
                id="fecha" 
                placeholder=" fecha"
                />
                <label for="fecha">fecha </label>
            </div>

            <div class="form-floating mb-3">
                <input 
                type="text" 
                class="form-control" 
                id="Hora" 
                placeholder=" Hora"
                />
                <label for="Hora">Hora </label>
            </div>

            <div class="form-floating mb-3">
                <input 
                type="text" 
                class="form-control" 
                id="sintomas" 
                placeholder="sintomas"
                />
                <label for="sintomas">sintomas </label>
            </div>
            <button className="btn btn-info w-100 fw-bold"> Crear</button>
            </form>
        </div>
   
     );
}
 
export default AppointmentsForm;