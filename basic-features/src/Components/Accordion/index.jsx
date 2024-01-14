import { useState } from 'react'
import data from './data'
import './style.css'
export default function Accordion() {

    const [selection, setSelection] = useState(null);
    const [multiselection, setMultiselection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    
    const handleSelection = (value) =>{
        if (multiselection){
            let cpySelections = [...multiple];
            const currentItem = cpySelections.indexOf(value);

            if(currentItem === -1) cpySelections.push(value)
            else cpySelections.splice(currentItem, 1)

            setMultiple(cpySelections)
        }
        else {
            setSelection(selection === value ? null : value)
        }
    }
    
    return <div className='accordion-container'>
        <div className="accordion-wrapper">
            <button className="multi-selection" onClick={()=>setMultiselection(!multiselection)}>Select Multiple Items {multiselection && <span style={{color: 'green'}}>(on)</span>}</button>
            {
                data && data.length > 0 ? (
                    data.map((currentQuestion, index) => (
                        <>
                            <div className="accordion" key={index} onClick={()=>handleSelection(currentQuestion.id)}>
                                <span>{currentQuestion.question}</span>
                                <span>+</span>
                            </div>
                            {
                                selection === currentQuestion.id || 
                                multiple.indexOf(currentQuestion.id) !== -1 ?(
                                    <span className='answer'>{currentQuestion.answer}</span>
                                ): null
                            }
                        </>
                    ))
                )
                : <span>No data found</span>
            }
        </div>
    </div>
}