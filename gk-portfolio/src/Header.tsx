
const Header = () => {
  return (
    <div className=' py-8 sm-16 md:px-24'>
      <nav className='container mx-auto  flex justify-end flex-col md:flex-row'>
        <div className='text-xl font-bold mr-auto'>
            GOWTHAMKUMAR
        </div>

        <div className='text-md space-x-6 '>
            <a href="#home" className="hover:font-bold">Home</a>
            <a href="#about" className="hover:font-bold">About</a>
            <a href="#skills" className="hover:font-bold">Skills</a>
            <a href="#experience" className="hover:font-bold">Experience</a>
            <a href="#project" className="hover:font-bold">Projects</a>
            <a href="#contact" className="hover:font-bold">Contact</a>
        </div>
      </nav>
    </div>

  )
}

export default Header