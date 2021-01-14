import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Ofc Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>

                {/* second set of curly braces is just a representive of an javascript object. */}
                <NavLink to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New blog </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
