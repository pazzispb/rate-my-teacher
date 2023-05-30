import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import "../assets/css/Inicio.css";
import { Link } from "react-router-dom";


export function Buscador({ placeholder, profesores }) {

    const [buscador, setBuscador] = useState("");


    function listaProfesores() {
        if (buscador.length) {
            return Object.keys(profesores).map((profesor, i) => {
                if (profesores[profesor].nombre?.toLowerCase().includes(buscador.toLowerCase())) {
                    return (
                        <span key={i}>
                            <Link to={`/Rate_prof/profesores/${profesor}`} className="resultado-profesor">
                                <span className="input-label-nombre">{profesores[profesor].nombre.toLowerCase()}</span>
                                <span className="input-label-area">{profesores[profesor].area.toLowerCase()}</span>
                            </Link>
                        </span>
                    )
                }
                return null
            }
            )
        }
    }


    return (

        <div>
            <div className="inicio-input">

                <div className='inicio-search'>

                    <div className='search-icon'> <FaSearch /> </div>

                    <input className='search'
                        autoComplete='off'
                        type="text"
                        name='hidden'
                        placeholder={placeholder}
                        value={buscador}
                        onChange={(e) => setBuscador(e.target.value)}
                    ></input>

                </div>
                <ul className="resultado-profesor-lista">
                    {listaProfesores()}
                </ul>
                <div className="inicio-resultado-data"></div>
            </div>
        </div>



    );
}