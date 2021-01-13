import { useState, useEffect } from 'react'  //musimy zaimportować tą funkcjonalność biblioteki
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    //   so we use destructuring :
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

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
