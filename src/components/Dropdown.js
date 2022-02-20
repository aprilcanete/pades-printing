import MenuItem from "./MenuItem";

const Dropdown = ({ subMenus, dropdown, depthLevel }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {subMenus.map((subMenu, index) => (
                 <MenuItem items={subMenu} key={index} depthLevel={depthLevel}/>
            ))}
        </ul>
    )
}

export default Dropdown;