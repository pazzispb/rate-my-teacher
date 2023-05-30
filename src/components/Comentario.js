import { useState } from "react"
import '../assets/css/Comentario.css'

const estadoInicial = {
    Rendimiento: 4.0,
    Dificultad: 5.0,
    VolverTomar: true,
    Comentario: ""
}




function Comentario({ nuevoComentario }) {

    const [estado, setEstado] = useState(estadoInicial)
    // const [nota, setNota] = useState()
    function onSubmit(e) {
        e.preventDefault()
        return nuevoComentario(estado)
    }

    function handleChange(e) {
        setEstado((estadoprevio) => ({ ...estadoprevio, [e.target.name]: e.target.value }))
    }


    return (
        <form className="form-comentario" onSubmit={onSubmit}>
            <div className="valores-comentario">
                <label>Rendimiento: </label>
                <select name="Rendimiento" value={estado.Rendimiento} onChange={handleChange}>
                    <option value={4.0}>A</option>
                    <option value={3.5}>B+</option>
                    <option value={3.0}>B</option>
                    <option value={2.5}>C+</option>
                    <option value={2.0}>C</option>
                </select>
                <label>Dificultad: </label>
                <select name="Dificultad" value={estado.Dificultad} onChange={handleChange}>
                    <option value={5.0}>5</option>
                    <option value={4.0}>4</option>
                    <option value={3.0}>3</option>
                    <option value={2.0}>2</option>
                    <option value={1.0}>1</option>
                </select>
                <label>Volvería a tomar: </label>
                <select name="VolverTomar" value={estado.VolverTomar} onChange={handleChange}>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <div className="input-comentario">
                <textarea required className="textarea-comentario" name="Comentario" placeholder="Comentario..." value={estado.Comentario} onChange={handleChange}>
                </textarea>
                <button className="comentario-boton" type="submit">Subir</button>
            </div>
        </form>
    )
}

export default Comentario