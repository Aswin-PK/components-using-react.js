import { useEffect, useState } from "react"

export default function UseFetch(url, options={}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        try{
            const getdata = await fetch(url, options).then(response => response.json());
            setData(getdata);
            setLoading(false);
        }
        catch(e){
            setLoading(false);
            setError('Something went wrong...')
        }
    }


    useEffect(()=> {
        fetchData();
    }, [url])

    return {loading, data, error}
}