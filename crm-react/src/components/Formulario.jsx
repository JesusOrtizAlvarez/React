import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

const Formulario = () => {

    const nuevoClienteSchema = yup.object().shape({
        nombre: yup.string().required('El nombre del Cliente es Obligatorio'),
        empresa: '',
        email: '',
        telefono: '',
        notas: ''
    })

    const handleSubmit = () => {

    }
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'> Agregar Cliente</h1>

        <Formik
            initialValues={{
                nombre: '',
                empresa: '',
                email: '',
                telefono: '',
                notas: ''
            }}

            onSubmit = { (values) => {
                hadleSubmit(values)
            }}
            validationSchema = {nuevoClienteSchema}
        > 
            {(errors, touched) => {
                
                return (
            <Form 
            className='mt-10'>
                <div>
                    <label 
                        className='text-gray-800'
                        htmlFor='nombre'
                    >
                        Nombre: </label>
                    <Field 
                        id = 'nombre'
                        type = 'text'
                        className = 'mt-2 block w-full p-3 bg-gray-50'
                        placeholder = "Nombre del Cliente"
                        name = 'nombre'
                    />
                    {errors.nombre && touched.nombre ? (
                        <div>
                            {errors.nombre}
                        </div>
                    ) : null} 
                </div>

                <div>
                    <label 
                        className='text-gray-800'
                        htmlFor='empresa'
                    >
                        Empresa: </label>
                    <Field 
                        id = 'empresa'
                        type = 'text'
                        className = 'mt-2 block w-full p-3 bg-gray-50'
                        placeholder = "Empresa del Cliente"
                        name = 'empresa'
                    />
                </div>

                <div>
                    <label 
                        className='text-gray-800'
                        htmlFor='email'
                    >
                        Email: </label>
                    <Field 
                        id = 'email'
                        type = 'email'
                        className = 'mt-2 block w-full p-3 bg-gray-50'
                        placeholder = "Email del Cliente"
                        name = 'email'
                    />
                </div>

                <div>
                    <label 
                        className='text-gray-800'
                        htmlFor='telefono'
                    >
                        Telefono: </label>
                    <Field 
                        id = 'telefono'
                        type = 'tel'
                        className = 'mt-2 block w-full p-3 bg-gray-50'
                        placeholder = "Telefono del Cliente"
                        name = 'telefono'
                    />
                </div>

                <div>
                    <label 
                        className='text-gray-800'
                        htmlFor='notas'
                    >
                        Notas: </label>
                    <Field 
                        as = 'textarea'
                        id = 'notas'
                        type = 'text'
                        className = 'mt-2 block w-full p-3 bg-gray-50 h-40'
                        placeholder = "Notas del Cliente"
                        name = 'notas'
                    />
                </div>

                <input
                    type='submit'
                    value = "Agregar Cliente"
                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                />

                            
            </Form>
             )}}
        </Formik>
    </div>
  )
}

export default Formulario