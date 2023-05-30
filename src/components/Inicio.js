import '../assets/css/Inicio.css';
import Logo from '../assets/img/logo.PNG';
import InicioImg from '../assets/img/inicio.PNG';
import { Buscador } from './Buscador.js';
import { useEffect, useState } from 'react';
import app from '../Firebase.js';
import { getDatabase, ref, onValue } from "firebase/database";
import { Link } from 'react-router-dom'


function Inicio({ user, signout }) {
    const [profesores, setProfesores] = useState({});

    useEffect(() => {
        const dbRef = ref(getDatabase(app), 'profesores');

        const unsubscribe = onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                setProfesores(snapshot.val());
            } else {
                console.log("No data available");
            }
        }, (error) => {
            console.error("Este es:", error);
        });

        // Clean up function
        return () => unsubscribe();
    }, []);

    const renderLinks = () => {
        if (!user) {
            return (
                <>
                    <Link to={'/Rate_prof/signin'} className="inicio-link">Iniciar Sesión</Link>
                    <Link to={'/Rate_prof/signup'} className="inicio-link">Crear Cuenta</Link>
                </>
            )
        } else {
            return (
                <>  <p>{user.email}</p>
                    <button className='signout-button' onClick={() => signout()}>Cerrar Sesión</button>
                </>
            )
        }
    }
    return (
        <div className="inicio-background-color">
            <div className="inicio-background">
                <div className="inicio-appbar">
                    <div className='inicio-appbar-diseño'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='inicio-appbar-logout'>
                        {renderLinks()}
                    </div>
                </div>
                <div className="inicio-logo-search">
                    <div className='inicio-logo'>
                        <img className='logo' src={Logo} alt="Logo" />
                        <div className='nombre'>
                            <span>B</span>
                            <span>e</span>
                            <span>e</span>
                            <span>l</span>
                            <span>S</span>
                            <span>t</span>
                            <span>o</span>
                            <span>p</span>
                        </div>
                    </div>
                    <Buscador placeholder="Buscar un Profesor..." profesores={profesores} />
                </div>
                <div className="inicio-imagen-linea">
                    <div className='inicio-imagen'>
                        <img className='inicio-img' src={InicioImg} alt="inicio-img" />
                    </div>
                    <div className='inicio-linea'>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;

