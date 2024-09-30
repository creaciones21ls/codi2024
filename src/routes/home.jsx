import { useState, useEffect } from 'react'
import { datosApi, setTexto, getTexto } from '../gifs.js'
import { Form, useLoaderData } from 'react-router-dom'


export const action = async ({ request }) => {
    const formData = await request.formData()
    const busqueda = Object.fromEntries(formData)
    await setTexto(busqueda)
    return busqueda
}

export const loader = async () => {
    const datosRecibido = await getTexto()
    return datosRecibido
}

export const HomeAPI = () => {

    const [datos, setDatos] = useState('')

    const datosRecibido = useLoaderData()

    useEffect(() => {
        datosApi(datosRecibido).then((respuesta) => {
            const { data } = respuesta
            setDatos(data.images.original.url)
        })
    }, [datosRecibido])

    return (
        <>
            <Form method='post'>
                <label htmlFor="busqueda"><strong><h2>Busqueda</h2></strong></label>
                <input type="text" name="busqueda" id="" />
            </Form>
            <hr />
            <img src={datos} alt="" />
        </>
    )

}