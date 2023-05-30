import { useContext, createElement } from 'react';
import { AuthContext } from "./AuthContext"

const AuthProvider = ({ element }) => {
    const { currentUser, signout } = useContext(AuthContext)

    return createElement(element, { user: currentUser, signout })
}

export default AuthProvider