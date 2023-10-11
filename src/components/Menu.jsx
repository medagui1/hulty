import { navLinks } from "../constants/navLinks"

const Menu = ({isMenuShown, setIsMenuShown}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full p-10 ">
        {navLinks.map(link => (
            <a href={link.link} onClick={() => setIsMenuShown(!isMenuShown)} className="text-lg">{link.name}</a>
        ))}
        
    </div>
  )
}

export default Menu