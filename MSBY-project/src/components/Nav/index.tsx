import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from "react-icons/bi"
import NavItem from "./NavItem";
import { useState } from "react";
const defaultIconSize = '1.875rem';
const items = [
  {label: 'Home', icon:<BiHomeAlt size={defaultIconSize} />, active: true },
  {label: 'Movie', icon:<BiMoviePlay size={defaultIconSize} />},
  {label: 'About', icon:<BiInfoCircle size={defaultIconSize} />}
]
const NavItemsContainer =() => <>
  {items.map((item, index) => <NavItem item={item} key={index} />)}
</>

const Index = () => {
  const [isNavMenuOpen,setIsNavMenuOpen]=useState(false)

  return <nav className="col-span-1 bg-cyan-200">
    <div className="flex md:block mx-4 justify-between items-center">
        <p className="uppercase text-5xl font-bold text-primary py-4 border-b border-primary text-right">msby</p>
        <BiMenu className="cursor-pointer md:hidden " size={defaultIconSize} onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}/>
    </div>
    <ul className={`mx-4 my-2${isNavMenuOpen ? '' : ' hidden'} text-2xl md:block`}>
      <NavItemsContainer />
    </ul>
  </nav>
 
  
}
export default Index