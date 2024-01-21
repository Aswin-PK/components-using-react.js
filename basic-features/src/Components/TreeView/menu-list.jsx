import MenuItem from "./menu-item";

// eslint-disable-next-line react/prop-types
export default function MenuList({menu_list = []}) {
    console.log("menu list", menu_list);

    return <ul className="menu-list">
        {
            menu_list && menu_list.length > 0 ? (
                menu_list.map((menuItem, index) => {
                    return (
                        <MenuItem menuItem={menuItem} key={index}/>
                    )
                })
            ): null
        }
    </ul>
}