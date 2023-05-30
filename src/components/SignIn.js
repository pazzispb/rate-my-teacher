import React, { useRef, useContext, useState } from 'react';
import { useNavigate } from "react-router";
import { AuthContext } from '../store/AuthContext';
import Logo from '../assets/img/logo.PNG';
import '../assets/css/SignIn.css'
import { FaSearch } from 'react-icons/fa';
import SignupImg from '../assets/img/signup.PNG';


function SignIn({ user }) {
    
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin } = useContext(AuthContext)

    const signup = () => {
        navigate('/Rate_prof/signup')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const err = await signin(
            { email: emailRef.current.value, password: passwordRef.current.value }
        )
        if (!err) {
            return navigate('/Rate_prof')
        }
        if (err.toString().includes('auth/user-not-found')) {
            setError('La cuenta no existe')
        } else if (err.toString().includes('auth/wrong-password')) {
            setError('La contraseña es incorrecta')
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
                        <a onClick={signup}>¿No te has registrado? Hazlo aquí!</a>
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
                        <div>
                            {error && <h1 className='error'>{error}</h1>}
                            <form className='signup-form' onSubmit={handleSubmit}>
                                <label>Iniciar sesión</label>
                                <input placeholder='Correo Institucional' type="email" name='email' ref={emailRef} required />
                                <input placeholder='Contraseña' type="password" name='password' ref={passwordRef} required />
                                <button>Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
