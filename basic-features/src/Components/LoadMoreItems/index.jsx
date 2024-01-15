import { useState, useEffect, useRef } from "react";
import './style.css';

// eslint-disable-next-line react/prop-types
export default function LoadMoreItems({url, limit = 5}) {

    const useEffectRun = useRef(false);  // for handle the rerun of useEffect hook due to StrictMode

    const [product, setProduct] = useState([]);
    const [visibleItems, setVisibleItems] = useState(0)
    const [count, setCount] = useState(0)

    async function fetchProducts(url) {
        try {
            let data = await fetch(url+`?limit=${limit}&skip=${count === 0 ? 0 : (count * limit)}`)
                            .then(response => response.json()
                            .then(response => response.products))
            if(data && data.length > 0) {
                setProduct(prevItems => [...prevItems, ...data]);
                setVisibleItems(prevVisibleItems => prevVisibleItems + limit);

            }
            setCount(count + 1)
        }
        catch(e) {
            console.log('Something went wrong..')
        }
    }

    useEffect(()=>{
        if(!useEffectRun.current) {
            useEffectRun.current = true
            if(url == '') console.log('Url not found')
            else fetchProducts(url);
        }
    },[])

    


    return <div className="item-container">
        
        <div className="heading">Products</div>
        
        <div className="item-grid">
        {
            product && product.length > 0 ?
            product.slice(0, visibleItems).map((item) =>(
                <div className="item-card" key={item.id}>
                    <div className="img-box">
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="content-box">
                        <div className="title-description">
                            <h3>{item.title}</h3>
                            <span>{item.description}</span>
                        </div>
                        <div className="price-rating">
                            <span>Price: {item.price}</span>
                            <span>Rating: {item.rating}</span>
                        </div>
                    </div>
                </div>
            ))
            : null
        }
        </div>

        <div className="load-more-btn">
            <button onClick={()=> {
                fetchProducts(url)
            }}>Load More</button>
        </div>
    </div>
}