export interface Item{
    label: String;
    icon: JSX.Element;
    active?: boolean
}
const NavItem = ({item}: {item: Item}) => {
    const {label,icon,active} = item
  return <li className={`flex p-2 justify-end items-center cursor-pointer${active ? ' bg-primary text-white' : ''}`}>
    <p className="mr-2 text-xla">{label}</p>
    {icon}
  </li>
    
  
}

export default NavItem