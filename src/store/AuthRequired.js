import { useContext, createElement } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom"

const SeRequireAutenticacion = ({ element }) => {
    const { currentUser, signout } = useContext(AuthContext)

    if (!currentUser) {
        return <Navigate to={'/Rate_prof/signin'} />
    }

    return createElement(element, { user: currentUser, signout })
}

export default SeRequireAutenticacion