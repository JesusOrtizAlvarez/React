import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Formulario = () => {

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'El nombre es muy corto')
                    .max(20, 'El nombre es muy largo')
                    .required('El nombre del Cliente es Obligatorio'),
        empresa: Yup.string()
                    .required('El nombre de la empresa es obligatorio'),
        email:  Yup.string()
                   .email('Email no valido')
                   .required('El Email es obligatorio'),
        telefono: Yup.number()
                     .positive('Número no válido')
                     .integer('Número no válido')
                     .typeError('El Número no es válido')
       
    })

    const handleSubmit = (valores) => {
        console.log(valores)
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
                        <div className='text-center'>
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
                    {errors.empresa && touched.empresa ? (
                        <div className='text-center'>
                            {errors.empresa}
                        </div>
                    ) : null} 
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
                    {errors.email && touched.email ? (
                        <div className='text-center'>
                            {errors.email}
                        </div>
                    ) : null} 
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
                    {errors.telefono && touched.telefono ? (
                        <div className='text-center'>
                            {errors.telefono}
                        </div>
                    ) : null} 
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