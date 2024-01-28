import UseFetch from "."
import './styles.css'

export default function UseFetchCustomHook() {
    const {loading, data, error} = UseFetch('https://dummyjson.com/products', {})
    return <div className="use-fetch-hook-container">
        <div className="heading" style={{marginBottom: '1rem', fontSize: '2rem',fontWeight: 'bold'}}>
            <span>Use Fetch Custom Hook</span>
        </div>
        {loading ? <span>Loading Data... Please wait.</span> : null}
        {error ? <span>{error}</span> : null}
        <div className="fetch-results">
            {
                data && data.products.length > 0 ?
                data.products.map((productItem, index) => <span key={index}>{productItem.title}</span>)
                :null
            }
        </div>
    </div>
}