import MenuItem from "./MenuItem";

const Dropdown = ({ subMenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {subMenus.map((subMenu, index) => (
                 <MenuItem items={subMenu} key={index} depthLevel={depthLevel}/>
            ))}
        </ul>
    )
}

export default Dropdown;