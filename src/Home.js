const Home = () => {
    // we have to ad const when it is functional component
    const handleClick = () => {
        console.log(`clicked:)`)
    }

    const handleClickSecond = (name) => {
        console.log(`clicked:) for you ${name}`)
    }

    return (
        <div>
            <h2>Homepage</h2>
            {/* if we have functional component we don;t have to put this.handleClick */}
            <button onClick={handleClick}>Click me!</button>
            {/* we can take an event parameter fron anonymous function and like that we can pass it down to out hadnlClick function */}
            <button onClick={(e) => { handleClickSecond('Kryl', e) }}>Kryl clicking</button>

        </div>
    )
}

export default Home
