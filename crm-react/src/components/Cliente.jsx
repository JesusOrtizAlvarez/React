import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate()

    const { nombre, empresa, email, telefono, notas, id} = cliente

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3">{nombre}</td>
            <td className="p-3">
                <p><span className="font-bold text-gray-800 uppercase">Email: </span> {email} </p>
                <p><span className="font-bold text-gray-800 uppercase">Tel: </span> {telefono} </p>
            </td>
            <td className="p-3">{empresa}</td>
            <td className="p-3">

                <button 
                    type="button"
                    className="block w-full p-2 text-xs font-bold text-white uppercase bg-green-500 hover:bg-green-600"
                    onClick={() => navigate(`/clientes/${id}`)}
                >Ver</button>

                <button 
                    type="button"
                    className="block w-full p-2 mt-3 text-xs font-bold text-white uppercase bg-blue-600 hover:bg-blue-700"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >Editar</button>

                <button 
                    type="button"
                    className="block w-full p-2 mt-3 text-xs font-bold text-white uppercase bg-red-600 hover:bg-red-700"
                    onClick={() => handleEliminar(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente
