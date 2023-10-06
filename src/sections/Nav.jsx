import logo from '../assets/logo.svg'
import {navLinks} from '../constants/navLinks'
import ContactButton from '../components/ContactButton'
import hamburger from '../assets/icons/hamburger.svg'

const Nav = () => {
  return (
    <section className=" rounded-[20px] pl-8 flex justify-between items-center bg-primary mb-4">
      <div className='max-sm:ml-0 flex gap-1 justify-center items-center'>
        <img src={logo} alt="" />
        <p className='font-bold text-3xl'>Hulty</p>
      </div>
      <div className='flex gap-10 max-lg:hidden'>
        {navLinks.map(link => (
          <a href={link.link} className='text-lg'>{link.name}</a>
        ))}
      </div>
      <ContactButton />
      <div className=' block lg:hidden mr-8'>
        <img src={hamburger} alt="" height={24} width={24}/>
      </div>
    </section>
  )
}

export default Nav