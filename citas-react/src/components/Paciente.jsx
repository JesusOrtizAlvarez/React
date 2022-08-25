const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const {Nombre, Propietario, Email, Fecha, Sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas confirmar la eliminación?');

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

  return (
        
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className=" font-bold mb-3 text-slate-700 uppercase"> Nombre : {''}
            <span className="font-normal normal-case">
                {paciente.Nombre}
            </span>
            </p>

            <p className=" font-bold mb-3 text-slate-700 uppercase"> Propietario : {''}
            <span className="font-normal normal-case">
                {paciente.Propietario} 
            </span>
            </p>

            <p className=" font-bold mb-3 text-slate-700 uppercase"> Email : {''}
            <span className="font-normal normal-case">
                {paciente.Email}
            </span>
            </p>


            <p className=" font-bold mb-3 text-slate-700 uppercase"> Fecha Alta : {''}
            <span className="font-normal normal-case">
                {paciente.Fecha}
            </span>
            </p>

            <p className=" font-bold mb-3 text-slate-700 uppercase"> Sintomas : {''}
            <span className="font-normal normal-case">
                {paciente.Sintomas}
            </span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type = "button"
                    className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold 
                    uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                    > Editar
                </button>
                <button
                    type = "button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
                    uppercase rounded-lg"
                    onClick={handleEliminar}
                    > Eliminar
                </button>
            </div>
        </div>
  )
}

export default Paciente