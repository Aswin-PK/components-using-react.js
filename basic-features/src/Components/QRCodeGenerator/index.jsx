import { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css';

export default function QRCodeGenerator() {

    const [qrcode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const generateQRCode = () => {
        setQrCode(input);
        setInput('')
    }
    return <div className="qr-generator-container">
        <h1>QR Code Generator</h1>
        <div className="qrcode">
            <input 
                type="text" 
                name="qr-code"
                onChange={(e)=> setInput(e.target.value)} 
                value={input}
                placeholder="Enter something.." 
            />
            <button 
                className="submit" 
                onClick={generateQRCode}
                disabled={input && input.value !== '' ? false : true}
            >Generate</button>
        </div>
        <div className="">
            <QRCode 
                id="qr-code-value"
                value={qrcode}
            />
        </div>
    </div>
}