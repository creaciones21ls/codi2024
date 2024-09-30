import localforage from "localforage"


export const datosApi = async (buscar) => {

    const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${import.meta.env.VITE_APP_KEY}&tag=${buscar}&rating=g`

    const respuestaApi = await fetch(endpoint)
    const datos = await respuestaApi.json()
    return datos
}

export const setTexto = async (busqueda) => {
    return await localforage.setItem("textos", busqueda)
}

export const getTexto = async () => {
    const { busqueda } = await localforage.getItem('textos')
    return busqueda
}
