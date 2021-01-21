import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Tomek');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        // we grab be destructuring our variables underneath.
        const blog = { title, body, author };
        // console.log(blog)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('blog added');
            setIsPending(false);
            // history.go(-1)  //cofa nas o jedną stronę do tyłu.
            history.push('/');
        }

        )
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                >
                    <option value="Tomek">Tomek</option>
                    <option value="Kasia">Kasia</option>
                </select>
                {
                    !isPending && <button>Add blog</button>
                }
                {
                    isPending && <button disabled>Loading...</button>
                }

            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p><small>{author}</small></p>
        </div>
    )

}

export default Create
