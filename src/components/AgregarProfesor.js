import {useState} from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

function AgregarProfesor({firebase}) {
    const db = getDatabase(firebase)
    const [state, setState] = useState({
        nombres: "",
        area: ""
    })
    function handleChange(e){
      console.log(e.target.name + ":" + e.target.value)
      setState(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    function handleSubmit(e){
      e.preventDefault()
      /// send to firebase //uuid
      const { nombres, area } = state
      const profesorId = uuidv4()
      
      // set send data to firebase
      // ref set id
      set(ref(db, 'profesores/' + profesorId), {nombres, area});

      setState({ nombres: '', area: '' })

    }

    return (
      <div >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column" ,justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.5rem'}}>
            <label>Nombre: </label>
            <input type="text" name='nombres' value={state.nombres} onChange={handleChange}></input>
            <label>area: </label>
            <input type="text" name='area' value={state.area} onChange={handleChange}></input>
            <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }


export default AgregarProfesor;

