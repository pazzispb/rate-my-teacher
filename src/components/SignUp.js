import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../store/AuthContext";
import Logo from '../assets/img/logo.PNG';
import '../assets/css/SignUp.css';
import SignupImg from '../assets/img/signup.PNG';
import { FaSearch } from 'react-icons/fa';

export default function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState()

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useContext(AuthContext)

    const cambiarRuta = () => {
        navigate('/Rate_prof/signin')
    }


    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError('Las contraseñas no coinciden')
            return
        }
        else if (emailRef.current.value.split('@')[1] !== "est.intec.edu.do") {
            setError('Necesita un correo Institucional')
            return
        }// auth/weak-password auth/email-already-in-use

        const err = await signup({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        if (!err) {
            return navigate('/Rate_prof')
        }
        else if (err.toString().includes('auth/email-already-in-use')) {
            setError('Esta cuenta ya existe')
        }
        else if (err.toString().includes('auth/weak-password')) {
            setError('Mínimo 6 caracteres en la contraseña')
        }
        else {
            setError(err.toString())
        }
    }


    return (
        <div className="inicio-background-color">
            <div className="inicio-background">
                <div className="signup-appbar">
                    <div className='inicio-appbar-diseño'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="link-registrado">
                    <div className="search-icon"> <FaSearch /></div>
                    <div className="registrado">
                        <a onClick={cambiarRuta}>¿Ya estás registrado? ¡Click aquí!</a>
                    </div>
                </div>
                <div className="signun-logo-form-style">
                    <div className="signup-imagen">
                        <img className='signup-img' src={SignupImg} alt="signup-img" />
                    </div>
                    <div className="signup-logo-form">
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
                        </div>
                        <div >
                            {error && <h1 className="error">{error}</h1>}
                            <form onSubmit={handleSubmit} className="signup-form">
                                <label>Regístrate</label>
                                <input placeholder="Correo Institucional" type="text" name='email' ref={emailRef} required></input>
                                <input placeholder="Contraseña" type="password" name='password' ref={passwordRef} required></input>
                                <input placeholder="Confirmar contraseña" type="password" name='password' ref={passwordConfirmRef} required></input>
                                <button type="submit">Acceder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}