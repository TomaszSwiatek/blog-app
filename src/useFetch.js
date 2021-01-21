import { useEffect, useState } from 'react'
// this is custom hoook. Have to be name like use.... for instance useFetch
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController(); //it can be an second param in fetch function
        fetch(url, { signal: abortController.signal }).then(
            res => {
                // Here we create error if response attr is not proper, but we catch it below in catch() function.
                if (!res.ok) {
                    throw Error('could not fetch the data - custom message')

                }
                return res.json();  //this parses the json to js object for us. this operation is also asynchronious so we have to use second promise below..
            }
        ).then(
            // internal variable - other then in useState.
            data => {
                setData(data)
                setIsPending(false);
                setError(null)
            }
        ).catch(

            (err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message)
                }
            }
        );
        // we return a clean up function which fires after component is unmounted from a virtual dom:
        return () => {
            // console.log('cleanup'); //te dane są wyświetlone w konsoli jeżeli komponent nie zdarzy dograc asynchronicznie danych a zostanie szybko przeklikany do nastepnego komponentu (strony)
            abortController.abort(); //abort fetch associated with by additional object added to fetch function below.
        }

    }, [url]);

    // we return variables which we want to render in other component where we use custom hook
    return { data, isPending, error }
}

export default useFetch;
