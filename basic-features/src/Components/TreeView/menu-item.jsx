import { useState } from "react"
import MenuList from "./menu-list"

export default function MenuItem({menuItem, uniqueId}) {

    const [expandedChildren, setExpandedChildren] = useState({})

    const handleListExpand = (getCurrentLabel) => {
        setExpandedChildren({
            ...expandedChildren,
            [getCurrentLabel] : !expandedChildren[getCurrentLabel]
        })
    }
    return (
        <li className="menu-item" key={uniqueId}>
            <span>
                <p>{menuItem.label}</p>
                {
                    menuItem.children && menuItem.children.length > 0 ? 
                    <p onClick={() => handleListExpand(menuItem.label)}>{expandedChildren[menuItem.label] ? '-' : '+'}</p>
                    : null
                }
            </span>
        {
            menuItem && menuItem.children && menuItem.children.length > 0 && expandedChildren[menuItem.label] ? 
                <MenuList menu_list={menuItem.children}/>
            : null
        }</li>
    )
}