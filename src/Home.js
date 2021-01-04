import { useState } from 'react'  //musimy zaimportować tą funkcjonalność biblioteki
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    return (
        <div className="home">
            {/* only blogs becouse of funct. component, and we refer to function inside functional component */}
            <BlogList blogs={blogs} title="My title of blog" />
        </div>
    )
}

export default Home
