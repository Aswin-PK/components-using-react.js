import { useRef, useState } from "react"
import './styles.css'
import UseOutsideClick from "./test";

export default function UseOutsideClickHook() {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef()
    UseOutsideClick(ref, () => setShowContent(false));


    return <div className="useOutsideClick-hook-container">
        <div className="heading" style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            <span>Use Outside Click Custom Hook</span>
        </div>
        <div className="hook-content-box">
            {
                showContent ? (
                <div ref={ref} className="modal-popup">
                    <span>This is a popup modal</span>
                    <span>If clicked outside the modal will be closed, otherwise you can&apos;t close this.</span>
                    <span>This can be used for creating registration and login modal.</span>
                </div>)
                : <button onClick={() => setShowContent(true)}>Show Modal</button>
            }
        </div>
    </div>
}