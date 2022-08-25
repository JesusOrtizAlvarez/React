import {useState, useEffect} from 'react';
import {Error} from './Error';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const[Nombre, setNombre] = useState('');
    const[Propietario, setPropietario] = useState('');
    const[Email, setEmail] = useState('');
    const[Fecha, setFecha] = useState('');
    const[Sintomas, setSintomas] = useState('');
    const[error, setError] = useState(false);

    useEffect( () => {
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.Nombre)
            setPropietario(paciente.Propietario)
            setEmail(paciente.Email)
            setFecha(paciente.Fecha)
            setSintomas(paciente.Sintomas)
        } 
    }, [paciente])

   
    
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion del formulario
        if([Nombre, Propietario, Email, Fecha, Sintomas].includes('')){
            setError(true)
            return;
        }
        setError(false)

        const obejtoPaciente = {
            Nombre,
            Propietario,
            Email,
            Fecha, 
            Sintomas,
            
        }

        if(paciente.id ){
            //editando paciente
            obejtoPaciente.id = paciente.id

            const  pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? obejtoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            //nuevo registro
            obejtoPaciente.id = generarId();
            setPacientes([...pacientes, obejtoPaciente]);
        }
        

        //REINICIAR EL FORM
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-green-700 font-bold">Administralos </span>
        </p>

        <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && <Error> <p> Todos los cambios son obligatorios</p> </Error>}

            <div className="mb-5">
                <label htmlFor= "mascota" className="block text-gray-700 font-bold"> 
                Nombre mascota
                </label> 
                
                <input 
                    id = "mascota"
                    type="text" 
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-none"
                    value= {Nombre}
                    onChange = { (e) => setNombre(e.target.value)}
                    />
            </div>

            <div className="mb-5">
                <label htmlFor= "propietario" className="block text-gray-700 font-bold"> 
                Nombre Propietario
                </label>
                
                <input 
                    id = "propietario"
                    type="text" 
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-none"
                    value= {Propietario}
                    onChange = { (e) => setPropietario(e.target.value)}
                    />
            </div>

            <div className="mb-5">
                <label htmlFor= "email" className="block text-gray-700 font-bold"> 
                Email
                </label>
                
                <input 
                    id = "email"
                    type="email" 
                    placeholder="Correo Electronico"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-none"
                    value= {Email}
                    onChange = { (e) => setEmail(e.target.value)}
                    />
            </div>

            <div className="mb-5">
                <label htmlFor= "fecha" className="block text-gray-700 font-bold"> 
                Fecha Alta
                </label>
                
                <input 
                    id = "fecha"
                    type="date" 
                    placeholder="Fecha Alta"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-none"
                    value= {Fecha}
                    onChange = { (e) => setFecha(e.target.value)}
                    />
            </div>

            <div className="mb-5">
                <label htmlFor= "sintomas" className="block text-gray-700 font-bold"> 
                Sintomas
                </label>
                
                <textarea  
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    placeholder="Describe los sintomas de tu mascota."
                    value= {Sintomas}
                    onChange = { (e) => setSintomas(e.target.value)}

                />
            </div>

            <input
                type = "submit"
                className="bg-green-700 w-full p-3 text-white uppercase font-bold hover:bg-green-900 cursor-pointer transition-all"
                value= "Agregar Paciente"
            />
        </form>
    </div>
  )
}

export default Formulario