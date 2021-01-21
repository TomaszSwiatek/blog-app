import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    // to fetch an id parameter (which is used in app comp) we use built in router hook:
    // its allows us to grab paramters from our route
    // we destructure what ever param is, so we use {} in the name
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    return (
        <div className="blog-details">
            {
                isPending && <div>loading...</div>
            }
            {
                error && <div>{error}</div>
            }
            {
                // to work have to be this conditional rendering
                blog &&
                <article className="blog-body">
                    <h2>{blog.title}</h2>
                    <p><small>Written by {blog.author}</small></p>
                    <div>{blog.body}</div>
                </article>
            }
        </div >
    )
}

export default BlogDetails
