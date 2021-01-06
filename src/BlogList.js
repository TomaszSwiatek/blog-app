import React from 'react'
// props is word we pass as an argument but it can be named differently. it is only convention of naming
const BlogList = (props) => {
    const blogs = props.blogs;
    const handleDelete = props.handleDelete;
    const title = props.title; //without "this" becouse it is not class, but funct. component.

    return (
        <div className="blog-list">
            {title}
            { blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => { handleDelete(blog.id) }}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList
