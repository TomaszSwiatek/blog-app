const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Ofc Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* second set of curly braces is just a representive of an javascript object. */}
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New blog</a>
            </div>
        </nav>
    )
}

export default Navbar
