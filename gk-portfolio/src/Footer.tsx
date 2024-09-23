import { GithubIcon, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
      <div className='flex flex-col justify-between items-center border-t border-gray-400 p-3 md:flex-row'>
          <div className=''>
              &copy; {new Date().getFullYear()} Gowthamkumar. All rights reserved.
          </div>

          <div className='flex space-x-1'>
          <a href='https://www.linkedin.com/in/gowthamkumar-s-19896b201/' target='_blank'>
                    <button className="flex items-center  p-1 rounded-full">
                        <Linkedin />
                    </button>
                </a>

            <a href='https://github.com/gk-profile' target='_blank'>
                    <button className="flex items-center  p-1 rounded-full">
                    <GithubIcon/>
                    </button>
                </a>

                <a>
                    <button className="flex items-center  p-1 rounded-full">
                    <Instagram/>
                    </button>
                </a>
              
              
          </div>
      </div>

  )
}

export default Footer