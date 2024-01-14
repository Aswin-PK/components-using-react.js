import { useState } from 'react'
import './style.css'
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function ImageSlider({url, limit=5}) {
    
    const [images, setImages] = useState([]);
    const [currentslide, setCurrentSlide] = useState(0);
    const [errormessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try{
            const data = await fetch(`${getUrl}?page=1&limit=${limit}`).then(response => response.json());
            console.log(data)
            if(data) {
                setImages(data)
                setLoading(false)
            }
        }catch (e) {
            setErrorMessage(e.message);
            setLoading(false);
        }
    }
    useEffect(()=>{
        if (url === '') setErrorMessage("Url not found");
        else fetchImages(url)
    },[url])


    const handlePrevious = () =>{
        setCurrentSlide(currentslide === 0 ? (images.length - 1) : (currentslide - 1))
    }
    const handleNext = () =>{
        setCurrentSlide(currentslide === (images.length - 1) ? 0 : (currentslide + 1))
    }
    const handleCircleClick = (currentIndex) =>{
        setCurrentSlide(currentIndex);
    }

    return <div className="image-slider-container">
        <h2>Image Slider</h2>
        <div className="slider-container">
            {
                errormessage
            }

            {/* Images */}
            {
                images && images.length > 0 ? 
                images.map((currentImage, index) => (
                    <img 
                        key={currentImage.id}
                        src={currentImage.download_url} 
                        alt="images"
                        className={currentslide === index ? 'show' : 'hide'} />
                )): null
            }


            {/* Navigation buttons */}
            <div className="navigation-btns">
                <span onClick={handlePrevious}>&lt;</span>
                <span onClick={handleNext}>&gt;</span>
            </div>

            {/* circle indicators */}
            <div className="nav-indicators">
            {
                images && images.length > 0 ? 
                images.map((_, index) => (
                    <button key={index} onClick={()=>handleCircleClick(index)} className={currentslide === index ? 'active': null}></button>
                )) :null
            }
            </div>
        </div>
    </div>
}