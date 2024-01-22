import { useState, useEffect } from 'react'
import './styles.css'

export default function ScrollIndicator() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScrollPercentage = () => {
        const scrolledLength = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((scrolledLength/height)*100);
    }

    useEffect(()=> {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    },[])

    console.log('scrollPercentage :', scrollPercentage)
    return <div className="scroll-indicator-container">
        <div className="scrollbarcontainer">
            <div className="scrollbar" style={{width: `${scrollPercentage}%`}}></div>
        </div>
        <h1>Scroll Indicator...</h1>
    </div>
}