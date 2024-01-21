import './style.css'
import sideMenu from './data'
import MenuList from './menu-list'

export default function TreeView() {
    console.log(sideMenu);
    return <div className='tree-view-container'>
        <div style={{textAlign: 'center', paddingTop: '2rem', backgroundColor: 'grey'}}>
            <h1>Multi Level Menu Items</h1>
        </div>
        <div className="sidebar">
            <div className="menu-container">
                <MenuList menu_list={sideMenu}/>
            </div>
        </div>
    </div>
}