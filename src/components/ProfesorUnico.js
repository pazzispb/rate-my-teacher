import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../Firebase.js';
import PerfilProfesor from "./PerfilProfesor.js";


function ProfesorUnico({ user }) {
    const params = useParams()
    const [profesor, setProfesor] = useState(null)

    useEffect(() => {
        const db = getDatabase(app)
        const dbRef = ref(db, `profesores/${params.id}`);
        try {
            onValue(dbRef, (snapshot) => {
                setProfesor(snapshot.val())
            });
        } catch (error) {
            console.error(error);
        }
    }, [params.id])

    if (!profesor) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            <PerfilProfesor profesor={profesor} id={params.id} user={user} />
        </div>
    )
}

export default ProfesorUnico