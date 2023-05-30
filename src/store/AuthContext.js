import { useReducer, createContext } from "react";
import reducer from "./AuthReducer";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase";

const initialState = {
    currentUser: null,
    error: null,
}

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const auth = getAuth(app);
    // Actions for changing state

    async function signup(payload) {
        const auth = getAuth(app);
        const { email, password } = payload
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password)
            dispatch({
                type: 'SIGNUP',
                payload: credentials.user,
            });
        }
        catch (error) {
            return error
        }
    }
    async function signin(payload) {
        const { email, password } = payload
        try {
            const credentials = await signInWithEmailAndPassword(auth, email, password)
            dispatch({
                type: 'SIGNIN',
                payload: credentials.user
            });
        }
        catch (error) {
            return error
        }
    }

    function signout() {
        dispatch({
            type: 'SIGNOUT',
        });
    }

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, signup, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}