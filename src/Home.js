import { useState, useEffect } from 'react'  //musimy zaimportować tą funkcjonalność biblioteki
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(
            res => {
                // Here we create error if response attr is not proper, but we catch it below in catch() function.
                if (!res.ok) {
                    throw Error('could not fetch the data - custom message')

                }
                return res.json();  //this parses the json to js object for us. this operation is also asynchronious so we have to use second promise below..
            }
        ).then(
            data => {
                setBlogs(data)
                setIsPending(false);
                setError(null)
            }
        ).catch(
            (err) => { setError(err.message) }
        )
    }, []);
    return (
        <div className="home">
            {/* only blogs becouse of funct. component, and we refer to function    inside functional component */}
            {
                error && <div>{error}</div>
            }
            {
                isPending && <div>Data is loading...</div>
            }

            {
                // if const on the left returns true then interpreter comes to the right side of && and render it.
                blogs && <BlogList blogs={blogs} title="My title of blog" />
            }
        </div>
    )
}

export default Home
