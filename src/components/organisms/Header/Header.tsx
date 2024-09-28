import { Link } from "react-router-dom"

const Header = () => {

    return <>
        <Link to="/">Home</Link>
        <Link to="/join">Join</Link>
        <Link to="/account">Account</Link>
    </>
}

export default Header