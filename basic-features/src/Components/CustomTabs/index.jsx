import { useState } from 'react'
import './styles.css'

export default function Tabs({tabsDetails}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    const handleTabClick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex);
    }

    return <div className="custom-tab-container">
        <h2>Custom Tabs</h2>
        <div className="tab-head-container">
        {
            tabsDetails.map((tabItem, index) => (
                <div className={`tab-head ${currentTabIndex === index ? 'active': ''}`} key={tabItem.label} onClick={()=>handleTabClick(index)}>
                    {tabItem.label}
                </div>
            ))
        }
        </div>

        <div className="tab-content">
        {tabsDetails[currentTabIndex] && tabsDetails[currentTabIndex].content}
        </div>
    </div>
}