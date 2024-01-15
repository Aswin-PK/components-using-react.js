import { useState, useEffect } from 'react'
import './style.css'

export default function RandomColor() {
    const [type, setType] = useState('hex');
    const [color, setColor] = useState('#000000');

    const RandomColorUtlity = (length) =>{
        return Math.floor(Math.random() * length);
    }

    useEffect(()=> {
        handleCreateRandomColor();
    }, [type])
    
    const handleCreateRandomColor = () =>{
        if (type === 'hex') {
            const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            let hex = '#';
            for (let i = 0; i < 6; i++) {
                hex += hexValues[RandomColorUtlity(hexValues.length)];                
            }
            setColor(hex);
        }
        else {
            const r = RandomColorUtlity(255);
            const g = RandomColorUtlity(255);
            const b = RandomColorUtlity(255);
            setColor(`rgb(${r}, ${g}, ${b})`)
        }
    }
    return <div className="random-color-container" style={{backgroundColor: color}}>
        <button onClick={()=>setType('rgb')}>RGB</button>
        <button onClick={()=>setType('hex')}>HEX</button>
        <button className="generate-color" onClick={handleCreateRandomColor}>Generate Random Color</button>

        <span>{color}</span>
    </div>
} 