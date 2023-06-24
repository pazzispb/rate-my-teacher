import { getDatabase, ref, update } from "firebase/database";
import app from '../Firebase.mjs';
import { useNavigate } from "react-router";
import Comentario from './Comentario.js';
import Logo from '../assets/img/logo.PNG';
import '../assets/css/PerfilProfesor.css';

function PerfilProfesor({ profesor, id, user }) {

    const usuarioYaComento = () => {
        if (!profesor.comentarios) {
            return
        }

        let result = false

        for (const comentario of profesor.comentarios) {
            if (comentario.autor && comentario.autor === user.email) {
                result = true
                break
            }
        }

        return result
    }

    const dificultad = () => {
        let totalDificultad = 0
        let numero = profesor.comentarios?.length || 0;

        profesor.comentarios?.map((comment) => {
            return totalDificultad += +comment.Dificultad
        })

        const promedio = (totalDificultad / numero).toFixed(1)
        return isNaN(promedio) ? 'N/A' : promedio || 'N/A'
    }

    const aGrado = (grado) => {
        if (grado === 4.0) {
            return 'A'
        }
        else if (grado >= 3.5 && grado <= 3.9) {
            return 'B+'
        }
        else if (grado >= 3.0 && grado <= 3.4) {
            return 'B'
        }
        else if (grado >= 2.5 && grado <= 2.9) {
            return 'C+'
        }
        else if (grado >= 2.0 && grado <= 2.4) {
            return 'C'
        }
        else if (grado >= 1.5 && grado <= 1.9) {
            return 'D'
        }
        else {
            return 'F'
        }
    }


    const redimiento = () => {
        let totalRendimiento = 0
        let numero = profesor.comentarios?.length || 0;

        profesor.comentarios?.map((comment) => {
            return totalRendimiento += +comment.Rendimiento
        })
        const resultado = +(totalRendimiento / numero).toFixed(1)

        if (isNaN(resultado)) {
            return 'N/A'
        }

        return aGrado(resultado)
    }

    let navigate = useNavigate()

    const cambiarRuta = () => {
        navigate('/Rate_prof/')
    }

    console.log(profesor.comentarios)


    const renderizarComentarios = () => {

        return profesor.comentarios?.map((comentario, i) => (
            <li className="comentario-aparte" key={i}>
                <div className="puntos-obligatorios">
                    <div className="rendimiento">
                        <div>Rendimiento: {aGrado(+comentario.Rendimiento)}</div>
                    </div>
                    <div className="dificultad">
                        <div>Dificultad: {comentario.Dificultad}</div>
                    </div>
                    <div className="dificultad">
                        <div>Volvería a tomar: <span>&nbsp;</span>  {comentario.VolverTomar ? (
                            <p> Si</p>
                        ) : (
                            <p>No</p>
                        )}</div>
                    </div>
                    <div className="dificultad">
                        <div>Autor: {comentario.autor}</div>
                    </div>
                </div>
                <div className="comentario-visto">{comentario.Comentario}</div>
            </li>
        )
        )
    }

    const renderizarFormulario = () => {
        const result = usuarioYaComento()
        console.log(result)

        if (!result) {
            return <Comentario nuevoComentario={nuevoComentario} />
        } else {
            return <h1>Gracias por tu comentario!</h1>
        }
    }

    function nuevoComentario(comentario) {
        console.log(Comentario)
        const db = getDatabase(app);

        const _comentario = { ...comentario, autor: user.email }

        const actualizacionProf = { ...profesor }

        profesor.comentarios
            ? actualizacionProf.comentarios = [...profesor.comentarios, _comentario]
            : actualizacionProf.comentarios = [_comentario]


        // // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['profesores/' + id] = actualizacionProf;

        return update(ref(db), updates);
    }
    return (
        <div className="profe-background-color">
            <div className="inicio-background">
                <div className="signup-appbar">
                    <div className='inicio-appbar-diseño'>
                        <span onClick={cambiarRuta}></span>
                        <span onClick={cambiarRuta}></span>
                        <span onClick={cambiarRuta}></span>
                    </div>
                    <div className="inicio-logo-search">
                        <div className='inicio-logo'>
                            <img className='logo' src={Logo} alt="Logo" onClick={cambiarRuta} />
                            <div className='nombre'>
                                <span onClick={cambiarRuta}>B</span>
                                <span onClick={cambiarRuta}>e</span>
                                <span onClick={cambiarRuta}>e</span>
                                <span onClick={cambiarRuta}>l</span>
                                <span onClick={cambiarRuta}>S</span>
                                <span onClick={cambiarRuta}>t</span>
                                <span onClick={cambiarRuta}>o</span>
                                <span onClick={cambiarRuta}>p</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profesor-name'>{profesor.nombre}</div>
                <div className="profesor-area">{profesor.area}</div>
                <div className='rate-comentario'>
                    <div className='rate'>
                        <div className='rendimiento-dificultad'>
                            <label>Rendimiento</label>
                            <div>{redimiento()}</div>
                        </div>
                        <div className='rendimiento-dificultad'>
                            <label>Dificultad</label>
                            <div>{dificultad()}</div>
                        </div>
                    </div>
                    <div className='comentarios'>
                        {renderizarFormulario()}
                        {renderizarComentarios()}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PerfilProfesor
